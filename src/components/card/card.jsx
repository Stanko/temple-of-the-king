import { Leva, useControls, useCreateStore } from 'leva';
import { useEffect, useState, useRef } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import './card.scss';
import { getRange } from '../../lib/utils';

function Card({
  cost,
  attack,
  block,
  heal,
  name,
  vulnerable,
  weak,
  color,
  onDeleteCard,
  repeat,
  slow,
  freeze,
  affectsAll,
}) {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const store = useCreateStore();

  const cardData = useControls(
    {
      cost: getRange(0, 5, cost),
      attack: getRange(0, 5, attack),
      block: getRange(0, 5, block),
      heal: getRange(0, 5, heal),
      repeat: getRange(1, 5, repeat),
    },
    { store }
  );

  useControls(
    'Modifiers',
    {
      affectsAll: affectsAll,
      weak: getRange(0, 5, weak),
      vulnerable: getRange(0, 5, vulnerable),
      slow: getRange(0, 5, slow),
      freeze: getRange(0, 5, freeze),
    },
    { store }
  );

  useEffect(() => {
    const el = ref.current;

    return draggable({
      element: el,
      getInitialData: () => ({ name, cardData }),
      onDragStart: () => setIsDragging(true),
      onDrop: () => setIsDragging(false),
    });
  }, [cardData, name]);

  return (
    <div className="card" style={{ opacity: isDragging ? 0.1 : null }}>
      <h2 className="card__title" ref={ref} style={{ background: color }}>
        {name}{' '}
        <button onClick={onDeleteCard} className="card__delete">
          &times; Delete
        </button>
      </h2>
      <div className="card__controls">
        <Leva store={store} fill flat titleBar={false} />
      </div>
    </div>
  );
}

export default Card;

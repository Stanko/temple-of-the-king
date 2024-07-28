import { Leva, useControls, useCreateStore } from 'leva';
import { useEffect, useState, useRef } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import './card.scss';

function Card({ name, onDeleteCard }) {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const store = useCreateStore();

  const cardData = useControls(
    {
      energy: {
        value: 1,
        min: 0,
        max: 5,
        step: 1,
      },
      value: {
        value: 1,
        min: 0,
        max: 3,
        step: 1,
      },
      type: {
        value: 'Attack',
        options: ['Attack', 'Block'],
      },
    },
    { store }
  );

  useControls(
    'Modifiers',
    {
      weak: false,
      weakTurns: {
        value: 1,
        min: 0,
        max: 5,
        step: 1,
      },
      vulnerable: false,
      vulnerableTurns: {
        value: 1,
        min: 0,
        max: 5,
        step: 1,
      },
    },
    { store }
  );

  useEffect(() => {
    const el = ref.current;

    // invariant(el);

    return draggable({
      element: el,
      getInitialData: () => ({ name, cardData }),
      onDragStart: () => setIsDragging(true),
      onDrop: () => setIsDragging(false),
    });
  }, [cardData, name]);

  return (
    <div className="card" style={{ opacity: isDragging ? 0.1 : null }}>
      <h2 ref={ref}>
        {name}{' '}
        <button onClick={onDeleteCard} className="card__delete">
          &times; Delete
        </button>
      </h2>
      <Leva store={store} fill flat titleBar={false} />
    </div>
  );
}

export default Card;

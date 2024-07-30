import { Leva, useControls, useCreateStore } from 'leva';
import { useEffect, useState, useRef } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { getRange } from '../../lib/utils';

import './character.scss';

const classesEmojis = {
  warrior: '⚔️',
  mage: '🔮',
  rogue: '🗡️',
};

function Character(props) {
  const { name, image, hp, characterClass } = props;
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const store = useCreateStore();

  const characterData = useControls(
    {
      hp: getRange(0, 20, hp),
    },
    { store }
  );

  useEffect(() => {
    const el = ref.current;

    return draggable({
      element: el,
      getInitialData: () => {
        return {
          ...props,
          ...characterData,
        };
      },
      onDragStart: () => setIsDragging(true),
      onDrop: () => setIsDragging(false),
    });
  }, [props, characterData]);

  return (
    <div className="character" style={{ opacity: isDragging ? 0.1 : null }}>
      <h2 className="character__title" ref={ref}>
        {name} {classesEmojis[characterClass]} ❤️ {characterData.hp}
      </h2>
      <img className="character__image" src={`./${image}`} alt={name} />
      <div className="character__controls">
        <Leva store={store} fill flat titleBar={false} />
      </div>
    </div>
  );
}

export default Character;

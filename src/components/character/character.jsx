import { Leva, useControls, useCreateStore } from 'leva';
import { useEffect, useState, useRef } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { getRange } from '../../lib/utils';

import './character.scss';
import classNames from 'classnames';

const classesEmojis = {
  warrior: '⚔️',
  mage: '🔮',
  rogue: '🗡️',
};

function Character(props) {
  const {
    name,
    image,
    hp,
    move,
    characterClass,
    isOnGrid,
    isSelected,
    id,
    setSelectedID,
    setCharacters,
  } = props;
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const store = useCreateStore();

  const characterData = useControls(
    {
      hp: getRange(0, 20, hp),
      move: getRange(0, 10, move),
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

  useEffect(() => {
    if (setCharacters) {
      setCharacters((prev) => {
        const index = prev.findIndex((char) => char.id === id);
        const newCharacters = [...prev];
        newCharacters[index] = {
          ...newCharacters[index],
          ...characterData,
        };
        return newCharacters;
      });
    }
  }, [characterData, id]);

  return (
    <div
      className={classNames('character', {
        'character--selected': isSelected,
        'character--dragging': isDragging,
      })}
    >
      <h2 className="character__title" ref={ref}>
        {name} {classesEmojis[characterClass]} ❤️ {characterData.hp}
      </h2>
      {isOnGrid ? (
        <button
          className="character__image-wrapper"
          onClick={() => setSelectedID(isSelected ? null : id)}
        >
          <img className="character__image" src={`./${image}`} alt={name} />
        </button>
      ) : (
        <div className="character__image-wrapper">
          <img className="character__image" src={`./${image}`} alt={name} />
        </div>
      )}
      <div className="character__controls">
        <Leva store={store} fill flat titleBar={false} />
      </div>
    </div>
  );
}

export default Character;

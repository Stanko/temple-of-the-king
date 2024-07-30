import { Leva, useControls, useCreateStore } from 'leva';
import { useEffect, useState, useRef } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import './character.scss';

function Character({ name, image, hp, type, position }) {
  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const store = useCreateStore();

  const characterData = useControls(
    {
      hp: {
        value: hp,
        min: 0,
        max: 20,
        step: 1,
      },
    },
    { store }
  );

  useEffect(() => {
    const el = ref.current;

    return draggable({
      element: el,
      getInitialData: () => ({
        characterData,
        type,
        name,
        position,
        character: true,
      }),
      onDragStart: () => setIsDragging(true),
      onDrop: () => setIsDragging(false),
    });
  }, [characterData, name, type, position]);

  return (
    <div className="character" style={{ opacity: isDragging ? 0.1 : null }}>
      <h2 className="character__title" ref={ref}>
        {name}
      </h2>
      <img
        className="character__image"
        src={`./portraits/${image}`}
        alt={name}
      />
      <div className="character__controls">
        <Leva store={store} fill flat titleBar={false} />
      </div>
    </div>
  );
}

export default Character;

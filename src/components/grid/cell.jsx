import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import './grid.scss';
import { useEffect, useRef, useState } from 'react';

function Cell({ children, x, y }) {
  const ref = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  useEffect(() => {
    const el = ref.current;
    // invariant(el);

    return dropTargetForElements({
      element: el,
      getData: () => {
        return { x, y };
      },
      onDragEnter: () => setIsDraggedOver(true),
      onDragLeave: () => setIsDraggedOver(false),
      // { location, source, self }
      onDrop: () => setIsDraggedOver(false),
    });
  }, [x, y]);

  return (
    <div
      key={x}
      ref={ref}
      className="grid__cell"
      style={{ background: isDraggedOver ? '#ddf' : null }}
    >
      <div className="grid__coordinates">
        {x},{y}
      </div>
      {children}
    </div>
  );
}

export default Cell;

import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import './grid.scss';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

function Cell({ children, x, y, highlight }) {
  const ref = useRef(null);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  useEffect(() => {
    const el = ref.current;

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
      className={classNames('grid__cell', {
        'grid__cell--drag-over': isDraggedOver,
        'grid__cell--highlight': highlight,
      })}
    >
      <div className="grid__coordinates">
        {x},{y}
      </div>
      {children}
    </div>
  );
}

export default Cell;

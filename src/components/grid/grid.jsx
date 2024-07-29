import { useControls } from 'leva';
import Cell from './cell';
import './grid.scss';

function Grid({ store }) {
  const grid = useControls(
    'Grid',
    {
      width: {
        value: 8,
        min: 1,
        max: 20,
        step: 1,
      },
      height: {
        value: 4,
        min: 1,
        max: 20,
        step: 1,
      },
    },
    {
      store,
    }
  );

  return (
    <div
      className="grid"
      style={{
        maxWidth: `calc(${grid.width} * var(--grid-cell-size) + 2 * var(--grid-border-width))`,
      }}
    >
      {Array.from({ length: grid.height }).map((_, y) => {
        return (
          <div key={y} className="grid__row">
            {Array.from({ length: grid.width }).map((_, x) => {
              return <Cell key={`${x}-${y}`} x={x} y={y} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;

import Cell from './cell';
import './grid.scss';

function Grid({ width, height }) {
  return (
    <div className="grid">
      {Array.from({ length: height }).map((_, y) => {
        return (
          <div key={y} className="grid__row">
            {Array.from({ length: width }).map((_, x) => {
              return <Cell key={`${x}-${y}`} x={x} y={y} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;

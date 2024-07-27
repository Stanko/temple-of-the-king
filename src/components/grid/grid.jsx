import './grid.scss';

function Grid({ width, height }) {
  return (
    <div className="grid">
      {Array.from({ length: height }).map((_, y) => {
        return (
          <div key={y} className="grid__row">
            {Array.from({ length: width }).map((_, x) => {
              return (
                <div key={x} className="grid__cell">
                  <div className="grid__coordinates">
                    {x},{y}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;

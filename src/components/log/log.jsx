import './log.scss';

function Log({ log }) {
  return (
    <div className="log">
      {log.map((entry, i) => (
        <div key={i} className="log__entry">
          {entry}
        </div>
      ))}
    </div>
  );
}

export default Log;

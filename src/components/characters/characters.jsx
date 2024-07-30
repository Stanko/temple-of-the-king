import Character from '../character/character';
import './characters.scss';

function Characters({ characters }) {
  return (
    <div className="characters">
      {characters.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </div>
  );
}

export default Characters;

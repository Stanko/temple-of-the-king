import { useControls } from 'leva';
import Cell from './cell';
import './grid.scss';
import Character from '../character/character';
import { getItemOnField } from '../../lib/utils';

const canMoveToField = (character, targetX, targetY) => {
  if (!character) {
    return false;
  }
  const { position, move } = character;
  const distance =
    Math.abs(targetX - position.x) + Math.abs(targetY - position.y);
  return distance <= move;
};

function Grid({ store, characters, selectedID, setSelectedID, setCharacters }) {
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

  const selectedCharacter = characters.find(
    (character) => character.id === selectedID
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
              const characterOnTheField = getItemOnField(characters, { x, y });

              const highlight = canMoveToField(selectedCharacter, x, y);

              return (
                <Cell key={`${x}-${y}`} x={x} y={y} highlight={highlight}>
                  {characterOnTheField &&
                    characterOnTheField.map((character) => (
                      <Character
                        {...character}
                        key={character.id}
                        isSelected={character.id === selectedID}
                        setSelectedID={setSelectedID}
                        isOnGrid
                        setCharacters={setCharacters}
                      />
                    ))}
                </Cell>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;

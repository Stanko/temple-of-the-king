import { Leva, useCreateStore } from 'leva';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import './app.scss';
import Grid from './components/grid/grid';
import Cards from './components/cards/cards';
import { useEffect, useState } from 'react';
import Log from './components/log/log';
import Characters from './components/characters/characters';
import defaultCharacters, {
  creatures as defaultCreatures,
} from './data/characters.js';

let i = 100;

function App() {
  const appStore = useCreateStore();
  const [characters, setCharacters] = useState([]);
  const [log, setLog] = useState([]);
  const [selectedID, setSelectedID] = useState(null);

  useEffect(() => {
    const updateCharacter = (id, data) => {
      const character = characters.find((c) => c.id === id);

      if (!character) {
        return;
      }

      setCharacters([
        ...characters.filter((c) => c.id !== id),
        { ...character, ...data },
      ]);
    };

    const removeCharacter = (id) => {
      setCharacters(characters.filter((c) => c.id !== id));
    };

    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) {
          // if dropped outside of any drop targets
          return;
        }

        const selectedCharacter =
          selectedID !== null
            ? characters.find((c) => c.id === selectedID)
            : null;

        if (source.data.type === 'card') {
          const card = source.data;
          const target = characters.find(
            (c) =>
              c.position.x === destination.data.x &&
              c.position.y === destination.data.y
          );

          // TODO check if character is in range

          if (target && selectedCharacter) {
            // Apply card to target
            if (card.attack) {
              target.hp -= card.attack * card.repeat;

              if (target.hp <= 0) {
                // Dead
                removeCharacter(target.id);
              } else {
                updateCharacter(target.id, { ...target });
              }
            }
          }
        } else if (source.data.type === 'character') {
          if (source.data.createNew) {
            // Add new character
            setCharacters([
              ...characters,
              {
                ...source.data,
                name: source.data.name,
                id: i++,
                position: destination.data,
                createNew: false,
              },
            ]);
          } else {
            // Move character
            const character = characters.find((c) => c.id === source.data.id);

            if (character) {
              character.position = destination.data;
              setCharacters([...characters]);
            }
          }
        }

        setLog((prev) => {
          const key = `{source.data.name} {destination.data.x},{destination.data.y}`;
          let action = 'Dropped';

          let selectedMessage = '';
          if (source.data.type === 'card') {
            action = 'Played';
            selectedMessage = 'no character selected';

            if (selectedCharacter) {
              selectedMessage = (
                <span>
                  for <b>{selectedCharacter.name}</b>
                </span>
              );
            }
          }

          return [
            <div key={key}>
              {action} <b>{source.data.name}</b> on{' '}
              <b>
                {destination.data.x},{destination.data.y}
              </b>{' '}
              {selectedMessage}
            </div>,
            ...prev,
          ];
        });
      },
    });
  }, [characters, selectedID, setCharacters, setLog]);

  return (
    <main>
      <Leva store={appStore} />
      <Characters characters={defaultCharacters} />
      <Characters characters={defaultCreatures} />
      <Grid
        store={appStore}
        characters={characters}
        selectedID={selectedID}
        setSelectedID={setSelectedID}
        setCharacters={setCharacters}
      />
      <Cards />
      <Log log={log} />
    </main>
  );
}

export default App;

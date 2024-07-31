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
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) {
          // if dropped outside of any drop targets
          return;
        }

        if (source.data.createNew) {
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
          const character = characters.find((c) => c.id === source.data.id);

          if (character) {
            character.position = destination.data;
            setCharacters([...characters]);
          }
        }

        setLog((prev) => {
          const key = `{source.data.name} {destination.data.x},{destination.data.y}`;
          let action = 'Dropped';

          let selectedMessage = '';
          if (source.data.type === 'card') {
            action = 'Played';
            selectedMessage = 'no character selected';

            if (selectedID !== null) {
              const selectedCharacter = characters.find(
                (c) => c.id === selectedID
              );
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
  }, [characters, selectedID]);

  return (
    <main>
      <h1>Temple of the King</h1>
      <Leva store={appStore} />
      <Grid
        store={appStore}
        characters={characters}
        selectedID={selectedID}
        setSelectedID={setSelectedID}
        setCharacters={setCharacters}
      />
      <Characters characters={defaultCharacters} />
      <Characters characters={defaultCreatures} />
      <Cards />
      <Log log={log} />
    </main>
  );
}

export default App;

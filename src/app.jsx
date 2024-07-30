import { Leva, useCreateStore } from 'leva';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import './app.scss';
import Grid from './components/grid/grid';
import Cards from './components/cards/cards';
import { useEffect, useState } from 'react';
import Log from './components/log/log';
import Characters from './components/characters/characters';
import defaultCharacters from './data/characters.js';

let i = 100;

function App() {
  const appStore = useCreateStore();
  const [characters, setCharacters] = useState([]);
  const [log, setLog] = useState([]);

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

          return [
            <div key={key}>
              Dropped <b>{source.data.name}</b> on{' '}
              <b>
                {destination.data.x},{destination.data.y}
              </b>
            </div>,
            ...prev,
          ];
        });
      },
    });
  }, [characters]);

  return (
    <main>
      <h1>Temple of the King</h1>
      <Leva store={appStore} />
      <Grid store={appStore} characters={characters} />
      <Characters characters={defaultCharacters} />
      <Cards />
      <Log log={log} />
    </main>
  );
}

export default App;

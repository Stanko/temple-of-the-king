import { Leva, useCreateStore } from 'leva';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import './app.scss';
import Grid from './components/grid/grid';
import Cards from './components/cards/cards';
import { useEffect, useState } from 'react';
import Log from './components/log/log';

function App() {
  const appStore = useCreateStore();
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: 'Grom',
      type: 'warrior',
      hp: 10,
      image: '10.png',
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: 1,
      name: 'Žika',
      type: 'mage',
      hp: 8,
      image: '14.png',
      position: {
        x: 3,
        y: 1,
      },
    },
  ]);
  const [log, setLog] = useState([]);

  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) {
          // if dropped outside of any drop targets
          return;
        }

        if (source.data.character) {
          const character = characters.find((c) => c.name === source.data.name);

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
  }, []);

  return (
    <main>
      <h1>Temple of the King</h1>
      <Leva store={appStore} />
      <Grid store={appStore} characters={characters} />
      <Cards />
      <Log log={log} />
    </main>
  );
}

export default App;

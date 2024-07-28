import { Leva, useCreateStore } from 'leva';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import './app.scss';
import Grid from './components/grid/grid';
import Cards from './components/cards/cards';
import { useEffect, useState } from 'react';
import Log from './components/log/log';

function App() {
  const appStore = useCreateStore();
  const [log, setLog] = useState([]);

  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) {
          // if dropped outside of any drop targets
          return;
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
      <Grid store={appStore} />
      <Cards />
      <Log log={log} />
    </main>
  );
}

export default App;

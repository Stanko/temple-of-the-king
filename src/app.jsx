import { Leva, useControls, useCreateStore } from 'leva';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

import './app.scss';
import Grid from './components/grid/grid';
import Cards from './components/cards/cards';
import { useEffect, useState } from 'react';
import Log from './components/log/log';

function App() {
  const appStore = useCreateStore();
  const cardStore = useCreateStore();
  const [log, setLog] = useState([]);

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
      store: appStore,
    }
  );

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
            ...prev,
            <div key={key}>
              Dropped <b>{source.data.name}</b> on{' '}
              <b>
                {destination.data.x},{destination.data.y}
              </b>
            </div>,
          ];
        });
      },
    });
  }, []);

  return (
    <main>
      <h1>Temple of the King</h1>
      <Leva store={appStore} />
      <Grid width={grid.width} height={grid.height}></Grid>
      <Cards store={cardStore} />
      <Log log={log} />
    </main>
  );
}

export default App;

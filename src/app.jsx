import { Leva, useControls, useCreateStore } from 'leva';
import './app.scss';
import Grid from './components/grid/grid';
import Cards from './components/cards/cards';

function App() {
  const appStore = useCreateStore();
  const cardStore = useCreateStore();

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

  return (
    <main>
      <h1>Temple of the King</h1>
      <Leva store={appStore} />
      <Grid width={grid.width} height={grid.height}></Grid>
      <Cards store={cardStore} />
    </main>
  );
}

export default App;

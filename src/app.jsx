import { useControls } from 'leva';
import './app.scss';
import Grid from './components/grid/grid';

function App() {
  const grid = useControls('Grid', {
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
  });

  return (
    <main>
      <h1>Temple of the King</h1>
      <Grid width={grid.width} height={grid.height}></Grid>
    </main>
  );
}

export default App;

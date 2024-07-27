import { Leva, useControls, useCreateStore } from 'leva';

import './card.scss';

function Card({ name, onDeleteCard }) {
  const store = useCreateStore();
  useControls(
    {
      energy: {
        value: 8,
        min: 1,
        max: 20,
        step: 1,
      },
      value: {
        value: 4,
        min: 1,
        max: 20,
        step: 1,
      },
      type: {
        value: 'Attack',
        options: ['Attack', 'Block'],
      },
    },
    { store }
  );

  return (
    <div className="card">
      <h2>
        {name}{' '}
        <button onClick={onDeleteCard} className="card__delete">
          &times; Delete
        </button>
      </h2>
      <Leva store={store} fill flat titleBar={false} />
    </div>
  );
}

export default Card;

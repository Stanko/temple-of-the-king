import { useState } from 'react';
import './cards.scss';
import Card from '../card/card';

let i = 0;

function Cards() {
  const [cards, setCards] = useState([]);

  return (
    <>
      <div className="cards">
        {cards.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            onDeleteCard={() => {
              setCards(cards.filter((c) => c.name !== card.name));
            }}
          />
        ))}
      </div>
      <button
        className="cards__add"
        onClick={() => {
          setCards([...cards, { name: `Card ${++i}` }]);
        }}
      >
        Add card
      </button>
    </>
  );
}

export default Cards;

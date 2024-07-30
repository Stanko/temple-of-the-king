import { useState } from 'react';
import './cards.scss';
import Card from '../card/card';
import defaultCards, { getEmptyCard } from '../../data/cards';

let i = 0;

function Cards() {
  const [cards, setCards] = useState(defaultCards);

  return (
    <>
      <div className="cards">
        {cards.map((card) => (
          <Card
            {...card}
            key={card.name}
            onDeleteCard={() => {
              setCards(cards.filter((c) => c.name !== card.name));
            }}
          />
        ))}
      </div>
      <button
        className="cards__add"
        onClick={() => {
          setCards([...cards, getEmptyCard(i++)]);
        }}
      >
        Add card
      </button>
    </>
  );
}

export default Cards;

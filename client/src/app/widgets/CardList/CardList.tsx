
import { CardService } from '@/app/entities/card/api';
import { CardItem } from '../../entities/card/ui/CardItem';
import { useEffect, useState } from 'react';


export const CardList: React.FC = () => {

  const [cards , setCards] = useState([])

  useEffect(() => {
    async function getAll() {
      const fetchedCards = await CardService.getAllCards();
      console.log(fetchedCards)
      setCards(fetchedCards); // Update the state with fetched cards
    }
    getAll();
  }, []); 

  console.log(cards)
  return (
    <div>
      
      {cards.map((question) => (
        <CardItem
          key={question.id}
          question={question}
        />
      ))}
    </div>
  );
};

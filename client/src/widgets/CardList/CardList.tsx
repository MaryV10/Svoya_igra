
import { CardService } from '@/entities/card/api';
import { CardItem } from '../../entities/card/ui/CardItem';
import { useEffect, useState } from 'react';


export const CardList: React.FC = () => {

  const [cards , setCards] = useState([])
// const { Cards } =  cards

  useEffect(() => {
    async function getAll() {
      const fetchedCards = await CardService.getAllCards();
      setCards(fetchedCards); // Update the state with fetched cards

    }
    getAll();
  }, []); 
  console.log(cards.Cards)
  
  const allCards1 = cards.filter((el) => el.name === "Природа" ).flatMap((card) => card.Cards );
  const allCards2 = cards.filter((el) => el.name === "Город" ).flatMap((card) => card.Cards );

 
  return (
    <div>
      
      {allCards1.map((card) => (
      
        <CardItem
          key={card.id}
          card={card}
        
        />
      ))}
<p>2 category</p>
{allCards2.map((card) => (
      
      <CardItem
        key={card.id}
        card={card}
      
      />
    ))}
    </div>
  );
};


import { CardService } from '@/entities/card/api';
import { CardItem } from '../../entities/card/ui/CardItem';
import { useEffect, useState } from 'react';


export const CardList: React.FC = () => {

  const [cards , setCards] = useState([])


  useEffect(() => {
    async function getAll() {
      const fetchedCards = await CardService.getAllCards();
      setCards(fetchedCards); 

    }
    getAll();
  }, []); 

  

  const allCards1 = cards.filter((el) => el.name === "Природа" ).flatMap((card) => card.Cards ).sort((a, b) => a.value - b.value );
  const allCards2 = cards.filter((el) => el.name === "Город" ).flatMap((card) => card.Cards ).sort((a, b) => a.value - b.value );
  const allCards3 = cards.filter((el) => el.name === "Море" ).flatMap((card) => card.Cards ).sort((a, b) => a.value - b.value );


 
  return (
    <div>
<h1>{cards[0]?.name}</h1>
      {allCards1.map((card) => (
      

        <CardItem
          key={card.id}
          card={card}
         
        
        />
      ))}
<h1>{cards[1]?.name}</h1>
{allCards2.map((card) => (
      
      <CardItem
        key={card.id}
        card={card}
      
      />
    ))}
 <h1>{cards[2]?.name}</h1>
   
   
    {allCards3.map((card) => (
      
      <CardItem
        key={card.id}
        card={card}
      
      />
    ))}
    </div>
  );
};

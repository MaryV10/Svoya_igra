
import { CardService } from '@/entities/card/api';
import { CardItem } from '../../entities/card/ui/CardItem';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import { getAllTopics } from '@/entities/topic';
import { getGame } from '@/entities/game/api/gameThunks';


export const CardList: React.FC = () => {

  const  topics  = useAppSelector((state) => state.topic.topics);
  const dispatch = useAppDispatch();
  const {user} = useAppSelector((state) => state.user);
  const {game} = useAppSelector((state) => state.game);

  useEffect(() => {
    dispatch(getAllTopics())
  }, [dispatch]);




  const allCards1 = topics.filter((el) => el.name === "Гарри Поттер" ).flatMap((card) => card.Cards ).sort((a, b) => a.value - b.value );
  const allCards2 = topics.filter((el) => el.name === "Город" ).flatMap((card) => card.Cards ).sort((a, b) => a.value - b.value );
  const allCards3 = topics.filter((el) => el.name === "Рандом" ).flatMap((card) => card.Cards ).sort((a, b) => a.value - b.value );


//  console.log(game.game, "JJJJ")
  return (
  
    <div>
<h1>{topics[0]?.name}</h1>
      {allCards1.map((card) => (
      

        <CardItem
          key={card.id}
          card={card}
          // game={game}
        
        />
      ))}
<h1>{topics[1]?.name}</h1>
{allCards2.map((card) => (
      
      <CardItem
        key={card.id}
        card={card}
      
      />
    ))}
 <h1>{topics[2]?.name}</h1>
   
   
    {allCards3.map((card) => (
      
      <CardItem
        key={card.id}
        card={card}
      
      />
    ))}
    </div>
  );
};

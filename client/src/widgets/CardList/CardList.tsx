
import { CardService } from '@/entities/card/api';
import { CardItem } from '../../entities/card/ui/CardItem';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import { getAllTopics } from '@/entities/topic';
import styles from "./CardList.module.css"


export const CardList: React.FC = () => {

  const  topics  = useAppSelector((state) => state.topic.topics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTopics())
  }, [dispatch]);


  

  const allCards1 = topics.filter((el) => el.name === "Природа" ).flatMap((card) => card.Cards ).sort((a, b) => a.value - b.value );
  const allCards2 = topics.filter((el) => el.name === "Город" ).flatMap((card) => card.Cards ).sort((a, b) => a.value - b.value );
  const allCards3 = topics.filter((el) => el.name === "Море" ).flatMap((card) => card.Cards ).sort((a, b) => a.value - b.value );


 
  return (
  
    <div className={styles.container}>
      <div className={styles.theme}>
<h1 className={styles.topics}>{topics[0]?.name}</h1>
      {allCards1.map((card) => (
      

        <CardItem
          key={card.id}
          card={card}
         
        
        />
      ))}
      </div>

      <div className={styles.theme}>
<h1 className={styles.topics}>{topics[1]?.name}</h1>
{allCards2.map((card) => (
      
      <CardItem
        key={card.id}
        card={card}
      
      />
    ))}

</div>

<div className={styles.theme}>
 <h1 className={styles.topics}>{topics[2]?.name}</h1>
   
   
    {allCards3.map((card) => (
      
      <CardItem
        key={card.id}
        card={card}
      
      />
    ))}
    </div>
    </div>
  );
  
};

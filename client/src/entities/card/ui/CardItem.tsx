import React, { useState } from 'react';
import styles from './TaskItem.module.css';
import ModalWindow from '@/shared/ui/Modal/Modal';


type Props = {
    question: Card;
  onTaskDelete: (id: number) => void;
  onTaskUpdate: (updatedTask: Task) => void;
};



export const CardItem: React.FC<Props> = ({
  card,
 

}) => {
  const [active, setActive] = useState(false);


  const handleAnswer = () => {
    console.log('1')
  };

  const handlerShowForm = () => {
    setActive(true)
  }

  return (
    
      
        <>
        
          <button onClick={handlerShowForm}>{card.value}</button>
           <ModalWindow active={active} setActive={setActive}>
     <h1 style={{color: 'black'}}>{card.question}</h1>
     <p style={{color: 'black'}}>{card.answer}</p>
     </ModalWindow>
        </>
     

  );
};

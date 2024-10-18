import React, { useState } from 'react';
import styles from './TaskItem.module.css';


type Props = {
    question: Card;
  onTaskDelete: (id: number) => void;
  onTaskUpdate: (updatedTask: Task) => void;
};



export const CardItem: React.FC<Props> = ({
  card

}) => {

console.log(card, "++++++")

  const handleAnswer = () => {
    console.log('1')
  };

  return (
    
      
        <>
     <h1>{card.question}</h1>
     <p>{card.answer}</p>
        </>
     

  );
};

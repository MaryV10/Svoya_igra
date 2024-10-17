import React, { useState } from 'react';
import styles from './TaskItem.module.css';


type Props = {
    question: Card;
  onTaskDelete: (id: number) => void;
  onTaskUpdate: (updatedTask: Task) => void;
};



export const CardItem: React.FC<Props> = ({
  question

}) => {



  const handleAnswer = () => {
    console.log('1')
  };

  return (
    
      
        <>
     <h1>{question.question}</h1>
     <p>{question.answer}</p>
        </>
     

  );
};

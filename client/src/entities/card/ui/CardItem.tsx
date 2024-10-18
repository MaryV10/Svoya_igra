import React, { useState } from "react";
import styles from "./TaskItem.module.css";
import ModalWindow from "@/shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { getAllTopics } from "@/entities/topic";

type Props = {
  question: Card;
  onTaskDelete: (id: number) => void;
  onTaskUpdate: (updatedTask: Task) => void;
};

export const CardItem: React.FC<Props> = ({ card }) => {
  const [active, setActive] = useState(false);
  const [answer, setAnswer] = useState('')
  const [buttonName, setButtonName] =useState('NO')
const [showCorrect, setShowCorrect ] = useState(false)
      const {topics} = useAppSelector(state => state.topic)
  const dispatch = useAppDispatch()

  const handleAnswer = () => {
    console.log("1");
    // const allCards=dispatch(getAllTopics())
    // const cardOne = allCards.flatMap((card) => card.Cards )
    console.log(topics);
    if (answer===card.answer) {
      console.log('ВЕРНО!');
      setButtonName('ВЕРНО')
      setShowCorrect(true)
    } else {
      setShowCorrect(true)
    }
    setActive(false);
  };

  const handlerShowForm = () => {
    setActive(true);
  };

  return (
    <>
      <button onClick={handlerShowForm}>{!showCorrect && <p>{card.value}</p>}{showCorrect && <p>{buttonName}</p>}</button>
      <ModalWindow active={active} setActive={setActive}>
        <h1 style={{ color: "black" }}>{card.question}</h1>
        <p style={{ color: "black" }}>{card.answer}</p>
        <input value={answer} type="text" placeholder="Введите ответ" onChange={(e) => setAnswer(e.target.value)}/>
        <button onClick={handleAnswer}>Ответить</button>
      </ModalWindow>
    </>
  );
};

import React, { useEffect, useState } from "react";
import styles from "./TaskItem.module.css";
import ModalWindow from "@/shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { getAllTopics } from "@/entities/topic";
import { Game } from "@/entities/game";
import { getGame, updateScoreGame } from "@/entities/game/api/gameThunks";

type Props = {
  question: Card;
  onTaskDelete: (id: number) => void;
  onTaskUpdate: (updatedTask: Task) => void;
};

export const CardItem: React.FC<Props> = ({ card }) => {
  const [active, setActive] = useState(false);
  const [answer, setAnswer] = useState("");
  const [buttonName, setButtonName] = useState("NO");
  const [showCorrect, setShowCorrect] = useState(false);
  //     const {topics} = useAppSelector(state => state.topic)
      const {game} = useAppSelector((state) => state.game)
  const dispatch = useAppDispatch()
  const { user, loading } = useAppSelector((state) => state.user);


  useEffect(() => {
    if(user?.id){
      dispatch(getGame())
    }
  }, [dispatch,user?.id]);


  const handleAnswer = () => {
    if (answer === card.answer) {
    
      // const score = card.value + game.game.score;
      // console.log(score, "SCOREEE")
      dispatch(updateScoreGame({userId:user.id, score:card.value}));
      setButtonName("ВЕРНО");
      setShowCorrect(true);
    // }  if (answer !== card.answer) {
    //   const score = game.game.score - card.value;
    //   dispatch(updateScoreGame({userId:user.id, score}))
    //   setShowCorrect(true);
    }else if(answer !== card.answer){
      dispatch(updateScoreGame({userId:user.id, score:-card.value}))
      setButtonName("ВЕРНО");
      setShowCorrect(true);

    }
    setActive(false);
  };



  // console.log(game, "KKKK")
  const handlerShowForm = () => {
    setActive(true);
  };

  return (
    <>
      <button onClick={handlerShowForm}>
        {!showCorrect && <p>{card.value}</p>}
        {showCorrect && <p>{buttonName}</p>}
      </button>
      <ModalWindow active={active} setActive={setActive}>
        <h1 style={{ color: "black" }}>{card.question}</h1>
        {/* <p style={{ color: "black" }}>{card.answer}</p> */}
        <img src={card.image} alt="" />
        <input
          value={answer}
          type="text"
          placeholder="Введите ответ"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={handleAnswer}>Ответить</button>
      </ModalWindow>
    </>
  );
};

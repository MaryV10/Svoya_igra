import React, { useEffect, useMemo, useState } from "react";
import styles from "./TaskItem.module.css";
import ModalWindow from "@/shared/ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { getAllTopics } from "@/entities/topic";
import stylesCardItem from "./CardItem.module.css"
import { createQuest, getAllQuests } from "@/entities/quest/api/questThunks";
import { getGame } from "@/entities/game/api/gameThunks";

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
  const dispatch = useAppDispatch();
  const {game } = useAppSelector((state) => state.game)

  const {quests} = useAppSelector((state) => state.quest)

  const [isAnswered, setIsAnswered] = useState(false);

const mutatesQuestions = useMemo(() => {
  const questsIdsArr = quests.map((quest) => quest.id)
  if (questsIdsArr.includes(card.id)) {
    setIsAnswered(true)
  }
}, [card.id, quests])

useEffect(() => {
  dispatch(getGame())
  dispatch(getAllQuests())
}, [dispatch])


// console.log(game)

  const handleAnswer = () => {

    // const allCards=dispatch(getAllTopics())
    // const cardOne = allCards.flatMap((card) => card.Cards )
    if (game) {
    // console.log(topics);
    if (answer===card.answer) {
dispatch(createQuest({gameId: game.id, cardId:card.id}))
      console.log('ВЕРНО!');
      setButtonName('ВЕРНО')
      setShowCorrect(true)
    } else {
      setShowCorrect(true)
      console.log(game.id, card.id)
      dispatch(createQuest({gameId: game.id, cardId:card.id}))
    }
    setActive(false);
  };
}

  const handlerShowForm = () => {
    console.log(card)
    if(isAnswered) return;
    setActive(true);
  };

  return (
    <>

      <button className={stylesCardItem.buttonCard} onClick={handlerShowForm}>{!showCorrect && <p>{card.value}</p>}{showCorrect && <p>{buttonName}</p>}</button>
      <ModalWindow active={active} setActive={setActive}>
        <div className={stylesCardItem.container}>
          <img src={card.image} alt="" className={stylesCardItem.image} />
        <h1 className={stylesCardItem.question} style={{ color: "black" }}>{card.question}</h1>
    
        <input className={stylesCardItem.inputCard}value={answer} type="text" placeholder="Введите ответ" onChange={(e) => setAnswer(e.target.value)}/>
        <button className={stylesCardItem.buttonCardAnswer} onClick={handleAnswer}>Ответить</button>
        </div>
      </ModalWindow>
    </>
  );
};

import { createGame } from '@/entities/game/api/gameThunks';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import React from 'react';

export const HomePage: React.FC = () => {
const dispatch = useAppDispatch();
const {game} = useAppSelector((state) => state.game)
const {user} = useAppSelector((state) => state.user)

function handleStartGame () {
  if (user) {dispatch(createGame(user.id))}
  
}

  return (
    <>
  <h1>Home Page</h1>
    <button onClick={handleStartGame}>Начать игру</button>
    </>
  );
};

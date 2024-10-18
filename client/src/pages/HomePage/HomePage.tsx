import { createGame } from '@/entities/game/api/gameThunks';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import React from 'react';
import { ROUTES } from '@/app/router/routes';
import { ThemeButton } from '@/shared/ui/Button/Button';
import { Button } from 'antd';
import styles from './HomePage.module.css'
import { Link } from 'react-router-dom';

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
=======
  return (       
  <>
  <p>HOME PAGE</p>
  <Button>
  {/* <Link to={ROUTES.HOME}>Квиз</Link> */}
</Button>
</>)

};

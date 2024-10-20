import { createGame } from '@/entities/game/api/gameThunks';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import React from 'react';
import { ROUTES } from '@/app/router/routes';
import { ThemeButton } from '@/shared/ui/Button/Button';
import { Button } from 'antd';
import styles from './HomePage.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';



export const HomePage: React.FC = () => {

const dispatch = useAppDispatch();
const {game} = useAppSelector((state) => state.game)
const {user} = useAppSelector((state) => state.user)

const navigate = useNavigate()

function handleStartGame () {
  if (user) {dispatch(createGame(user.id))
    navigate(ROUTES.CARDS)
  }
  
}

  return (
    <>
  <h1 style={{color:'black'}}>Home Page</h1>
    <button  style={{color:'black'}} onClick={handleStartGame}>Начать игру</button>
    </>
  );

  return (       
  <>
  <p>HOME PAGE</p>
  <Button>
  {/* <Link to={ROUTES.HOME}>Квиз</Link> */}
</Button>
</>)

};

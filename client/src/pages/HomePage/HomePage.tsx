import React from 'react';
import { ROUTES } from '@/app/router/routes';
import { ThemeButton } from '@/shared/ui/Button/Button';
import { Button } from 'antd';
import styles from './HomePage.module.css'
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (       
  <>
  <p>HOME PAGE</p>
  <Button>
  {/* <Link to={ROUTES.HOME}>Квиз</Link> */}
</Button>
</>)
};

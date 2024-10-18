import { CardList } from '@/widgets/CardList/CardList';
import React from 'react';
import styles from "./CardPage.module.css"

export const CardPage: React.FC = () => {
  return (
    <div className={styles.cardpagecontainer}>
      <CardList />
    </div>
  );
};

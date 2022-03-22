import React from 'react';
import styles from './HomePage.module.css';
import Carousel from '../../carousel/Carousel';
import VisitCard from '../../visitCard/VisitCard';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Carousel />
      <VisitCard />
    </div>
  );
};

export default HomePage;

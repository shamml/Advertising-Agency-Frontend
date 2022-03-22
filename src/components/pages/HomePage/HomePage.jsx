import React from 'react';
import styles from './HomePage.module.css';
import Carousel from '../../carousel/Carousel';
import VisitCard from '../../visitCard/VisitCard';
import Bilboard from '../../bilboard/Bilboard';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Carousel />
      <VisitCard />
      <Bilboard />
    </div>
  );
};

export default HomePage;

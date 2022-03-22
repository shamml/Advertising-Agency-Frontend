import React from 'react';
import styles from './HomePage.module.css';
import Carousel from '../../carousel/Carousel';
import VisitCard from '../../visitCard/VisitCard';
import StFormat from '../../STFormat/STFormat'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Carousel />
      <VisitCard />
      <StFormat/>
    </div>
  );
};

export default HomePage;

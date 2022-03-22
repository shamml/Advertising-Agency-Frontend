import React from 'react';
import styles from './HomePage.module.css';
import Carousel from '../../carousel/Carousel';
import VisitCard from '../../visitCard/VisitCard';
import Map from '../../map/Map';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Carousel />
      <VisitCard />
      <Map />
    </div>
  );
};

export default HomePage;

import React from 'react';
import styles from './HomePage.module.css';
import Carousel from '../../Carousel/Carousel';
import VisitCard from '../../visitCard/VisitCard';
import Map from '../../map/Map';
import StFormat from '../../STFormat/STFormat';
import Bilboard from '../../Bilboard/Bilboard';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Carousel />
      <Bilboard />
      <VisitCard />
      <StFormat />
      <Map />
    </div>
  );
};

export default HomePage;

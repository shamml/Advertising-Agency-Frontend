import React from 'react';
import styles from './HomePage.module.css';
import Carousel from '../../carousel/Carousel';
import VisitCard from '../../visitCard/VisitCard';
import Map from '../../map/Map';
import StFormat from '../../STFormat/STFormat'
import Bilboard from '../../bilboard/Bilboard';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Carousel />
      <VisitCard />
      <StFormat/>
      <Bilboard />
      <Map />
    </div>
  );
};

export default HomePage;

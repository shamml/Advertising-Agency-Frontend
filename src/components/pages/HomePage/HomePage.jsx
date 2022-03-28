import React, { useState } from 'react';
import styles from './HomePage.module.css';
import Carousel from '../../Carousel/Carousel';
import VisitCard from '../../visitCard/VisitCard';
import Map from '../../Map/Map';
import StFormat from '../../STFormat/STFormat';
import Bilboard from '../../Bilboard/Bilboard';
import arr from '../../../assets/arr.png';

const HomePage = () => {
  const [scroll, setScroll] = useState(false);

  window.onscroll = function () {
    if (window.scrollY > 500) {
      setScroll(true);
    }
    if (window.scrollY < 250) {
      setScroll(false);
    }
  };

  const goToUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.homePage}>
      <Carousel />
      <Bilboard />
      <VisitCard />
      <StFormat />
      <Map />
      <div onClick={goToUp} className={scroll ? styles.test : ""}>
        <img src={arr} alt="surt" />
      </div>
    </div>
  );
};

export default HomePage;

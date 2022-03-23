import React from 'react';
import styles from './Bilboard.module.css';
import bilbordImage from '../../assets/bilboard-logo.webp';
import { Link } from 'react-router-dom';

const Bilbord = () => {
  return (
    <div className={styles.bilboardBlock}>
      <div className={styles.bilboardContent}>
        <img className={styles.bilboardImage} src={bilbordImage} alt="" />
        <div className={styles.bilboardApp}>
          <div className={styles.bilboardTitle}>BILLBOARD</div>
          <div className={styles.bilboardDesc}>
            Bilboard — щит большого размера для размещения наружной рекламы,
            устанавливаемый вдоль трасс, улиц и в других многолюдных местах. Щит
            представляет собой раму, покрытую атмосфероустойчивыми составами,
            закреплённую на опоре.
          </div>
          <Link to="/bilboard">
            <button className={styles.bilboardBtn}>Арендовать</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bilbord;

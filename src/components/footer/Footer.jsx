import React from 'react';
import styles from './Footer.module.css';
import logoWhite from '../../assets/logoWhite.png';
import telegram from '../../assets/social/telegram.png';
import instagram from '../../assets/social/instagram.png';
import whatsapp from '../../assets/social/whatsapp.png';

const Footer = () => {
  return (
    <footer>
      <img
        className={styles.logoFooterImage}
        src={logoWhite}
        alt="picturefoot"
      />
      2022г.
      <div className={styles.social}>
        <div className={styles.ourSocial}>НАШИ СОЦСЕТИ │</div>
        <img className={styles.telegram} src={telegram} alt="telegram" />
        <img className={styles.instagram} src={instagram} alt="instagram" />
        <img className={styles.whatsapp} src={whatsapp} alt="whatsapp" />
      </div>
    </footer>
  );
};

export default Footer;

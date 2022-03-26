import React from 'react';
import styles from './Carousel.module.css';

function Carousel(props) {
  return (
    <div className={styles.carouselDark}>
      <div className={styles.carouselBlock}>
        <div className={styles.carouselContent}>
          <div className={styles.title}>
            РЕКЛАМНОЕ <br /> <p>АГЕНТСТВО</p> ПОЛНОГО <br /> ЦИКЛА
          </div>
          <div className={styles.form}>
            <div className={styles.formTitle}>
              ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
            </div>
            <input
              className={styles.formFirstInput}
              type="text"
              placeholder="Ваше имя.."
            />
            <input
              className={styles.formSecondInput}
              type="text"
              placeholder="Ваш телефон.."
            />
            <button className={styles.formBtn}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;

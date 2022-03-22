import React from 'react';
import styles from "./Carousel.module.css"

function Carousel(props) {
  return (
    <div className={styles.carouselBlock}>
        <div className={styles.carouselContent}>
          <div className={styles.title}>
            РЕКЛАМНОЕ <br /> АГЕНТСТВО <br /> ПОЛНОГО <br /> ЦИКЛА
          </div>
          <div className={styles.form}>
            <div className={styles.formTitle}>Получить бесплатную консультацию</div>
            <input type="text" />
            <input type="text" />
            <button className={styles.formBtn}>Отправить</button>
          </div>
        </div>
      </div>
  );
}

export default Carousel;
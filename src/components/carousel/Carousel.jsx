import React from 'react';
import styles from "./Carousel.module.css"

function Carousel(props) {
  return (
    <div className={styles.carouselDark}>
      <div className={styles.carouselBlock}>
        <div className={styles.carouselContent}>
          <div className={styles.title}>
            РЕКЛАМНОЕ <br /> АГЕНТСТВО <br /> ПОЛНОГО <br /> ЦИКЛА
          </div>
          <div className={styles.form}>
            <div className={styles.formTitle}>Получить бесплатную консультацию</div>
            <input className={styles.formFirstInput} type="text" placeholder="Ваше имя..." />
            <input className={styles.formSecondInput} type="text" placeholder="Ваше телефон..." />
            <button className={styles.formBtn}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Carousel;
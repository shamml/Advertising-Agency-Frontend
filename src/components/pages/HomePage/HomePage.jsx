import React from 'react';
import styles from './HomePage.module.css';
import visitCardImage from '../../../assets/visit-card.png';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
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

      <div className={styles.visitCardBlock}>
        <div className={styles.visitCardContent}>
          <div className={styles.visitCardApp}>
            <div className={styles.visitCardTitle}>ВИЗИТНЫЕ КАРТОЧКИ</div>
            <div className={styles.visitCardSubTitle}>Доставка по городу</div>
            <div className={styles.visitCardDesc}>
            Визитные карты — элемент имиджа, содержащий контактную информацию компании, частного лица. 
            От выбора дизайна зависит впечатление, которое изделие произведет на партнера или клиента.
            </div>
            <button className={styles.visitCardBtn}>Оформить заказ</button>
          </div>
          <img className={styles.visitCardImage} src={visitCardImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

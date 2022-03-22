import React from 'react';
import styles from './BilboardPage.module.css';

const BilboardCard = ({ price, image, address, sideA, sideB }) => {
  return (
    <div className={styles.billboardCards}>
      <div className={styles.billboardCard}>
        <div className={styles.box}>
          <img src={image} alt="surt" />
        </div>
        <div className={styles.address}>{address}</div>
        <div className={styles.price}>{price}</div>
        <div className={styles.sides}>
          <div className={styles.sideA}>
            <p>Сторона А</p>
            <input type="checkbox" />
          </div>
          <div className={styles.sideB}>
            <p>Сторона Б</p>
            <input type="checkbox" />
          </div>
          
        </div>
        <div className={styles.orderBtn}>
            <button>Оформить заказ</button>
          </div>
      </div>
    </div>
  );
};

export default BilboardCard;

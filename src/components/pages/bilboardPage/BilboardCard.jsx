import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/features/cart';
import styles from './BilboardPage.module.css';

const BilboardCard = ({ billboard }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.application.id);

  const handleAddProd = (id, billboard) => {
    dispatch(addToCart(id, billboard));
  };
  // const getCurrentCart = () => {
  //   dispatch(getThisCart(id));
  // };

  return (
    <div className={styles.billboardCards}>
      <div className={styles.billboardCard}>
        <div className={styles.box}>
          <img src={billboard.image} alt="surt" />
        </div>
        <div className={styles.address}>{billboard.address}</div>
        <div className={styles.price}>{billboard.price}</div>
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
          <button onClick={() => handleAddProd(id, billboard)}>
            Оформить заказ
          </button>
        </div>
        {/* <button onClick={getCurrentCart}>as</button> */}
      </div>
    </div>
  );
};

export default BilboardCard;

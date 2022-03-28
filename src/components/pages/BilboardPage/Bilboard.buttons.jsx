import React, { useState } from 'react';
import styles from './BilboardPage.module.css';
import { addBillboardToCart } from '../../../redux/features/cart';
import { useDispatch } from 'react-redux';

const BilboardButtons = ({ sideA, sideB, id }) => {
  const dispatch = useDispatch();

  const [addBillboard, setAddBillboard] = useState(false);

  const handleAddBillboard = (id) => {
    dispatch(addBillboardToCart(id, sideA, sideB));
    setAddBillboard(true);
  };

  return (
    <div className={styles.orderBtn}>
      <button
        disabled={
          (sideA || !sideB) && (!sideA || sideB) && (!sideA || !sideB)
            ? 'disabled'
            : ''
        }
        onClick={() => handleAddBillboard(id)}
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default BilboardButtons;

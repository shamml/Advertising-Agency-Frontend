import React from 'react';
import styles from './STFormats.module.css';
import { useDispatch } from 'react-redux';
import { addSTFormatToCart } from '../../../redux/features/cart'

const StFormatButtons = ({ STFormat, sideA, sideB }) => {


  const dispatch = useDispatch();

  const handleAddSTFormat = (id, sideA, sideB) => {
    dispatch(addSTFormatToCart(id, sideA, sideB));
  };

  return (
    <div className={styles.STFormatButtons}>
      <button disabled={(sideA || !sideB) && (!sideA || sideB) && (!sideA || !sideB) ? "disabled" : ""} onClick={() => handleAddSTFormat(STFormat._id, sideA,sideB)}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default StFormatButtons;

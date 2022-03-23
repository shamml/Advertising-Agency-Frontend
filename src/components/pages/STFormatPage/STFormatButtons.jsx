import React from 'react';
import styles from './STFormats.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addSTFormatToCart } from '../../../redux/features/cart';

const StFormatButtons = ({ STFormat }) => {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.application.id);

  const handleAddProduct = (id, STFormat) => {
    dispatch(addSTFormatToCart(id, STFormat));
  };

  return (
    <div className={styles.STFormatButtons}>
      <button onClick={() => handleAddProduct(id, STFormat)}>
        {' '}
        {!STFormat.sideA && !STFormat.sideA
          ? 'Дабавлено в корзину'
          : 'Добавить в корзину'}
      </button>
    </div>
  );
};

export default StFormatButtons;

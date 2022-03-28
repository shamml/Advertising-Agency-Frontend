import React, { useState } from 'react';
import styles from './STFormats.module.css';
import { GrLocation } from 'react-icons/gr';
import { BiRuble } from 'react-icons/bi';
import { CgSidebarRight } from 'react-icons/cg';
import { CgSidebar } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { addSTFormatToCart } from '../../../redux/features/cart';

const STformatCard = ({ STFormat }) => {
  const dispatch = useDispatch();

  const [selectedA, setSelectedA] = useState(false);
  const [selectedB, setSelectedB] = useState(false);

  const [STFormatPrice, setSTFormatPrice] = useState(0);

  const handleClickPatchSideA = () => {
    if (selectedA) {
      setSelectedA(false)
      setSTFormatPrice(STFormatPrice - STFormat.price)
    } else {
      setSelectedA(true);
      setSTFormatPrice(STFormatPrice + STFormat.price)
    }
  };

  const handleClickPatchSideB = () => {
    if (selectedB) {
      setSelectedB(false)
      setSTFormatPrice(STFormatPrice - STFormat.price)
    } else {
      setSelectedB(true);
      setSTFormatPrice(STFormatPrice + STFormat.price)
    }
  };

  const rents = useSelector(state => state.cart.products.rents);
  const inCart = rents.find(rent => rent._id === STFormat._id);
  const handleAddSTFormat = (id, selectedA, selectedB) => {
    dispatch(addSTFormatToCart(id, selectedA, selectedB));
    console.log(selectedA, selectedB);
  };

  return (
    <div className={styles.STFormatCard}>
      <div className={styles.STFormat}>
        <img src={STFormat.image} alt="#" />
      </div>
      <div className={styles.STFormatInfo}>
        <div className={styles.sideA}>
          <CgSidebar />
          sideA:{' '}
          {STFormat.sideA ? (
            <input
              type="checkbox"
              onChange={handleClickPatchSideA}
              value={selectedA}
              disabled={STFormat.sideA.reserved}
            />
          ) : (
            <input type="checkbox" disabled={true} />
          )}
        </div>
        <div className={styles.sideB}>
          <div>
            <CgSidebarRight />
          </div>
          <div>
            sideB:{' '}
            {STFormat.sideB ? (
              <input
                type="checkbox"
                onChange={handleClickPatchSideB}
                value={selectedB}
                disabled={STFormat.sideB.reserved}
              />
            ) : (
              <input type="checkbox" disabled={true} />
            )}
          </div>
        </div>
        <div className={styles.address}>
          {' '}
          <GrLocation /> {STFormat.address}
        </div>
        <div className={styles.STFormatButtons}>
        <button
              onClick={() => handleAddSTFormat(STFormat._id)}
              disabled={
                (STFormat.sideA.reserved && STFormat.sideB.reserved) ||
                (!selectedA && !selectedB) ||
                (inCart)
              }
            >
              {inCart && "Добавлено в корзину"}
              {(STFormat.sideA.reserved && STFormat.sideB.reserved) && "Нет свободных сторон"}
              {((!selectedA && !selectedB) && (!STFormat.sideA.reserved || !STFormat.sideB.reserved) && (!inCart)) && "Выберите сторону"}
              {((selectedA || selectedB) && (!inCart)) && "Добавить в корзину"}
            </button>
        </div>
      </div>
      <div className={styles.STFormatPrice}>{STFormatPrice}₽</div>
    </div>
  );
};

export default STformatCard;

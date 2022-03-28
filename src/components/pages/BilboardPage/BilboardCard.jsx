import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBillboardToCart } from '../../../redux/features/cart';
import styles from './BilboardPage.module.css';
import { CgSidebarRight } from 'react-icons/cg';
import { CgSidebar } from 'react-icons/cg';
import { GrLocation } from 'react-icons/gr';
import { BiRuble } from 'react-icons/bi';

const BilboardCard = ({ billboard }) => {
  const dispatch = useDispatch()
  const [selectedA, setSelectedA] = useState(false);
  const [selectedB, setSelectedB] = useState(false);

  const [billboardPrice, setBillboardPrice] = useState(0);

  const handleClickPatchSideA = () => {
    if (selectedA) {
      setSelectedA(false)
      setBillboardPrice(billboardPrice - billboard.price)
    } else {
      setSelectedA(true);
      setBillboardPrice(billboardPrice + billboard.price)
    }
  };

  const handleClickPatchSideB = () => {
    if (selectedB) {
      setSelectedB(false)
      setBillboardPrice(billboardPrice - billboard.price)
    } else {
      setSelectedB(true);
      setBillboardPrice(billboardPrice + billboard.price)
    }
  };
  const rents = useSelector(state => state.cart.products.rents);
  const inCart = rents.find(rent => rent._id === billboard._id);
  const handleAddBillboard = (id) => {
    dispatch(addBillboardToCart(id, selectedA, selectedB));
  };

  return (
    <div className={styles.billboardCards}>
      <div className={styles.billboardCard}>
        <div className={styles.box}>
          <img src={billboard.image} alt="surt" />
        </div>
        <div className={styles.info}>
          <div className={styles.address}>
            <GrLocation /> {billboard.address}
          </div>
          <div className={styles.price}>
            {' '}
            <BiRuble /> {billboard.price}
          </div>
          <div className={styles.sideA}>
            <CgSidebar />
            sideA:{' '}
            <input
              type="checkbox"
              onChange={handleClickPatchSideA}
              value={selectedA}
              disabled={billboard.sideA.reserved}
            />
          </div>
          <div className={styles.sideB}>
            <div>
              <CgSidebarRight />
            </div>
            <div>
              sideB:{' '}
              <input
                type="checkbox"
                value={selectedB}
                onChange={handleClickPatchSideB}
                disabled={billboard.sideB.reserved}
              />
            </div>
          </div>
          <div className={styles.orderBtn}>
            <button
              onClick={() => handleAddBillboard(billboard._id)}
              disabled={
                (billboard.sideA.reserved && billboard.sideB.reserved) ||
                (!selectedA && !selectedB) ||
                (inCart)
              }
            >
              {inCart && "Добавлено в корзину"}
              {(billboard.sideA.reserved && billboard.sideB.reserved) && "Нет свободных сторон"}
              {((!selectedA && !selectedB) && (!billboard.sideA.reserved || !billboard.sideB.reserved) && (!inCart)) && "Выберите сторону"}
              {((selectedA || selectedB) && (!inCart)) && "Добавить в корзину"}
            </button>
          </div>
        </div>
        <div className={styles.billboardPrice}>{billboardPrice}₽</div>
      </div>
    </div>
  );
};

export default BilboardCard;

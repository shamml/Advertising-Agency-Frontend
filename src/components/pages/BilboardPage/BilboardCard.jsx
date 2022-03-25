import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBillboardToCart } from '../../../redux/features/cart';
import styles from './BilboardPage.module.css';
import { CgSidebarRight } from 'react-icons/cg';
import { CgSidebar } from 'react-icons/cg';
import { GrLocation } from 'react-icons/gr';
import { BiRuble } from 'react-icons/bi';
import {
  patchSideABillboard,
  patchSideBBillboard,
} from '../../../redux/features/bilboard';

const BilboardCard = ({ billboard }) => {
  const [sideA, setSideA] = useState(false);
  const [sideB, setSideB] = useState(true);


  const id = useSelector((state) => state.application.id);
  const cart = useSelector((state) => state.cart.products.rents);
  console.log(cart);

// const isCartItems = cart.some((item) => item._id === billboard._id);
  const dispatch = useDispatch();

  const handleAddBillboard = (id) => {
    dispatch(addBillboardToCart(id, sideA, sideB));
  };

  const handleClickPatchSideA = (e) => {
    setSideA(!sideA);
  };

  const patchSideAlphaBillboard = () => {
    dispatch(patchSideABillboard(id, sideA));
  };

  const patchSideBetaBillboard = (id) => {
    dispatch(patchSideBBillboard(id, sideB));
  };

  // console.log(sideA, sideB);

  const handleClickPatchSideB = (e) => {
    setSideB(!sideB);
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
            {billboard.sideA ? (
              <input
                onClick={() => patchSideAlphaBillboard(billboard._id)}
                value={sideA}
                onChange={handleClickPatchSideA}
                type="checkbox"
                checked={billboard.sideA}
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
              {billboard.sideB ? (
                <input
                  checked={billboard.sideB}
                  onClick={() => patchSideBetaBillboard(billboard._id)}
                  type="checkbox"
                  value={sideB}
                  onChange={handleClickPatchSideB}
                />
              ) : (
                <input type="checkbox" disabled={true} />
              )}
            </div>
          </div>
          <div className={styles.orderBtn}>
            <button onClick={() => handleAddBillboard(billboard._id)}>
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilboardCard;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBillboardToCart } from '../../../redux/features/cart';
import styles from './BilboardPage.module.css';
import { CgSidebarRight } from 'react-icons/cg';
import { CgSidebar } from 'react-icons/cg';
import { GrLocation } from 'react-icons/gr';
import { BiRuble } from 'react-icons/bi';

const BilboardCard = ({ billboard }) => {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.application.id);
  // const token = useSelector((state) => state.application.token);

  const handleAddBillboard = (id, billboard) => {
    dispatch(addBillboardToCart(id, billboard));
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
              <input type="checkbox" />
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
                <input type="checkbox" />
              ) : (
                <input type="checkbox" disabled={true} />
              )}
            </div>
          </div>
          <div className={styles.orderBtn}>
            <button onClick={() => handleAddBillboard(id, billboard)}>
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilboardCard;

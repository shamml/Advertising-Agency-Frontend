import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBilboards } from '../../../redux/features/bilboard';
import BilboardCard from './BilboardCard';
import styles from './BilboardPage.module.css';

const BilboardPage = () => {
  const billboards = useSelector((state) => state.bilboard.billboards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBilboards());
  }, [dispatch]);

  return (
    <div className={styles.bilboardMain}>
      {billboards.map((item) => {
        return (
          <BilboardCard
            key={item._id}
            image={item.image}
            address={item.address}
            sideA={item.sideA}
            sideB={item.sideB}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default BilboardPage;

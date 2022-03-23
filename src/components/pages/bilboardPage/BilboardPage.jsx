import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBilboards } from '../../../redux/features/bilboard';
import BilboardCard from './BilboardCard';
import styles from './BilboardPage.module.css';

const BilboardPage = () => {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  
  const billboards = useSelector((state) => state.bilboard.billboards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBilboards());
  }, [dispatch]);

  return (
    <div className={styles.bilboardMain}>
      {billboards.map((billboard) => {
        return <BilboardCard key={billboard._id} billboard={billboard} />;
      })}
    </div>
  );
};

export default BilboardPage;

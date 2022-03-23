import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSTFormat } from '../../../redux/features/stformat';
import STformatCard from './STformatCard';
import styles from './STFormats.module.css';
import LoadingContent from '../../ContentLoader/LoadingContent';

const StFormatPage = () => {
  const dispatch = useDispatch();

  const STFormats = useSelector((state) => state.stformat.items);
  const loading = useSelector((state) => state.stformat.loading);

  useEffect(() => {
    dispatch(getAllSTFormat());
  }, [dispatch]);

  if (loading) {
    return <LoadingContent />;
  }

  return (
    <div className={styles.STFormatMain}>
      {STFormats.map((STFormat) => {
        return <STformatCard STFormat={STFormat} key={STFormat._id} />;
      })}
    </div>
  );
};

export default StFormatPage;

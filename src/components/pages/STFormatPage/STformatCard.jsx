import React from 'react';
import styles from './STFormats.module.css';

const STformatCard = ({ STFormat }) => {
  return (
    <div className={styles.STFormatCard}>
      <div className={styles.STFormat}>
        <img src={STFormat.image} alt="#" />
      </div>
      <div className={styles.sideA}>
        sideA:{' '}
        {STFormat.sideA ? (
          <input type="checkbox" />
        ) : (
          <input type="checkbox" disabled={true} />
        )}
      </div>
      <div className={styles.sideB}>
        sideB:{' '}
        {STFormat.sideB ? (
          <input type="checkbox" />
        ) : (
          <input type="checkbox" disabled={true} />
        )}
      </div>
      <div className={styles.price}>{STFormat.price}</div>
      <div className={styles.address}>{STFormat.address}</div>
    </div>
  );
};

export default STformatCard;

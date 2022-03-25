import React from 'react';
import styles from './STFormat.module.css';
import STFormatImage from '../../assets/STFormat.png';
import { Link } from 'react-router-dom';

const StFormat = () => {
  return (
    <div className={styles.STFormatCardBlock}>
      <div className={styles.STFormatCardContent}>
        <img className={styles.STFormatCardImage} src={STFormatImage} alt="" />
        <div className={styles.STFormatCardApp}>
          <div className={styles.STFormatCardTitle}>СИТИ-ФОРМАТ</div>
          <div className={styles.STFormatCardDesc}>
            Технически сити-формат — это световой короб (лайтбокс), имеющий
            строго определенные размеры: 1,2 на 1,8 м. Он может быть как
            односторонним, так и двухсторонним. Второй вариант более эффективен
            и используется гораздо чаще.
          </div>
          <Link to="/STFormat">
            <button className={styles.STFormatCardBtn}>Арендовать</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StFormat;

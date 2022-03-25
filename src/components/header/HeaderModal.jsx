import React from 'react';
import styles from './Header.module.css';

const HeaderModal = () => {
  return (
    <div className={styles.modal}>
      <p>Главный менеджер: +7 938 997 8677</p>
      <p>Администратор: +7 938 997 8677</p>
      <p>Лидер по продажам: +7 938 997 8677</p>
    </div>
  );
};

export default HeaderModal;

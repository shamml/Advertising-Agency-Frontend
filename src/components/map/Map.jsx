import React from 'react';
import styles from './Map.module.css';

const Map = () => {
  return (
    <div className={styles.map}>
      <div className={styles.iframe}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6df1e7fb92f7725f4fd1d1e07fdeeadec74a6a9682fd685998d5f8896a28e33&amp;source=constructor"
          width="1100"
          height="450"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

import React from 'react';
import styles from './Map.module.css';

const Map = () => {
  return (
    <div className={styles.map}>
      <div className={styles.iframe}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.94975511823!2d37.5566700159004!3d55.74200198055046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bc0c0705b0d%3A0x13401fbdde3bb89c!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNywg0JzQvtGB0LrQstCwLCAxMjEwNTk!5e0!3m2!1sru!2sru!4v1623259773386!5m2!1sru!2sru"
          width="1100"
          height="450"
          allowFullScreen="0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

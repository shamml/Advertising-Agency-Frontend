import React, { useState } from 'react';
import styles from './STFormats.module.css';
import StFormatButtons from './STFormatButtons';
import { GrLocation } from 'react-icons/gr';
import { BiRuble } from 'react-icons/bi';
import { CgSidebarRight } from 'react-icons/cg';
import { CgSidebar } from 'react-icons/cg';

const STformatCard = ({ STFormat }) => {

  const [sideA, setSideA] = useState(false);
  const [sideB, setSideB] = useState(false);
  console.log(`sideA: ${sideA} sideB ${sideB}`)

  const handleClickPatchSideA = () => {
    setSideA(!sideA);
  };

  const handleClickPatchSideB = () => {
    setSideB(!sideB);
  };

  return (
    <div className={styles.STFormatCard}>
      <div className={styles.STFormat}>
        <img src={STFormat.image} alt="#" />
      </div>
      <div className={styles.STFormatInfo}>
        <div className={styles.sideA}>
          <CgSidebar />
          sideA:{' '}
          {STFormat.sideA ? (
            <input
              type="checkbox"
              onChange={handleClickPatchSideA}
              value={sideA}
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
            {STFormat.sideB ? (
              <input
                type="checkbox"
                onChange={handleClickPatchSideB}
                value={sideB}
              />
            ) : (
              <input type="checkbox" disabled={true} />
            )}
          </div>
        </div>
        <div className={styles.price}>
          {' '}
          <BiRuble /> {STFormat.price}
        </div>
        <div className={styles.address}>
          {' '}
          <GrLocation /> {STFormat.address}
        </div>
        <StFormatButtons STFormat={STFormat} sideA={sideA} sideB={sideB} />
      </div>
    </div>
  );
};

export default STformatCard;

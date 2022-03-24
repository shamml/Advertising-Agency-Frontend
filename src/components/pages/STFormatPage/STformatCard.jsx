import React from 'react';
import styles from './STFormats.module.css';
import StFormatButtons from './STFormatButtons';
import { GrLocation } from 'react-icons/gr';
import { BiRuble } from 'react-icons/bi';
import { CgSidebarRight } from 'react-icons/cg';
import { CgSidebar } from 'react-icons/cg';
import { useDispatch } from 'react-redux'
import { editCheckboxSideB } from '../../../redux/features/stformat'

const STformatCard = ({ STFormat }) => {
  const dispatch = useDispatch()

  const handleCheckedSideB = (id, sideB) => {
    console.log(id)
    dispatch(editCheckboxSideB(id, sideB))
  }

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
            {STFormat.sideB ? (
              <input
                type="checkbox"
                checked={STFormat.sideB}
                onChange={() => handleCheckedSideB(STFormat._id, STFormat.sideB)}
              />
            ) : (
              <input type="checkbox" />
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
        <StFormatButtons STFormat={STFormat} />
      </div>
    </div>
  );
};

export default STformatCard;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBillboardToCart } from '../../../redux/features/cart';
import styles from './BilboardPage.module.css';
import { CgSidebarRight } from 'react-icons/cg';
import { CgSidebar } from 'react-icons/cg';
import { GrLocation } from 'react-icons/gr';
import { BiRuble } from 'react-icons/bi';
import BilboardButtons from './Bilboard.buttons'

const BilboardCard = ({ billboard }) => {

  const [sideA, setSideA] = useState(false);
  const [sideB, setSideB] = useState(false);

  const handleClickPatchSideA = () => {
    setSideA(!sideA);
  };

  const handleClickPatchSideB = () => {
    setSideB(!sideB);
  };

  // для дальнейшей работы на стороне админа

  // const patchSideAlphaBillboard = () => {
  //   dispatch(patchSideABillboard(id, sideA));
  // };
  // const patchSideBetaBillboard = (id) => {
  //   dispatch(patchSideBBillboard(id, sideB));
  // };

  return (
    <div className={styles.billboardCards}>
      <div className={styles.billboardCard}>
        <div className={styles.box}>
          <img src={billboard.image} alt="surt" />
        </div>
        <div className={styles.info}>
          <div className={styles.address}>
            <GrLocation /> {billboard.address}
          </div>
          <div className={styles.price}>
            {' '}
            <BiRuble /> {billboard.price}
          </div>

          <div className={styles.sideA}>
            <CgSidebar />
            sideA:{' '}
              <input
                value={sideA}
                onChange={handleClickPatchSideA}
                type="checkbox"
                disabled={billboard.sideA}
              />
          </div>
          <div className={styles.sideB}>
            <div>
              <CgSidebarRight />
            </div>
            <div>
              sideB:{' '}
                <input
                  type="checkbox"
                  value={sideB}
                  onChange={handleClickPatchSideB}
                  disabled={billboard.sideB}
                />
            </div>
          </div>
          <BilboardButtons sideA={sideA} sideB={sideB} id={billboard._id}/>
        </div>
      </div>
    </div>
  );
};

export default BilboardCard;

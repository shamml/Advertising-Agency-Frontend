import React, { useState } from 'react';
import styles from './VisitCardPage.module.css';
import visitCardImage from '../../../assets/visitcardimg.jpg';
import bannerImage from '../../../assets/banner.jpg';
import { useDispatch } from 'react-redux';
import {
  addBannerToCart,
  addVisitCardToCart,
} from '../../../redux/features/cart';

const VisitCardPage = () => {
  // визитка
  const dispatch = useDispatch();

  const [paper, setPaper] = useState(1);
  const checkPaper = (e) => {
    setPaper(e.target.value);
  };

  const [count, setCount] = useState(500);
  const handleCount = (e) => {
    setCount(e.target.value);
  };

  const [delivery, setDelivery] = useState(0);
  const checkDelivery = () => {
    if (delivery === 0) {
      setDelivery(700);
    } else {
      setDelivery(0);
    }
  };

  const price = Math.round(count * paper + delivery);

  const [visitInCart, setVisitIncart] = useState(false);
  const handleClickAddVisitCard = () => {
    dispatch(addVisitCardToCart(paper, count, !!delivery, price));
    setVisitIncart(true);
    setTimeout(() => {
      setVisitIncart(false);
    }, 1000);
  };

  // Баннер
  const [bannerType, setBannerType] = useState(450);
  const checkBannerType = (e) => {
    setBannerType(e.target.value);
  };

  const [width, setWidth] = useState('');
  const handleWidth = (e) => {
    if (Number(e.target.value) || e.target.value === '') {
      setWidth(e.target.value);
    }
  };

  const [height, setHeight] = useState('');
  const handleHeight = (e) => {
    if (Number(e.target.value) || e.target.value === '') {
      setHeight(e.target.value);
    }
  };

  const [bannerDelivery, setBannerDelivery] = useState(0);
  const checkBannerDelivery = () => {
    if (bannerDelivery === 0) {
      setBannerDelivery(700);
    } else {
      setBannerDelivery(0);
    }
  };

  const square = (width / 100) * (height / 100);

  const [bannerCount, setBannerCount] = useState(1);
  const handlePlus = () => {
    if (bannerCount < 10) {
      setBannerCount(bannerCount + 1);
    }
  };

  const handleMinus = () => {
    if (bannerCount > 1) {
      setBannerCount(bannerCount - 1);
    }
  };

  const bannerPrice = Math.round(
    square * bannerType * bannerCount + bannerDelivery,
  );

  const [bannerInCart, setBannerIncart] = useState(false);
  const handleClickAddBanner = () => {
    dispatch(
      addBannerToCart(
        Number(bannerType),
        bannerCount,
        !!bannerDelivery,
        bannerPrice,
      ),
    );
    setBannerIncart(true);
    setTimeout(() => {
      setBannerIncart(false);
    }, 1000);
  };

  return (
    <div className={styles.visitCardPage}>
      <div className={styles.visitCardBlock}>
        <div className={styles.visitCardImage}>
          <img src={visitCardImage} alt="visitcardimg" />
        </div>
        <div className={styles.visitCardForm}>
          <div className={styles.paperBlock}>
            <input
              type="radio"
              name="paper"
              id="paper1"
              value={1}
              onClick={checkPaper}
            />{' '}
            <label htmlFor="paper1">Меловка</label>{' '}
            <input
              type="radio"
              name="paper"
              id="paper2"
              value={2}
              onClick={checkPaper}
            />{' '}
            <label htmlFor="paper2">TouchCover</label>
          </div>
          <div className={styles.countBlock}>
            <select
              className={styles.visitCardSelect}
              name="count"
              value={count}
              onChange={handleCount}
            >
              <option disabled>Выберите количесвто</option>
              <option value={500}>500шт</option>
              <option value={1000}>1000шт</option>
              <option value={2000}>2000шт</option>
              <option value={5000}>5000шт</option>
            </select>
          </div>
          <input
            className={styles.visitCardCheck}
            type="checkbox"
            name="delivery"
            id="deliv"
            value={delivery}
            onChange={checkDelivery}
          />{' '}
          <label htmlFor="deliv">Доставка (700р)</label> <br />
          <button
            className={
              visitInCart ? styles.visitInCartBtn : styles.visitCardBtn
            }
            onClick={handleClickAddVisitCard}
          >
            {visitInCart ? 'Добавлено' : 'Добавить в корзину'}
          </button>
        </div>
        <div className={styles.price}>{price}₽</div>
      </div>

      <div className={styles.visitCardBlock}>
        <div className={styles.bannerImage}>
          <img src={bannerImage} alt="bannerimg" />
        </div>
        <div className={styles.bannerForm}>
          <div className={styles.paperBlock}>
            <input
              type="radio"
              name="bannerType"
              id="bannerType1"
              value={450}
              onClick={checkBannerType}
            />{' '}
            <label htmlFor="bannerType1">Широкоформатная печать</label>{' '}
            <input
              type="radio"
              name="bannerType"
              id="bannerType2"
              value={600}
              onClick={checkBannerType}
            />{' '}
            <label htmlFor="bannerType2">Интерьерная печать</label>
          </div>
          <div className={styles.line}>
            <div className={styles.bannerSize}>
              <input
                type="text"
                name="size"
                id="width"
                placeholder="Ширина"
                value={width}
                onChange={handleWidth}
              />
              <label htmlFor="width"> см</label>
              <input
                type="text"
                name="size"
                id="height"
                placeholder="Высота"
                value={height}
                onChange={handleHeight}
              />
              <label htmlFor="height"> см</label>
            </div>
            <div className={styles.bannerCount}>
              <div>Количество:</div>
              <div className={styles.btn} onClick={handleMinus}>
                -
              </div>
              <div>{bannerCount}</div>
              <div className={styles.btn} onClick={handlePlus}>
                +
              </div>
            </div>
          </div>
          <input
            className={styles.visitCardCheck}
            type="checkbox"
            name="bannerDelivery"
            id="bandeliv"
            value={bannerDelivery}
            onChange={checkBannerDelivery}
          />{' '}
          <label htmlFor="bandeliv">Доставка (700р)</label> <br />
          <button
            className={
              bannerInCart ? styles.visitInCartBtn : styles.visitCardBtn
            }
            onClick={handleClickAddBanner}
          >
            {bannerInCart ? 'Добавлено' : 'Добавить в корзину'}
          </button>
        </div>
        <div className={styles.price}>{bannerPrice}₽</div>
      </div>
    </div>
  );
};

export default VisitCardPage;

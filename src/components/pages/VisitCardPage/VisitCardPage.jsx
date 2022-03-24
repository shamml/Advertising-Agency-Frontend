import React, { useState } from 'react';
import styles from './VisitCardPage.module.css';
import visitCardImage from '../../../assets/visitcardimg.jpg';
import { useDispatch } from 'react-redux';
import { addVisitCardToCart } from '../../../redux/features/cart';

const VisitCardPage = () => {
  const dispatch = useDispatch();

  const [paper, setPaper] = useState(1);

  const checkPaper = (e) => {
    setPaper(e.target.value);
  };

  const [count, setCount] = useState(500);

  const handleCount = (e) => {
    setCount(e.target.value);
  };

  const [delivery, setDelivery] = useState(false);

  const checkDelivery = () => {
    if (delivery) {
      setDelivery(false);
    } else {
      setDelivery(true);
    }
    console.log(delivery);
  };

  
  let price = count * paper;

  if (delivery) {
    price = price + 500
  }
  

  console.log(price);

  const handleClickAddToCart = () => {
    dispatch(addVisitCardToCart(paper, count, delivery, price));
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
            />{" "}
            <label htmlFor="paper1">Меловка</label>
            {" "}
            <input
              type="radio"
              name="paper"
              id="paper2"
              value={2}
              onClick={checkPaper}
            />{" "}
            <label htmlFor="paper2">TouchCover</label>
          </div>
          <div className={styles.countBlock}>
            <select className={styles.visitCardSelect} name="count" value={count} onChange={handleCount}>
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
            onClick={checkDelivery}
          />{' '}
          <label htmlFor="deliv">Доставка (500р)</label> <br />
          <button className={styles.visitCardBtn} onClick={handleClickAddToCart}>Добавить в корзину</button>
        </div>
        <div className={styles.price}>{}</div>
      </div>
    </div>
  );
};

export default VisitCardPage;

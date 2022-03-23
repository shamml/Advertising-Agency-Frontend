import React, { useState } from 'react';
import styles from './VisitCardPage.module.css';
import visitCardImage from '../../../assets/visitcardimg.jpg';
import { useDispatch } from 'react-redux';
import { addVisitCard } from '../../../redux/features/visitcard';

const VisitCardPage = () => {
  const dispatch = useDispatch();

  const [paper, setPaper] = useState("");

  const checkPaper = (e) => {
    setPaper(e.target.value)
  }

  const [count, setCount] = useState(500);

  const handleCount = (e) => {
    setCount(e.target.value)
  }

  const [delivery, setDelivery] = useState(false);

  const checkDelivery = () => {
    if (delivery) {
      setDelivery(false)
    } else {
      setDelivery(true)
    }
  }

  const handleClickAddToCart = () => {
    dispatch(addVisitCard(paper, count, delivery))
  }

  return (
    <div className={styles.visitCardPage}>
      <div className={styles.visitCardImage}>
        <img src={visitCardImage} alt="visitcardimg" />
      </div>
      <div className={styles.visitCardForm}>
        <div className={styles.paperBlock}>
          <input type="radio" name="paper" id="paper1" value="plain" onClick={checkPaper}/>{' '}
          <label htmlFor="paper1">Меловка</label>
          <input type="radio" name="paper" id="paper2" value="touchcover" onClick={checkPaper}/>{' '}
          <label htmlFor="paper2">Тачкавер</label>
        </div>
        <div className={styles.countBlock}>
          <select name="count" value={count} onChange={handleCount}>
            <option disabled>Выберите количесвто</option>
            <option value={500}>500шт</option>
            <option value={1000}>
              1000шт
            </option>
            <option value={2000}>2000шт</option>
            <option value={5000}>5000шт</option>
          </select>
        </div>
        <input type="checkbox" name="delivery" id="deliv" onChange={checkDelivery} />{' '}
        <label htmlFor="deliv">Доставка (500р)</label> <br />
        <button onClick={handleClickAddToCart} >Добавить в корзину</button>
      </div>
    </div>
  );
};

export default VisitCardPage;

import React from 'react';
import styles from "./VisitCardPage.module.css";
import visitCardImage from "../../../assets/visitcardimg.jpg";

const VisitCardPage = () => {
  return (
    <div className={styles.visitCardPage}>
      <div className={styles.visitCardImage}>
        <img src={visitCardImage} alt="visitcardimg" />
      </div>
      <div className={styles.visitCardForm}>
        <div className={styles.paperBlock}>
          <input type="radio" name="paper" id='paper1'/> <label htmlFor="paper1">Меловка</label>
          <input type="radio" name="paper" id='paper2'/> <label htmlFor="paper2">Тачкавер</label>
        </div>
        <div className={styles.countBlock}>
          <select name="hero[]">
            <option disabled>Выберите количесвто</option>
            <option value="Чебурашка">500шт</option>
            <option selected value="Крокодил Гена">1000шт</option>
            <option value="Шапокляк">2000шт</option>
            <option value="Крыса Лариса">5000шт</option>
          </select>
        </div>
        <input type="checkbox" name="delivery" id='deliv' /> <label htmlFor="deliv">Доставка (500р)</label> <br />
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default VisitCardPage;
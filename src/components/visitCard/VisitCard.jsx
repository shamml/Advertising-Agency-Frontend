import React from 'react';
import styles from './VisitCard.module.css';
import visitCardImage from '../../assets/visit-card.png';
import { Link } from 'react-router-dom';

function VisitCard(props) {
  return (
    <div className={styles.visitCardBlock}>
      <div className={styles.visitCardContent}>
        <div className={styles.visitCardApp}>
          <div className={styles.visitCardTitle}>ВИЗИТНЫЕ КАРТОЧКИ</div>
          <div className={styles.visitCardSubTitle}>Доставка по городу</div>
          <div className={styles.visitCardDesc}>
            Визитные карты — элемент имиджа, содержащий контактную информацию
            компании, частного лица. От выбора дизайна зависит впечатление,
            которое изделие произведет на партнера или клиента.
          </div>
          <Link to="/visitcard">
            <button className={styles.visitCardBtn}>Купить</button>
          </Link>
        </div>
        <img className={styles.visitCardImage} src={visitCardImage} alt="" />
      </div>
    </div>
  );
}

export default VisitCard;

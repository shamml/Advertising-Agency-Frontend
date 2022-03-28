import { React, useEffect, useState } from 'react';
import styles from './CartPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteBanner,
  deleteRent,
  deleteVisitCard,
  fetchRents,
  order,
} from '../../../redux/features/cart';
import plain from '../../../assets/plain.jpg';
import touch from '../../../assets/touch.jpg';
import banner from '../../../assets/cartbanner.jpg';
import Success from './Success';

const CartPage = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.cart.loading);
  const sales = useSelector((state) => state.cart.products.sales);
  const rents = useSelector((state) => state.cart.products.rents);
  const total = useSelector((state) => state.cart.total);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    dispatch(fetchRents());
  }, [dispatch]);

  const handleDeleteVisiCard = (id) => {
    dispatch(deleteVisitCard(id));
  };

  const handleDeleteBanner = (id) => {
    dispatch(deleteBanner(id));
  };

  if (loading) {
    return <div>loading...</div>;
  }
  const handleDeleteRent = (id, price) => {
    dispatch(deleteRent(id, price));
  };

  const handleOrder = () => {
    dispatch(order())
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false)
    }, 2000)
  }
  
  return (
    <div className={styles.cartPage}>
      {success ? <Success /> : ""}
      {!!sales.length || !!rents.length ? (
        <div className={styles.cartBlock}>
          {rents.map((rent) => {
            return (
              <div key={rent._id} className={rent.deleting ? `${styles.item} ${styles.deleting}` : styles.item}>
                <div className={styles.item1}>
                  <img src={rent.image} alt="" />
                </div>
                <div className={styles.item2}>{rent.name}</div>
                <div className={styles.item3}>{rent.address}</div>
                <div className={styles.item4}>
                  {rent.sideA.selected && rent.sideB.selected ? <div>Обе стороны</div> : ''}
                  {rent.sideA.selected && !rent.sideB.selected && <div>Сторона А</div>}
                  {!rent.sideA.selected && rent.sideB.selected && <div>Сторона Б</div>}
                </div>
                <div className={styles.item5}>{rent.price}₽</div>
                <button onClick={() => handleDeleteRent(rent._id, rent.price)}>
                  ×
                </button>
              </div>
            );
          })}
          {sales.map((sale) => {
            return (
              <>
                <div key={sale._id} className={sale.deleting ? `${styles.item} ${styles.deleting}` : styles.item} >
                  <div className={styles.item1}>
                    {(function () {
                      switch (sale.typePaper) {
                        case 1:
                          return <img src={plain} alt="visitcard" />;
                        case 2:
                          return <img src={touch} alt="visitcard" />;
                        case 450:
                          return <img src={banner} alt="visitcard" />;
                        case 600:
                          return <img src={banner} alt="visitcard" />;
                        default:
                          return 'Здесь должна быть картинка';
                      }
                    })()}
                  </div>
                  <div className={styles.item2}>{sale.name}</div>
                  <div className={styles.item3}>
                    {(function () {
                      switch (sale.typePaper) {
                        case 1:
                          return 'Меловка';
                        case 2:
                          return 'TouchCover';
                        case 450:
                          return 'Широкоформатная пеачть';
                        case 600:
                          return 'Интерьерная печать';
                        default:
                          return 'Неправильный тип бумаги';
                      }
                    })()}
                  </div>
                  <div className={styles.item4}>{sale.count}шт</div>
                  <div className={styles.item5}>{sale.price}₽</div>
                  {sale.name === 'Визитки' ? (
                    <button onClick={() => handleDeleteVisiCard(sale._id)}>
                      ×
                    </button>
                  ) : (
                    <button onClick={() => handleDeleteBanner(sale._id)}>
                      ×
                    </button>
                  )}
                </div>
              </>
            );
          })}
          <div className={styles.total}>
            <button className={styles.orderBtn} onClick={handleOrder}>Оформить заказ</button>
            <div>Итого: {total}₽</div>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCart}>В корзине нет товаров</div>
      )}
    </div>
  );
};

export default CartPage;

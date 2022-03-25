import { React, useEffect } from 'react';
import styles from './CartPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVisitCard, fetchRents } from '../../../redux/features/cart';
import plain from '../../../assets/plain.jpg';
import touch from '../../../assets/touch.jpg';

const CartPage = () => {
  const dispatch = useDispatch();
  
  const sales = useSelector((state) => state.cart.products.sales);
  const loading = useSelector((state) => state.cart.loading);
  const rents = useSelector((state) => state.cart.products.rents);
  console.log(rents);
 
  const total = useSelector((state) => state.cart.total);
  const loadingProduct = useSelector(state => state.cart.loadingProduct);

  useEffect(() => {
    dispatch(fetchRents());
  }, [dispatch]);

  const handleDeleteVisiCard = (id) => {
    dispatch(deleteVisitCard(id));
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className={styles.cartPage}>
      {!!sales.length ? (
        <div className={styles.cartBlock}>
          {/* {rents.map((rent) => {
          return (
            <div className={styles.rent}>
              <div>{rent.image}</div>
              <div>{rent.name}</div>
              <div>{rent.adress}</div>
              {rent.sideA && rent.sideB ? <div>Обе стороны</div> : ''}
              {rent.sideA && !rent.sideB && <div>Сторона А</div>}
              {!rent.sideA && rent.sideB && <div>Сторона Б</div>}
              <div>{rent.price}</div>
            </div>
          );
        })} */}
          {sales.map((sale) => {
            return (
              <>
                <div key={sale._id} className={styles.item}>
                  <div className={styles.item1}>
                    {sale.typePaper === 1 ? (
                      <img src={plain} alt="visitcard" />
                    ) : (
                      <img src={touch} alt="visitcard" />
                    )}
                  </div>
                  <div className={styles.item2}>{sale.name}</div>
                  <div className={styles.item3}>
                    {sale.typePaper === 1 ? 'Меловка' : 'TouchCover'}
                  </div>
                  <div className={styles.item4}>{sale.count}шт</div>
                  <div className={styles.item5}>{sale.price}₽</div>
                  <button onClick={() => handleDeleteVisiCard(sale._id)}>
                    ×
                  </button>
                </div>
              </>
            );
          })}
          <button className={styles.orderBtn}>Оформить заказ</button>
              <div key={sale._id} className={loadingProduct ? `${styles.item} ${styles.deleting}` : styles.item}>
                <div className={styles.item1}>
                  {sale.typePaper === 1 ? (
                    <img src={plain} alt="visitcard" />
                  ) : (
                    <img src={touch} alt="visitcard" />
                  )}
                </div>
                <div className={styles.item2}>{sale.name}</div>
                <div className={styles.item3}>
                  {sale.typePaper === 1 ? 'Меловка' : 'TouchCover'}
                </div>
                <div className={styles.item4}>{sale.count}шт</div>
                <div className={styles.item5}>{sale.price}₽</div>
                <button onClick={() => handleDeleteVisiCard(sale._id)}>
                  ×
                </button>
              </div>
            );
          })}
          <div className={styles.total}>
            <button className={styles.orderBtn}>Оформить заказ</button>
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

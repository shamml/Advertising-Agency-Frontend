import {React, useEffect} from 'react';
import styles from './CartPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVisitCard, fetchRents } from '../../../redux/features/cart';

const CartPage = () => {
  const dispatch = useDispatch();
  const sales = useSelector(state => state.cart.products.sales);
  const loading = useSelector(state => state.cart.loading);

  useEffect(() => {
    dispatch(fetchRents())
  }, [dispatch])

  const handleDeleteVisiCard = (id) => {
    dispatch(deleteVisitCard(id))
  }

  if(loading) {
    return <div>loading...</div>
  }

  return (
    <div className={styles.cartPage}>
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
            <div key={sale._id} className={styles.sale}>
              <div>
                <img src="/" alt="visitcard" />
              </div>
              <div>{sale.name}</div>
              <div>{sale.typePaper}</div>
              <div>{sale.count}</div>
              <div>{sale.price}</div>
              <button onClick={() => handleDeleteVisiCard(sale._id)}>Убрать из корзины</button>
            </div>
          );
        })}
      </div>
      <button>Оформить заказ</button>
    </div>
  );
};

export default CartPage;

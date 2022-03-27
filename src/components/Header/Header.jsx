import React, { useState } from 'react';
import logo from '../../assets/Logo.png';
import cartIcon from '../../assets/cart-icon.png';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/features/application';
import HeaderModal from './HeaderModal';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  window.onscroll = function() {
    if (window.scrollY > 0) {
      setScroll(true)
    } 
    if (window.scrollY < 1) {
      setScroll(false)
    }
  }

  const dispatch = useDispatch();

  const [contacts, setContacts] = useState(false);

  const exit = () => {
    dispatch(logOut());
  };

  const check = () => {
    setContacts(!contacts)
  };

  const token = useSelector((state) => state.application.token);
  const rentsInCartLength = useSelector((state => state.cart.products.rents.length));
  const salesInCartLength = useSelector((state => state.cart.products.sales.length));
  const amount = rentsInCartLength + salesInCartLength;

  return (
    <header className={ scroll ? styles.fixed : ""}>
      <Link to="/">
        <img className={styles.logoImage} src={logo} alt="pictur" />
      </Link>
      <nav>
        <Link to="/reviews">
          <p>О нас</p>
        </Link>
        <p onClick={check}>Контакты</p>
        {contacts ? <HeaderModal /> : ''}
      </nav>
      <Link to="/cartpage">
        <div className={styles.cartIcon}>
          {!!amount && <div className={styles.amount}>{amount}</div>}
          <img src={cartIcon} alt="carticon" />
        </div>
      </Link>
      <Link to="/signin">
        {token ? <button onClick={exit} className={styles.signInBtn}>
          Выход
        </button> : <button className={styles.signInBtn}>
          Войти
        </button>}
      </Link>
    </header>
  )
};

export default Header;

import React from 'react';
import logo from '../../assets/Logo.png';
import cartIcon from '../../assets/cart-icon.png';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className={styles.logoImage} src={logo} alt="pictur" />
      </Link>
      <nav>
        <a>О нас</a>
        <a>Контакты</a>
      </nav>
      <Link to="/cartpage">
        <img className={styles.cartIcon} src={cartIcon} alt="carticon" />
      </Link>
      <Link to="/signin">
        <button className={styles.signInBtn}>Войти</button>
      </Link>
    </header>
  );
};

export default Header;

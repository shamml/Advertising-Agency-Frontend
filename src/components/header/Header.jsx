import React from 'react';
import logo from "../../assets/Logo.png";
import cartIcon from "../../assets/cart-icon.png"
import styles from "./Header.module.css"
import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
    <header>
      <Link to='/'><img className={styles.logoImage} src={logo} alt="picture" /></Link>
      <nav>
        <a>О нас</a>
        <a>Контакты</a>
      </nav>
      <img className={styles.cartIcon} src={cartIcon} alt="" />
      <Link to='/signin'><button className={styles.signInBtn}>Войти</button></Link>
    </header>
  );
};

export default Header;


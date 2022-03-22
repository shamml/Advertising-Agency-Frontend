import React from 'react';
import logo from "../../assets/Logo.png";
import cartIcon from "../../assets/cart-icon.png"
import styles from "./Header.module.css"

const Header = () => {
  
  return (
    <header>
      <img className={styles.logoImage} src={logo} alt="picture" />
      <nav>
        <a>О нас</a>
        <a>Контакты</a>
      </nav>
      <img className={styles.cartIcon} src={cartIcon} alt="" />
      <button className={styles.signInBtn}>Войти</button>
    </header>
  );
};

export default Header;


import React from 'react';
import styles from "./CartPage.module.css";

const CartPage = () => {

  const rents = [
    {
      adress: "gggggg",
      image: "IIIII",
      sideA: false,
      sideB: true,
      price: 8000
    },
    {
      adress: "aaaaaa",
      image: "IIIII",
      sideA: false,
      sideB: true,
      price: 9000
    },
    {
      adress: "eeeeee",
      image: "IIIII",
      sideA: true,
      sideB: true,
      price: 12000
    },
  ]

  const sales = [
    {
      adress: "gggggg",
      image: "IIIII",
      sideA: false,
      sideB: true,
      price: 8000
    },
    {
      adress: "aaaaaa",
      image: "IIIII",
      sideA: false,
      sideB: true,
      price: 9000
    },
    {
      adress: "eeeeee",
      image: "IIIII",
      sideA: true,
      sideB: true,
      price: 12000
    },
  ]
  return (
    <div className={styles.cartPage}>
      <div className={styles.cartBlock}>
        {
          rents.map(rent => {
            return (
              <div className={styles.rent}>
                <div>{rent.image}</div>
                <div>{rent.name}</div>
                <div>{rent.adress}</div>
                {(rent.sideA && rent.sideB) ? <div>Обе стороны</div> : ""}
                {(rent.sideA && !rent.sideB) && <div>Сторона А</div>}
                {(!rent.sideA && rent.sideB) && <div>Сторона Б</div>}
                <div>{rent.price}</div>
              </div>
            )
          })
        }
        {
          sales.map(sale => {
            return (
              <div className={styles.sale}>
                <div><img src="/" alt="visitcard" /></div>
                <div>{sale.name}</div>
                <div>{sale.typePaper}</div>
                <div>{sale.count}</div>
                <div>{sale.price}</div>
              </div>
            )
          }) 
        }
      </div>
      <button>Оформить заказ</button>
    </div>
  );
};

export default CartPage;
import React, {useState} from 'react';
import styles from './Carousel.module.css';
import {useDispatch} from "react-redux";
import {addClaims} from "../../redux/features/claims";

function Carousel() {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [sendMessage, setSendMessage] = useState(false);

    const addClaimsHandler = () => {
        dispatch(addClaims(name, phone))
        setSendMessage(!sendMessage)
        setName('')
        setPhone('')
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }
    return (
        <div className={styles.carouselDark}>
            <div className={styles.carouselBlock}>
                <div className={styles.carouselContent}>
                    <div className={styles.title}>
                        РЕКЛАМНОЕ <br/> <p>АГЕНТСТВО</p> ПОЛНОГО <br/> ЦИКЛА
                    </div>
                    <div className={styles.form}>
                        <div className={styles.formTitle}>
                            ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
                        </div>
                        <input
                            value={name}
                            onChange={handleChangeName}
                            className={styles.formFirstInput}
                            type="text"
                            placeholder="Ваше имя.."
                        />
                        <input
                            value={phone}
                            onChange={handleChangePhone}
                            className={styles.formSecondInput}
                            type="text"
                            placeholder="Ваш телефон.."
                        />
                        <button
                            onClick={addClaimsHandler}
                            disabled={sendMessage}
                            className={styles.formBtn}>{sendMessage ? 'Заявка оформлена' : 'Оформить заявку'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;

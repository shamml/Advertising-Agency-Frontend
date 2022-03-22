import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registration } from '../../../redux/features/application';
import styles from './styles.module.css';

const SignupPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);

  const [loginError, setLoginError] = useState('Логин не может быть пустым');
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым',
  );
  const [phoneError, setPhoneError] = useState('Поле не может быть пустым');

  const [formValid, setFormValid] = useState(false);

  const handleBlur = (e) => {
    switch (e.target.name) {
      case 'login':
        setLoginDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      case 'phone':
        setPhoneDirty(true);
        break;
    }
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    let registrationLogin =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!registrationLogin.test(String(e.target.value).toLowerCase())) {
      setLoginError('Некорректный логин');
    } else {
      setLoginError('');
    }
    if (!e.target.value) {
      setLoginError('Логин не может быть пустым');
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Пароль должен быть длинее 3 и меньше 9');
    } else {
      setPasswordError('');
    }
    if (!e.target.value) {
      setPasswordError('Пароль не может быть пустым');
    }
  };

  useEffect(() => {
    if (loginError || passwordError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, passwordError, phoneError]);

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    let regexPhone =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!regexPhone.test(Number(e.target.value))) {
      setPhoneError('Некорректный номер телефона');
    } else {
      setPhoneError('');
    }
    if (!e.target.value) {
      setPhoneError('Поле не может быть пустым');
    }
  };

  const handleClickRegistration = () => {
    dispatch(registration(login, password, phone));
  };

  return (
    <div className={styles.containerSignUp}>
      <div className={styles.signUp}>
        <form>
          <h1>Регистрация</h1>
          <input
            name="login"
            type="text"
            value={login}
            onChange={handleChangeLogin}
            placeholder="Enter your email.."
            onBlur={handleBlur}
          />
          {loginDirty && loginError && (
            <div style={{ color: 'red' }}>{loginError}</div>
          )}
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Enter your password.."
            onBlur={handleBlur}
          />
          {passwordDirty && passwordError && (
            <div style={{ color: 'red' }}>{passwordError}</div>
          )}
          <input
            onBlur={handleBlur}
            name="phone"
            type="text"
            value={phone}
            onChange={handleChangePhone}
            placeholder="Enter your phone.."
          />
          {phoneDirty && phoneError && (
            <div style={{ color: 'red' }}>{phoneError}</div>
          )}
          <Link to="/signin">
            <button
              onClick={handleClickRegistration}
              disabled={!formValid}
              type="submit"
            >
              Регистрация
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

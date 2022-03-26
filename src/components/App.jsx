import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/Signup.Page/SignupPage';
import './styles.css';
import BilboardPage from './pages/BilboardPage/BilboardPage';
import StFormatPage from './pages/STFormatPage/STFormatPage';
import VisitCardPage from './pages/VisitCardPage/VisitCardPage';
import CartPage from './pages/CartPage/CartPage';
import { useSelector } from 'react-redux';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import styles from './App.module.css';
import OrderPage from './pages/OrderPage/OrderPage';

const App = () => {
  const token = useSelector((state) => state.application.token);
  return token ? (
    <div className={styles.app}>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Navigate to="/" replace />} />
          <Route path="/signup" element={<Navigate to="/" replace />} />
          <Route path="/bilboard" element={<BilboardPage />} />
          <Route path="/visitcard" element={<VisitCardPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/STFormat" element={<StFormatPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path='/orders' element={<OrderPage />} />
        </Routes>
        <Footer />
    </div>
  ) : (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/bilboard" element={<BilboardPage />} />
          <Route path="/visitcard" element={<VisitCardPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/STFormat" element={<StFormatPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
          <Route path='/orders' element={<OrderPage />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;

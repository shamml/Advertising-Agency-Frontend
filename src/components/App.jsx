import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/Signup.Page/SignupPage';
import "./styles.css"
import BilboardPage from './pages/bilboardPage/BilboardPage';
import StFormatPage from './pages/STFormatPage/STFormatPage'
import VisitCardPage from './pages/VisitCardPage/VisitCardPage';
import CartPage from './CartPage/CartPage';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/bilboard" element={<BilboardPage />}/>
        <Route path="/visitcard" element={<VisitCardPage />}/>
        <Route path="/cartpage" element={<CartPage />}/>
        <Route path="/STFormat" element={<StFormatPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

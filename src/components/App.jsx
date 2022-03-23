import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/Signup.Page/SignupPage';
import './styles.css';
import BilboardPage from './pages/BilboardPage/BilboardPage';
import StFormatPage from './pages/STFormatPage/STFormatPage';
import { useSelector } from 'react-redux';

const App = () => {
  const token = useSelector((state) => state.application.token);
  return token ? (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Navigate to="/signin" replace />} />
        <Route path="/signup" element={<Navigate to="/signin" replace />} />
        <Route path="/bilboard" element={<BilboardPage />} />
        <Route path="/STFormat" element={<StFormatPage />} />
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
        <Route path="/STFormat" element={<StFormatPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Landing_page/Navbar.js';
import Footer from './Landing_page/Footer.js';
import HomePage from './Landing_page/home/HomePage.js';
import SignUp from './Landing_page/signUp/SignUp.js';
import AboutPage from './Landing_page/about/AboutPage.js';
import ProductsPage from './Landing_page/products/ProductsPage.js';
import PricingPage from './Landing_page/pricing/PricingPage.js';
import SupportPage from './Landing_page/support/SupportPage.js';
import NotFound from './Landing_page/NotFound.js';

import {BrowserRouter ,Routes,Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);

/*import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomePage from './HomePage';
import ProductPage from './product';
import ContactPage from './contact';
import ComponentsPage from './components';
import LocationPage from './location';
import OrderPage from './order';
import CompanyPage from './company';
import ItemCheckInPage from './itemCheckIn';
import Shipping from './Shipping';
import useToken from './useToken';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Check for token or session ID in browser's cookies or local storage
    const token = localStorage.getItem("status");
    console.log("token: ", token);
    if (token == 200) {
      setIsLoggedIn(true);
    }
  }, []);

  const redirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/itemCheckIn" element={<ItemCheckInPage />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      ) : (
        
        
        redirect("http://localhost:3001/login")
        
        
      )}
    </div>
  );
}

export default App;
*/
import { useState, useEffect } from "react";
import { getTokenCookie } from './lib/auth-cookies';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import HomePage from './HomePage';
import ProductPage from './product';
import ContactPage from './contact';
import ComponentsPage from './components';
import LocationPage from './location';
import OrderPage from './order';
import CompanyPage from './company';
import ItemCheckInPage from './itemCheckIn';
import Shipping from './Shipping';
import useToken from './useToken';
import ProtectedRoute from './ProtectedRoute';


function App() {
  console.log("here"); // Add this line to check the value of the token variable

 const getRes = () => {
    console.log("HERE")
    const res = axios.head('http://localhost:3001/login')
      
      return res.status
  }

  const redirect = () => {
    //window.location.href = 'http://localhost:3001/login';
  }

  //if (getRes() === 200) {
    return (
      <div className="App">
        <Routes>
        console.log("HERE")

          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/itemCheckIn" element={<ItemCheckInPage />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </div>
    );
  } //else {

    //redirect();
    //return null;
  //}
//}

export default App;

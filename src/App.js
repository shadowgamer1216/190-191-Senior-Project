import React from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './product';
import ContactPage from './contact';
import ComponentPage from './component';
import LocationPage from './location';
import OrderPage from './order';
import CompanyPage from './company';
import ItemCheckInPage from './itemCheckIn';
import Shipping from './Shipping';
import LoginForm from './LoginForm';
import SignupForm from './signupForm';
import { useState } from 'react';
import Search from './search';
import SearchCompany from './searchcompany';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    navigate('/');
    setIsLoggedIn(false)
  };

  return (
    <div className="App">
      {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<HomePage handleLogout={handleLogout} />} />
            <Route path="/product" element={<ProductPage handleLogout={handleLogout}/>} />
            <Route path="/contact" element={<ContactPage handleLogout={handleLogout}/>} />
            <Route path="/component" element={<ComponentPage handleLogout={handleLogout}/>} />
            <Route path="/location" element={<LocationPage handleLogout={handleLogout}/>} />
            <Route path="/order" element={<OrderPage handleLogout={handleLogout}/>} />
            <Route path="/company" element={<CompanyPage handleLogout={handleLogout}/>} />
            <Route path="/itemCheckIn" element={<ItemCheckInPage handleLogout={handleLogout}/>} />
            <Route path="/shipping" element={<Shipping handleLogout={handleLogout}/>} />
        <Route path = "/search" element = {<Search/>} />
        <Route path = "search/searchcompany" element = {<SearchCompany/>} />

          </Routes>
      ) : (

<Routes>
          <Route path="/" element={<LoginForm handleLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
        )}
    </div>
  );
}

export default App;

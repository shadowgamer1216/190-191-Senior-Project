import './App.css';
import React, { useState } from 'react';



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
import Login from './login';
import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();


  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = "/product" element = {<ProductPage/>} />    
        <Route path = "/contact" element = {<ContactPage/>} />
        <Route path = "/components" element = {<ComponentsPage/>} />
        <Route path = "/contact" element = {<ContactPage/>} /> 
        <Route path = "/location" element = {<LocationPage/>} />
        <Route path = "/order" element = {<OrderPage/>} />
        <Route path = "/company" element = {<CompanyPage/>} />
        <Route path = "/itemCheckIn" element = {<ItemCheckInPage/>} />
        <Route path = "/shipping" element = {<Shipping/>} />
     
      </Routes>
    
    </div>
  )
}
export default App;
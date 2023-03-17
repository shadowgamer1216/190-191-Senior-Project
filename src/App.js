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
import ComponentPage from './component';
import LocationPage from './location';
import OrderPage from './order';
import CompanyPage from './company';
import ItemCheckInPage from './itemCheckIn';
import Shipping from './Shipping';
import Login from './login';
import useToken from './useToken';
import Search from './search';
import SearchCompany from './searchcompany';
import SearchContact from './searchcontact';


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
        <Route path = "/component" element = {<ComponentPage/>} />
        <Route path = "/contact" element = {<ContactPage/>} /> 
        <Route path = "/location" element = {<LocationPage/>} />
        <Route path = "/order" element = {<OrderPage/>} />
        <Route path = "/company" element = {<CompanyPage/>} />
        <Route path = "/itemCheckIn" element = {<ItemCheckInPage/>} />
        <Route path = "/shipping" element = {<Shipping/>} />
        <Route path = "/search" element = {<Search/>} />
        <Route path = "search/searchcompany" element = {<SearchCompany/>} />
        <Route path = "search/searchcontact" element = {<SearchContact/>} />

     
      </Routes>
    
    </div>
  )
}
export default App;
/*import logo from './absolutemedialogo.png';*/
import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';


import { Link, useNavigate } from "react-router-dom";

function HomePage({ handleLogout }) {
  
  const navigate = useNavigate();
	const routeChange = () => {
    let path = '/login';
    navigate(path);
};
useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (!authToken) {
        routeChange()
    }
}, [])
  
  return (
    

    <div class='HomePage'>
      <div class='HomePageBar'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-maroon">
                <label className="navbar-brand">ABSOLUTE MEDIA, INC.</label>
                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>

            </nav>
      </div>

       

        <div class="block6">
          <Link to = "Search">
              <button type="Search" id="Search" class="HomePageButton" >Search</button>
          </Link>
        </div>

    </div>
  );
}

export default HomePage;
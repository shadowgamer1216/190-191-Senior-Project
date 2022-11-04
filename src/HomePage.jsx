import logo from './absolutemedialogo.png';
import React from 'react';

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        Home page
        </h1> 
        <Link to = "Company">+ Add Company</Link>
        <br></br>
        <Link to = "Component">+ Add Component</Link>
        <br></br>
        <Link to = "Contact">+ Add Contact</Link>
        <br></br>
        <Link to = "Location">+ Add Location</Link>
        <br></br>
        <Link to = "Order">+ Add Order</Link>
        <br></br>
        <Link to = "Shipping">+ Add Shipping</Link>
        <br></br>
        <Link to = "Product">+ Add Product</Link>
        <br></br>
        <Link to = "Item_Check_In">+ Item Check In</Link>
        <br></br>
        <Link to = "View">+ View</Link>
        <br></br>
        <Link to = "Edit">+ Edit</Link>
        <br></br>
    </div>
  );
}

export default HomePage;
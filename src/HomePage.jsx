/*import logo from './absolutemedialogo.png';*/
import React from 'react';
import './App.css';

import { Link } from "react-router-dom";

function HomePage() {
  return (
    
    /*<div>*/
    <div class='HomePage'>
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      <div class='HomePageBar'>
        <h1>
          Absolute Media, Inc
        </h1>
      </div>
        <div class='testblock1'>
        <Link to = "Company">
          <div className="Add Company">
          <button type="button" id="Add Company" class="HomePageButton">+ Add Company</button>
          <Link to = "Shipping">
          <button type="button" id="Add Shipping" class="HomePageButton">+ Add Shipping</button>
          </Link>
          </div>
        </Link>
        </div>

        <Link to = "Components">
        <div className="Add Component">
            <button type="Add Component" id="Add Component" class="HomePageButton">Add Component</button>
          </div>
        </Link>
        {/*<br></br>*/}
        

        <Link to = "Contact">
        <div className="Add Contact">
            <button type="Add Contact" id="Add Contact" class="HomePageButton">Add Contact</button>
          </div>
        </Link>
        {/*<br></br>*/}

        <Link to = "Location">
        <div className="Add Location">
            <button type="Add Location" id="Add Location" class="HomePageButton">Add Location</button>
          </div>
        </Link>
        {/*<br></br>*/}

        <Link to = "Order">
        <div className="Add Order">
            <button type="Add Order" id="Add Order" class="HomePageButton">Add Order</button>
          </div>
        </Link>
        {/*<br></br>*/}

        <Link to = "Shipping">
        <div className="Add Shipping">
            <button type="Add Shipping" id="Add Shipping" class="HomePageButton">Add Shipping</button>
          </div>
        </Link>
        {/*<br></br>*/}

        <Link to = "Product">
        <div className="Add Product">
            <button type="Add Product" id="Add Product" class="HomePageButton">Add Product</button>
          </div>
        </Link>
        {/*<br></br>*/}

        <Link to = "ItemCheckIn">
        <div className="Item Check In">
            <button type="Item Check In" id="Item Check In" class="HomePageButton">Item Check In</button>
          </div>
        </Link>
        {/*<br></br>*/}

        <Link to = "View">
        <div className="View">
            <button type="View" id="View" class="HomePageButton">View</button>
          </div>
        </Link>
        {/*<br></br>*/}

        <Link to = "Edit">
        <div className="Edit">
            <button type="Edit" id="Edit" class="HomePageButton">Edit</button>
          </div>
        </Link>
        {/*<br></br>*/}
    </div>
  );
}

export default HomePage;

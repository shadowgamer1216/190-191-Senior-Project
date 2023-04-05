/*import logo from './absolutemedialogo.png';*/
import React from 'react';
import './App.css';

import { Link } from "react-router-dom";

function HomePage({ handleLogout }) {
  
  return (
    

    <div class='HomePage'>
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      <div class='HomePageBar'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-maroon">
                <label className="navbar-brand">ABSOLUTE MEDIA, INC.</label>
                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>

            </nav>
      </div>

       

        <div class='block5'>
          
          {/*<Link to = "View">*/}
            <button type="View" id="View" class="InactiveHomePageButton">View</button>
          {/*</Link>*/}
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
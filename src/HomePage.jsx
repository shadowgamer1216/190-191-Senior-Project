import logo from './logo.svg';
import React from 'react';

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>
        Home page
        </h1> 
       
        <Link to = "Product">Product</Link>
  
    </div>
  );
}

export default HomePage;
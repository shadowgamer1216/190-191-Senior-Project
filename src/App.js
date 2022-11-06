import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import HomePage from './HomePage';
import ProductPage from './product';
import ContactPage from './contact';
import LocationPage from './location';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path = "product" element = {<ProductPage/>} />    
        <Route path = "contact" element = {<ContactPage/>} /> 
        <Route path = "location" element = {<LocationPage/>} />
      </Routes>
    
    </div>
  )
}
export default App;
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
<<<<<<< HEAD
import ComponentsPage from './components';
=======
import LocationPage from './location';
import OrderPage from './order';
>>>>>>> 30982f7f2e9ac9046428e7249beec6efb7ef8822

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path = "product" element = {<ProductPage/>} />    
<<<<<<< HEAD
        <Route path = "contact" element = {<ContactPage/>} />
        <Route path = "components" element = {<ComponentsPage/>} />
=======
        <Route path = "contact" element = {<ContactPage/>} /> 
        <Route path = "location" element = {<LocationPage/>} />
        <Route path = "order" element = {<OrderPage/>} />
>>>>>>> 30982f7f2e9ac9046428e7249beec6efb7ef8822
      </Routes>
    
    </div>
  )
}
export default App;
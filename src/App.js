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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path = "product" element = {<ProductPage/>} />    
        <Route path = "contact" element = {<ContactPage/>} /> 
      </Routes>
    
    </div>
  )
}
export default App;
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import HomePage from './HomePage';
import ProductPage from './product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path = "product" element = {<ProductPage/>} />      
      </Routes>
    
    </div>
  )
}
export default App;
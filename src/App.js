import React from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './product';
import ProductViewPage from './product-view';
import ProductEditPage from './product-edit';
import ContactPage from './contact';
import ContactViewPage from './contact-view';
import ContactEditPage from './contact-edit';
import ComponentPage from './component';
import ComponentViewPage from './component-view';
import ComponentEditPage from './component-edit';
import LocationPage from './location';
import LocationViewPage from './location-view';
import LocationEditPage from './location-edit'
import OrderPage from './order';
import OrderViewPage from './order-view';
import OrderEditPage from './order-edit';
import CompanyPage from './company';
import CompanyViewPage from './company-view';
import CompanyEditPage from './company-edit';
import ItemCheckInPage from './itemCheckIn';
import ItemCheckInViewPage from './itemCheckIn-view';
import ItemCheckInEditPage from './itemCheckIn-edit';
import ShippingPage from './Shipping';
import ShippingViewPage from './shipping-view';
import ShippingEditPage from './shipping-edit';
import { useState, useEffect } from 'react';
import Search from './search';
import SearchCompany from './searchCompany';
import SearchContact from './searchContact';
import SearchShipping from './searchShipping';
import SearchComponent from './searchComponent';
import SearchLocation from './searchLocation';
import SearchOrder from './searchOrder';
import SearchProduct from './searchProduct';
import SearchItemCheckIn from './searchItemCheckIn';
import ViewOnlyHome from './ViewOnlyHome';
import Invoice from './invoice';
import PackingSlipEdit from './packingSlipEdit';
import PackingSlip from './packingSlip';
import QCInspection from './QC-Inspection';
import JobOrder from './jobOrder';
import OutputForms from './outputForms';
import ScrollToTop from "./scrollToTop";
import Login from './LoginForm';
import Signup from './signupForm';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';


function App() {

const [isViewOnly, setIsViewOnly] = useState('');
const [password, setPassword] = useState('')
const navigate = useNavigate();
const routeChange = () => {
  let path = '/';
  navigate(path);
};

useEffect(() => {
  let authToken = sessionStorage.getItem('Auth Token')

  if (authToken) {
    routeChange('/')
  }
}, [])

  const handleLogin = (viewOnly) => {
    onAuthStateChanged(auth, (user) => {
      if (user){
    const uid = user.uid;
    setIsViewOnly(viewOnly);
      }
      else{
        console.log("no user")
      }
      });
    };
  

  const handleLogout = () => {
    navigate('/');
  sessionStorage.removeItem('Auth Token');
        navigate('/login')
  };

 return (
    <div className="App">
      {!isViewOnly ? (
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage handleLogout={handleLogout} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/OutputForms" element={<OutputForms />} />
          <Route path="/invoice" element={<Invoice handleLogout={handleLogout}/>} />
          <Route path="/packingSlipEdit" element={<PackingSlipEdit />} />
          <Route path="/packingSlip/:packing_slip_master_id" element={<PackingSlip handleLogout={handleLogout}/>} />
          <Route path="/QC-Inspection" element={<QCInspection />} />
          <Route path="/jobOrder" element={<JobOrder />} />
          <Route path="/product" element={<ProductPage handleLogout={handleLogout}/>} />
          <Route path="/product/:product_id" element={<ProductViewPage handleLogout={handleLogout}/>} />
          <Route path="/productEdit/:product_id" element={<ProductEditPage handleLogout={handleLogout}/>} />
          <Route path="/contact" element={<ContactPage handleLogout={handleLogout}/>} />
          <Route path="/contact/:contact_id" element={<ContactViewPage handleLogout={handleLogout}/>} />
          <Route path="/contactEdit/:contact_id" element={<ContactEditPage handleLogout={handleLogout}/>} />
          <Route path="/shippingEdit/:shipping_id" element={<ShippingEditPage handleLogout={handleLogout}/>} />
          <Route path="/component" element={<ComponentPage handleLogout={handleLogout}/>} />
          <Route path="/component/:component_id" element={<ComponentViewPage handleLogout={handleLogout}/>} />
          <Route path="/componentEdit/:component_id" element={<ComponentEditPage handleLogout={handleLogout} />} />
          <Route path="/location" element={<LocationPage handleLogout={handleLogout}/>} />
          <Route path="/location/:id" element={<LocationViewPage handleLogout={handleLogout}/>} />
          <Route path="/locationEdit/:id" element={<LocationEditPage handleLogout={handleLogout}/>} />
          <Route path="/order" element={<OrderPage handleLogout={handleLogout}/>} />
          <Route path="/order/:order_id" element={<OrderViewPage handleLogout={handleLogout}/>} />
          <Route path="/orderEdit/:order_id" element={<OrderEditPage handleLogout={handleLogout} />} />
          <Route path="/company" element={<CompanyPage handleLogout={handleLogout}/>} />
          <Route path="/company/:company_id" element={<CompanyViewPage handleLogout={handleLogout}/>} />
          <Route path="/companyEdit/:company_id" element={<CompanyEditPage handleLogout={handleLogout}/>} />
          <Route path="/itemCheckIn" element={<ItemCheckInPage handleLogout={handleLogout}/>} />
          <Route path="/itemCheckIn/:id" element={<ItemCheckInViewPage handleLogout={handleLogout}/>} />
          <Route path="/itemCheckInEdit/:id" element={<ItemCheckInEditPage handleLogout={handleLogout}/>} />
          <Route path="/shipping" element={<ShippingPage handleLogout={handleLogout}/>} />
          <Route path="/shipping/:shipping_id" element={<ShippingViewPage handleLogout={handleLogout}/>} />
          <Route path="/search" element={<Search handleLogout={handleLogout}/>} />
          <Route path="/search/searchcompany" element={<SearchCompany handleLogout={handleLogout}/>} />
          <Route path="/search/searchContact" element={<SearchContact handleLogout={handleLogout}/>} />
          <Route path="/search/searchShipping" element={<SearchShipping handleLogout={handleLogout}/>} />
          <Route path="/search/searchComponent" element={<SearchComponent handleLogout={handleLogout}/>} />
          <Route path="/search/searchLocation" element={<SearchLocation handleLogout={handleLogout}/>} />
          <Route path="/search/searchOrder" element={<SearchOrder handleLogout={handleLogout}/>} />
          <Route path="/search/searchProduct" element={<SearchProduct handleLogout={handleLogout}/>} />
          <Route path="/search/searchItemCheckIn" element={<SearchItemCheckIn handleLogout={handleLogout}/>} />
      </Routes>
      </>
      ) : (
        <Routes>
          <Route path="/" element={<ViewOnlyHome handleLogout={handleLogout} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/search" element={<Search handleLogout={handleLogout}/>} />
          <Route path="/search/searchCompany" element={<SearchCompany handleLogout={handleLogout}/>} />
          <Route path="/search/searchContact" element={<SearchContact handleLogout={handleLogout}/>} />
          <Route path="/search/searchShipping" element={<SearchShipping handleLogout={handleLogout}/>} />
          <Route path="/search/searchComponent" element={<SearchComponent handleLogout={handleLogout}/>} />
          <Route path="/search/searchLocation" element={<SearchLocation handleLogout={handleLogout}/>} />
          <Route path="/search/searchOrder" element={<SearchOrder handleLogout={handleLogout}/>} />
          <Route path="/search/searchProduct" element={<SearchProduct handleLogout={handleLogout}/>} />
          <Route path="/search/searchItemCheckIn" element={<SearchItemCheckIn handleLogout={handleLogout}/>} />
        </Routes>
      )}
     
    </div>
  );
 
      }

export default App;

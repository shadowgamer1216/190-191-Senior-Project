import React from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './product';
import ProductViewPage from './product-view';
import ContactPage from './contact';
import ContactViewPage from './contact-view';
import ComponentPage from './component';
import ComponentViewPage from './component-view';
import LocationPage from './location';
import LocationViewPage from './location-view';
import OrderPage from './order';
import OrderViewPage from './order-view';
import CompanyPage from './company';
import CompanyViewPage from './company-view';
import ItemCheckInPage from './itemCheckIn';
import ItemCheckInViewPage from './itemCheckIn-view';
import Shipping from './Shipping';
import ShippingViewPage from './shipping-view';
import { useState, useEffect } from 'react';
import Search from './search';
import SearchCompany from './searchcompany';
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
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/packingSlipEdit" element={<PackingSlipEdit />} />
          <Route path="/packingSlip/:packing_slip_master_id" element={<PackingSlip handleLogout={handleLogout}/>} />
          <Route path="/QC-Inspection" element={<QCInspection />} />
          <Route path="/jobOrder" element={<JobOrder />} />
          <Route path="/product" element={<ProductPage handleLogout={handleLogout}/>} />
          <Route path="/product/:product_id" element={<ProductViewPage handleLogout={handleLogout}/>} />
          <Route path="/contact" element={<ContactPage handleLogout={handleLogout}/>} />
          <Route path="/contact/:contact_id" element={<ContactViewPage handleLogout={handleLogout}/>} />
          <Route path="/component" element={<ComponentPage handleLogout={handleLogout}/>} />
          <Route path="/component/:component_id" element={<ComponentViewPage handleLogout={handleLogout}/>} />
          <Route path="/location" element={<LocationPage handleLogout={handleLogout}/>} />
          <Route path="/location/:id" element={<LocationViewPage handleLogout={handleLogout}/>} />
          <Route path="/order" element={<OrderPage handleLogout={handleLogout}/>} />
          <Route path="/order/:order_id" element={<OrderViewPage handleLogout={handleLogout}/>} />
          <Route path="/company" element={<CompanyPage handleLogout={handleLogout}/>} />
          <Route path="/company/:company_id" element={<CompanyViewPage handleLogout={handleLogout}/>} />
          <Route path="/itemCheckIn" element={<ItemCheckInPage handleLogout={handleLogout}/>} />
          <Route path="/itemCheckIn/:id" element={<ItemCheckInViewPage handleLogout={handleLogout}/>} />
          <Route path="/shipping" element={<Shipping handleLogout={handleLogout}/>} />
          <Route path="/shipping/:shipping_id" element={<Shipping handleLogout={handleLogout}/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/searchcompany" element={<Searchcompany />} />
          <Route path="/search/searchContact" element={<SearchContact />} />
          <Route path="/search/searchShipping" element={<SearchShipping />} />
          <Route path="/search/searchComponent" element={<SearchComponent />} />
          <Route path="/search/searchLocation" element={<SearchLocation />} />
          <Route path="/search/searchOrder" element={<SearchOrder />} />
          <Route path="/search/searchProduct" element={<SearchProduct />} />
          <Route path="/search/searchItemCheckIn" element={<SearchItemCheckIn />} />
      </Routes>
      </>
      ) : (
        <Routes>
          <Route path="/" element={<ViewOnlyHome handleLogout={handleLogout} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/searchCompany" element={<SearchCompany />} />
          <Route path="/search/searchContact" element={<SearchContact />} />
          <Route path="/search/searchShipping" element={<SearchShipping />} />
          <Route path="/search/searchComponent" element={<SearchComponent />} />
          <Route path="/search/searchLocation" element={<SearchLocation />} />
          <Route path="/search/searchOrder" element={<SearchOrder />} />
          <Route path="/search/searchProduct" element={<SearchProduct />} />
          <Route path="/search/searchItemCheckIn" element={<SearchItemCheckIn />} />
        </Routes>
      )}
     
    </div>
  );
 
      }

export default App;
 /*return (
    <div className="App">
      {isLoggedIn && !isViewOnly ? (
        <Routes>

                    <Route path="/invoice" element={<Invoice />} />
          <Route path="/" element={<HomePage handleLogout={handleLogout} />} />
          <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
          <Route path="/product" element={<ProductPage handleLogout={handleLogout}/>} />
          <Route path="/contact" element={<ContactPage handleLogout={handleLogout}/>} />
          <Route path="/component" element={<ComponentPage handleLogout={handleLogout}/>} />
          <Route path="/location" element={<LocationPage handleLogout={handleLogout}/>} />
          <Route path="/order" element={<OrderPage handleLogout={handleLogout}/>} />
          <Route path="/company" element={<CompanyPage handleLogout={handleLogout}/>} />
          <Route path="/itemCheckIn" element={<ItemCheckInPage handleLogout={handleLogout}/>} />
          <Route path="/shipping" element={<Shipping handleLogout={handleLogout}/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/searchcompany" element={<SearchCompany />} />
          <Route path="/search/searchContact" element={<SearchContact />} />
        </Routes>
      ) : isLoggedIn && isViewOnly ? (
        <Routes>
          <Route path="/" element={<ViewOnlyHome handleLogout={handleLogout} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/searchcompany" element={<SearchCompany />} />
          <Route path="/search/searchContact" element={<SearchContact />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LoginForm handleLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/homepage" element={<HomePage handleLogout={handleLogout} />} />


        </Routes>
      )}
    </div>
  );

}*/

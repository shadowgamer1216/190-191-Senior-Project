import React from 'react';
import { Routes, Route, useNavigate as navigate } from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './product';
import ProductViewPage from './product-view';
import ContactPage from './contact';
import ContactViewPage from './contact-view';
import ComponentPage from './component';
import ComponentViewPage from './component-view';
import LocationPage from './location';
import LocationViewPage from './location-view'
import OrderPage from './order';
import CompanyPage from './company';
import CompanyViewPage from './company-view';
import ItemCheckInPage from './itemCheckIn';
import ItemCheckInViewPage from './itemCheckIn-view';
import Shipping from './Shipping';
import { useState } from 'react';
import Search from './search';
import SearchCompany from './searchcompany';
import SearchContact from './searchContact';
import ViewOnlyHome from './ViewOnlyHome';
import Invoice from './invoice';
import PackingSlip from './packingSlip';
import QCInspection from './QC-Inspection';
import JobOrder from './jobOrder';
import ScrollToTop from "./scrollToTop";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isViewOnly, setIsViewOnly] = useState(false);

  const handleLogin = (viewOnly) => {
    setIsLoggedIn(true);
    setIsViewOnly(viewOnly);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  
  };

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage handleLogout={handleLogout} />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/packingSlip" element={<PackingSlip />} />
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
        <Route path="/company" element={<CompanyPage handleLogout={handleLogout}/>} />
        <Route path="/company/:company_id" element={<CompanyViewPage handleLogout={handleLogout}/>} />
        <Route path="/itemCheckIn" element={<ItemCheckInPage handleLogout={handleLogout}/>} />
        <Route path="/itemCheckIn/:id" element={<ItemCheckInViewPage handleLogout={handleLogout}/>} />
        <Route path="/shipping" element={<Shipping handleLogout={handleLogout}/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/searchcompany" element={<SearchCompany />} />
        <Route path="/search/searchContact" element={<SearchContact />} />
      </Routes>
     
    </div>
  );

  /*return (
    <div className="App">
      {isLoggedIn && !isViewOnly ? (
        <Routes>

          <Route path="/invoice" element={<Invoice />} />
          <Route path="/" element={<HomePage handleLogout={handleLogout} />} />
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
        </Routes>
      )}
    </div>
  );

}*/
}

export default App;

import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";

const Shipping = ({ handleLogout }) => {
  const navigate = useNavigate()

  const { shipping_id } = useParams();
  const [shippingData, setshippingData] = useState(null);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/Shipping/${shipping_id}`)
      .then(response => {
        setshippingData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [shipping_id]);

  var order_id = shippingData?.order_id ?? '';
  var company_id = shippingData?.company_id ?? '';


  var company_name = shippingData?.company_name ?? '';
  var contact_name = shippingData?.contact_name ?? '';
  var add1 = shippingData?.add1 ?? '';
  var add2 = shippingData?.add2 ?? '';
  var city = shippingData?.city ?? '';
  var state = shippingData?.state ?? '';
  var zip = shippingData?.zip ?? '';
  var province = shippingData?.province ?? '';
  var country = shippingData?.country ?? '';
  var phone = shippingData?.phone ?? '';
  var fax = shippingData?.fax ?? '';
  var email = shippingData?.email ?? '';
  var fedex = shippingData?.fedex ?? '';
  var ups = shippingData?.ups ?? '';
  var courier_willcall = shippingData?.courier_willcall ?? '';
  var abs = shippingData?.abs ?? '';
  var other_ship_method = shippingData?.other_ship_method ?? '';
  var payment_type = shippingData?.payment_type ?? '';
  var account_number = shippingData?.account_number ?? '';
  var request_ship_date = shippingData?.request_ship_date ?? '';
  request_ship_date = request_ship_date.slice(0, 10);
  var request_ship_time = shippingData?.request_ship_time ?? '';
  var arrival_ship_date = shippingData?.arrival_ship_date ?? '';
  arrival_ship_date = arrival_ship_date.slice(0, 10);
  var arrival_ship_time = shippingData?.arrival_ship_time ?? '';
  var saturday = shippingData?.saturday ?? '';
  var fob = shippingData?.fob ?? '';
  var notes = shippingData?.notes ?? '';
  var productType = shippingData?.productType ?? '';
  var priceTotal = shippingData?.priceTotal ?? '';
  var customQuantity = shippingData?.customQuantity ?? '';

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="product-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-maroon">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <label className="navbar-brand">ABSOLUTE MEDIA, INC.</label>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
          </div>
        </div>
        <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
      </nav>

      <div className="container p-5">
        <div className="page-headers">
          <h2>[VIEW] SHIPPING</h2>
        </div>

        <form id="shipping_form" autoComplete="off">

          <div className="customer-info pt-3">
            <div className="section-headers">
              <h5>Customer Shipping Information</h5>
            </div>

            <div className="form-row">
              <label htmlFor="date" className="col-md-4 col-form-label"><h5><strong>Date: {currentDate.toLocaleDateString()}</strong></h5></label>
            </div>

            <div className="form-row">
              <label htmlFor="shipping_id" className="col-3 col-form-label">Shipping ID</label>
              <div className="input-group input-group-sm mb-3 col-md-2">
                <input tabIndex="-1" readOnly type="text" className="form-control" id="shipping_id" value={shipping_id} />
              </div>
            </div>


            <div className="form-row">
              <label htmlFor="customer-id" className="col-md-3 col-form-label">Choose Order </label>
              <div className="input-group input-group mb-3 col-md-3">
                <div className="form-control p-0">
                  <input type="text" readOnly className="form-control" id="customer-id" value={order_id} />
                </div>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="company_id" className="col-md-3 col-form-label">Company ID</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input readOnly className="form-control" id="company_id" value={company_id} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="company-name" className="col-md-3 col-form-label">Company Name</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input readOnly className="form-control" id="company-name" value={company_name} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="contact-name" className="col-md-3 col-form-label">Contact Name</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input readOnly className="form-control" id="contact-name" value={contact_name} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="add1" className="col-md-3 col-form-label">Address 1</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control" id="add1" value={add1} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="add2" className="col-md-3 col-form-label">Address 2</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control" value={add2} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="csz" className="col-md-3 col-form-label">City | State | Zip </label>
              <div className="input-group input-group-sm mb-3 col-md-4">
                <input className="form-control" id="city" value={city} readOnly />
              </div>

              <div className="input-group input-group-sm mb-3 col-md-2">
                <input className="form-control" id="state" value={state} readOnly />
              </div>

              <div className="input-group input-group-sm mb-3 col-md-2">
                <input type="text" value={zip} className="form-control"
                  id="zip" readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="province" className="col-md-3 col-form-label">Province</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control"
                  id="province" value={province} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="country" className="col-md-3 col-form-label">Country
              </label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control" nid="country" value={country} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="phone" className="col-md-3 col-form-label">Phone
              </label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control" id="phone" value={phone} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="fax" className="col-md-3 col-form-label">Fax</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control"
                  id="fax" value={fax} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="email" className="col-md-3 col-form-label">Email
              </label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control"
                  id="email" value={email} readOnly />
              </div>
            </div>

          </div>

          <div className="shipment-info pt-3">
            <div className="section-headers">
              <h5>Shipment Information</h5>
            </div>

            <div className="form-row">
              <label htmlFor="fedex" className="col-md-3 col-form-label">Fed Ex</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input className="form-control" id="fedex" value={fedex} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="ups" className="col-md-3 col-form-label">UPS</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input className="form-control" name="ups" id="ups" value={ups} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="c-w" className="col-md-3 col-form-label">Courier/Will Call</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input className="form-control" name="courier_willcall" id="c-w" value={courier_willcall} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="abs" className="col-md-3 col-form-label">ABS Van</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input className="form-control" name="abs" id="abs" value={abs} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="other-ship" className="col-md-3 col-form-label">Other Ship Method</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control" name="other_ship_method" value={other_ship_method} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="pay-type" className="col-md-3 col-form-label">Payment Type

              </label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input className="form-control" id="payment-type" value={payment_type} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="account_number" className="col-md-3 col-form-label">Account Number
              </label>
              <div className="input-group input-group-sm mb-3 col-md-8" required>
                <input readOnly value={account_number} className="form-control"
                  id="account_number" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="ship-date" className="col-md-3 col-form-label">Requested Ship Date/Time

              </label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input type="date" className="form-control"
                  id="request_ship_date" value={request_ship_date} readOnly />
              </div>

              <div className="input-group input-group-sm mb-3 col-md-3">
                <input className="form-control" name="request_ship_time" id="ship-time" value={request_ship_time} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="arr-date" className="col-md-3 col-form-label">Requested Arrival Date/Time

              </label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input type="date" className="form-control" value={arrival_ship_date}
                  id="arrival_ship_date" readOnly />
              </div>

              <div className="input-group input-group-sm mb-3 col-md-3">
                <input className="form-control" name="arrival_ship_time" id="arrival-time" value={arrival_ship_time} readOnly />
              </div>

              <div className="input-group input-group-sm col-md-3 pl-3">
                <div className="form-group custom-control custom-checkbox">
                  <input readOnly checked={saturday} type="checkbox" className="custom-control-input" id="saturday" />
                  <label htmlFor="saturday" className="custom-control-label">Saturday?</label>
                </div>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="fob" className="col-md-3 col-form-label">FOB</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input className="form-control" name="fob" id="fob" value={fob} readOnly />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="notes" className="col-md-3 col-form-label">Notes</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" value={notes} readOnly />
              </div>
            </div>
          </div>

          <div className="list-address pt-3">
            <div className="section-headers">
              <h5>Order Details</h5>
            </div>
          </div>

          <div className="order-detail">
            <div className="form-row">

              <div className="input-group input-group-sm mb-3 col-md-3">

                <div className="col">
                  <label htmlFor="item">Item</label>
                  <input type="text" className="form-control" id="item" value={productType} readOnly></input>
                </div>
              </div>

              <div className="input-group input-group-sm mb-3 col-md-3">
                <div className="col">
                  <label htmlFor="total_order">Total of Order</label>
                  <input type="text" className="form-control" id="total_order" value={priceTotal} readOnly></input>
                </div>
              </div>

              <div className="input-group input-group-sm mb-3 col-md-3">
                <div className="col">
                  <label htmlFor="custom_quantity">Already Ordered</label>
                  <input readOnly className="form-control" id="custom_quantity" value={customQuantity} />
                </div>
              </div>

              <div className="input-group input-group-sm mb-3 col-md-3">
                <div className="col">
                  <label htmlFor="ship_to_address">Ship to This Address</label>
                  <input className="form-control" id="add1" value={add1} readOnly />
                </div>
              </div>

            </div>
          </div>

        </form>
        <br></br>
        <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Home</button>
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <label>Absolute Media, Inc.</label>
            </div>
            <div className="col-sm">
              <label>3350 Victor Ct. Santa Clara, CA 95054</label>
            </div>
            <div className="col-sm">
              <label>(408) 970-3283</label>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}; export default Shipping;




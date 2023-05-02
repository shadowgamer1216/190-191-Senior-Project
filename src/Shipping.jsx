import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";

const Shipping = ({ handleLogout }) => {
  const routeChange = () => {
    let path = '/login';
    navigate(path);
};
useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (!authToken) {
        routeChange()
    }
}, [])
  const navigate = useNavigate();

  const[company_name, setCompany_name] = useState(null);
  const[contact_name, setContact_name] = useState(null);
  const[add1, setAdd1] = useState(null);
  const[add2, setAdd2] = useState(null);
  const[city, setCity] = useState(null);
  const[state, setState] = useState(null);
  const[zip, setZip] = useState(null);
  const[province, setProvince] = useState(null);
  const[country, setCountry] = useState(null);
  const[phone, setPhone] = useState(null);
  const[fax, setFax] = useState(null);
  const[email, setEmail] = useState(null);
  const[fedex, setFedex] = useState(null);
  const[ups, setUps] = useState(null);
  const[courier_willcall, setCourier_willcall] = useState(null);
  const[abs, setAbs] = useState(null);
  const[other_ship_method, setOther_ship_method] = useState(null);
  const[payment_type, setPayment_type] = useState(null);
  const[account_number, setAccount_number] = useState(null);
  const[request_ship_date, setRequested_ship_date] = useState(null);
  const[request_ship_time, setRequested_ship_time] = useState(null);
  const[arrival_ship_date, setArrival_ship_date] = useState(null);
  const[arrival_ship_time, setArrival_ship_time] = useState(null);
  const[fob, setFob] = useState(null);
  const[notes, setNotes] = useState(null);

  const submit = () => {
    Axios.post("http://localhost:3001/api/insertShipping",
    {
      company_name: company_name,
      contact_name: contact_name,
      add1: add1,
      add2: add2,
      city: city,
      state: state,
      zip: zip,
      province: province,
      country: country,
      phone: phone,
      fax: fax,
      email: email,
      fedex: fedex,
      ups: ups,
      courier_willcall: courier_willcall,
      abs: abs,
      other_ship_method: other_ship_method,
      payment_type: payment_type,
      account_number: account_number,
      request_ship_date: request_ship_date,
      request_ship_time: request_ship_time,
      arrival_ship_date: arrival_ship_date,
      arrival_ship_time: arrival_ship_time,
      fob: fob,
      notes: notes
    }).then((result) => {
      console.log(result.data);
    }).catch(err => {
      console.log(err);
    })
  }

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
          <h2>ADD SHIPPING</h2>
        </div>
 
        <script defer ="shippingvalid.js"></script>
        <div id="error"></div>

        <form id="shipping_form" autoComplete="off">
          <div className ="list-address pt-3">
            <div className="section-headers">
                <h5>List of Shipping Addresses For</h5>
            </div>
            <div className="table-responsive-md">
              <table className="table">
                <thead className= "thead-light">
                  <tr>
                    <th scope="col">Edit</th>
                    <th scope="col">Company</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Ship Date</th>
                    <th scope="col">Arrival Date</th>
                    <th scope="col">Ship Via</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>No Records</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className ="customer-info pt-3">
            <div className="section-headers">
              <h5>Customer Shipping Information</h5>
            </div>
            
            <div className="form-row">
              <label htmlFor="order-id" 
                className="col-md-6 col-form-label"><b>Order ID:</b></label>
              <label htmlFor="date" 
                className="col-md-6 col-form-label"><b>Date:</b></label>
            </div>

            <br></br>
            <div className ="form-row">
              <label htmlFor="companyName" className="col-md-3 col-form-label">Company Name
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setCompany_name(e.target.value)} className="form-control" 
                  id="company_name" required></input>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="con-name" className="col-md-3 col-form-label">Contact Name
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setContact_name(e.target.value)}className="form-control"
                  name="contact_name" required/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="add1" className="col-md-3 col-form-label">Address 1
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setAdd1(e.target.value)} className="form-control"
                  name="add1" required/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="add2" className="col-md-3 col-form-label">Address 2</label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setAdd2(e.target.value)} className="form-control"
                  name="add2" required/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="csz" className="col-md-3 col-form-label">City | State | Zip 
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-4">
                <input onChange={(e) => setCity(e.target.value)} className="form-control"
                  name="city" required/>
              </div>
              
              <div className="input-group inout-group-sm mb-3 col-md-2">
                <select onChange={(e) => setState(e.target.value)} className="form-control" name="country_state" required>
                  <option value="">Select a State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>

              <div className ="input-group input-group-sm mb-3 col-md-2">
                <input type="text" inputMode="numeric" onChange={(e) => setZip(e.target.value)} className="form-control"
                  name="zip" required/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="province" className="col-md-3 col-form-label">Province</label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setProvince(e.target.value)} className="form-control"
                  name="province"/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="country" className="col-md-3 col-form-label">Country
              <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setCountry(e.target.value)} className="form-control"
                  name="country" required/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="phone" className="col-md-3 col-form-label">Phone
                <span style={{ color: 'red' }}> *</span> 
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setPhone(e.target.value)} className="form-control"
                name="phone" required/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="fax" className="col-md-3 col-form-label">Fax</label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setFax(e.target.value)} className="form-control"
                  name="fax"/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="email" className="col-md-3 col-form-label">Email
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setEmail(e.target.value)} className="form-control"
                  name="email" required/>
              </div>
            </div>

          </div>

          <div className ="shipment-info pt-3">
            <div className="section-headers">
              <h5>Shipment Information</h5>
            </div>
            
            <div className ="form-row">
              <label htmlFor="fedex" className="col-md-3 col-form-label">Fed Ex</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setFedex(e.target.value)} className="form-control" name="fedex" id="fedex">
                  <option value="none">None</option>
                  <option value="air-freight">Air Freight</option>
                  <option value="custom-critical-freight">Cusom Critical Freight</option>
                  <option value="express-2day">Express 2 Day</option>
                  <option value="express-2dayam">Express 2 day AM</option>
                  <option value="express-saver">Express Saver</option>
                  <option value="first-overnight">First Overnight</option>
                  <option value="ground">Ground</option>
                  <option value="home">Home</option>
                  <option value="international-first">International First</option>
                  <option value="international-economy">International Economy</option>
                  <option value="international-priority">International Priority</option>
                  <option value="priority-overnight">Priority Overnight</option>
                  <option value="standard-overnight">Standard Overnight</option>
                  <option value="truck-freight-economy">Truck Freight Economy</option>
                  <option value="truck-freight-priority">Truck Freight Economy</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="ups" className="col-md-3 col-form-label">UPS</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setUps(e.target.value)} className="form-control" name="ups" id="ups">
                  <option value="none">None</option>
                  <option value="2day-air">2 Day Air</option>
                  <option value="2day-airam">2 Day Air AM</option>
                  <option value="3day-select">3 Day Select</option>
                  <option value="ground">Ground</option>
                  <option value="nextday-air">Next Day Air</option>
                  <option value="nextday-air-early">Next Day Air Early</option>
                  <option value="nextday-air-saver">Next Day Air Saver</option>
                  <option value="overnight-priority">Overnight Priority</option>
                  <option value="worldwide-expedited"> Worldwide Expedited</option>
                  <option value="worldwide-saver">Worldwide Saver</option>
                  <option value="worldwide-Express-plus">Worldwide Express Plus</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="c-w" className="col-md-3 col-form-label">Courier/Will Call</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setCourier_willcall(e.target.value)} className="form-control" name="courier_willcall" id="c-w">
                  <option value="none">None</option>
                  <option value="courier">Courier</option>
                  <option value="willcall">Will Call</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="abs" className="col-md-3 col-form-label">ABS Van</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setAbs(e.target.value)} className="form-control" name="abs" id="abs">
                  <option value="none">None</option>
                  <option value="abs-van">ABS Van</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="other-ship" className="col-md-3 col-form-label">Other Ship Method</label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setOther_ship_method(e.target.value)} className="form-control"
                  name="other_ship_method"/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="pay-type" className="col-md-3 col-form-label">Payment Type
                <span style={{ color: 'red' }}>*</span>
              </label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setPayment_type(e.target.value)} className="form-control" name="payment_type" id="pay-type" placeholder="If 'None, Please enter N/A." required>
                  <option value="">Select Option</option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="acc-num" className="col-md-3 col-form-label">Account Number
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-8" required>
                <input onChange={(e) => setAccount_number(e.target.value)} className="form-control"
                  name="account_number" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="ship-date" className="col-md-3 col-form-label">Requested Ship Date/Time
              <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-3">
                <input type="datetime-local" className="form-control" onChange={(e) => setRequested_ship_date(e.target.value)}
                  name="request_ship_date" required/>
              </div>

              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setRequested_ship_time(e.target.value)} className="form-control" name="request_ship_time" id="ship-time" required>
                  <option value="">Select Time</option>
                  <option value="9am">9:00am</option>
                  <option value="10am">10:00am</option>
                  <option value="11am">11:00am</option>
                  <option value="12pm">12:00pm</option>
                  <option value="1pm">1:00pm</option>
                  <option value="2pm">3:00pm</option>
                  <option value="3pm">3:00m</option>
                  <option value="4pm">4:00pm</option>
                  <option value="5pm">5:00pm</option>
                  <option value="6pm">6:00pm</option>
                  <option value="7pm">7:00pm</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="arr-date" className="col-md-3 col-form-label">Requested Arrival Date/Time
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-3">
                <input type="datetime-local" className="form-control" onChange={(e) => setArrival_ship_date(e.target.value)}
                  name="arrival_ship_date" required/>
              </div>

              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setArrival_ship_time(e.target.value)}className="form-control" name="arrival_ship_time" id="arrival-time" required>
                  <option value="">Select Time</option>
                  <option value="9am">9:00am</option>
                  <option value="10am">10:00am</option>
                  <option value="11am">11:00am</option>
                  <option value="12pm">12:00pm</option>
                  <option value="1pm">1:00pm</option>
                  <option value="2pm">3:00pm</option>
                  <option value="3pm">3:00m</option>
                  <option value="4pm">4:00pm</option>
                  <option value="5pm">5:00pm</option>
                  <option value="6pm">6:00pm</option>
                  <option value="7pm">7:00pm</option>
                </select>
              </div>

              <div className="input-group input-group-sm col-md-3 pl-3">
                <div className="form-group custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" name="saturday_deliv" />
                  <label htmlFor="saturday" className="custom-control-label">Saturday?</label>
                </div>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="fob" className="col-md-3 col-form-label">FOB</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setFob(e.target.value)}className="form-control" name="fob" id="fob">
                  <option value="">Select Option</option>
                  <option value="point of shipment">Point of Shipment</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="notes" className="col-md-3 col-form-label">Notes</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <textarea onChange={(e) => setNotes(e.target.value)} rows="4" cols="50" className="form-control" name="notes" id="custom-area" />
              </div>
            </div>
          </div>

          <div className ="list-address pt-3">
            <div className="section-headers">
                <h5>Order Details</h5>
            </div>
          </div>

          <div className="order-detail">
            <div className="form-row">
              <div className="input-group input-group-sm mb-3 col-md-3">
                <div className="col">
                  <label htmlFor="item">Item</label>
                  <input type="text" className="form-control" id="search-dir" readOnly></input>
                </div>
              </div>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <div className="col">
                  <label htmlFor="total-order">Total of Order</label>
                  <input type="text" className="form-control" id="search-dir" readOnly></input>
                </div>
              </div>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <div className="col">
                  <label htmlFor="already-ordered">Already Ordered</label>
                  <input type="text" className="form-control" id="search-dir" readOnly></input>
                </div>
              </div>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <div className="col">
                  <label htmlFor="ship-to-address">Ship to This Address</label>
                  <input type="text" className="form-control" id="search-dir" readOnly></input>
                </div>
              </div>
            </div>
          </div>

          <div className="add">
            <button onClick = {submit} type="submit" id="add-company" className="btn btn-success m-2">Add</button>
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
  )
}
export default Shipping;

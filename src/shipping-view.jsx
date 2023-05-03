import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";

const Shipping = ({ handLogout }) => {
    const navigate = useNavigate()

    const { id } = useParams();
    const [locationData, setLocationData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/shipping/${shipping_id}`)
        .then(response => {
            setLocationData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [shipping_id]);


    return(
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

        <form id="shipping_form" onSubmit={handleSubmit} autoComplete="off">
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
                className="col-md-8 col-form-label"><h4>Order ID: <span style={{ color: 'red' }}>{order_id}</span></h4></label>
              <label htmlFor="date" 
                className="col-md-4 col-form-label"><h5>Date:</h5></label>
            </div>

            <div className="form-row">
              <label htmlFor="customer-id" className="col-md-3 col-form-label">Choose Order <span style={{ color: 'red' }}>*</span></label>
              <div className="input-group input-group mb-3 col-md-3">
                <div className="form-control p-0">
                  <Select onChange={(e) => setOrderId(e.value)} className="react-select" styles={customStyle} value={orderOptions.filter(function(option) {
                    return option.value === order_id;
                  })} id="customer-id" required options={orderOptions}/>
                </div>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="company-id" className="col-md-3 col-form-label">Company ID</label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input readOnly className="form-control" id="company-id" value={company_id}/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="company-name" className="col-md-3 col-form-label">Company Name</label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input readOnly className="form-control" id="company-name" value={company_name}/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="contact-name" className="col-md-3 col-form-label">Contact Name<span style={{ color: 'red' }}> *</span></label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setContactName(e.target.value)} className="form-control" name="contact-name" readOnly/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="add1" className="col-md-3 col-form-label">Address 1 <span style={{ color: 'red' }}>*</span></label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setAdd1(e.target.value)} className="form-control" name="add1" readOnly/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="add2" className="col-md-3 col-form-label">Address 2</label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setAdd2(e.target.value)} className="form-control" name="add2" readOnly/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="csz" className="col-md-3 col-form-label">City | State | Zip <span style={{ color: 'red' }}> *</span></label>
              <div className ="input-group input-group-sm mb-3 col-md-4">
                <input onChange={(e) => setCity(e.target.value)} className="form-control" name="city" readOnly/>
              </div>
              
              <div className="input-group input-group-sm mb-3 col-md-2">
                <select onChange={(e) => setState(e.target.value)} className="form-control" name="country_state" readOnly>
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
                  name="zip" readOnly/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="province" className="col-md-3 col-form-label">Province</label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setProvince(e.target.value)} className="form-control"
                  name="province" readOnly/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="country" className="col-md-3 col-form-label">Country
              <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setCountry(e.target.value)} className="form-control"
                  name="country" readOnly/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="phone" className="col-md-3 col-form-label">Phone
                <span style={{ color: 'red' }}> *</span> 
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setPhone(e.target.value)} className="form-control"
                name="phone" readOnly/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="fax" className="col-md-3 col-form-label">Fax</label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setFax(e.target.value)} className="form-control"
                  name="fax" readOnly/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="email" className="col-md-3 col-form-label">Email
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setEmail(e.target.value)} className="form-control"
                  name="email" readOnly/>
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
                <select onChange={(e) => setFedex(e.target.value)} className="form-control" name="fedex" id="fedex" readOnly>
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
                <select onChange={(e) => setUps(e.target.value)} className="form-control" name="ups" id="ups" readOnly>
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
                <select onChange={(e) => setCourier_willcall(e.target.value)} className="form-control" name="courier_willcall" id="c-w" readOnly>
                  <option value="none">None</option>
                  <option value="courier">Courier</option>
                  <option value="willcall">Will Call</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="abs" className="col-md-3 col-form-label">ABS Van</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setAbs(e.target.value)} className="form-control" name="abs" id="abs" readOnly>
                  <option value="none">None</option>
                  <option value="abs-van">ABS Van</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="other-ship" className="col-md-3 col-form-label">Other Ship Method</label>
              <div className ="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setOther_ship_method(e.target.value)} className="form-control"
                  name="other_ship_method" readOnly/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="pay-type" className="col-md-3 col-form-label">Payment Type
                <span style={{ color: 'red' }}>*</span>
              </label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setPayment_type(e.target.value)} className="form-control" name="payment_type" id="pay-type" placeholder="If 'None, Please enter N/A." readOnly>
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
                  name="account_number" readOnly/>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="ship-date" className="col-md-3 col-form-label">Requested Ship Date/Time
              <span style={{ color: 'red' }}> *</span>
              </label>
              <div className ="input-group input-group-sm mb-3 col-md-3">
                <input type="datetime-local" className="form-control" onChange={(e) => setRequested_ship_date(e.target.value)}
                  name="request_ship_date" readOnly/>
              </div>

              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setRequested_ship_time(e.target.value)} className="form-control" name="request_ship_time" id="ship-time" readOnly>
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
                  name="arrival_ship_date" readOnly/>
              </div>

              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setArrival_ship_time(e.target.value)}className="form-control" name="arrival_ship_time" id="arrival-time" readOnly>
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
                  <input type="checkbox" className="custom-control-input" name="saturday_deliv" readOnly/>
                  <label htmlFor="saturday" className="custom-control-label">Saturday?</label>
                </div>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="fob" className="col-md-3 col-form-label">FOB</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setFob(e.target.value)}className="form-control" name="fob" id="fob" readOnly>
                  <option value="">Select Option</option>
                  <option value="point of shipment">Point of Shipment</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="notes" className="col-md-3 col-form-label">Notes</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <textarea onChange={(e) => setNotes(e.target.value)} rows="4" cols="50" className="form-control" name="notes" id="custom-area" readOnly/>
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
            {/*onClick={() => handleNavigate(nextShippingId)}*/}
            <button  disabled={!submitting} type="submit" id="add-company" className="btn btn-success m-2">Add</button>
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

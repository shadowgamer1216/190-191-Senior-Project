import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"

const Shipping = () => {
  const navigate = useNavigate();
  return (
    <div className="product-page"> 
      <nav className="navbar navbar-expand-lg navbar-dark bg-maroon">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <label className="navbar-brand">ABSOLUTE MEDIA, INC.</label>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link pl-4" to="/">Home</Link>
            <Link className="nav-link">Settings</Link>
          </div>
        </div>
        <button className="btn btn-outline-light">Sign In</button> 
      </nav>

      <div className="container p-5">
        <div className="page-headers">
          <h2>ADD SHIPPING</h2>
        </div>
 
        <form>
          <div className ="list-address pt-3">
            <div className="section-headers">
                <h5>List of Shipping Addresses For</h5>
            </div>

            <div className="form-row-address">
              <label htmlFor="edit-add" className="col-md-1 col-form-label"><u>Edit</u></label>
              <label htmlFor="cname-add" className="col-md-1 col-form-label"><u>Company</u></label>
              <label htmlFor="cont-add" className="col-md-1 col-form-label"><u>Contact</u></label>
              <label htmlFor="a1-add" className="col-md-1 col-form-label"><u>Address</u></label>
              <label htmlFor="city-add" className="col-md-1 col-form-label"><u>City</u></label>
              <label htmlFor="state-add" className="col-md-1 col-form-label"><u>State</u></label>
              <label htmlFor="shipdate-add" className="col-md-2 col-form-label"><u>Ship Date</u></label>
              <label htmlFor="shiparriv-add" className="col-md-2 col-form-label"><u>Arrival Date</u></label>
              <label htmlFor="shipvia-add" className="col-md-2 col-form-label"><u>Ship Via</u></label>
            </div>
            <div className="input-group input-group-sm mb-3 col-sm-12">
              <input type="text" readOnly className="form-control" 
                id="search-dir" placeholder="No Records"></input>
            </div>
          </div>

          <div className ="customer-info pt-3">
            <div className="section-headers">
              <h5>Customer Shipping Information</h5>
            </div>
            
            <div className="form-row">
              <label htmlFor="order-id" 
                className="col-sm-6 col-form-label"><b>Order Master ID:</b></label>
              <label htmlFor="date" 
                className="col-sm-6 col-form-label"><b>Date:</b></label>
            </div>

            <div className ="form-row">
              <label htmlFor="cname" className="col-sm-2 col-form-label">Company Name</label>
              <div className ="input-group input-group-sm mb-3 col-sm-10">
                <input type="text" readOnly className="form-control"
                  id="cname" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="con-name" className="col-sm-2 col-form-label">Contact Name</label>
              <div className ="input-group input-group-sm mb-3 col-sm-10">
                <input type="text" readOnly className="form-control"
                  id="con-name" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="add1" className="col-sm-2 col-form-label">Address 1</label>
              <div className ="input-group input-group-sm mb-3 col-sm-10">
                <input type="text" readOnly className="form-control"
                  id="add1" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="add2" className="col-sm-2 col-form-label">Address 2</label>
              <div className ="input-group input-group-sm mb-3 col-sm-10">
                <input type="text" readOnly className="form-control"
                  id="add2" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="csz" className="col-sm-2 col-form-label">City | State | Zip</label>
              
              <div className ="input-group input-group-sm mb-3 col-sm-6">
                <input type="text" readOnly className="form-control"
                  id="city" />
              </div>
              
              <div className="input-group inout-group-sm mb-3 col-sm-2">
                <select className="form-control" name="state" id="state">
                  <option value="" selected="selected">Select a State</option>
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

              <div className ="input-group input-group-sm mb-3 col-sm-2">
                <input type="text" readOnly className="form-control"
                  id="zip" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="province" className="col-sm-2 col-form-label">Province</label>
              <div className ="input-group input-group-sm mb-3 col-sm-10">
                <input type="text" readOnly className="form-control"
                  id="province" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
              <div className ="input-group input-group-sm mb-3 col-sm-10">
                <input type="text" readOnly className="form-control"
                  id="country" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
              <div className ="input-group input-group-sm mb-3 col-sm-10">
                <input type="text" readOnly className="form-control"
                  id="phone" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="fax" className="col-sm-2 col-form-label">Fax</label>
              <div className ="input-group input-group-sm mb-3 col-sm-10">
                <input type="text" readOnly className="form-control"
                  id="fax" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
              <div className ="input-group input-group-sm mb-3 col-sm-10">
                <input type="text" readOnly className="form-control"
                  id="email" />
              </div>
            </div>

          </div>

          <div className ="shipment-info pt-3">
            <div className="section-headers">
              <h5>Shipment Information</h5>
            </div>
            
            <div className ="form-row">
              <label htmlFor="fedex" className="col-sm-2 col-form-label">Fed Ex</label>
              <div className="input-group input-group-sm mb-3 col-sm-3">
                <select className="form-control" name="fedex" id="fedex">
                  <option value="option" selected="selected">Select Option</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="ups" className="col-sm-2 col-form-label">UPS</label>
              <div className="input-group input-group-sm mb-3 col-sm-3">
                <select className="form-control" name="ups" id="ups">
                  <option value="option" selected="selected">Select Option</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="c-w" className="col-sm-2 col-form-label">Courier/Will Call</label>
              <div className="input-group input-group-sm mb-3 col-sm-3">
                <select className="form-control" name="c-w" id="c-w">
                  <option value="option" selected="selected">Select Option</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="abs" className="col-sm-2 col-form-label">ABS Van</label>
              <div className="input-group input-group-sm mb-3 col-sm-3">
                <select className="form-control" name="abs" id="abs">
                  <option value="option" selected="selected">Select Option</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="other-ship" className="col-sm-2 col-form-label">Other Ship Method</label>
              <div className ="input-group input-group-sm mb-3 col-sm-10">
                <input type="text" readOnly className="form-control"
                  id="other-ship" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="pay-type" className="col-sm-2 col-form-label">Payment Type</label>
              <div className="input-group input-group-sm mb-3 col-sm-3">
                <select className="form-control" name="pay-type" id="pay-type">
                  <option value="option" selected="selected">Select Option</option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="acc-num" className="col-sm-2 col-form-label">Account Number</label>
              <div className ="input-group input-group-sm mb-3 col-sm-10">
                <input type="text" readOnly className="form-control"
                  id="acc-num" />
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="ship-date" className="col-sm-2 col-form-label">Requested Ship Date/Time</label>
              <div className ="input-group input-group-sm mb-3 col-sm-2">
                <input type="text" readOnly className="form-control"
                  id="ship-date" />
              </div>

              <div className="input-group input-group-sm mb-3 col-sm-2">
                <select className="form-control" name="ship-date" id="ship-date">
                  <option value="option" selected="selected">Select Time</option>
                </select>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="arr-date" className="col-sm-2 col-form-label">Requested Arrival Date/Time</label>
              <div className ="input-group input-group-sm mb-3 col-sm-2">
                <input type="text" readOnly className="form-control"
                  id="arr-date" />
              </div>

              <div className="input-group input-group-sm mb-3 col-sm-2">
                <select className="form-control" name="ship-date" id="ship-date">
                  <option value="option" selected="selected">Select Time</option>
                </select>
              </div>

              <div className="input-group input-group-sm col-sm-3 pl-5">
                <div className="form-group custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customerCheck" />
                  <label htmlFor="saturday" className="custom-control-label">Saturday?</label>
                </div>
              </div>
            </div>

            <div className ="form-row">
              <label htmlFor="fob" className="col-sm-2 col-form-label">FOB</label>
              <div className="input-group input-group-sm mb-3 col-sm-3">
                <select className="form-control" name="fob" id="fob">
                  <option value="option" selected="selected">Point of Shipment</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
              <div className="input-group input-group-sm mb-3 col-sm-10">
                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" />
              </div>
            </div>
          </div>

          <div className ="list-address pt-3">
            <div className="section-headers">
                <h5>Order Details</h5>
            </div>

            <div className="order-detail">
              <label htmlFor="item" className="col-md-3 col-form-label">Item</label>
              <label htmlFor="total-order" className="col-md-3 col-form-label">Total of Order</label>
              <label htmlFor="already-ordered" className="col-md-3 col-form-label">Already Ordered</label>
              <label htmlFor="ship-to-address" className="col-md-3 col-form-label">Ship to This Address</label>
            </div>
            <div className="form-row">
              <div className="input-group input-group-sm mb-3 col-sm-3">
                <input type="text" readOnly className="form-control" 
                  id="search-dir"></input>
              </div>
              <div className="input-group input-group-sm mb-3 col-sm-3">
                <input type="text" readOnly className="form-control" 
                  id="search-dir"></input>
              </div>
              <div className="input-group input-group-sm mb-3 col-sm-3">
                <input type="text" readOnly className="form-control" 
                  id="search-dir"></input>
              </div>
              <div className="input-group input-group-sm mb-3 col-sm-3">
                <input type="text" readOnly className="form-control" 
                  id="search-dir"></input>
              </div>
            </div>
          </div>

          <div className="Add/Cancel">
            <button type="Add" id="add-company" className="btn btn-success m-2">Add</button>
            <button type="Cancel" id="Cancel-company" className="btn btn-success m-2">Cancel</button>
          </div>

        </form>
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

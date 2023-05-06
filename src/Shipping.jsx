import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";
import Select from "react-select";

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
  }, []);

  const navigate = useNavigate();

  const [latestShippingId, setShippingId] = useState(null);
  const nextShippingId = latestShippingId + 1;
  useEffect(() => {
    Axios.get('http://localhost:3001/api/getLatestShippingId')
      .then(response => {
        setShippingId(response.data[0]['MAX(shipping_id)']);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [orderOptions, setOrderOptions] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/api/getOrderIdList')
      .then(response => {
        const options = response.data.map(option => {
          return { value: option.order_id, label: option.order_id };
        });
        setOrderOptions(options);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [order_id, setOrderId] = useState(null);
  const [orderData, setOrderData] = useState(null);
  useEffect(() => {
    if (order_id) {
      Axios.get(`http://localhost:3001/api/order/${order_id}`)
        .then(response => {
          setOrderData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [order_id]);
  
  var company_id = orderData?.company_id ?? '';
  var company_name = orderData?.company_name ?? ''
  useEffect(() => {
    if (company_id) {
      Axios.get(`http://localhost:3001/api/contact1/${company_id}`).then((response) => {
        const fName = response.data?.fname ?? '';
        const lName = response.data?.lname ?? '';
        setContactName(fName + " " + lName);
        setAdd1(response.data?.add_1 ?? '');
        setAdd2(response.data?.add_2 ?? '');
        setCity(response.data?.city ?? '');
        setState(response.data?.state_in_country ?? '');
        setZip(response.data?.zip ?? '');
        setCountry(response.data?.country ?? '');
        setPhone(response.data?.phone ?? '');
        setEmail(response.data?.email ?? '');
      }).catch(err => {
        console.log(err);
      });
    }
  }, [company_id]);

  const [contact_name, setContactName] = useState(null);
  const [add1, setAdd1] = useState(null);
  const [add2, setAdd2] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zip, setZip] = useState(null);
  const [province, setProvince] = useState(null);
  const [country, setCountry] = useState(null);
  const [phone, setPhone] = useState(null);
  const [fax, setFax] = useState(null);
  const [email, setEmail] = useState(null);
  const [fedex, setFedex] = useState(null);
  const [ups, setUps] = useState(null);
  const [courier_willcall, setCourier_willcall] = useState(null);
  const [abs, setAbs] = useState(null);
  const [other_ship_method, setOther_ship_method] = useState(null);
  const [payment_type, setPayment_type] = useState(null);
  const [account_number, setAccount_number] = useState(null);
  const [request_ship_date, setRequested_ship_date] = useState(null);
  const [request_ship_time, setRequested_ship_time] = useState(null);
  const [arrival_ship_date, setArrival_ship_date] = useState(null);
  const [arrival_ship_time, setArrival_ship_time] = useState(null);
  const [saturday, setSaturday] = useState(0);
  const [fob, setFob] = useState(null);
  const [notes, setNotes] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/insertShipping",
      {
        order_id: order_id,
        company_id: company_id,
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
        saturday: saturday,
        fob: fob,
        notes: notes
      }).then(() => {
        alert('Inserted new shipping');
      }).catch(err => {
        console.log(err);
      });
  }

  const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { //validate if all required fields have inputs
    setSubmitting(order_id && contact_name && add1 && city && state && zip && country && phone && email);
  }, [order_id, contact_name, add1, city, state, zip, country, phone, email]);

  const handleNavigate = async (id) => {
    const idPassed = id.toString();
    await Sleep(2000);
    navigate(`/shipping/${idPassed}`);
  };

  const customStyle = {
    control: base => ({
      ...base,
      height: 38,
      minHeight: 38,
      fontSize: '16px',
      backgroundColor: '#E2EAFF',
    }),
    valueContainer: (base, state) => ({
      ...base,
      borderWidth: 1,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      paddingLeft: 10,
      paddingBottom: 5,
    }),
    option: base => ({
      ...base,
      fontSize: '14px',
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
    placeholder: (base, state) => ({
      ...base,
      overflow: 'hidden',
    }),
  };

  return (

    <div className="page">
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

        <form id="shipping_form" onSubmit={handleSubmit} autoComplete="off">
          <div className="list-address pt-3">
            <div className="section-headers">
              <h5>List of Shipping Addresses For</h5>
            </div>

            <div className="form-row">
              <table className="table">
                <thead className="thead-light">
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

          <div className="customer-info pt-3">
            <div className="section-headers">
              <h5>Customer Shipping Information</h5>
            </div>

            <div className="form-row">
              <label htmlFor="date"
                className="col-md-4 col-form-label"><h5>Date:</h5></label>
            </div>

            <div className="form-row">
              <label htmlFor="shipping_id" className="col-3 col-form-label">Shipping ID</label>
              <div className="input-group input-group-sm mb-3 col-md-2">
                <input tabIndex="-1" readOnly type="text" className="form-control" id="shipping_id" value={nextShippingId} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="order_id" className="col-md-3 col-form-label">Choose Order <span style={{ color: 'red' }}>*</span></label>
              <div className="input-group input-group mb-3 col-md-3">
                <div className="form-control p-0">
                  <Select onChange={(e) => setOrderId(e.value)} className="react-select" styles={customStyle} value={orderOptions.filter(function (option) {
                    return option.value === order_id;
                  })} id="order_id" required options={orderOptions} />
                </div>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="company-id" className="col-md-3 col-form-label">Company ID</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input readOnly className="form-control" id="company-id" value={company_id} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="company_name" className="col-md-3 col-form-label">Company Name</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input readOnly className="form-control" id="company_name" value={company_name} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="contact_name" className="col-md-3 col-form-label">Contact Name<span style={{ color: 'red' }}> *</span></label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                {/* <input onChange={(e) => setContactName(e.target.value)} className="form-control" id="contact_name" required /> */}
                <input className="form-control" id="contact_name" value={contact_name} onChange={(e) => setContactName(e.target.value)} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="add1" className="col-md-3 col-form-label">Address 1 <span style={{ color: 'red' }}>*</span></label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                {/* <input onChange={(e) => setAdd1(e.target.value)} className="form-control" id="add1" required /> */}
                <input className="form-control" id="ad1" value={add1} onChange={(e) => setAdd1(e.target.value)} required />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="add2" className="col-md-3 col-form-label">Address 2</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                {/* <input onChange={(e) => setAdd2(e.target.value)} className="form-control" id="add2" /> */}
                <input className="form-control" id="add2" value={add2} onChange={(e) => setAdd2(e.target.value)} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="csz" className="col-md-3 col-form-label">City | State | Zip <span style={{ color: 'red' }}> *</span></label>
              <div className="input-group input-group-sm mb-3 col-md-4">
                {/* <input onChange={(e) => setCity(e.target.value)} className="form-control" id="city" required /> */}
                <input className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
              </div>

              <div className="input-group input-group-sm mb-3 col-md-2">
                {/* <select onChange={(e) => setState(e.target.value)} className="form-control" id="state" required> */}
                <select className="form-control" id="state" value={state} onChange={(e) => setState(e.target.value)} required>
                  <option value="">Select State</option>
                  <option value="AL">AL</option>
                  <option value="AK">AK</option>
                  <option value="AR">AR</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DC">DC</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="ND">ND</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VT">VT</option>
                  <option value="VA">VA</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>
                  <option value="WV">WV</option>
                  <option value="WY">WY</option>
                </select>
              </div>

              <div className="input-group input-group-sm mb-3 col-md-2">
                {/* <input type="text" inputMode="numeric" onChange={(e) => setZip(e.target.value)} className="form-control"
                  id="zip" required /> */}
                  <input className="form-control" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} required />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="province" className="col-md-3 col-form-label">Province</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setProvince(e.target.value)} className="form-control"
                  id="province" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="country" className="col-md-3 col-form-label">Country
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                {/* <input onChange={(e) => setCountry(e.target.value)} className="form-control"
                  id="country" required /> */}
                  <input className="form-control" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="phone" className="col-md-3 col-form-label">Phone
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                {/* <input onChange={(e) => setPhone(e.target.value)} className="form-control"
                  id="phone" required /> */}
                  <input className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="fax" className="col-md-3 col-form-label">Fax</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setFax(e.target.value)} className="form-control"
                  id="fax" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="email" className="col-md-3 col-form-label">Email
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                {/* <input onChange={(e) => setEmail(e.target.value)} className="form-control"
                  id="email" required /> */}
                  <input className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
                <select onChange={(e) => setFedex(e.target.value)} className="form-control" id="fedex">
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

            <div className="form-row">
              <label htmlFor="ups" className="col-md-3 col-form-label">UPS</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setUps(e.target.value)} className="form-control" id="ups">
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

            <div className="form-row">
              <label htmlFor="courier_willcall" className="col-md-3 col-form-label">Courier/Will Call</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setCourier_willcall(e.target.value)} className="form-control" id="courier_willcall">
                  <option value="none">None</option>
                  <option value="courier">Courier</option>
                  <option value="willcall">Will Call</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="abs" className="col-md-3 col-form-label">ABS Van</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setAbs(e.target.value)} className="form-control" id="abs">
                  <option value="none">None</option>
                  <option value="abs-van">ABS Van</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="other_ship_method" className="col-md-3 col-form-label">Other Ship Method</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input onChange={(e) => setOther_ship_method(e.target.value)} className="form-control"
                  id="other_ship_method" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="payment_type" className="col-md-3 col-form-label">Payment Type</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setPayment_type(e.target.value)} className="form-control" id="payment_type">
                  <option value="">Select Option</option>
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="account_number" className="col-md-3 col-form-label">Account Number
              </label>
              <div className="input-group input-group-sm mb-3 col-md-8" required>
                <input onChange={(e) => setAccount_number(e.target.value)} className="form-control"
                  id="account_number" />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="request_ship_date" className="col-md-3 col-form-label">Requested Ship Date/Time</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input type="datetime-local" className="form-control" onChange={(e) => setRequested_ship_date(e.target.value)} />
              </div>

              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setRequested_ship_time(e.target.value)} className="form-control" id="request_ship_time" >
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

            <div className="form-row">
              <label htmlFor="arrival_ship_date" className="col-md-3 col-form-label">Requested Arrival Date/Time</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input type="datetime-local" className="form-control" onChange={(e) => setArrival_ship_date(e.target.value)}
                  name="arrival_ship_date" />
              </div>

              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setArrival_ship_time(e.target.value)} className="form-control" id="arrival_ship_time">
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

              <div className="input-group input-group-sm col-sm-3 pl-5">
                <div className="form-group custom-control custom-checkbox">
                  <input onChange={(prev) => setSaturday(prev => !prev)} checked={saturday} type="checkbox" className="custom-control-input" id="saturday" />
                  <label htmlFor="saturday" className="custom-control-label">Saturday?</label>
                </div>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="fob" className="col-md-3 col-form-label">FOB</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setFob(e.target.value)} className="form-control" id="fob">
                  <option value="">Select Option</option>
                  <option value="point of shipment">Point of Shipment</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="notes" className="col-md-3 col-form-label">Notes</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <textarea onChange={(e) => setNotes(e.target.value)} rows="4" cols="50" className="form-control" id="custom-area" />
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
                    <input type="text" className="form-control" id="search_dir" readOnly></input>
                  </div>
                </div>
                <div className="input-group input-group-sm mb-3 col-md-3">
                  <div className="col">
                    <label htmlFor="total_order">Total of Order</label>
                    <input type="text" className="form-control" id="search_dir" readOnly></input>
                  </div>
                </div>
                <div className="input-group input-group-sm mb-3 col-md-3">
                  <div className="col">
                    <label htmlFor="already_ordered">Already Ordered</label>
                    <input type="text" className="form-control" id="search_dir" readOnly></input>
                  </div>
                </div>
                <div className="input-group input-group-sm mb-3 col-md-3">
                  <div className="col">
                    <label htmlFor="ship_to_address">Ship to This Address</label>
                    <input type="text" className="form-control" id="search_dir" readOnly></input>
                  </div>
                </div>
              </div>
            </div>

            <div className="submit">
              <button type="submit" onClick={() => handleNavigate(nextShippingId)} disabled={!submitting} id="submit_company" className="btn btn-success">Submit</button>
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
  )
}
export default Shipping;


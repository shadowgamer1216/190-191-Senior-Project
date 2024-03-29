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

  const [order_id, setOrderId] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [productType, setProductType] = useState(null);
  const [priceTotal, setPriceTotal] = useState(null);
  const [customQuantity, setCustomQuantity] = useState(null);
  useEffect(() => {
    if (order_id) {
      Axios.get(`http://localhost:3001/api/order/${order_id}`)
        .then(response => {
          const modifiedResponse = {
            ...response.data,
            priceTotal: response.data.order_price_total
          };
          setOrderData(modifiedResponse);
          setProductType(response.data.product_type.replaceAll('_', ' ').replace(/\b(\w)/g, s => s.toUpperCase()));
          setPriceTotal(response.data.order_price_total);
          setCustomQuantity(response.data.custom_quantity);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [order_id]);


  var company_id = orderData?.company_id ?? '';
  var company_name = orderData?.company_name ?? '';

  const [contactData, setContactData] = useState(null);
  useEffect(() => {
    if (company_id) {
      Axios.get(`http://localhost:3001/api/contact1/${company_id}`).then((response) => {
        setContactData(response.data);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [company_id]);
  /* TEST */

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

  useEffect(() => {
    setContactName((contactData?.fname ?? '') + " " + (contactData?.lname ?? ''));
    setAdd1((contactData?.add_1 ?? ''));
    setAdd2((contactData?.add_2 ?? ''));
    setCity((contactData?.city ?? ''));
    setState((contactData?.state_in_country ?? ''));
    setZip((contactData?.zip ?? ''));
    setCountry((contactData?.country ?? ''));
    setPhone((contactData?.phone ?? ''));
    setFax((contactData?.fax ?? ''));
    setEmail((contactData?.email ?? ''));

  }, [contactData]);



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
        notes: notes,
        productType: productType,
        priceTotal: priceTotal,
        customQuantity: customQuantity
      }).then(() => {
        alert('Inserted new shipping');
      }).catch(err => {
        console.log(err);
      });
  }



  const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { //validate if all required fields have inputs
    setSubmitting(order_id && contact_name && add1 && city && state && zip && country && phone && email && request_ship_date && arrival_ship_date);
  }, [order_id, contact_name, add1, city, state, zip, country, phone, email, request_ship_date, arrival_ship_date]);

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
                <input tabIndex="-1" readOnly type="text" className="form-control" id="shipping_id" value={nextShippingId} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="order_id" className="col-md-3 col-form-label">Choose Order <span style={{ color: 'red' }}>*</span></label>
              <div className="input-group input-group mb-3 col-md-3">
                <div className="form-control p-0">
                  <Select onChange={(e) => setOrderId(e.value)} className="react-select" styles={customStyle} value={orderOptions.filter(function (option) {
                    return option.value === order_id;
                  })[0]} id="order_id" required options={orderOptions} />
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
                {/*<input onChange={(e) => setContactName(e.target.value)} className="form-control" id="contact_name" required />*/}
                <input className="form-control" id="contact_name" value={contact_name} onChange={(e) => setContactName(e.target.value)} required />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="add1" className="col-md-3 col-form-label">Address 1 <span style={{ color: 'red' }}>*</span></label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                {/*<input onChange={(e) => setAdd1(e.target.value)} className="form-control" id="add1" required />*/}
                <input className="form-control" id="add1" value={add1} onChange={(e) => setAdd1(e.target.value)} required />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="add2" className="col-md-3 col-form-label">Address 2</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control" id="add2" value={add2} onChange={(e) => setAdd2(e.target.value)} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="csz" className="col-md-3 col-form-label">City | State | Zip <span style={{ color: 'red' }}> *</span></label>
              <div className="input-group input-group-sm mb-3 col-md-4">
                <input className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
              </div>
              <div className="input-group input-group-sm mb-3 col-md-2">
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
                <input className="form-control" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} required />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="province" className="col-md-3 col-form-label">Province</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control" id="province" value={province} onChange={(e) => setProvince(e.target.value)} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="country" className="col-md-3 col-form-label">Country
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="phone" className="col-md-3 col-form-label">Phone
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="fax" className="col-md-3 col-form-label">Fax</label>
              <div className="input-group input-group-sm mb-3 col-md-8">
                <input className="form-control" id="fax" value={fax} onChange={(e) => setFax(e.target.value)} />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="email" className="col-md-3 col-form-label">Email
                <span style={{ color: 'red' }}> *</span>
              </label>
              <div className="input-group input-group-sm mb-3 col-md-8">
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
                  <option value="Air Freight">Air Freight</option>
                  <option value="Custom Critical Freight">Custom Critical Freight</option>
                  <option value="Express 2 Day">Express 2 Day</option>
                  <option value="Express 2 Day AM">Express 2 day AM</option>
                  <option value="Express Saver">Express Saver</option>
                  <option value="First Overnight">First Overnight</option>
                  <option value="Ground">Ground</option>
                  <option value="Home">Home</option>
                  <option value="International First">International First</option>
                  <option value="International Economy">International Economy</option>
                  <option value="International Priority">International Priority</option>
                  <option value="Priority Overnight">Priority Overnight</option>
                  <option value="Standard Oovernight">Standard Overnight</option>
                  <option value="Truck Freight Economy">Truck Freight Economy</option>
                  <option value="Truck Freight Priority">Truck Freight Economy</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="ups" className="col-md-3 col-form-label">UPS</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setUps(e.target.value)} className="form-control" id="ups">
                  <option value="none">None</option>
                  <option value="2 Day Air">2 Day Air</option>
                  <option value="2 Day Air AM">2 Day Air AM</option>
                  <option value="3 Day Select">3 Day Select</option>
                  <option value="Ground">Ground</option>
                  <option value="Nextday Air">Next Day Air</option>
                  <option value="Nextday Air Early">Next Day Air Early</option>
                  <option value="Nextday Air Saver">Next Day Air Saver</option>
                  <option value="Overnight Priority">Overnight Priority</option>
                  <option value="Worldwide Expedited"> Worldwide Expedited</option>
                  <option value="Worldwide Saver">Worldwide Saver</option>
                  <option value="Worldwide Express Plus">Worldwide Express Plus</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="courier_willcall" className="col-md-3 col-form-label">Courier/Will Call</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setCourier_willcall(e.target.value)} className="form-control" id="courier_willcall">
                  <option value="none">None</option>
                  <option value="Courier">Courier</option>
                  <option value="Will Call">Will Call</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="abs" className="col-md-3 col-form-label">ABS Van</label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <select onChange={(e) => setAbs(e.target.value)} className="form-control" id="abs">
                  <option value="None">None</option>
                  <option value="Abs Van">ABS Van</option>
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
                  <option value="none">None</option>
                  <option value="Credit">Credit</option>
                  <option value="Debit">Debit</option>
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
              <label htmlFor="request_ship_date" className="col-md-3 col-form-label">Requested Ship Date/Time<span style={{ color: 'red' }}> *</span></label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input type="date" className="form-control" onChange={(e) => setRequested_ship_date(e.target.value)} />
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
              <label htmlFor="arrival_ship_date" className="col-md-3 col-form-label">Requested Arrival Date/Time<span style={{ color: 'red' }}> *</span></label>
              <div className="input-group input-group-sm mb-3 col-md-3">
                <input type="date" className="form-control" onChange={(e) => setArrival_ship_date(e.target.value)}
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
                    <label htmlFor="custom_qunatity">Already Ordered</label>
                    <input type="text" className="form-control" id="custom_quanity" value={customQuantity} readOnly></input>
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

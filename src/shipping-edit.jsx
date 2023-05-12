import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";

const Shipping = ({ handleLogout }) => {
    const navigate = useNavigate();
    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


    const [new_contact_name, setContactName] = useState(null);
    const [new_add1, setAdd1] = useState(null);
    const [new_add2, setAdd2] = useState(null);
    const [new_city, setCity] = useState(null);
    const [new_state, setState] = useState(null);
    const [new_zip, setZip] = useState(null);
    const [new_province, setProvince] = useState(null);
    const [new_country, setCountry] = useState(null);
    const [new_phone, setPhone] = useState(null);
    const [new_fax, setFax] = useState(null);
    const [new_email, setEmail] = useState(null);

    const [new_fedex, setFedex] = useState(null);
    const [new_ups, setUps] = useState(null);
    const [new_courier_willcall, setCourier_willcall] = useState(null);
    const [new_abs, setAbs] = useState(null);
    const [new_other_ship_method, setOther_ship_method] = useState(null);
    const [new_payment_type, setPayment_type] = useState(null);
    const [new_account_number, setAccount_number] = useState(null);
    const [new_request_ship_date, setRequested_ship_date] = useState(null);
    const [new_request_ship_time, setRequested_ship_time] = useState(null);
    const [new_arrival_ship_date, setArrival_ship_date] = useState(null);
    const [new_arrival_ship_time, setArrival_ship_time] = useState(null);
    const [new_saturday, setSaturday] = useState(0);
    const [new_fob, setFob] = useState(null);
    const [new_notes, setNotes] = useState(null);

    const { shipping_id } = useParams();
    const [shippingData, setshippingData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/ShippingEdit/${shipping_id}`)
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

    const handleNavigate = async (sId) => {
        await Sleep(2000);
        navigate(`/shipping/${shipping_id}`);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/editShipping", {
            shipping_id : shipping_id,
            contact_name : new_contact_name,
            add1 : new_add1,
            add2 : new_add2,
            city : new_city,
            state : new_state,
            zip : new_zip,
            province : new_province,
            country : new_country,
            phone : new_phone,
            fax : new_fax,
            email : new_email,
            fedex : new_fedex,
            ups : new_ups,
            courier_willcall : new_courier_willcall,
            abs : new_abs,
            other_ship_method : new_other_ship_method,
            payment_type : new_payment_type,
            account_number : new_account_number,
            request_ship_date : new_request_ship_date,
            request_ship_time : new_request_ship_time,
            arrival_ship_date : new_arrival_ship_date,
            arrival_ship_time : new_arrival_ship_time,
            saturday : new_saturday,
            fob : new_fob,
            notes : new_notes
        }).then(() => {
            alert('Edited shipping');
        }).catch(err => {
            console.log(err);
        });
    }

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
                    <h2>[EDIT] SHIPPING</h2>
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
                            <label htmlFor="order_id" className="col-md-3 col-form-label"> Order ID </label>
                            <div className="input-group input-group mb-3 col-md-3">
                                <div className="form-control p-0">
                                    <input type="text" readOnly className="form-control" id="order_id" value={order_id} />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="company-id" className="col-md-3 col-form-label">Company ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="company-id" value={company_id} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="company_name" className="col-md-3 col-form-label">Company Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input readOnly className="form-control" id="company_name" value={company_name} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="contact_name" className="col-md-3 col-form-label">Contact Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input className="form-control" id="contact_name" defaultValue={contact_name} onChange={(e) => setContactName(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="add1" className="col-md-3 col-form-label">Address 1</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                {/*<input onChange={(e) => setAdd1(e.target.value)} className="form-control" id="add1" required />*/}
                                <input className="form-control" id="add1" defaultValue={add1} onChange={(e) => setAdd1(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="add2" className="col-md-3 col-form-label">Address 2</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input className="form-control" id="add2" defaultValue={add2} onChange={(e) => setAdd2(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="csz" className="col-md-3 col-form-label">City | State | Zip</label>
                            <div className="input-group input-group-sm mb-3 col-md-4">
                                <input className="form-control" id="city" defaultValue={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <select className="form-control" id="state" defaultValue={state} onChange={(e) => setState(e.target.value)}>
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
                                <input className="form-control" id="zip" defaultValue={zip} onChange={(e) => setZip(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="province" className="col-md-3 col-form-label">Province</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input className="form-control" id="province" defaultValue={province} onChange={(e) => setProvince(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="country" className="col-md-3 col-form-label">Country</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input className="form-control" id="country" defaultValue={country} onChange={(e) => setCountry(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="phone" className="col-md-3 col-form-label">Phone</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input className="form-control" id="phone" defaultValue={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="fax" className="col-md-3 col-form-label">Fax</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input className="form-control" id="fax" value={fax} onChange={(e) => setFax(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="email" className="col-md-3 col-form-label">Email</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input className="form-control" id="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
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
                                <select className="form-control" id="fedex" onChange={(e) => setFedex(e.target.value)}>
                                    <option value="{fedex}">{fedex}</option>
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
                                    <option value="{ups}">{ups}</option>
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
                                    <option value="{courier_willcall}">{courier_willcall}</option>
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
                                    <option value="{abs}">{abs}</option>
                                    <option value="None">None</option>
                                    <option value="Abs Van">ABS Van</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="other_ship_method" className="col-md-3 col-form-label">Other Ship Method</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input defaultValue={other_ship_method} onChange={(e) => setOther_ship_method(e.target.value)} className="form-control"
                                    id="other_ship_method" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="payment_type" className="col-md-3 col-form-label">Payment Type</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setPayment_type(e.target.value)} className="form-control" id="payment_type">
                                    <option value="{payment_type}">{payment_type}</option>
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
                                <input defaultValue={account_number} onChange={(e) => setAccount_number(e.target.value)} className="form-control"
                                    id="account_number" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="request_ship_date" className="col-md-3 col-form-label">Requested Ship Date/Time<span style={{ color: 'red' }}> *</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" defaultValue={request_ship_date} onChange={(e) => setRequested_ship_date(e.target.value)} />
                            </div>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setRequested_ship_time(e.target.value)} className="form-control" id="request_ship_time" >
                                    <option value="{request_ship_time}">{request_ship_time}</option>
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
                                <input type="date" className="form-control" defaultValue={arrival_ship_date} onChange={(e) => setArrival_ship_date(e.target.value)}
                                    name="arrival_ship_date" />
                            </div>

                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setArrival_ship_time(e.target.value)} className="form-control" id="arrival_ship_time">
                                    <option value="{arrival_ship_time}">{arrival_ship_time}</option>
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
                                    <input defaultValue={saturday} onChange={(prev) => setSaturday(prev => !prev)} checked={saturday} type="checkbox" className="custom-control-input" id="saturday" />
                                    <label htmlFor="saturday" className="custom-control-label">Saturday?</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="fob" className="col-md-3 col-form-label">FOB</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setFob(e.target.value)} className="form-control" id="fob">
                                    <option value="{fob}">{fob}</option>
                                    <option value="">Select Option</option>
                                    <option value="point of shipment">Point of Shipment</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-md-3 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea defaultValue={notes} onChange={(e) => setNotes(e.target.value)} rows="4" cols="50" className="form-control" id="custom-area" />
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
                        <div>
                            <button onClick={() => handleNavigate({ shipping_id })} id="edit-shipping" className="btn btn-outline-success">Update</button>
                        </div>
                    </div>
                </form>
                <br></br>
                <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Back</button>
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
};
export default Shipping;




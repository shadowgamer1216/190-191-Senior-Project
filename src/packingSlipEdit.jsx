import React, { useEffect, useState } from "react";
import './App.css'
import { Link, useNavigate, useLocation } from "react-router-dom"
import Axios from "axios";
import Select from "react-select";

const PackingSlipEdit = ({ handleLogout }) => {
    const navigate = useNavigate()
    const [company_name, setCompanyName] = useState(null);
    const [contact_name, setContactName] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);
    const [country, setCountry] = useState('United States');
    const [order_id, setOrderID] = useState(null);
    const [ship_date, setShipDate] = useState('2023-01-01');
    const [order_date, setOrderDate] = useState('2023-01-01');
    const [po, setPO] = useState(null);
    const [ship_via, setShipVia] = useState(null);
    const [saturday_delivery, setSaturdayDelivery] = useState(null);
    const [notes, setNotes] = useState(null);
    const [abspn, setABSPN] = useState(null);
    const [product_title, setProductTitle] = useState(null);
    const [quantity, setQuantity] = useState(0);
    const [oem, setOEM] = useState(null);
    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const [company_id, setCompanyID] = useState(null);
    const [packing_slip_id, setPackingSlipID] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const shippingId = searchParams.get('shipping_id' || '');
    const orderId = searchParams.get('order_id' || '');

    const submit = async(e) => {
        e.preventDefault();
        if(company_id){
            setPackingSlipID(company_id);

        }
        await Axios.post("http://localhost:3001/api/insertPackingSlip", {
            company_name: company_name,
            contact_name: contact_name,
            address: address,
            city: city,
            state: state,
            zip: zip,
            country: country,
            order_id: order_id,
            ship_date: ship_date,
            order_date: order_date,
            po: po,
            ship_via: ship_via,
            saturday_delivery: saturday_delivery,
            notes: notes,
            abspn: abspn,
            product_title: product_title,
            quantity: quantity,
            oem: oem,
            packing_slip_id: packing_slip_id
        }).catch(err => {
            console.log(err);
        });
    };
    
    const handleNavigate = async (master_packing_slip_id) => {
        const idPassed = master_packing_slip_id.toString();
        await Sleep(2000);
        navigate(`/packingSlip/${idPassed}`);
    };

    const [latestPackingSlipId, setPackingSlipId] = useState(null);
    const nextPackingSlipId = latestPackingSlipId + 1;
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getLatestPackingSlipId')
        .then(response => {
            setPackingSlipId(response.data[0]['MAX(packing_slip_master_id)']);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const [submitting, setSubmitting] = useState(false);
    useEffect(() => {
        setSubmitting(ship_date && order_date && company_name && order_id);
    }, [ship_date, order_date, company_name, order_id]); 

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

    const [companyOptions, setCompanyOptions] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getCompanyData')
        .then(response => {
            const options = response.data.map(option => {
                return { value: option.company_name, label: option.company_name };
            });
            setCompanyOptions(options);
            setCompanyID(response.data.company_id);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    // useEffect(() => {
    //     if (company_name) {
    //       Axios.get(`http://localhost:3001/api/shippingDetails/${company_name}`)
    //         .then((response) => {
    //           setContactName(response.data.contact_name);
    //           setAddress(response.data.add1);
    //           setCity(response.data.city);
    //           setState(response.data.country_state);
    //           setZip(response.data.zip);
    //           setShipDate(response.data.request_ship_date);
    //           setCountry(response.data.country_state);
    //         })
    //         .catch((error) => {
    //           console.error(error);
    //         });
    //     }
    // }, [company_name]);

    useEffect(() => {
        if (shippingId) {
          Axios.get(`http://localhost:3001/api/shipping/${shippingId}`)
            .then((response) => {
              setCompanyName(response.data.company_name);
              setContactName(response.data.contact_name);
              setShipDate(response.data.request_ship_date.slice(0,10));
              setAddress(response.data.add1);
              setCity(response.data.city);
              setState(response.data.country_state);
              setZip(response.data.zip);
              setCountry(response.data.country);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        if (orderId) {
          Axios.get(`http://localhost:3001/api/order/${orderId}`)
            .then((response) => {
              setOrderID(response.data.order_id);
              setProductTitle(response.data.product_name);
              setABSPN(response.data.product_id);
              setPO(response.data.customer_po_number);
              setOrderDate(response.data.customer_order_date);
              console.log('order date: ' + order_date);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        console.log("ship date2: " + ship_date);
    }, [shippingId, orderId]);
      

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
                    <h2>Create Packing Slip</h2>
                </div> 
                
                <form onSubmit={submit}>
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Shipping Information</h5>
                        </div>
                       
                        <div className="form-row">
                            <label htmlFor="company-name" className="col-md-3 col-form-label">Company Name <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group mb-3 col-md-8">
                                <div className="form-control p-0">
                                    <Select onChange={(e) => setCompanyName(e.value)} className="react-select" styles={customStyle} value={companyOptions.filter(function(option) {
                                        return option.value === company_name;
                                    })} id="company_name"  options={companyOptions}/>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="contact-name" className="col-md-3 col-form-label">Contact Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="contact-name" value={contact_name} onChange={(e) =>{
                                    setContactName(e.target.value)
                                }} maxLength="50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="address" className="col-md-3 col-form-label">Address</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="address" value={address} onChange={(e) =>{
                                    setAddress(e.target.value)
                                }} maxLength="50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="city" className="col-md-3 col-form-label">City</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="city" value={city} onChange={(e) =>{
                                    setCity(e.target.value)
                                }} maxLength = "50"/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="state" className="col-md-3 col-form-label">State</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="state" id="state" value={state} onChange={(e) =>{
                                    setState(e.target.value)
                                }}>
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
                        </div>

                        <div className="form-row">
                            <label htmlFor="zip" className="col-md-3 col-form-label">Zip Code</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="zip" value={zip} onChange={(e) =>{
                                    setZip(e.target.value)
                                }} maxLength = "10"/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="country" className="col-md-3 col-form-label">Country</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="country" value={country} onChange={(e) =>{
                                    setCountry(e.target.value)
                                }} maxLength = "50"/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="order-id" className="col-md-3 col-form-label">Order ID <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="number" className="form-control" id="order-id" value={order_id} onChange={(e) =>{
                                    setOrderID(e.target.value)
                                }} maxLength="50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="ship-date" className="col-md-3 col-form-label">Ship Date <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" name="ship-date" id="ship-date" value={ship_date} onChange={(e) =>{
                                    setShipDate(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="order-date" className="col-md-3 col-form-label">Order Date <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" name="order-date" id="order-date" value={order_date} onChange={(e) =>{
                                    setOrderDate(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="po" className="col-md-3 col-form-label">P.O.</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="po" value={po} onChange={(e) =>{
                                    setPO(e.target.value)
                                }} maxLength="50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="ship-via" className="col-md-3 col-form-label">Ship Via</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" className="form-control" id="ship-via" onChange={(e) =>{
                                    setShipVia(e.target.value)
                                }} maxLength="50"/>
                                
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <label htmlFor="saturday-delivery" className="col-md-3 col-form-label">Saturday Delivery</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="text" className="form-control" id="saturday-delivery" onChange={(e) =>{
                                    setSaturdayDelivery(e.target.value)
                                }} maxLength="3"/>
                                
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-md-3 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" onChange={(e) =>{
                                    setNotes(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="section-headers">
                            <h5>Product Details</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="abspn" className="col-md-3 col-form-label">ABS P/N</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="number" className="form-control" id="abspn" value={abspn} onChange={(e) =>{
                                    setABSPN(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product-title" className="col-md-3 col-form-label">Product Title</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="product-title" value={product_title} onChange={(e) =>{
                                    setProductTitle(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="quantity" className="col-md-3 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" className="form-control" id="quantity" value={quantity} onChange={(e) =>{
                                    setQuantity(e.target.value)
                                }} placeholder="0"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="oem" className="col-md-3 col-form-label">OEM</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" className="form-control" id="oem" onChange={(e) =>{
                                    setOEM(e.target.value)
                                }}/>
                            </div>
                        </div>

                    </div>

                    <div className="submit p-3">
                        <button onClick={() => handleNavigate(nextPackingSlipId)} disabled={!submitting}  id="add-packing-slip" className="btn btn-success">Save Packing Slip And Print</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default PackingSlipEdit;
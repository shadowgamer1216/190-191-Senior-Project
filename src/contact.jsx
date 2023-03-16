import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


const Contact = () => {
    const navigate = useNavigate();
    const [customer_id, setCustomerID] = useState("");
    const [company, setCompany] = useState(""); //testing company
    const [fname, setFname] = useState(""); 
    const [lname, setLname] = useState(""); 
    const [contact_type, setContactType] = useState("");
    const [title, setTitle] = useState("");
    const [dept, setDept] = useState("");
    const [add_1, setAdd_1] = useState("");
    const [add_2, setAdd_2] = useState("");
    const [city, setCity] = useState("");
    const [state_in_country, setState] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [extension, setExtension] = useState("");
    const [cell_phone_number, setCell] = useState("");
    const [third_party_company, setThirdParty] = useState("");
    const [fax, setFax] = useState("");
    const [email, setEmail] = useState("");
    const [notes, setNotes] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // add this line



    const submit = () => {
        Axios.post("http://localhost:3001/api/insert", {customer_id: customer_id, company: company, fname: fname, lname: lname, contact_type: contact_type, title: title, dept:dept, add_1: add_1, add_2: add_2, city: city, state_in_country: state_in_country, zip: zip, country: country, phone:phone, extension: extension, cell_phone_number: cell_phone_number, third_party_company:third_party_company, fax:fax, email:email, notes:notes})
        .then(()=> {
            alert('inserted');
        })
    };

    const handleLogout = () => {
        // add the logout functionality here
        setIsLoggedIn(false);
        navigate("/");
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
                        <Link className="nav-link pl-4" to="/">Home</Link>
                        <Link className="nav-link">Settings</Link>
                    </div>
                </div>

                <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
            </nav>

            <div className="container p-5">
                <div className="page-headers">
                    <h2>ADD CONTACT</h2>
                </div>

                <form>
                    <div className="contact-info pt-3">
                        <div className="section-headers">
                            <h5>Contact Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer-id" className="col-sm-2 col-form-label">Customer ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="customer-id" onChange={(e) =>{
                                    setCustomerID(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="company" className="col-sm-2 col-form-label">Company</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="company-id" onChange={(e) =>{
                                    setCompany(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="first" className="col-sm-2 col-form-label">First Name</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="first" onChange={(e) =>{
                                    setFname(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="last" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="last" onChange={(e) =>{
                                    setLname(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="contact-type" className="col-sm-2 col-form-label">Contact Type</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                               {/* <select className="form-control" name="contact-type" id="contact-type"> */ }
                                <select className="form-control" name="contact-type" id="contact-type" onChange={(e) =>{
                                    setContactType(e.target.value)
                                }}>
                                    <option defaultValue="Not Selected">Value</option>
                                    <option value="Shipping">Shipping</option>
                                    <option value="Billing">Billing</option>
                                    <option value="Contact">Contact</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="title" onChange={(e) =>{
                                    setTitle(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="dept" className="col-sm-2 col-form-label">Department</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="dept" onChange={(e) =>{
                                    setDept(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="add1" className="col-sm-2 col-form-label">Address 1</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="add1" onChange={(e) =>{
                                    setAdd_1(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="add2" className="col-sm-2 col-form-label">Address 2</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="add2" onChange={(e) =>{
                                    setAdd_2(e.target.value)
                                }}/> 
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="city" className="col-sm-2 col-form-label">City</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="city" onChange={(e) =>{
                                    setCity(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="state" className="col-sm-2 col-form-label">State</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                {/*<select className="form-control" name="state" id="state"> */}
                                <select className="form-control" name="state" id="state" onChange={(e) =>{
                                    setState(e.target.value)
                                }}>
                                    <option selected value="">Select State</option>
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
                            <label htmlFor="zip" className="col-sm-2 col-form-label">Zip</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="zip" onChange={(e) =>{
                                    setZip(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="country" onChange={(e) =>{
                                    setCountry(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="phone" onChange={(e) =>{
                                    setPhone(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="extension" className="col-sm-2 col-form-label">Extension</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="extension" onChange={(e) =>{
                                    setExtension(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="fax" className="col-sm-2 col-form-label">Fax</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="fax" onChange={(e) =>{
                                    setFax(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="email" onChange={(e) =>{
                                    setEmail(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="cell-phone-number" className="col-sm-2 col-form-label">Cell Phone Number</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="cell-phone-number" onChange={(e) =>{
                                    setCell(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="third-party-company" className="col-sm-2 col-form-label">Third Party Company</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="third-party-company" onChange={(e) =>{
                                    setThirdParty(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" onChange={(e) =>{
                                    setNotes(e.target.value)
                                }} />
                            </div>
                        </div>

                    </div>



                    <div className="submit p-3">
                        <button onClick = {submit} type="submit" id="add-contact" className="btn btn-success">Submit</button>
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
    );
};

export default Contact;
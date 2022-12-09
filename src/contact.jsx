import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"


const Contact = () => {
    const navigate = useNavigate();
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

                <button className="btn btn-outline-light">Sign In</button>
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
                                <input type="text" readOnly className="form-control" id="customer-id" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="company" className="col-sm-2 col-form-label">Company</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="company" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="first" className="col-sm-2 col-form-label">First Name</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="first" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="last" className="col-sm-2 col-form-label">Last Name</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="last" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="contact-type" className="col-sm-2 col-form-label">Contact Type</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="contact-type" id="contact-type">
                                    <option defaultValue="0">Value</option>
                                    <option value="1">Shipping</option>
                                    <option value="2">Billing</option>
                                    <option value="3">Contact</option>
                                    <option value="4">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="title" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="dept" className="col-sm-2 col-form-label">Department</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="dept" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="add1" className="col-sm-2 col-form-label">Address 1</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="add1" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="add2" className="col-sm-2 col-form-label">Address 2</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="add2" />
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="city" className="col-sm-2 col-form-label">City</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="city" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="state" className="col-sm-2 col-form-label">State</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="state" id="state">
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
                                <input type="text" className="form-control" id="zip" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="country" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="phone" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="extension" className="col-sm-2 col-form-label">Extension</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="extension" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="fax" className="col-sm-2 col-form-label">Fax</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="fax" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="email" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="cell-phone-number" className="col-sm-2 col-form-label">Cell Phone Number</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="cell-phone-number" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="third-party-company" className="col-sm-2 col-form-label">Third Party Company</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="third-party-company" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" />
                            </div>
                        </div>

                    </div>



                    <div className="submit p-3">
                        <button type="submit" id="add-contact" className="btn btn-success">Submit</button>
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
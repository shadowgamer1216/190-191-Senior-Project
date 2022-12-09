import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"

const Company = () => {
    const navigate = useNavigate();
    return (
        <div className="company-page">
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
                    <h2>ADD COMPANY</h2>
                </div>

                <form>
                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Company Name</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="CID" className="col-sm-2 col-form-label">Company ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="CID" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="CName" className="col-sm-2 col-form-label">Company Name</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="CName" />
                            </div>
                        </div>
                    </div>

                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Company Location</h5>
                        </div>


                        <div className="form-row">
                            <label htmlFor="Addr1" className="col-sm-2 col-form-label">Address 1</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="Addr1" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="Addr2" className="col-sm-2 col-form-label">Address 2</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="Addr2" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="city" className="col-sm-2 col-form-label">City</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="city" />
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
                                <input type="text" readOnly className="form-control" id="zip" />
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="country" />
                            </div>
                        </div>

                    </div>

                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Company Contact</h5>
                        </div>


                        <div className="form-row">
                            <label htmlFor="sp" className="col-sm-2 col-form-label">Salesperson</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="sp" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="phone" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="ext" className="col-sm-2 col-form-label">Extension</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="ext" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="fax" className="col-sm-2 col-form-label">Fax</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="fax" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="email" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="wAddr" className="col-sm-2 col-form-label">WebAddress</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="wAddr" />
                            </div>
                        </div>
                    </div>

                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Other Company Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="TID" className="col-sm-2 col-form-label">Tax ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="TID" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="Status" className="col-sm-2 col-form-label">Status</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="Status" id="Status">
                                    <option defaultValue="act">Active</option>
                                    <option value="inAct">Inactive</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="creditCheck" />
                                    <label htmlFor="creditCheck" className="custom-control-label">Credit Checked?</label>
                                </div>
                            </div>


                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customerCheck" />
                                    <label htmlFor="customerCheck" className="custom-control-label">Customer?</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="vendorCheck" />
                                    <label htmlFor="vendorCheck" className="custom-control-label">Vendor?</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="OEMCheck" />
                                    <label htmlFor="OEMCheck" className="custom-control-label">OEM?</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="otherClass" className="col-sm-2 col-form-label">Other Classification</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="otherClass" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" />
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
    )// country might need to be changed to a dropdown menu, not sure
    //status might have something else in the dropbox, it is not shown
}
export default Company;



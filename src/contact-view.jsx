import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";

const Contact = ({ handleLogout }) => {
    const navigate = useNavigate();
    
    const { contact_id } = useParams();
    const [contactData, setContactData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/contact/${contact_id}`)
        .then(response => {
            setContactData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [contact_id]);
    
    var company_id = contactData?.company_id ?? '';
    var company_name = contactData?.company_name ?? '';
    var fname = contactData?.fname ?? '';
    var lname = contactData?.lname ?? '';
    var contact_type = contactData?.contact_type ?? '';
    var title = contactData?.title ?? '';
    var dept = contactData?.dept ?? '';
    var add_1 = contactData?.add_1 ?? '';
    var add_2 = contactData?.add_2 ?? '';
    var city = contactData?.city ?? '';
    var state_in_country = contactData?.state_in_country ?? '';
    var zip = contactData?.zip ?? '';
    var country = contactData?.country ?? '';
    var phone = contactData?.phone ?? '';
    var extension = contactData?.extension ?? '';
    var cell_phone_number = contactData?.cell_phone_number ?? '';
    var third_party_company = contactData?.third_party_company ?? '';
    var fax = contactData?.fax ?? '';
    var email = contactData?.email ?? '';
    var notes = contactData?.notes ?? '';


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
                    <h2>[VIEW] CONTACT</h2>
                </div>

                <form autoComplete="off">
                    <div className="contact-info pt-3">
                        <div className="section-headers">
                            <h5>Contact Identification</h5>
                        </div>

                        <div className="form-row">
                        <label htmlFor="company-id" className="col-3 col-form-label">Company ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" readOnly className="form-control" id="company-id" value={company_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="company-name" className="col-md-3 col-form-label">Company Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="company-name" value={company_name}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="first" className="col-md-3 col-form-label">First Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="first" value={fname}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="last" className="col-md-3 col-form-label">Last Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="last" value={lname}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="contact-type" className="col-md-3 col-form-label">Contact Type</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="text" readOnly className="form-control" name="contact-type" id="contact-type" value={contact_type}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="title" className="col-md-3 col-form-label">Title</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="title" value={title}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="dept" className="col-md-3 col-form-label">Department</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="dept" value={dept}/> 
                            </div>
                        </div>
                    </div>

                    <div className="contact-location pt-3">
                        <div className="section-headers">
                            <h5>Contact Location</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="add1" className="col-md-3 col-form-label">Address 1</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="add1" value={add_1}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="add2" className="col-md-3 col-form-label">Address 2</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="add2" value={add_2}/> 
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="city" className="col-md-3 col-form-label">City</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="city" value={city}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="state" className="col-md-3 col-form-label">State</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="text" readOnly className="form-control" id="state" value={state_in_country}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="zip" className="col-md-3 col-form-label">Zip Code</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="zip" value={zip}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="country" className="col-md-3 col-form-label">Country</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="country" value={country}/> 
                            </div>
                        </div>
                    </div>

                    <div className="contact-other pt-3">
                        <div className="section-headers">
                            <h5>Contact Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="phone" className="col-md-3 col-form-label">Phone</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="phone" value={phone}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="extension" className="col-md-3 col-form-label">Extension</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="extension" value={extension}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="fax" className="col-md-3 col-form-label">Fax</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="fax" value={fax}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="email" className="col-md-3 col-form-label">Email</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="email" value={email}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="cell-phone-number" className="col-md-3 col-form-label">Cell Phone Number</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="cell-phone-number" value={cell_phone_number}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="third-party-company" className="col-md-3 col-form-label">Third Party Company</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="third-party-company" value={third_party_company}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-md-3 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" readOnly className="form-control" name="notes" id="custom-area" value={notes}/>
                            </div>
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

export default Contact;

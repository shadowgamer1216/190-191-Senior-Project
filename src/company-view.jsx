import React, { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";

const CompanyView = ({ handleLogout }) => {
    const navigate = useNavigate();

    const { company_id } = useParams();
    const [companyData, setCompanyData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/company/${company_id}`)
        .then(response => {
            setCompanyData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [company_id]);

    var company_name = companyData?.company_name ?? '';
    var addr1 = companyData?.addr1 ?? '';
    var addr2 = companyData?.addr2 ?? '';
    var city = companyData?.city ?? '';
    var state = companyData?.state ?? '';
    var country = companyData?.country ?? '';
    var zip = companyData?.zip ?? '';
    var salesperson = companyData?.salesperson ?? '';
    var phone = companyData?.phone ?? '';
    var extension = companyData?.extension ?? '';
    var fax = companyData?.fax ?? '';
    var email = companyData?.email ?? '';
    var web_addr = companyData?.web_addr ?? '';
    var tax_id = companyData?.tax_id ?? '';
    var resale = companyData?.resale ?? '';
    var status = companyData?.status ?? '';
    var customer = companyData?.customer ?? 0;
    var vendor = companyData?.vendor ?? 0;
    var other = companyData?.other ?? 0;
    var notes = companyData?.notes ?? '';

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
                    <h2>[VIEW] COMPANY</h2>
                </div>

                <form autoComplete="off">
                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Company Name</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="CID" className="col-md-3 col-form-label">Company ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" readOnly className="form-control" id="CID" value={company_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="CName" className="col-md-3 col-form-label">Company Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="CName" value={company_name}/>
                            </div>
                        </div>
                    </div>

                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Company Location</h5>
                        </div>


                        <div className="form-row">
                            <label htmlFor="Addr1" className="col-md-3 col-form-label">Address 1</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="Addr1" value={addr1}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="Addr2" className="col-md-3 col-form-label">Address 2</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="Addr2" value={addr2}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="city" className="col-md-3 col-form-label">City</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="city" value={city}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="state" className="col-md-3 col-form-label">State</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="state" value={state}/>
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

                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Company Contact</h5>
                        </div>


                        <div className="form-row">
                            <label htmlFor="sp" className="col-md-3 col-form-label">Salesperson</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="sp" value={salesperson}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="phone" className="col-md-3 col-form-label">Phone</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="phone" value={phone}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="ext" className="col-md-3 col-form-label">Extension</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="ext" value={extension}/>
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
                            <label htmlFor="wAddr" className="col-md-3 col-form-label">Web Address</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="wAddr" value={web_addr}/>
                            </div>
                        </div>
                    </div>

                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Other Company Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="TID" className="col-md-3 col-form-label">Tax ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="TID" value={tax_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="resale" className="col-md-3 col-form-label">Resale Certificate</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="resale" value={resale}/>
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="Status" className="col-md-3 col-form-label">Status</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="text" readOnly className="form-control" id="status" value={status}/>
                            </div>
                        </div>

                        <div className="form-row">                           
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input checked={customer} disabled type="checkbox" readOnly className="custom-control-input" id="customerCheck"/>
                                    <label htmlFor="customerCheck" className="custom-control-label">Company is Customer</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input checked={vendor} disabled type="checkbox" readOnly className="custom-control-input" id="vendorCheck"/>
                                    <label htmlFor="vendorCheck" className="custom-control-label">Company is Vendor</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input checked={other} disabled type="checkbox" readOnly className="custom-control-input" id="otherCheck"/>
                                    <label htmlFor="otherCheck" className="custom-control-label">Company is Other</label>
                                </div>
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
    )
}
export default CompanyView;
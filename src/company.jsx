import React, { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";

const Company = ({ handleLogout }) => {
    const navigate = useNavigate();
    const [company_id, setCompanyID] = useState(null);
    const [company_name, setCompanyName] = useState(null);
    const [addr1, setAddr1] = useState(null);
    const [addr2, setAddr2] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);
    const [zip, setZip] = useState(null);
    const [salesperson, setSalesperson] = useState(null);
    const [phone, setPhone] = useState(null);
    const [extension, setExtension] = useState(null);
    const [fax, setFax] = useState(null);
    const [email, setEmail] = useState(null);
    const [web_addr, setWebAddr] = useState(null);
    const [tax_id, setTaxID] = useState(null);
    const [resale, setResale] = useState(null);
    const [status, setStatus] = useState(null);
    const [customer, setCustomer] = useState(0);
    const [vendor, setVendor] = useState(0);
    const [other, setOther] = useState(0);
    const [notes, setNotes] = useState(null);
    
    useEffect(() => {
        setSubmitting(company_id && company_name);
    }, [company_id, company_name]);

    const handleIdChange = (e) => {
        const id = e.target.value;
        // validate input
        if (id.length >= 4) {
            setCompanyID(id);
        } else {
            setCompanyID(null);
        }
    }

    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/insertCompany", {
            company_id: company_id, 
            company_name: company_name, 
            addr1: addr1, 
            addr2: addr2, 
            city: city, 
            state: state, 
            country: country, 
            zip: zip, 
            salesperson: salesperson, 
            phone: phone, 
            extension: extension, 
            fax: fax, 
            email: email, 
            web_addr: web_addr, 
            tax_id: tax_id, 
            resale: resale, 
            status: status, 
            customer: customer, 
            vendor: vendor, 
            other: other, 
            notes: notes
        }).then(()=> {
            alert('Inserted new company');
        }).catch(err => {
            console.log(err);
        });
    }

    const handleNavigate = async (cId) => {
        const cIdPassed = cId.toString();
        await Sleep(2000);
        navigate(`/company/${cIdPassed}`);
    }

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
                    <h2>ADD COMPANY</h2>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Company Name</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="CID" className="col-md-3 col-form-label">Company ID (4 characters)<span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" className="form-control" id="CID" onChange={(e) =>{
                                    handleIdChange(e);
                                }} minLength="4" maxLength="4" required/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="CName" className="col-md-3 col-form-label">Company Name <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="CName" onChange={(e) =>{
                                    setCompanyName(e.target.value)
                                }} maxLength = "100" required/>
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
                                <input type="text" className="form-control" id="Addr1" onChange={(e) =>{
                                    setAddr1(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="Addr2" className="col-md-3 col-form-label">Address 2</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="Addr2" onChange={(e) =>{
                                    setAddr2(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="city" className="col-md-3 col-form-label">City</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="city" onChange={(e) =>{
                                    setCity(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="state" className="col-md-3 col-form-label">State</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select className="form-control" name="state" id="state" onChange={(e) =>{
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
                                <input type="text" className="form-control" id="zip" onChange={(e) =>{
                                    setZip(e.target.value)
                                }} maxLength="10" />
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="country" className="col-md-3 col-form-label">Country</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="country" onChange={(e) =>{
                                    setCountry(e.target.value)
                                }} maxLength = "50"/>
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
                                <input type="text" className="form-control" id="sp" onChange={(e) =>{
                                    setSalesperson(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="phone" className="col-md-3 col-form-label">Phone</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" maxLength="13" className="form-control" id="phone" onChange={(e) =>{
                                    setPhone(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="ext" className="col-md-3 col-form-label">Extension</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" maxLength="6" className="form-control" id="ext" onChange={(e) =>{
                                    setExtension(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="fax" className="col-md-3 col-form-label">Fax</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" maxLength="13" className="form-control" id="fax" onChange={(e) =>{
                                    setFax(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="email" className="col-md-3 col-form-label">Email</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="email" onChange={(e) =>{
                                    setEmail(e.target.value)
                                }} maxLength = "100"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="wAddr" className="col-md-3 col-form-label">Web Address</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="wAddr" onChange={(e) =>{
                                    setWebAddr(e.target.value)
                                }} maxLength = "100"/>
                            </div>
                        </div>
                    </div>

                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>Other Company Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="tID" className="col-md-3 col-form-label">Tax ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="tID" onChange={(e) =>{
                                    setTaxID(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="Resale" className="col-md-3 col-form-label">Resale Certificate</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="resale" onChange={(e) =>{
                                    setResale(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="Status" className="col-md-3 col-form-label">Status</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="status" id="status" onChange={(e) =>{
                                    setStatus(e.target.value)}}>
                                    <option value="">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Obsolete">Obsolete</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">                           
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input onChange={(prev) => setCustomer(prev => !prev)} checked={customer} type="checkbox" className="custom-control-input" id="customerCheck"/>
                                    <label htmlFor="customerCheck" className="custom-control-label">Company is Customer</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input onChange={(prev) => setVendor(prev => !prev)} checked={vendor} type="checkbox" className="custom-control-input" id="vendorCheck"/>
                                    <label htmlFor="vendorCheck" className="custom-control-label">Company is Vendor</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input onChange={(prev) => setOther(prev => !prev)} checked={other}  type="checkbox" className="custom-control-input" id="otherCheck"/>
                                    <label htmlFor="otherCheck" className="custom-control-label">Company is Other</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-md-3 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" onChange={(e) =>{
                                    setNotes(e.target.value)}}/>
                            </div>
                        </div>
                    </div>

                    <div className="add">
                        <button onClick={() => handleNavigate(company_id)} type="submit" id="add-company" disabled={!submitting} className="btn btn-success m-2">Add</button>
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
export default Company;
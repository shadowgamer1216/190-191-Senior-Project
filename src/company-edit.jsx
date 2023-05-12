import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";

const CompanyEdit = ({ handleLogout }) => {
    const navigate = useNavigate();
    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    const [new_addr1, setAddr1] = useState(null);
    const [new_addr2, setAddr2] = useState(null);
    const [new_city, setCity] = useState(null);
    const [new_state, setState] = useState(null);
    const [new_country, setCountry] = useState(null);
    const [new_zip, setZip] = useState(null);
    const [new_salesperson, setSalesperson] = useState(null);
    const [new_phone, setPhone] = useState(null);
    const [new_extension, setExtension] = useState(null);
    const [new_fax, setFax] = useState(null);
    const [new_email, setEmail] = useState(null);
    const [new_web_addr, setWebAddr] = useState(null);
    const [new_tax_id, setTaxID] = useState(null);
    const [new_resale, setResale] = useState(null);
    const [new_status, setStatus] = useState(null);
    const [new_customer, setCustomer] = useState(0);
    const [new_vendor, setVendor] = useState(0);
    const [new_other, setOther] = useState(0);
    const [new_notes, setNotes] = useState(null);
    
    const { company_id } = useParams();
    const [companyData, setCompanyData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/companyEdit/${company_id}`)
        .then(response => {
            setCompanyData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [company_id]);

    //var company_id = companyData?.company_id ?? '';
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


    const handleNavigate = async (id) => {
        await Sleep(2000);
        const idPassed = id.toString();
        navigate(`/company/${company_id}`);
    }

    function handleCustomerChange() {
        const new_customer = customer === 0 ? 1 : 0;
        setVendor(new_customer);
    }

// search company function
const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/api/editCompany", { 
        company_id : company_id, 
        addr1 : new_addr1, 
        addr2: new_addr2, 
        city: new_city, 
        state: new_state, 
        country: new_country, 
        zip: new_zip, 
        salesperson: new_salesperson,
        phone: new_phone,
        extension: new_extension,
        fax : new_fax,
        email : new_email,
        web_addr : new_web_addr,
        tax_id : new_tax_id,
        resale : new_resale,
        status : new_status,
        customer : new_customer,
        vendor : new_vendor,
        other : new_other,
        notes : new_notes,

    }).then(()=> {
        alert('Edited company');
    }).catch(err => {
        console.log(err);
    });

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
                    <h2>[EDIT] COMPANY</h2>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
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
                                <input type="text" className="form-control" id="Addr1" defaultValue={addr1} onChange={(e) =>{
                                    setAddr1(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="Addr2" className="col-md-3 col-form-label">Address 2</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="Addr2" defaultValue={addr2} onChange={(e) =>{
                                    setAddr2(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="city" className="col-md-3 col-form-label">City</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="city" defaultValue={city} onChange={(e) =>{
                                    setCity(e.target.value)
                                }} maxLength = "50" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="state" className="col-md-3 col-form-label">State</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                            <select className="form-control" name="state" id="state" onChange={(e) =>{
                                    setState(e.target.value)
                                }}>
                                    <option value="{state}">{state}</option>
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
                                <input type="text" className="form-control" id="zip" defaultValue={zip} onChange={(e) =>{
                                    setZip(e.target.value)
                                }} maxLength="10"/>
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="country" className="col-md-3 col-form-label">Country</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="country" defaultValue={country} onChange={(e) =>{
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
                                <input type="text" className="form-control" id="sp" defaultValue={salesperson} onChange={(e) =>{
                                    setSalesperson(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="phone" className="col-md-3 col-form-label">Phone</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="phone" defaultValue={phone} onChange={(e) =>{
                                    setPhone(e.target.value)
                                }} maxLength = "13"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="ext" className="col-md-3 col-form-label">Extension</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="ext" defaultValue={extension} onChange={(e) =>{
                                    setExtension(e.target.value)
                                }} maxLength = "6"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="fax" className="col-md-3 col-form-label">Fax</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="fax" defaultValue={fax} onChange={(e) =>{
                                    setFax(e.target.value)
                                }} maxLength = "13"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="email" className="col-md-3 col-form-label">Email</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="email" defaultValue={email} onChange={(e) =>{
                                    setEmail(e.target.value)
                                }} maxLength = "100"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="wAddr" className="col-md-3 col-form-label">Web Address</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="wAddr" defaultValue={web_addr} onChange={(e) =>{
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
                            <label htmlFor="TID" className="col-md-3 col-form-label">Tax ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="TID" defaultValue={tax_id} onChange={(e) =>{
                                    setTaxID(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="resale" className="col-md-3 col-form-label">Resale Certificate</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="resale" defaultValue={resale} onChange={(e) =>{
                                    setResale(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="Status" className="col-md-3 col-form-label">Status</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="status" id="status" defaultValue={status} onChange={(e) =>{
                                    setStatus(e.target.value)}}>
                                    <option value="{status}">{status}</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Obsolete">Obsolete</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">                           
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input checked={customer} disabled type="checkbox" className="custom-control-input" id="customerCheck"/>
                                    <label htmlFor="customerCheck" className="custom-control-label">Company is Customer</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input checked={vendor} type="checkbox" className="custom-control-input" id="vendorCheck"/>
                                    <label htmlFor="vendorCheck" className="custom-control-label">Company is Vendor</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input checked={other} type="checkbox" className="custom-control-input" id="otherCheck"/>
                                    <label htmlFor="otherCheck" className="custom-control-label">Company is Other</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-md-3 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" defaultValue={notes}/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button onClick={() => handleNavigate({company_id})} id="edit-company" className="btn btn-outline-success">Update</button>
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
    );
};

export default CompanyEdit;

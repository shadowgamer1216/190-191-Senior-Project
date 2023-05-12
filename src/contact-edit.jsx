import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";

const Contact = ({ handleLogout }) => {
    const navigate = useNavigate();
    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    

    const [new_fname, setFname] = useState(null); 
    const [new_lname, setLname] = useState(null);
    const [new_contact_type, setContactType] = useState(null);
    const [new_title, setTitle] = useState(null);
    const [new_dept, setDept] = useState(null);
    const [new_add_1, setAdd_1] = useState(null);
    const [new_add_2, setAdd_2] = useState(null);
    const [new_city, setCity] = useState(null);
    const [new_state_in_country, setState] = useState(null);
    const [new_zip, setZip] = useState(null);
    const [new_country, setCountry] = useState(null);
    const [new_phone, setPhone] = useState(null);
    const [new_extension, setExtension] = useState(null);
    const [new_cell_phone_number, setCell] = useState(null);
    const [new_third_party_company, setThirdParty] = useState(null);
    const [new_fax, setFax] = useState(null);
    const [new_email, setEmail] = useState(null);
    const [new_notes, setNotes] = useState(null);
    
    const { contact_id } = useParams();
    const [contactData, setContactData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/contactEdit/${contact_id}`)
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


    const handleNavigate = async (cId) => {
        await Sleep(2000);
        navigate(`/contact/${contact_id}`);
    }

// search company function
const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/api/editContact", { 
        contact_id : contact_id, 
        fname : new_fname, 
        lname: new_lname, 
        contact_type: new_contact_type, 
        title: new_title, 
        dept: new_dept, 
        add_1: new_add_1, 
        add_2: new_add_2, 
        city: new_city, 
        state_in_country: new_state_in_country, 
        zip: new_zip, 
        country: new_country, 
        phone: new_phone, 
        extension: new_extension, 
        cell_phone_number: new_cell_phone_number, 
        third_party_company: new_third_party_company, 
        fax: new_fax, 
        email: new_email, 
        notes: new_notes
    }).then(()=> {
        alert('Edited contact');
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
                    <h2>[EDIT] CONTACT</h2>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
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
                                <input type="text" className="form-control" id="first" defaultValue={fname} onChange={(e) => setFname(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="last" className="col-md-3 col-form-label">Last Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="last" defaultValue={lname} onChange={(e)=> setLname(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="contact-type" className="col-md-3 col-form-label">Contact Type</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="contact-type" id="contact-type" defaultValue={contact_type} onChange={(e) =>{
                                    setContactType(e.target.value)
                                }}>
                                    <option value={contact_type}>{contact_type}</option>
                                    <option value="Shipping">Shipping</option>
                                    <option value="Billing">Billing</option>
                                    <option value="Contact">Contact</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="title" className="col-md-3 col-form-label">Title</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="title" defaultValue={title} onChange={(e)=> setTitle(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="dept" className="col-md-3 col-form-label">Department</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="dept" defaultValue={dept} onChange={(e)=> setDept(e.target.value)}/> 
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
                                <input type="text" className="form-control" id="add1" defaultValue={add_1} onChange={(e)=> setAdd_1(e.target.value)}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="add2" className="col-md-3 col-form-label">Address 2</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="add2" defaultValue={add_2} onChange={(e)=> setAdd_2(e.target.value)}/> 
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="city" className="col-md-3 col-form-label">City</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="city" defaultValue={city} onChange={(e)=> setCity(e.target.value)}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="state" className="col-md-3 col-form-label">State</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                            <select className="form-control" name="state" id="state" onChange={(e) =>{
                                    setState(e.target.value)
                                }}>
                                    <option value="{state_in_country}">{state_in_country}</option>
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
                                <input type="text" className="form-control" id="zip" defaultValue={zip} onChange={(e)=> setZip(e.target.value)}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="country" className="col-md-3 col-form-label">Country</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="country" defaultValue={country} onChange={(e)=> setCountry(e.target.value)}/> 
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
                                <input type="text" className="form-control" id="phone" defaultValue={phone} onChange={(e)=> setPhone(e.target.value)}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="extension" className="col-md-3 col-form-label">Extension</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="extension" defaultValue={extension} onChange={(e)=> setExtension(e.target.value)}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="fax" className="col-md-3 col-form-label">Fax</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="fax" defaultValue={fax} onChange={(e)=> setFax(e.target.value)}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="email" className="col-md-3 col-form-label">Email</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="email" defaultValue={email} onChange={(e)=> setEmail(e.target.value)}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="cell-phone-number" className="col-md-3 col-form-label">Cell Phone Number</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="cell-phone-number" defaultValue={cell_phone_number} onChange={(e)=> setCell(e.target.value)}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="third-party-company" className="col-md-3 col-form-label">Third Party Company</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="third-party-company" defaultValue={third_party_company} onChange={(e)=> setThirdParty(e.target.value)}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-md-3 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" defaultValue={notes} onChange={(e)=> setNotes(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                

                <br></br>
                
                <div>
                    <button onClick={() => handleNavigate({contact_id})} id="edit-company" className="btn btn-outline-success">Update</button>
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

export default Contact;

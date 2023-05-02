import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";
import Select from "react-select";

const Contact = ({ handleLogout }) => {
    const navigate = useNavigate();
    const routeChange = () => {
        let path = '/login';
        navigate(path);
    };
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (!authToken) {
            routeChange()
        }
    }, [])

    const [company_id, setCompanyID] = useState(null);
    const [company_name, setCompanyName] = useState(null);
    const [fname, setFname] = useState(null); 
    const [lname, setLname] = useState(null); 
    const [contact_type, setContactType] = useState(null);
    const [title, setTitle] = useState(null);
    const [dept, setDept] = useState(null);
    const [add_1, setAdd_1] = useState(null);
    const [add_2, setAdd_2] = useState(null);
    const [city, setCity] = useState(null);
    const [state_in_country, setState] = useState(null);
    const [zip, setZip] = useState(null);
    const [country, setCountry] = useState(null);
    const [phone, setPhone] = useState(null);
    const [extension, setExtension] = useState(null);
    const [cell_phone_number, setCell] = useState(null);
    const [third_party_company, setThirdParty] = useState(null);
    const [fax, setFax] = useState(null);
    const [email, setEmail] = useState(null);
    const [notes, setNotes] = useState(null);

    const [companyOptions, setCompanyOptions] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getCompanyData')
        .then(response => {
            const options = response.data.map(option => {
                return { value: option.company_id, label: option.company_id + " — " + option.company_name };
            });
            setCompanyOptions(options);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

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

    useEffect(() => {
        setSubmitting(company_id && fname && contact_type);
    }, [company_id, fname, contact_type]);

    const [latestContactId, setContactId] = useState(null);
    const nextContactId = latestContactId + 1;
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getLatestContactId')
        .then(response => {
            setContactId(response.data[0]['MAX(contact_id)']);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/company/${company_id}`).then((response) =>{
            setCompanyName(response.data.company_name);
        }).catch(err => {
            console.log(err);
        });
    }, [company_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/insertContact", {
            company_id: company_id, 
            company_name: company_name, 
            fname: fname, 
            lname: lname, 
            contact_type: contact_type, 
            title: title, 
            dept:dept, 
            add_1: add_1, 
            add_2: add_2, 
            city: city, 
            state_in_country: state_in_country, 
            zip: zip, 
            country: country, 
            phone: phone, 
            extension: extension, 
            cell_phone_number: cell_phone_number, 
            third_party_company: third_party_company, 
            fax: fax, 
            email: email, 
            notes: notes
        }).then(()=> {
            alert('Inserted new contact');
        }).catch(err => {
            console.log(err);
        });
    }

    const handleNavigate = async (cId) => {
        const cIdPassed = cId.toString();
        await Sleep(2000);
        navigate(`/contact/${cIdPassed}`);
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
                    <h2>ADD CONTACT</h2>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="contact-info pt-3">
                        <div className="section-headers">
                            <h5>Contact Identification</h5>
                        </div>

                        <div className="form-row">
                        <label htmlFor="company-id" className="col-3 col-form-label">Company ID <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group mb-3 col-md-8">
                                <div className="form-control p-0">
                                    <Select onChange={(e) => setCompanyID(e.value)} className="react-select" styles={customStyle} value={companyOptions.filter(function(option) {
                                        return option.value === company_id;
                                    })} id="company_id" required options={companyOptions}/>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="first" className="col-md-3 col-form-label">First Name <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" required className="form-control" id="first" onChange={(e) =>{
                                    setFname(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="last" className="col-md-3 col-form-label">Last Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="last" onChange={(e) =>{
                                    setLname(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="contact-type" className="col-md-3 col-form-label">Contact Type <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select required className="form-control" name="contact-type" id="contact-type" onChange={(e) =>{
                                    setContactType(e.target.value)
                                }}>
                                    <option value="">Select Type</option>
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
                                <input type="text" className="form-control" id="title" onChange={(e) =>{
                                    setTitle(e.target.value)
                                }} maxLength = "100"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="dept" className="col-md-3 col-form-label">Department</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="dept" onChange={(e) =>{
                                    setDept(e.target.value)
                                }} maxLength = "50"/> 
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
                                <input type="text" className="form-control" id="add1" onChange={(e) =>{
                                    setAdd_1(e.target.value)
                                }} maxLength = "50"/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="add2" className="col-md-3 col-form-label">Address 2</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="add2" onChange={(e) =>{
                                    setAdd_2(e.target.value)
                                }} maxLength = "50"/> 
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="city" className="col-md-3 col-form-label">City</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="city" onChange={(e) =>{
                                    setCity(e.target.value)
                                }} maxLength = "50"/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="state" className="col-md-3 col-form-label">State</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
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
                                }} maxLength = "10"/> 
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

                    <div className="contact-other pt-3">
                        <div className="section-headers">
                            <h5>Contact Information</h5>
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
                            <label htmlFor="extension" className="col-md-3 col-form-label">Extension</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" maxLength="6" className="form-control" id="extension" onChange={(e) =>{
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
                            <label htmlFor="cell-phone-number" className="col-md-3 col-form-label">Cell Phone Number</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" maxLength="13" className="form-control" id="cell-phone-number" onChange={(e) =>{
                                    setCell(e.target.value)
                                }}/> 
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="third-party-company" className="col-md-3 col-form-label">Third Party Company</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="third-party-company" onChange={(e) =>{
                                    setThirdParty(e.target.value)
                                }} maxLength = "100"/> 
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

                    </div>



                    <div className="submit p-3">
                        <button onClick={() => handleNavigate(nextContactId)} disabled={!submitting} type="submit" id="add-contact" className="btn btn-success">Submit</button>
                    </div>

                </form>

                <button className="btn btn-outline-dark" onClick={() => navigate("../")}>Home</button>


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

import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


const SearchContact = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const [customer_id, setCustomerID] = useState("");
    const [company, setCompany] = useState("");
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

    
    const submit = () => {
        Axios.post("http://localhost:3001/api/searchContact", {customer_id:customer_id, company:company})
        .then(()=> {
            alert('searching for contact');
        })
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getSearchContact").then((response) =>{
            setData(response.data);
        });
    }, []);

    


    return (
        <div className='page'>
            <div className='HomePageBar'>
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

                <button className="btn btn-outline-light">Logout</button>
            </nav>

            </div>

            <div className="container p-5">
                <div className="page-headers">
                    <h2>SEARCH CONTACT</h2>
                </div>
                <form>
                    <div className="contact-info pt-3">
                        <div className="form-row">

                            <label htmlFor="id" className="col-sm-0 col-form-label">Customer ID</label>
                                <div className="input-group input-group-sm mb-3 col-sm-2">
                                <input type="text" className="form-control" id="customer-id" onChange={(e) =>{
                                    setCustomerID(e.target.value)
                                }}/>
                                </div>

                                <label htmlFor="name" className="col-sm-0 col-form-label">Company</label>
                                <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="text" className="form-control" id="company-id" onChange={(e) =>{
                                    setCompany(e.target.value)
                                }}/> 
                                </div>

                        </div>
                    </div>
                    <div className='mb-5'>
                        <button onClick = {submit} type="submit" id="search-contact" className="btn btn-outline-success">Search</button>
                    </div>

                    <table className="table mt-5">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope ="col">Search Results</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row) => (
                                            <tr key={data.customer_id}>
                                                <td>{row.customer_id}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                    </table>

                    <div className='mt-5'>
                        <button className="btn btn-outline-dark" onClick={() => navigate("../Search")}>Back</button>
                        <button className="btn btn-outline-dark" onClick={() => navigate("/")}>Home</button>
                    </div>
    
                </form>
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

export default SearchContact;
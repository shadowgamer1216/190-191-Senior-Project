import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";
import axios from 'axios';


const SearchContact = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    
    const submit = () => {
        Axios.post("http://localhost:3001/api/searchContact", {})
        .then(()=> {
            alert('searching for contact');
        })
    };
    

    useEffect(() => {
        async function fetchData() {
            //const response = await axios.get('/api/searchContact');
            const response = await axios.get("http://localhost:3001/api/searchContact");
            setData(response.data);
        }
        fetchData();
    }, []);

    return (
        <div class='page'>
            <div class='HomePageBar'>
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
                                    <input type="text" className="form-control" id="company-id" onChange={() =>{
                                    }}/> 
                                </div>

                                <label htmlFor="name" className="col-sm-0 col-form-label">Company</label>
                                <div className="input-group input-group-sm mb-3 col-sm-3">
                                    <input type="text" className="form-control" id="company-name" onChange={() =>{
                                    }}/> 
                                </div>

                        </div>
                    </div>
                    <div class='mb-5'>
                        <button onClick = {submit} type="submit" id="search-contact" className="btn btn-outline-success">Search</button>
                    </div>

                    <table class="table mt-5">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope ="col">Search Results</th>
                                        </tr>
                                    </thead>
                                    <h5>No results.</h5>
                                    <tbody>
                                        {data.map((data) => (
                                            <tr key={data.contact_name}>
                                            </tr>
                                        ))}
                                    </tbody>
                    </table>

                    <div class='mt-5'>
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
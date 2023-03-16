import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


const SearchCompany = () => {
    const navigate = useNavigate();

    const submit = () => {
        //Axios.post("http://localhost:3001/api/insert", {})
        //.then(()=> {
            //alert('inserted');
        //})
    };

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

                <button className="btn btn-outline-light">Sign In</button>
            </nav>

            </div>

            <div className="container p-5">
                <div className="page-headers">
                    <h2>SEARCH COMPANY</h2>
                </div>
                <form>
                    <div className="contact-info pt-3">
                        <div className="form-row">

                            <label htmlFor="id" className="col-sm-0 col-form-label">ID</label>
                                <div className="input-group input-group-sm mb-3 col-sm-2">
                                    <input type="text" className="form-control" id="company-id" onChange={() =>{
                                    }}/> 
                                </div>

                                <label htmlFor="name" className="col-sm-0 col-form-label">Name</label>
                                <div className="input-group input-group-sm mb-3 col-sm-3">
                                    <input type="text" className="form-control" id="company-name" onChange={() =>{
                                    }}/> 
                                </div>

                        </div>
                    </div>
                    <div>
                        <button className="btn btn-outline-dark" onClick={() => navigate("")}>Search</button>
                    </div>

                    <div>
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

export default SearchCompany;
import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


const Search = () => {
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

    const submit = () => {
        //Axios.post("http://localhost:3001/api/insert", {})
        //.then(()=> {
            //alert('inserted');
        //})
    };

    return (
        <div className='SearchPage'>

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

                    <button className="btn btn-outline-light">Sign In</button>
                </nav>
            </div>

            <div className='block1'>
                <Link to = "SearchCompany">
                    <button type="button" id="Add Company" className="HomePageButton">Search Company</button>
                </Link>
                <Link to = "SearchContact">
                    <button type="button" id="Add Company" className="HomePageButton">Search Contact</button>
                </Link>
            </div>

            <button className="HomePageButton" onClick={() => navigate("../")}>Home</button>

      </div>

      


    );
};

export default Search;
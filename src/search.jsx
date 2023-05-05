import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


//const Search = () => {
function Search({ handleLogout }) {
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

    return (
        <div className='SearchPage'>

<div className='HomePageBar'>
				<nav className="navbar navbar-dark bg-maroon">
					<label className="navbar-brand">ABSOLUTE MEDIA, INC.</label>
					<div>
					<Link to ="signup">
					<button className="btn btn-outline-light">Sign Up</button>
					</Link>
					</div>
					<button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
					

				</nav>
                </div>

            <div className='block1'>
                <Link to = "SearchCompany">
                    <button type="button" id="Search Company" className="HomePageButton">Search Company</button>
                </Link>
                <Link to = "SearchShipping">
                    <button type="button" id="Search Shipping" className="HomePageButton">Search Shipping</button>
                </Link>
            </div>
            <div className='block2'>
                <Link to = "SearchComponent">
                    <button type="button" id="Search Component" className="HomePageButton">Search Component</button>
                </Link>
                <Link to = "SearchContact">
                    <button type="button" id="Search Contact" className="HomePageButton">Search Contact</button>
                </Link>
            </div>
            <div className='block3'>
                <Link to = "SearchLocation">
                    <button type="button" id="Search Location" className="HomePageButton">Search Location</button>
                </Link>
                <Link to = "SearchOrder">
                    <button type="button" id="Search Order" className="HomePageButton">Search Order</button>
                </Link>
            </div>
            <div className='block4'>
                <Link to = "SearchProduct">
                    <button type="button" id="Search Product" className="HomePageButton">Search Product</button>
                </Link>
                <Link to = "SearchItemCheckIn">
                    <button type="button" id="Search ItemCheckIn" className="HomePageButton">Search Item Check In</button>
                </Link>
            </div>

            <button className="HomePageButton" onClick={() => navigate("../")}>Home</button>

      </div>

      


    );
};

export default Search;
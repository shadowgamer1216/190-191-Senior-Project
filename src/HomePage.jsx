/*import logo from './absolutemedialogo.png';*/
import React from 'react';
import './App.css';
import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';



import { Link } from "react-router-dom";

function HomePage({ handleLogout }) {
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
    	<div className='HomePage'>
      		{/*<img src={logo} className="App-logo" alt="logo" />*/}
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
				<Link to = "Company">
					<button type="button" id="Add Company" className="HomePageButton">Add Company</button>
				</Link>
				<Link to = "Shipping">
					<button type="button" id="Add Shipping" className="HomePageButton">Add Shipping</button>
				</Link>
			</div>

			<div className='block2'>
				<Link to = "Component">
					<button type="Add Component" id="Add Component" className="HomePageButton">Add Component</button>
				</Link>
				<Link to = "Contact">
					<button type="Add Contact" id="Add Contact" className="HomePageButton">Add Contact</button>
				</Link>
			</div> 

			<div className='block3'>
				<Link to = "Location">
					<button type="Add Location" id="Add Location" className="HomePageButton">Add Location</button>
				</Link>
				<Link to = "Order">
					<button type="Add Order" id="Add Order" className="HomePageButton">Add Order</button>
				</Link>
			</div>

			<div className='block4'>
				<Link to = "Product">
					<button type="Add Product" id="Add Product" className="HomePageButton">Add Product</button>
					</Link>
				<Link to = "ItemCheckIn">
					<button type="Item Check In" id="Item Check In" className="HomePageButton">Item Check In</button>
				</Link>
			</div>

			<div className='block5'>
				{/*<Link to = "Edit">*/}
					<button type="Edit" id="Edit" className="InactiveHomePageButton">Edit</button>
				{/*</Link>*/}
				{/*<Link to = "View">*/}
					<button type="View" id="View" className="InactiveHomePageButton">View</button>
				{/*</Link>*/}
			</div>

			<div className="block6">
				<Link to = "Search">
					<button type="Search" id="Search" className="HomePageButton" >Search</button>
				</Link>
			</div>

			<div className="block7">
				<Link to = "Invoice">
					<button type="Search" id="Search" className="HomePageButton" >Invoice</button>
				</Link>
			</div>
			
			<div className="block8">
				<Link to = "PackingSlip">
					<button type="Search" id="Search" className="HomePageButton" >Packing Slip</button>
				</Link>
			</div>

			<div className="block9">
				<Link to = "QC-Inspection">
					<button type="Search" id="Search" className="HomePageButton" >QC Inspection</button>
				</Link>
			</div>

			<div className="block10">
				<Link to = "JobOrder">
					<button type="Search" id="Search" className="HomePageButton" >Job Order</button>
				</Link>
			</div>

		</div>
	);
}

export default HomePage;

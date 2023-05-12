import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";

const Location = ({ handleLogout }) => {
    const navigate = useNavigate();
    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


    const [new_location_id, setLocationID] = useState(null); 
    const [new_location_type, setLocationType] = useState(null);
    const [new_item_id, setItemID] = useState(null);
    const [new_qty, setQty] = useState(null);
    const [new_item_owner, setItemOwner] = useState(null);
    const [new_physical_location, setPhysicalLocation] = useState(null);
    const [new_notes, setNotes] = useState(null);

    const { id } = useParams();
    const [locationData, setLocationData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/locationEdit/${id}`)
        .then(response => {
            setLocationData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [id]);

    var location_id = locationData?.location_id ?? '';
    var location_type = locationData?.location_type ?? '';
    var item_id = locationData?.item_id ?? '';
    var qty = locationData?.qty ?? '';
    var item_owner = locationData?.item_owner ?? '';
    var physical_location = locationData?.physical_location ?? '';
    var notes = locationData?.notes ?? '';


    const handleNavigate = async (lId) => {
        await Sleep(2000);
        navigate(`/location/${id}`);
    }

    // search company function
    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/editLocation", { 
            id : id,     
            location_id : new_location_id,
            location_type : new_location_type,
            item_id : new_item_id,
            qty : new_qty,
            item_owner : new_item_owner,
            physical_location : new_physical_location,
            notes : new_notes,
        }).then(()=> {
            alert('Edited location');
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
                    <h2>[EDIT] LOCATION</h2>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Location Information</h5>
                        </div>
                       
                        <div className="form-row">
                            <label htmlFor="location-id" className="col-md-3 col-form-label">Location ID <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="number" className="form-control" id="location-id" defaultValue={location_id} onChange={(e) =>{
                                    setLocationID(e.target.value)
                                }} required maxLength="50"/>
                                
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="type" className="col-md-3 col-form-label">Type <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select className="form-control" name="type" id="type" defaultValue={location_type} onChange={(e) =>{
                                    setLocationType(e.target.value)
                                }} required>
                                    <option value={location_type}>{location_type}</option>
                                    <option value="Multiple Boxes">Multiple Boxes</option>
                                    <option value="Single Box">Single Box</option>
                                    <option value="Pallet">Pallet</option>
                                    <option value="Envelope">Envelope</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-id" className="col-md-3 col-form-label">Item ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" readOnly className="form-control" id="item-id" defaultValue={item_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="qty" className="col-md-3 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="number" className="form-control" id="qty" defaultValue={qty} onChange={(e) => setQty(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="owner" className="col-md-3 col-form-label">Owner</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select className="form-control" name="owner" id="owner" defaultValue={item_owner} onChange={(e) =>{
                                    setItemOwner(e.target.value)
                                }}>
                                    <option value={item_owner}>{item_owner}</option>
                                    <option value="ABS">ABS</option>
                                    <option value="Customer">Customer</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="physical-location" className="col-md-3 col-form-label">Physical Location <span style={{ color: 'red' }}>*</span> </label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select className="form-control" name="physical-location" id="physical-location" defaultValue={physical_location} onChange={(e) =>{
                                    setPhysicalLocation(e.target.value)
                                }} required>
                                    <option value={physical_location}>{physical_location}</option>
                                    <option value="ABS">ABS</option>
                                    <option value="Customer">Customer</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-md-3 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" defaultValue={notes} onChange={(e) => setNotes(e.target.value)}/>
                            </div>
                        </div>

                    </div>

                    <div>
                        <button onClick={() => handleNavigate({id})} id="edit-location" className="btn btn-outline-success">Update</button>
                    </div>

                </form>
                
                <br></br>
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

export default Location;
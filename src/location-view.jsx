import React, { useEffect, useState } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";

const Location = ({ handleLogout }) => {
    const navigate = useNavigate()

    const { id } = useParams();
    const [locationData, setLocationData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/location/${id}`)
        .then(response => {
            setLocationData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [id]);

    const location_id = locationData?.location_id ?? '';
    const location_type = locationData?.location_type ?? '';
    const item_id = locationData?.item_id ?? '';
    const qty = locationData?.qty ?? '';
    const item_owner = locationData?.item_owner ?? '';
    const physical_location = locationData?.physical_location ?? '';
    const notes = locationData?.notes ?? '';

    return (
        <div className="page">
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

                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            </nav>

            <div className="container p-5">
                <div className="page-headers">
                    <h2>ADD LOCATION VIEW PAGE</h2>
                </div>

                <form>
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Location Information</h5>
                        </div>
                       
                        <div className="form-row">
                            <label htmlFor="location-id" className="col-sm-2 col-form-label">Location ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="number" readOnly className="form-control" id="location-id" value={location_id}/>
                                
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="text" readOnly className="form-control" id="type" value={location_type}/>    
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-id" className="col-sm-2 col-form-label">Item ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="number" readOnly className="form-control" id="item-id" value={item_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="qty" className="col-sm-2 col-form-label">Qty</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="number" readOnly className="form-control" id="qty" value={qty}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="owner" className="col-sm-2 col-form-label">Owner</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="text" readOnly className="form-control" id="owner" value={item_owner}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="physical-location" className="col-sm-2 col-form-label">Physical Location</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="text" readOnly className="form-control" id="physical-location" value={physical_location}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" readOnly className="form-control" name="notes" id="custom-area" value={notes}/>
                            </div>
                        </div>

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
    )
}
export default Location;

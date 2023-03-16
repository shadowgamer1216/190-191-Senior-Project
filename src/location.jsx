import React, { useEffect, useState } from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";

const Location = ({ handleLogout }) => {
    const navigate = useNavigate()
    const [location_id, setLocationID] = useState("");
    const [location_type, setLocationType] = useState(null);
    const [item_id, setItemID] = useState(null);
    const [qty, setQty] = useState(0);
    const [item_owner, setItemOwner] = useState(null);
    const [physical_location, setPhysicalLocation] = useState(null);
    const [notes, setNotes] = useState(null);
    const [data, setData] = useState([]);
    const date = new Date();

    const submit = () => {
        Axios.post("http://localhost:3001/api/insertLocation", {location_id: location_id, location_type: location_type, item_id: item_id, qty: qty, item_owner: item_owner, physical_location: physical_location, notes: notes})
        .then(()=> {
            alert('inserted location');
        })
        
        Axios.post("http://localhost:3001/api/insertLocationHistory",{location_id: location_id, item_id: item_id, qty: qty, date: date})
        .then(()=>{
            alert('inserted location history');
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getLocationHistory").then((response) =>{
            setData(response.data);
        });
    }, []);
    
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
                    <h2>ADD LOCATION</h2>
                </div>

                <form>
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Location Information</h5>
                        </div>
                       
                        <div className="form-row">
                            <label htmlFor="location-id" className="col-sm-2 col-form-label">Location ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="number" className="form-control" id="location-id" onChange={(e) =>{
                                    setLocationID(e.target.value)
                                }} required />
                                
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="type" id="type" onChange={(e) =>{
                                    setLocationType(e.target.value)
                                }}>
                                    <option selected value="">Select Value</option>
                                    <option value="Multiple Boxes">Multiple Boxes</option>
                                    <option value="Single Box">Single Box</option>
                                    <option value="Pallet">Pallet</option>
                                    <option value="Envelope">Envelope</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-id" className="col-sm-2 col-form-label">Item ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="number" className="form-control" id="item-id" onChange={(e) =>{
                                    setItemID(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="qty" className="col-sm-2 col-form-label">Qty</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="number" className="form-control" id="qty" onChange={(e) =>{
                                    setQty(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="owner" className="col-sm-2 col-form-label">Owner</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="owner" id="owner" onChange={(e) =>{
                                    setItemOwner(e.target.value)
                                }}>
                                    <option selected value="">Select Value</option>
                                    <option value="ABS">ABS</option>
                                    <option value="Customer">Customer</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="physical-location" className="col-sm-2 col-form-label">Physical Location</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="physical-location" id="physical-location" onChange={(e) =>{
                                    setPhysicalLocation(e.target.value)
                                }}>
                                    <option selected value="">Select Value</option>
                                    <option value="ABS">ABS</option>
                                    <option value="Customer">Customer</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" onChange={(e) =>{
                                    setNotes(e.target.value)
                                }}/>
                            </div>
                        </div>

                    </div>

                    <div className="submit p-3">
                        <button onClick = {submit} type="submit" id="add-location" className="btn btn-success">Submit</button>
                    </div>

                </form>

                <form>
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Location History</h5>
                        </div>
                        {data.length > 0 && (
                        <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope ="col">Item ID</th>
                                        <th scope ="col">Qty</th>
                                        <th scope ="col">Date Added</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {data.map((row) => (
                                    <tr key={row.location_id}>
                                        <td>{row.item_id}</td>
                                        <td>{row.qty}</td>
                                        <td>{row.date_added.slice(0,10)}</td>
                                    </tr>
                                   ))}
                                </tbody>
                        </table>
                        )}
                    </div>
                </form>

                <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Home</button>

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

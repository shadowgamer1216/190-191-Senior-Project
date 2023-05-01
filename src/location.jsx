import React, { useEffect, useState } from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";
import Select from "react-select";

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

    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        setSubmitting(location_id && location_type && item_id && physical_location);
    }, [location_id, location_type, item_id, physical_location]);

    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const submit = async(e) => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/insertLocation", {
            location_id: location_id, 
            location_type: location_type, 
            item_id: item_id, 
            qty: qty, 
            item_owner: item_owner, 
            physical_location: physical_location, 
            notes: notes
        }).catch(err => {
            console.log(err);
        });
        await Axios.post("http://localhost:3001/api/insertLocationHistory",{
            location_id: location_id, 
            item_id: item_id, 
            qty: qty, 
            date: date
        }).catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getLocationHistory").then((response) =>{
            setData(response.data);
        });
    }, []);

    const handleNavigate = async (id) => {
        const idPassed = id.toString();
        await Sleep(2000);
        navigate(`/location/${idPassed}`);
    };

    const [latestLocationId, setLocationId] = useState(null);
    const nextLocationId = latestLocationId + 1;
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getLatestLocationId')
        .then(response => {
            setLocationId(response.data[0]['MAX(id)']);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const [itemOptions, setItemOptions] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getComponentData')
        .then(response => {
            const options = response.data.map(option => {
                return { value: option.component_id, label: option.component_id + " — " + option.title + " (" + option.component_type + ")"};
            });
            setItemOptions(options);
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
                    <h2>ADD LOCATION</h2>
                </div>

                <form onSubmit={submit} autoComplete="off">
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Location Information</h5>
                        </div>
                       
                        <div className="form-row">
                            <label htmlFor="location-id" className="col-md-3 col-form-label">Location ID <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="number" className="form-control" id="location-id" onChange={(e) =>{
                                    setLocationID(e.target.value)
                                }} required maxLength="50"/>
                                
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="type" className="col-md-3 col-form-label">Type <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select className="form-control" name="type" id="type" onChange={(e) =>{
                                    setLocationType(e.target.value)
                                }} required>
                                    <option value="">Select Type</option>
                                    <option value="Multiple Boxes">Multiple Boxes</option>
                                    <option value="Single Box">Single Box</option>
                                    <option value="Pallet">Pallet</option>
                                    <option value="Envelope">Envelope</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-id" className="col-md-3 col-form-label">Item ID <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group mb-3 col-md-8">
                                <div className="form-control p-0">
                                    <Select onChange={(e) => setItemID(e.value)} className="react-select" styles={customStyle} value={itemOptions.filter(function(option) {
                                        return option.value === item_id;
                                    })} id="item_id" required options={itemOptions}/>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="qty" className="col-md-3 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="number" className="form-control" id="qty" onChange={(e) =>{
                                    setQty(e.target.value)
                                }} placeholder="0"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="owner" className="col-md-3 col-form-label">Owner</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select className="form-control" name="owner" id="owner" onChange={(e) =>{
                                    setItemOwner(e.target.value)
                                }}>
                                    <option value="">Select Option</option>
                                    <option value="ABS">ABS</option>
                                    <option value="Customer">Customer</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="physical-location" className="col-md-3 col-form-label">Physical Location <span style={{ color: 'red' }}>*</span> </label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select className="form-control" name="physical-location" id="physical-location" onChange={(e) =>{
                                    setPhysicalLocation(e.target.value)
                                }} required>
                                    <option value="">Select Option</option>
                                    <option value="ABS">ABS</option>
                                    <option value="Customer">Customer</option>
                                </select>
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
                        <button onClick={() => handleNavigate(nextLocationId)} disabled={!submitting} type="submit" id="add-location" className="btn btn-success">Submit</button>
                    </div>

                </form>

                <form>
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Location History</h5>
                        </div>
                        {currentData.length > 0 && (
                            <>
                            <div className="table-responsive-md">
                                <table class="table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th scope ="col">Item ID</th>
                                            <th scope ="col">Qty</th>
                                            <th scope ="col">Date Added</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentData.map((row) => (
                                            <tr key={row.location_id}>
                                                <td>{row.item_id}</td>
                                                <td>{row.qty}</td>
                                                <td>{row.date_added.slice(0,10)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button type="button" class="btn btn-dark mr-2" onClick={handleFirstPage} disabled={currentPage === 1}>First</button>
                                    <button type="button" class="btn btn-dark mr-2" onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                                    <span class="text-center">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                    <button type="button" class="btn btn-dark ml-2" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                                    <button type="button" class="btn btn-dark ml-2" onClick={handleLastPage} disabled={currentPage === totalPages}>Last</button>
                                </div>
                            </div>
                            </>
                        )}
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
    )
}
export default Location;

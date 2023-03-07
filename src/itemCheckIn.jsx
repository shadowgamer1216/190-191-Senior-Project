import React, { useState } from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";

const ItemCheckIn = () => {
    const navigate = useNavigate();
    const [customer_id, setCustomerID] = useState("");
    const [item_id, setItemID] = useState("");
    const [mfr_pn, setMfrPn] = useState("");
    const [description, setDescription] = useState("");
    const [carrier, setCarrier] = useState("");
    const [quantity, setQuantity] = useState("");
    const [disposition, setDisposition] = useState("");
    const [signed_for_by, setSignedForBy] = useState("");
    const [date_in, setDateIn] = useState("");
    const [date_complete, setDateComplete] = useState("");

    const submit = () => {
        Axios.post("http://localhost:3001/api/insertItem", {customer_id: customer_id, item_id: item_id, mfr_pn: mfr_pn, description: description, carrier: carrier, quantity: quantity, disposition: disposition, signed_for_by: signed_for_by, date_in: date_in, date_complete: date_complete})
        .then(()=> {
            alert('inserted item');
        })
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
                        <Link className="nav-link pl-4" to="/">Home</Link>
                        <Link className="nav-link">Settings</Link>
                    </div>
                </div>

                <button className="btn btn-outline-light">Sign In</button>
            </nav>

            <div className="container p-5">
                <div className="page-headers">
                    <h2>ITEM CHECK IN</h2>
                </div>

                <form>
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Item Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer-id" className="col-sm-2 col-form-label">Customer ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="customer-id" onChange={(e) =>{
                                    setCustomerID(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-id" className="col-sm-2 col-form-label">Item ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="item-id" onChange={(e) =>{
                                    setItemID(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="mfr-pn" className="col-sm-2 col-form-label">MFR PN</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="mfr-pn" onChange={(e) =>{
                                    setMfrPn(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="description" onChange={(e) =>{
                                    setDescription(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="carrier" className="col-sm-2 col-form-label">Carrier</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="carrier" onChange={(e) =>{
                                    setCarrier(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="quantity" className="col-sm-2 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="quantity" onChange={(e) =>{
                                    setQuantity(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="disposition" className="col-sm-2 col-form-label">Disposition</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="disposition" id="disposition" onChange={(e) =>{
                                    setDisposition(e.target.value)
                                }}>
                                    <option selected value="">Select Value</option>
                                    <option value="1">X1_TBD</option>
                                    <option value="2">X2_TBD</option>
                                    <option value="3">X3_TBD</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="signed-for-by" className="col-sm-2 col-form-label">Signed For By</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="signed-for-by" onChange={(e) =>{
                                    setSignedForBy(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date-in" className="col-sm-2 col-form-label">Date In</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="date" className="form-control" name="date-in" id="date-in" onChange={(e) =>{
                                    setDateIn(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date-completed" className="col-sm-2 col-form-label">Date Completed</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="date" className="form-control" name="date-completed" id="date-completed" onChange={(e) =>{
                                    setDateComplete(e.target.value)
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className="submit">
                        <button type="submit" id="add-product" className="btn btn-success m-2">Submit</button>
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
export default ItemCheckIn;
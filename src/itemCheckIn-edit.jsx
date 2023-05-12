import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";

const ItemCheckIn = ({ handleLogout }) => {
    const navigate = useNavigate();
    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const [new_customer_id, setCustomerID] = useState(null);
    const [new_item_id, setItemID] = useState(null);
    const [new_mfr_pn, setMfrPn] = useState(null);
    const [new_description, setDescription] = useState(null);
    const [new_carrier, setCarrier] = useState(null);
    const [new_quantity, setQuantity] = useState(null);
    const [new_disposition, setDisposition] = useState(null);
    const [new_signed_for_by, setSignedForBy] = useState(null);
    const [new_date_in, setDateIn] = useState(null);
    const [new_date_complete, setDateComplete] = useState(null);

    const { id } = useParams();
    const [itemCheckInData, setItemCheckInData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/itemCheckInEdit/${id}`)
        .then(response => {
            setItemCheckInData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [id]);

    var customer_id = itemCheckInData?.customer_id ?? '';
    var item_id = itemCheckInData?.item_id ?? '';
    var mfr_pn = itemCheckInData?.mfr_pn ?? '';
    var description = itemCheckInData?.description ?? '';
    var carrier = itemCheckInData?.carrier ?? '';
    var quantity = itemCheckInData?.quantity ?? '';
    var disposition = itemCheckInData?.disposition ?? '';
    var signed_for_by = itemCheckInData?.signed_for_by ?? '';
    var date_in = itemCheckInData?.date_in ?? '';
    var date_complete = itemCheckInData?.date_complete ?? '';


    const handleNavigate = async (iId) => {
        await Sleep(2000);
        navigate(`/itemCheckIn/${id}`);
    }

    // search company function
    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/editItemCheckIn", { 
            id : id,     
            customer_id : new_customer_id,
            item_id : new_item_id,
            mfr_pn : new_mfr_pn,
            description : new_description,
            carrier : new_carrier,
            quantity : new_quantity,
            disposition : new_disposition,
            signed_for_by : new_signed_for_by,
            date_in : new_date_in,
            date_complete : new_date_complete,
        }).then(()=> {
            alert('Edited item check in');
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
                    <h2>[EDIT] ITEM CHECK IN</h2>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Item Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer-id" className="col-md-3 col-form-label">Customer ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" readOnly className="form-control" id="customer-id" defaultValue={customer_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-id" className="col-md-3 col-form-label">Item ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" readOnly className="form-control" id="item-id" defaultValue={item_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="mfr-pn" className="col-md-3 col-form-label">MFR PN</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="mfr-pn" defaultValue={mfr_pn} onChange={(e) =>{
                                    setMfrPn(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="description" className="col-md-3 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea defaultValue={description} onChange={(e) => setDescription(e.target.value)} rows="4" cols="50" className="form-control" id="description" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="carrier" className="col-md-3 col-form-label">Carrier</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="carrier" defaultValue={carrier} onChange={(e) =>{
                                    setCarrier(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="quantity" className="col-md-3 col-form-label">Quantity <span style={{ color: 'red' }}>*</span> </label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="number" className="form-control" id="quantity" defaultValue={quantity} onChange={(e) =>{
                                    setQuantity(e.target.value)
                                }} required/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="disposition" className="col-md-3 col-form-label">Disposition</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select className="form-control" name="disposition" id="disposition" defaultValue={disposition} onChange={(e) =>{
                                    setDisposition(e.target.value)
                                }}>
                                    <option value={disposition}>{disposition}</option>
                                    <option value="Recieving">Receiving</option>
                                    <option value="Delivered to Production">Delivered to Production</option>
                                    <option value="Inventory">Inventory</option>
                                    <option value="Rep Notified">Rep Notified</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="signed-for-by" className="col-md-3 col-form-label">Signed For By</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="signed-for-by" defaultValue={signed_for_by} onChange={(e) =>{
                                    setSignedForBy(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date-in" className="col-md-3 col-form-label">Date In</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="datetime-local" className="form-control" name="date-in" id="date-in" defaultValue={date_in} onChange={(e) =>{
                                    setDateIn(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date-completed" className="col-md-3 col-form-label">Date Completed</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="datetime-local" className="form-control" name="date-complete" id="date-complete" defaultValue={date_complete} onChange={(e) =>{
                                    setDateComplete(e.target.value)
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className="submit p-3">
                        <button onClick={() => handleNavigate({id})} id="edit-item-check-in" className="btn btn-outline-success">Update</button>
                    </div>
                </form>

                <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Back</button>
                <br></br>

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
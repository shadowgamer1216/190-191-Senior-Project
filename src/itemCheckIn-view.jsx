import React, {useEffect, useState } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";

const ItemCheckIn = ({ handleLogout }) => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [itemCheckInData, setItemCheckInData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/itemCheckIn/${id}`)
        .then(response => {
            setItemCheckInData(response.data);
            console.log(itemCheckInData?.customer_id);
        })
        .catch(error => {
            console.log(error);
        });
    }, [id]);

    const customer_id = itemCheckInData?.customer_id ?? '';
    const item_id = itemCheckInData?.item_id ?? '';
    const mfr_pn = itemCheckInData?.mfr_pn ?? '';
    const description = itemCheckInData?.description ?? '';
    const carrier = itemCheckInData?.carrier ?? '';
    const quantity = itemCheckInData?.quantity ?? '';
    const disposition = itemCheckInData?.disposition ?? '';
    const signed_for_by = itemCheckInData?.signed_for_by ?? '';
    const date_in = itemCheckInData?.date_in ?? '';
    const date_complete = itemCheckInData?.date_complete ?? '';

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
                    <h2>ITEM CHECK IN VIEW</h2>
                </div>

                <form>
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Item Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer-id" className="col-sm-2 col-form-label">Customer ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="customer-id" value={customer_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-id" className="col-sm-2 col-form-label">Item ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="item-id" value={item_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="mfr-pn" className="col-sm-2 col-form-label">MFR PN</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="mfr-pn" value={mfr_pn}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="description" value={description}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="carrier" className="col-sm-2 col-form-label">Carrier</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="carrier" value={carrier}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="quantity" className="col-sm-2 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="quantity" value={quantity}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="disposition" className="col-sm-2 col-form-label">Disposition</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="text" readOnly className="form-control" id="disposition" value={disposition}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="signed-for-by" className="col-sm-2 col-form-label">Signed For By</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="signed-for-by" value={signed_for_by}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date-in" className="col-sm-2 col-form-label">Date In</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="text" readOnly className="form-control" name="date-in" id="date-in" value={date_in.slice(0,10)}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date-completed" className="col-sm-2 col-form-label">Date Completed</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="text" readOnly className="form-control" name="date-complete" id="date-complete" value={date_complete.slice(0,10)}/>
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
export default ItemCheckIn;
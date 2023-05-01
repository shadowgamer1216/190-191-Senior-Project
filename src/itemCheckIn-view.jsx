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
        })
        .catch(error => {
            console.log(error);
        });
    }, [id]);

    var customer_id = itemCheckInData?.customer_id ?? '';
    const [customer_name, setCustomerName] = useState('');
    useEffect(() => {
        if(customer_id) {
            Axios.get(`http://localhost:3001/api/company/${customer_id}`).then((response) =>{
                setCustomerName(response.data.company_name);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [customer_id]);
    var item_id = itemCheckInData?.item_id ?? '';
    const [itemName, setItemName] = useState('');
    const [itemType, setItemType] = useState('');
    useEffect(() => {
        if(item_id) {
            Axios.get(`http://localhost:3001/api/component/${item_id}`).then((response) =>{
                setItemName(response.data.title);
                setItemType(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [item_id]);
    var mfr_pn = itemCheckInData?.mfr_pn ?? '';
    var description = itemCheckInData?.description ?? '';
    var carrier = itemCheckInData?.carrier ?? '';
    var quantity = itemCheckInData?.quantity ?? '';
    var disposition = itemCheckInData?.disposition ?? '';
    var signed_for_by = itemCheckInData?.signed_for_by ?? '';
    var date_in = itemCheckInData?.date_in ?? '';
    var date_complete = itemCheckInData?.date_complete ?? '';

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
                    <h2>[VIEW] ITEM CHECK IN</h2>
                </div>

                <form>
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Item Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer-id" className="col-md-3 col-form-label">Customer ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" readOnly className="form-control" id="customer-id" value={customer_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer-name" className="col-md-3 col-form-label">Customer Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="customer-name" value={customer_name}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-id" className="col-md-3 col-form-label">Item ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" readOnly className="form-control" id="item-id" value={item_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-name" className="col-md-3 col-form-label">Item Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="item-name" value={itemName}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-type" className="col-md-3 col-form-label">Item Type</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="item-type" value={itemType}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="mfr-pn" className="col-md-3 col-form-label">MFR PN</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="mfr-pn" value={mfr_pn}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="description" className="col-md-3 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" readOnly className="form-control" id="description" value={description}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="carrier" className="col-md-3 col-form-label">Carrier</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="carrier" value={carrier}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="quantity" className="col-md-3 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" readOnly className="form-control" id="quantity" value={quantity}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="disposition" className="col-md-3 col-form-label">Disposition</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="disposition" value={disposition}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="signed-for-by" className="col-md-3 col-form-label">Signed For By</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="signed-for-by" value={signed_for_by}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date-in" className="col-md-3 col-form-label">Date In</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" name="date-in" id="date-in" value={date_in.slice(0,10)}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date-completed" className="col-md-3 col-form-label">Date Completed</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" name="date-complete" id="date-complete" value={date_complete.slice(0,10)}/>
                            </div>
                        </div>
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
    )
}
export default ItemCheckIn;
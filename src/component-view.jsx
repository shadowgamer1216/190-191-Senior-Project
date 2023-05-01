import React from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";

const Component = ({ handleLogout }) => {
    const navigate = useNavigate();
    
    const { component_id } = useParams();
    const [componentData, setComponentData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/component/${component_id}`)
        .then(response => {
            setComponentData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [component_id]);

    var customer_id = componentData?.customer_id ?? '';
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
    var component_type = componentData?.component_type ?? '';
    var title = componentData?.title ?? '';
    var oem_pn = componentData?.oem_pn ?? '';
    var component_description = componentData?.component_description ?? '';
    var size = componentData?.size ?? '';
    var supplier_brand_id = componentData?.supplier_brand_id ?? '';
    var color = componentData?.color ?? '';
    var notes = componentData?.notes ?? '';
    var uom = componentData?.uom ?? '';
    var component_status = componentData?.component_status ?? '';
    var owned_by = componentData?.owned_by ?? 0;
    var packaging_component = componentData?.packaging_component ?? 0;


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
                    <h2>[VIEW] COMPONENT</h2>
                </div>

                <form autoComplete="off">
                    <div className="component-info pt-3">
                        <div className="section-headers">
                            <h5>Enter/Edit Components</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="component_id" className="col-3 col-form-label">Component ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input tabIndex="-1" readOnly type="text" className="form-control" id="component_id" value={component_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer_id" className="col-3 col-form-label">Customer ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" readOnly className="form-control" id="customer_id" value={customer_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer-name" className="col-md-3 col-form-label">Customer Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="customer-name" value={customer_name}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="component_type" className="col-3 col-form-label">Component Type</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="component_type" value={component_type}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="title" className="col-3 col-form-label">Title</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="title" value={title}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="oem" className="col-3 col-form-label">OEM P/N</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="oem" value={oem_pn}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="component_description" className="col-3 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" readOnly className="form-control" id="component_description" value={component_description}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="size" className="col-3 col-form-label">Size</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="size" value={size}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="supplier/brand" className="col-3 col-form-label">Supplier/Brand</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="supplier/brand" value={supplier_brand_id}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="color" className="col-3 col-form-label">Color</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="color" value={color}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-3 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" readOnly className="form-control" id="notes" value={notes}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="uom" className="col-3 col-form-label">Unit of Measure</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="uom" value={uom}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="status" className="col-3 col-form-label">Status</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" readOnly className="form-control" id="status" value={component_status}/>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <label htmlFor="owned_by" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Owned by Individual Company?</label>
                            <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                <input checked={owned_by} type="checkbox" readOnly className="custom-control-input" id="owned_by" />
                                <label className="custom-control-label" htmlFor="owned_by"></label>
                            </div>

                            <label htmlFor="packaging_component" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Packaging Component?</label>
                            <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                <input checked={packaging_component} type="checkbox" readOnly className="custom-control-input" id="packaging_component" />
                                <label className="custom-control-label" htmlFor="packaging_component"></label>
                            </div> 
                        </div>
                    </div>
                    
                </form>

                {/* <div className="product-location m-3 p-3">
                    <label htmlFor="add_location" className="col-form-label-sm">Add Location for this Component</label>
                    <div className="input-group input-group-sm mb-3 col-md-4">
                        <select className="form-control form-control-sm" id="add_location">
                            <option value="">Select Location</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <button type="submit" id="add_location" className="btn btn-info btn-sm ml-3">Add Location</button>
                    </div>
                </div> */}

               
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

export default Component;

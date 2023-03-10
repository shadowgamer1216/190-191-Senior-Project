import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import Axios from "axios";

const Component = () => {
    const navigate = useNavigate();
    const[customer_id, setCustomerID] = useState ("");
    const[component_type, setComponent_Type] = useState ("");
    const[oem_pn, setOEM_PN] = useState ("");
    const[description_1, setDescription_1] = useState ("");
    const[description_2, setDescription_2] = useState ("");
    const[description_3, setDescription_3] = useState ("");
    const[description_4, setDescription_4] = useState ("");
    const[description_5, setDescription_5] = useState ("");
    const[size, setSize] = useState ("");
    const[supplier_brand_id, setSupplier_Brand_ID] = useState ("");
    const[color, setColor] = useState ("");
    const[notes, setNotes] = useState ("");
    const[owned_by, setOwned_By] = useState ("");
    const[uom, setUOM] = useState ("");
    const[component_status, setComponent_Status] = useState ("");
    const[packaging_component, setPackaging_Component] = useState ("");
    const[item_location, setItem_Location] = useState ("");


    const submit = () => {
        Axios.post("http://localhost:3001/api/insertComponent", 
        {
            customer_id: customer_id, 
            component_type: component_type, 
            oem_pn: oem_pn, 
            description_1: description_1, 
            description_2: description_2, 
            description_3: description_3, 
            description_4: description_4, 
            description_5: description_5, 
            size: size, 
            supplier_brand_id: supplier_brand_id, 
            color: color, notes: notes, 
            owned_by: owned_by, 
            uom: uom, 
            component_status: component_status, 
            packaging_component: packaging_component, 
            item_location: item_location
        })
        .then(()=> {
            alert('inserted component');
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

                <button className="btn btn-outline-light" onClick={() => navigate("/login")}>Sign In</button>
            </nav>


            <div className="container p-5">
                <div className="page-headers">
                    <h2>ADD COMPONENT</h2>
                </div>

                <form>
                    <div className="component-info pt-3">
                        <div className="section-headers">
                            <h5>Enter/Edit Components</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="CID" className="col-sm-2 col-form-label">Customer ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="CID" onChange={(e) => {
                                    setCustomerID(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="componenttype" className="col-sm-2 col-form-label">Component Type</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="componenttype" id="componenttype" onChange={(e) => {
                                    setComponent_Type(e.target.value)
                                }}>
                                    <option selected value="">Select Value</option>
                                    <option value="Blank Disc/Tape"> Blank Disc/Tape</option>
                                    <option value="Enclosure"> Enclosure</option>
                                    <option value="Insert"> Insert</option>
                                    <option value="Items"> Items</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="oem" className="col-sm-2 col-form-label">OEM P/N</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="oem" onChange={(e) => {
                                    setOEM_PN(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="desription1" className="col-sm-2 col-form-label">Description 1</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="description1" onChange={(e) => {
                                    setDescription_1(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="desription2" className="col-sm-2 col-form-label">Description 2</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="description2" onChange={(e) => {
                                    setDescription_2(e.target.value)
                                }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="desription3" className="col-sm-2 col-form-label">Description 3</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="description3" onChange={(e) => {
                                    setDescription_3(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="desription4" className="col-sm-2 col-form-label">Description 4</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="description4" onChange={(e) => {
                                    setDescription_4(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="desription5" className="col-sm-2 col-form-label">Description 5</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="description5" onChange={(e) => {
                                    setDescription_5(e.target.value)
                                 }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="size" className="col-sm-2 col-form-label">Size</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="size" onChange={(e) => {
                                    setSize(e.target.value)
                                 }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="supplier" className="col-sm-2 col-form-label">Supplier/Brand</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="supplier" id="supplier" onChange={(e) => {
                                    setSupplier_Brand_ID(e.target.value)
                                 }}>
                                    <option selected value="">Select Value</option>
                                    <option value="TBD"> TBD</option>
                                    <option value="TBD"> TBD</option>
                                    <option value="TBD"> TBD</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="color" className="col-sm-2 col-form-label">Color</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="color" onChange={(e) => {
                                    setColor(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" onChange={(e) => {
                                    setNotes(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="uom" className="col-sm-2 col-form-label">Unit of Measure</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="uom" id="uom" onChange={(e) => {
                                    setUOM(e.target.value)
                                 }}>
                                    <option selected value="">Select Value</option>
                                    <option value="TBD"> TBD</option>
                                    <option value="TBD"> TBD</option>
                                    <option value="TBD"> TBD</option>
                                </select>
                            </div>
                        </div>


                        <div className="form-row">
                            <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="status" id="status" onChange={(e) => {
                                    setComponent_Status(e.target.value)
                                 }}>
                                    <option selected value="">Select Value</option>
                                    <option value="new"> New</option>
                                    <option value="TBD"> TBD</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="ownedbycheck" onChange={(e) => {
                                        setOwned_By(e.target.value)
                                    }}/>
                                    <label htmlFor="ownedbycheck" className="custom-control-label">Owned By Individual Company?</label>
                                </div>
                            </div>
                   
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="packagingcomponent" onChange={(e) => {
                                        setPackaging_Component(e.target.value)
                                    }}/>
                                    <label htmlFor="packagingcomponent" className="custom-control-label">Packaging Component</label>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>List of Inventory Locations</h5>
                        </div>

                        <div className="order-information">
                            <table className="table table-sm table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Item ID</th>
                                        <th scope="col">Location ID</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Physical Location</th>
                                        <th scope="col">Quantity on Loc</th>
                                        <th scope="col">Add to Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"></th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="product-location m-3 p-3">
                            <label htmlFor="add-location" className="col-form-label-sm">Add a location for this Item</label>
                            <div className="input-group input-group-sm mb-3 col-sm-4">
                                <select className="form-control form-control-sm" name="add-location" id="add-location">
                                    <option defaultValue="0">Select Location</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                                <button type="submit" id="add-location" className="btn btn-info btn-sm ml-3">Add Location</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="submit p-3">
                        <button onClick = {submit} type="submit" id="add-contact" className="btn btn-success">Submit</button>
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
    );
};

export default Component;

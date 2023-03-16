import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import Axios from "axios";


const Product = () => {
    const navigate = useNavigate();

    const [old_abs_id, setOldID] = useState(0);
    const [customer_id, setCustomerID] = useState('');
    const [product_category, setCategory] = useState('');
    const [oem_product_id, setOemID] = useState('');
    const [product_title, setTitle] = useState('');
    const [product_desc, setDesc] = useState('');
    const [product_repl, setRepl] = useState('');
    const [master_format, setMasterFormat] = useState('');
    const [master_received, setMasterReceived] = useState('');
    const [master_label, setMasterLabel] = useState('');
    const [master_capacity, setMasterCapacity] = useState('');
    const [master_loc, setMasterLoc] = useState('');
    const [films_loc, setFilmsLoc] = useState('');
    const [date_code_required, setDateRequired] = useState('');
    const [date_code_position, setDatePosition] = useState('');
    const [inner_hub, setInnerHub] = useState('');
    const [inner_hub_position, setInnerPos] = useState('');
    const [floodcoat, setFloodcoat] = useState('');
    const [rimage_print, setRimPrint] = useState('');
    const [color_notes, setColorNotes] = useState('');
    const [packaging_notes, setPackNotes] = useState('');
    const [product_notes, setProductNotes] = useState('');
    const [product_status, setProductStatus] = useState('');
    

    const submit = () => {
        Axios.post("http://localhost:3001/api/insert-product", 
        {
            old_abs_id: old_abs_id,
            customer_id: customer_id,
            product_category: product_category,
            oem_product_id: oem_product_id,
            product_title: product_title,
            product_desc: product_desc,
            product_repl: product_repl,
            master_format: master_format,
            master_received: master_received,
            master_label: master_label,
            master_capacity: master_capacity,
            master_loc: master_loc,
            films_loc: films_loc,
            //date_code_required: date_code_required,
            date_code_position: date_code_position,
            inner_hub: inner_hub,
            inner_hub_position: inner_hub_position,
            //floodcoat: floodcoat,
            //rimage_print: rimage_print,
            color_notes: color_notes,
            packaging_notes: packaging_notes,
            product_notes: product_notes,
            product_status: product_status
            
        })
        .then(()=> {
            alert('inserted product');
        });
    };

    function AddColor() {
        const [inputFields, setInputFields] = useState([{ color: "" }])
        const addField = () => {
            let newField = { color: "" }
            setInputFields([...inputFields, newField])
        }
        const removeField = (index) => {
            let data = [...inputFields];
            data.splice(index, 1);
            setInputFields(data);
        }
    
        return (
            <div className="product-colors">
                <div className="form-row">
                    <div className="input-group input-group-sm mb-3 col-sm">
                        {inputFields.length < 8 ? <button type="button" id="color_add" className="btn btn-outline-primary btn-sm" onClick={addField}>Add Color</button>:
                        <button disabled type="button" className="btn btn-secondary btn-sm">Add Color</button>}
                    </div>
                </div>
    
                {inputFields.map((input, index) => {
                    return (
                        <>
                            <div className="form-row">
                                <label className="col-sm-2 col-form-label">Color #{index + 1}</label>
                                <div className="input-group input-group-sm mb-3 col-sm-9">
                                    <input
                                        key={index}
                                        className="form-control field"
                                        type="text"
                                        id={`color_${index + 1}`}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3 col-sm-1">
                                    <button
                                        type="button"
                                        id="color_remove"
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={removeField}
                                    >X</button>
                                </div>
                            </div>
                        </>
                    );
                })}
                
            </div>
        );
    }
    function AddComponent() {
        const [inputFields, setInputFields] = useState([
            { component: "" }
        ])
        const addField = () => {
            let newField = { component: "" }
            setInputFields([...inputFields, newField])
        }
        const removeField = (index) => {
            let data = [...inputFields];
            data.splice(index, 1)
            setInputFields(data)
        }
    
        return (
            <div className="product-components">
                <div className="form-row">
                    <div className="input-group input-group-sm mb-3 col-sm-10">
                        {inputFields.length < 12 ? <button type="button" id="component-add" className="btn btn-outline-primary btn-sm" onClick={addField}>Add Component</button>:
                        <button disabled type="button" className="btn btn-secondary btn-sm">Add Component</button>}
                    </div>
                </div>
                {inputFields.map((input, index) => {
                    return (
                        <>
                            <div className="form-row">
                                <label className="col-sm-2 col-form-label">Component #{index + 1}</label>
                                <div className="input-group input-group-sm mb-3 col-sm-9">
                                    <input
                                        key={index}
                                        className="form-control field"
                                        type="text"
                                        id={`color_${index + 1}`}
                                    />
                                </div>
                                <div className="input-group input-group-sm mb-3 col-sm-1">
                                    <button
                                        type="button"
                                        id="component-remove"
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={removeField}
                                    >X</button>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        );
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
                        <Link className="nav-link pl-4" to="/">Home</Link>
                        <Link className="nav-link">Settings</Link>
                    </div>
                </div>

                <button className="btn btn-outline-light">Sign In</button>
            </nav>

            <div className="container p-5">
                <div className="page-headers">
                    <h2>ADD PRODUCT</h2>
                </div>

                <form>
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Product Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_id" className="col-sm-2 col-form-label">ABS Product P/N</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input readOnly type="text" className="form-control" id="product_id"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="old_abs_id" className="col-sm-2 col-form-label">Old ABS P/N</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input onChange={(e) => {setOldID(e.target.value)}} type="text" className="form-control" id="old_abs_id" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer" className="col-sm-2 col-form-label">Customer</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="customer" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer_id" className="col-sm-2 col-form-label">Customer ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input onChange={(e) => setCustomerID(e.target.value)} type="text" className="form-control" id="customer_id" placeholder="ABSO" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_category" className="col-sm-2 col-form-label">Category</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select onChange={(e) => setCategory(e.target.value)} className="form-control" id="product_category">
                                    <option defaultValue="0">Select Category</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="oem_product_id" className="col-sm-2 col-form-label">OEM Product P/N</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input onChange={(e) => setOemID(e.target.value)} type="text" className="form-control" id="oem_product_id" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_title" className="col-sm-2 col-form-label">Title</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="product_title" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_desc" className="col-sm-2 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea onChange={(e) => setDesc(e.target.value)} rows="4" cols="50" className="form-control" id="product_desc" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_repl" className="col-sm-2 col-form-label">Replication</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select onChange={(e) => setRepl(e.target.value)} className="form-control" id="product_repl">
                                    <option defaultValue="0">Select Type</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_format" className="col-sm-2 col-form-label">Master Format</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select onChange={(e) => setMasterFormat(e.target.value)} className="form-control" id="master_format">
                                    <option defaultValue="0">Select Format</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_received" className="col-sm-2 col-form-label">Master Received</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input onChange={(e) => setMasterReceived(e.target.value)} type="date" className="form-control" id="master_received" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_label" className="col-sm-2 col-form-label">Master Label</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input onChange={(e) => setMasterLabel(e.target.value)} type="text" className="form-control" id="master_label" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_capacity" className="col-sm-2 col-form-label">Master Capacity</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input onChange={(e) => setMasterCapacity(e.target.value)} type="text" className="form-control" id="master_capacity" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_location" className="col-sm-2 col-form-label">Master Location</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select onChange={(e) => setMasterLoc(e.target.value)} className="form-control" id="master_location">
                                    <option defaultValue="0">Select Location</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="films_location" className="col-sm-2 col-form-label">Films Location</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select onChange={(e) => setFilmsLoc(e.target.value)} className="form-control" id="films_location">
                                    <option defaultValue="0">Select Location</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input onChange={(e) => setDateRequired(e.target.value)} type="checkbox" className="custom-control-input" id="date_code_required" />
                                    <label htmlFor="date_code_required" className="custom-control-label">Date Code Required?</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date_code_position" className="col-sm-2 col-form-label">Date Code Position</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input onChange={(e) => setDatePosition(e.target.value)} type="text" className="form-control" id="date_code_position" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="inner_hub" className="col-sm-2 col-form-label">Inner Hub</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input onChange={(e) => setInnerHub(e.target.value)} type="text" className="form-control" id="inner_hub" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="inner_hub_position" className="col-sm-2 col-form-label">Inner Hub Position</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input onChange={(e) => setInnerPos(e.target.value)} type="text" className="form-control" id="inner_hub_position" />
                            </div>
                        </div>
                    </div>

                    <div className="product-color pt-3">
                        <div className="section-headers">
                            <h5>Color Information</h5>
                        </div>

                        <div className="form-row">
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input onChange={(e) => setFloodcoat(e.target.value)} type="checkbox" className="custom-control-input" id="floodcoat" />
                                    <label htmlFor="floodcoat" className="custom-control-label">Floodcoat?</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input onChange={(e) => setRimPrint(e.target.value)} type="checkbox" className="custom-control-input" id="rimage_print" />
                                    <label htmlFor="rimage_print" className="custom-control-label">Rimage Print?</label>
                                </div>
                            </div>
                        </div>

                        <AddColor></AddColor>

                        <div className="form-row">
                            <label htmlFor="color_notes" className="col-sm-2 col-form-label">Color Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea onChange={(e) => setColorNotes(e.target.value)} rows="4" cols="50" className="form-control" id="color_notes" />
                            </div>
                        </div>
                    </div>

                    <div className="product-components pt-3">
                        <div className="section-headers">
                            <h5>Components Info</h5>
                        </div>

                        <AddComponent></AddComponent>

                        <div className="form-row">
                            <label htmlFor="packaging_notes" className="col-sm-2 col-form-label">Packaging Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea onChange={(e) => setPackNotes(e.target.value)} rows="4" cols="50" className="form-control" id="packaging_notes" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_notes" className="col-sm-2 col-form-label">Product Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea onChange={(e) => setProductNotes(e.target.value)} rows="4" cols="50" className="form-control" id="product_notes" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_status" className="col-sm-2 col-form-label">Product Status</label>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <select onChange={(e) => setProductStatus(e.target.value)} className="form-control" id="product_status">
                                    <option defaultValue="0">Select Status</option>
                                    <option value="cur">Current</option>
                                    <option value="new">New</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="submit">
                        <button onClick={submit} type="submit" id="add_product" className="btn btn-success">Submit</button>
                    </div>

                </form>

                <div className="product-location m-3 p-3">
                    <label htmlFor="add_location" className="col-form-label-sm">Choose New Location for this Product</label>
                    <div className="input-group input-group-sm mb-3 col-sm-4">
                        <select className="form-control form-control-sm" id="add_location">
                            <option defaultValue="0">Select Location</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <button type="submit" id="add_location" className="btn btn-info btn-sm ml-3">Add Location</button>
                    </div>

                </div>

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



export default Product;
import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import Axios from "axios";


const Product = ({ handleLogout }) => {
    const navigate = useNavigate();

    const [old_abs_id, setOldID] = useState(null);
    const [customer_id, setCustomerID] = useState(null);
    const [product_category, setCategory] = useState(null);
    const [oem_product_id, setOemID] = useState(null);
    const [product_title, setTitle] = useState(null);
    const [product_desc, setDesc] = useState(null);
    const [product_repl, setRepl] = useState(null);
    const [master_format, setMasterFormat] = useState(null);
    const [master_received, setMasterReceived] = useState(null);
    const [master_label, setMasterLabel] = useState(null);
    const [master_capacity, setMasterCapacity] = useState(null);
    const [master_loc, setMasterLoc] = useState(null);
    const [films_loc, setFilmsLoc] = useState(null);
    const [date_code_required, setDateRequired] = useState(0);
    const [date_code_position, setDatePosition] = useState(null);
    const [inner_hub, setInnerHub] = useState(null);
    const [inner_hub_position, setInnerPos] = useState(null);
    const [floodcoat, setFloodcoat] = useState(0);
    const [rimage_print, setRimPrint] = useState(0);
    const [color_1, setColor1] = useState(null);
    const [color_2, setColor2] = useState(null);
    const [color_3, setColor3] = useState(null);
    const [color_4, setColor4] = useState(null);
    const [color_5, setColor5] = useState(null);
    const [color_6, setColor6] = useState(null);
    const [color_7, setColor7] = useState(null);
    const [color_8, setColor8] = useState(null);
    // const [colorList, setColorList] = useState([{ color: "" }]);     //work in-progress functions for dynamic list fields
    // const handleColorChange = (e, index) => {
    //     const { name, value } = e.target;
    //     const list = [...colorList];
    //     list[index][name] = value;
    //     setColorList(list);
    // };
    // const handleColorRemove = (index) => {
    //     const list = [...colorList];
    //     list.splice(index, 1);
    //     setColorList(list);
    // };
    // const handleColorAdd = () => {
    //     setColorList([...colorList, { color: "" }]);
    // };
    const [color_notes, setColorNotes] = useState(null);
    const [component_1, setComponent1] = useState(null);
    const [component_2, setComponent2] = useState(null);
    const [component_3, setComponent3] = useState(null);
    const [component_4, setComponent4] = useState(null);
    const [component_5, setComponent5] = useState(null);
    const [component_6, setComponent6] = useState(null);
    const [component_7, setComponent7] = useState(null);
    const [component_8, setComponent8] = useState(null);
    const [component_9, setComponent9] = useState(null);
    const [component_10, setComponent10] = useState(null);
    const [component_11, setComponent11] = useState(null);
    const [component_12, setComponent12] = useState(null);
    const [packaging_notes, setPackNotes] = useState(null);
    const [product_notes, setProductNotes] = useState(null);
    const [product_status, setProductStatus] = useState(null);
    

    const submit = () => {
        Axios.post("http://localhost:3001/api/insertProduct", 
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
            date_code_required: date_code_required,
            date_code_position: date_code_position,
            inner_hub: inner_hub,
            inner_hub_position: inner_hub_position,
            floodcoat: floodcoat,
            rimage_print: rimage_print,
            color_1: color_1,
            color_2: color_2,
            color_3: color_3,
            color_4: color_4,
            color_5: color_5,
            color_6: color_6,
            color_7: color_7,
            color_8: color_8,
            color_notes: color_notes,
            component_1: component_1,
            component_2: component_2,
            component_3: component_3,
            component_4: component_4,
            component_5: component_5,
            component_6: component_6,
            component_7: component_7,
            component_8: component_8,
            component_9: component_9,
            component_10: component_10,
            component_11: component_11,
            component_12: component_12,
            packaging_notes: packaging_notes,
            product_notes: product_notes,
            product_status: product_status
            
        }).then((result) => {
            console.log(result.data);
        }).catch(err => {
            console.log(err);
        });
        
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

                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
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
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input readOnly type="text" className="form-control" id="product_id"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="old_abs_id" className="col-sm-2 col-form-label">Old ABS P/N</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input onChange={(e) => {setOldID(e.target.value)}} type="text" className="form-control" id="old_abs_id" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer" className="col-sm-2 col-form-label">Customer</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input type="text" readOnly className="form-control" id="customer" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer_id" className="col-sm-2 col-form-label">Customer ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input onChange={(e) => setCustomerID(e.target.value)} minlength="4" maxlength="4" required type="text" className="form-control" id="customer_id" placeholder="ABSO" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_category" className="col-sm-2 col-form-label">Category</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select onChange={(e) => setCategory(e.target.value)} className="form-control" id="product_category">
                                    <option defaultValue="0">Select Category</option>
                                    <option value="CD-R">CD-R</option>
                                    <option value="MD-R">MD-R</option>
                                    <option value="BC-R">BC-R</option>
                                    <option value="CD-ROM">CD-ROM</option>
                                    <option value="MD-ROM">MD-ROM</option>
                                    <option value="DVD">DVD</option>
                                    <option value="DVD-R">DVD-R</option>
                                    <option value="DVD-5">DVD-5</option>
                                    <option value="DVD-9">DVD-9</option>
                                    <option value="Diskette">Diskette</option>
                                    <option value="Tape">Tape</option>
                                    <option value="Other">Other</option>

                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="oem_product_id" className="col-sm-2 col-form-label">OEM Product P/N</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input onChange={(e) => setOemID(e.target.value)} type="text" className="form-control" id="oem_product_id" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_title" className="col-sm-2 col-form-label">Title</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="product_title" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_desc" className="col-sm-2 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <textarea onChange={(e) => setDesc(e.target.value)} rows="4" cols="50" className="form-control" id="product_desc" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_repl" className="col-sm-2 col-form-label">Replication</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select onChange={(e) => setRepl(e.target.value)} className="form-control" id="product_repl">
                                    <option defaultValue="0">Select Type</option>
                                    <option value="Replicated">Replicated</option>
                                    <option value="Non-Recorded">Non-Recorded</option>
                                    <option value="Replicated Only">Replicated Only</option>
                                    <option value="First Article">First Article</option>
                                    <option value="Pre-Replicated">Pre-Replicated</option>
                                    <option value="Pre-Duplicated">Pre-Duplicated</option>
                                    <option value="Pre-Duped by Cus">Pre-Duped by Cus</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_format" className="col-sm-2 col-form-label">Master Format</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select onChange={(e) => setMasterFormat(e.target.value)} className="form-control" id="master_format">
                                    <option defaultValue="0">Select Format</option>
                                    <option value="CD-R">CD-R</option>
                                    <option value="CD-ROM">CD-ROM</option>
                                    <option value="DVD-R">DVD-R</option>
                                    <option value="VHS">VHS</option>
                                    <option value="DLT Tape">DLT Tape</option>
                                    <option value="Diskette">Diskette</option>
                                    <option value="FTP Site">FTP Site</option>
                                    <option value="USB">USB</option>
                                    <option value="Email">Email</option>
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
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input onChange={(e) => setMasterLabel(e.target.value)} type="text" className="form-control" id="master_label" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_capacity" className="col-sm-2 col-form-label">Master Capacity</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input onChange={(e) => setMasterCapacity(e.target.value)} type="text" className="form-control" id="master_capacity" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_location" className="col-sm-2 col-form-label">Master Location</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select onChange={(e) => setMasterLoc(e.target.value)} className="form-control" id="master_location">
                                    <option defaultValue="0">Select Location</option>
                                    <option value="Vendor">Vendor</option>
                                    <option value="Docket">Docket</option>
                                    <option value="Absolute">Absolute</option>
                                    <option value="Master CDR Location">Master CDR Location</option>
                                    <option value="TS">TS</option>
                                    <option value="W.S.">W.S.</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="films_location" className="col-sm-2 col-form-label">Films Location</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select onChange={(e) => setFilmsLoc(e.target.value)} className="form-control" id="films_location">
                                    <option defaultValue="0">Select Location</option>
                                    <option value="Vendor">Vendor</option>
                                    <option value="Docket">Docket</option>
                                    <option value="Absolute">Absolute</option>
                                    <option value="Films Location">Films Location</option>
                                    <option value="W.S.">W.S.</option>
                                    <option value="Use Film from KECU-5926">Use Film from KECU-5926</option>
                                    <option value="Docket WIND-6707">Docket WIND-6707</option>
                                    <option value="GRIC-6999">GRIC-6999</option>
                                    <option value="In Docket">In Docket</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input onChange={(prev) => setDateRequired(prev => !prev)} checked={date_code_required} type="checkbox" className="custom-control-input" id="date_code_required" />
                                    <label htmlFor="date_code_required" className="custom-control-label">Date Code Required?</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date_code_position" className="col-sm-2 col-form-label">Date Code Position</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input onChange={(e) => setDatePosition(e.target.value)} type="text" className="form-control" id="date_code_position" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="inner_hub" className="col-sm-2 col-form-label">Inner Hub</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input onChange={(e) => setInnerHub(e.target.value)} type="text" className="form-control" id="inner_hub" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="inner_hub_position" className="col-sm-2 col-form-label">Inner Hub Position</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
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
                                    <input onChange={(prev) => setFloodcoat(prev => !prev)} checked={floodcoat} type="checkbox" className="custom-control-input" id="floodcoat" />
                                    <label htmlFor="floodcoat" className="custom-control-label">Floodcoat?</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input onChange={(prev) => setRimPrint(prev => !prev)} checked={rimage_print} type="checkbox" className="custom-control-input" id="rimage_print" />
                                    <label htmlFor="rimage_print" className="custom-control-label">Rimage Print?</label>
                                </div>
                            </div>
                        </div>

                        <div className="product-colors">
                            <div className="form-row">
                                <div className="input-group input-group-sm mb-3 col-sm">
                                    {/*{.length < 8 ? <button type="button" id="color_add" className="btn btn-outline-primary btn-sm" onClick={addField}>Add Color</button>:
                                    <button disabled type="button" className="btn btn-secondary btn-sm">Add Color</button>}**/}
                                </div>
                            </div>
        
                            <div className="form-row">
                                <label className="col-sm-2 col-form-label">Color #1</label>
                                <div className="input-group input-group-sm mb-3 col-sm-8">
                                    <input onChange={(e) => setColor1(e.target.value)} className="form-control field" type="text" id="color_1"/>
                                </div>
                                <div className="input-group input-group-sm mb-3 col-sm-2">
                                    <button type="button" id="color_remove" className="btn btn-outline-danger btn-sm">Remove</button>
                                </div>
                            </div>

                            <div className="form-row">
                                <label className="col-sm-2 col-form-label">Color #2</label>
                                <div className="input-group input-group-sm mb-3 col-sm-8">
                                    <input onChange={(e) => setColor2(e.target.value)} className="form-control field" type="text" id="color_2"/>
                                </div>
                                <div className="input-group input-group-sm mb-3 col-sm-2">
                                    <button type="button" id="color_remove" className="btn btn-outline-danger btn-sm">Remove</button>
                                </div>
                            </div>

                            <div className="form-row">
                                <label className="col-sm-2 col-form-label">Color #3</label>
                                <div className="input-group input-group-sm mb-3 col-sm-8">
                                    <input onChange={(e) => setColor3(e.target.value)} className="form-control field" type="text" id="color_3"/>
                                </div>
                                <div className="input-group input-group-sm mb-3 col-sm-2">
                                    <button type="button" id="color_remove" className="btn btn-outline-danger btn-sm">Remove</button>
                                </div>
                            </div>

                            <div className="form-row">
                                <label className="col-sm-2 col-form-label">Color #4</label>
                                <div className="input-group input-group-sm mb-3 col-sm-8">
                                    <input onChange={(e) => setColor4(e.target.value)} className="form-control field" type="text" id="color_4"/>
                                </div>
                                <div className="input-group input-group-sm mb-3 col-sm-2">
                                    <button type="button" id="color_remove" className="btn btn-outline-danger btn-sm">Remove</button>
                                </div>
                            </div>

                            <div className="form-row">
                                <label className="col-sm-2 col-form-label">Color #5</label>
                                <div className="input-group input-group-sm mb-3 col-sm-8">
                                    <input onChange={(e) => setColor5(e.target.value)} className="form-control field" type="text" id="color_5"/>
                                </div>
                                <div className="input-group input-group-sm mb-3 col-sm-2">
                                    <button type="button" id="color_remove" className="btn btn-outline-danger btn-sm">Remove</button>
                                </div>
                            </div>

                            <div className="form-row">
                                <label className="col-sm-2 col-form-label">Color #6</label>
                                <div className="input-group input-group-sm mb-3 col-sm-8">
                                    <input onChange={(e) => setColor6(e.target.value)} className="form-control field" type="text" id="color_6"/>
                                </div>
                                <div className="input-group input-group-sm mb-3 col-sm-2">
                                    <button type="button" id="color_remove" className="btn btn-outline-danger btn-sm">Remove</button>
                                </div>
                            </div>

                            <div className="form-row">
                                <label className="col-sm-2 col-form-label">Color #7</label>
                                <div className="input-group input-group-sm mb-3 col-sm-8">
                                    <input onChange={(e) => setColor7(e.target.value)} className="form-control field" type="text" id="color_7"/>
                                </div>
                                <div className="input-group input-group-sm mb-3 col-sm-2">
                                    <button type="button" id="color_remove" className="btn btn-outline-danger btn-sm">Remove</button>
                                </div>
                            </div>

                            <div className="form-row">
                                <label className="col-sm-2 col-form-label">Color #8</label>
                                <div className="input-group input-group-sm mb-3 col-sm-8">
                                    <input onChange={(e) => setColor8(e.target.value)} className="form-control field" type="text" id="color_8"/>
                                </div>
                                <div className="input-group input-group-sm mb-3 col-sm-2">
                                    <button type="button" id="color_remove" className="btn btn-outline-danger btn-sm">Remove</button>
                                </div>
                            </div>

                        </div>

                        <div className="form-row">
                            <label htmlFor="color_notes" className="col-sm-2 col-form-label">Color Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <textarea onChange={(e) => setColorNotes(e.target.value)} rows="4" cols="50" className="form-control" id="color_notes" />
                            </div>
                        </div>
                    </div>

                    <div className="product-components pt-3">
                        <div className="section-headers">
                            <h5>Components Info</h5>
                        </div>
                        
                        <div className="form-row">
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                {/*inputFields.length < 12 ? <button type="button" id="component-add" className="btn btn-outline-primary btn-sm" onClick={addField}>Add Component</button>:
                                <button disabled type="button" className="btn btn-secondary btn-sm">Add Component</button>*/}
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #1</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent1(e.target.value)} className="form-control field" type="text" id="component_1"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #2</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent2(e.target.value)} className="form-control field" type="text" id="component_2"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #3</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent3(e.target.value)} className="form-control field" type="text" id="component_3"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #4</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent4(e.target.value)} className="form-control field" type="text" id="component_4"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #5</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent5(e.target.value)} className="form-control field" type="text" id="component_5"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #6</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent6(e.target.value)} className="form-control field" type="text" id="component_6"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #7</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent7(e.target.value)} className="form-control field" type="text" id="component_7"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #8</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent8(e.target.value)} className="form-control field" type="text" id="component_8"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #9</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent9(e.target.value)} className="form-control field" type="text" id="component_9"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #10</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent10(e.target.value)} className="form-control field" type="text" id="component_10"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #11</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent11(e.target.value)} className="form-control field" type="text" id="component_11"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #12</label>
                            <div className="input-group input-group-sm mb-3 col-sm-8">
                                <input onChange={(e) => setComponent12(e.target.value)} className="form-control field" type="text" id="component_12"/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm">Remove</button>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="packaging_notes" className="col-sm-2 col-form-label">Packaging Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <textarea onChange={(e) => setPackNotes(e.target.value)} rows="4" cols="50" className="form-control" id="packaging_notes" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_notes" className="col-sm-2 col-form-label">Product Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <textarea onChange={(e) => setProductNotes(e.target.value)} rows="4" cols="50" className="form-control" id="product_notes" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_status" className="col-sm-2 col-form-label">Product Status</label>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <select onChange={(e) => setProductStatus(e.target.value)} className="form-control" id="product_status">
                                    <option defaultValue="0">Select Status</option>
                                    <option value="Current">Current</option>
                                    <option value="New">New</option>
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
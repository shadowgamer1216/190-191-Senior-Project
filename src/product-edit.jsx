import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";

const ProductEdit = ({ handleLogout }) => {
    const navigate = useNavigate();
    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    

    const [new_old_abs_id, setOldID] = useState(null);
    const [new_product_category, setCategory] = useState(null);
    const [new_oem_product_id, setOemID] = useState(null);
    const [new_product_title, setTitle] = useState(null);
    const [new_product_desc, setDesc] = useState(null);
    const [new_product_repl, setRepl] = useState(null);
    const [new_master_format, setMasterFormat] = useState(null);
    const [new_master_received, setMasterReceived] = useState(null);
    const [new_master_label, setMasterLabel] = useState(null);
    const [new_master_capacity, setMasterCapacity] = useState(null);
    const [new_master_loc, setMasterLoc] = useState(null);
    const [new_films_loc, setFilmsLoc] = useState(null);
    const [new_date_code_required, setDateRequired] = useState(0);
    const [new_date_code_position, setDatePosition] = useState(null);
    const [new_inner_hub, setInnerHub] = useState(null);
    const [new_inner_hub_position, setInnerPos] = useState(null);
    const [new_floodcoat, setFloodcoat] = useState(0);
    const [new_rimage_print, setRimPrint] = useState(0);
    const [new_colorList, setColorList] = useState([{ color: "" }]); 
    const [new_numOfColors, setNumOfColors] = useState(1);
    const [new_color1, setColor1] = useState(null);
    const [new_color2, setColor2] = useState(null);
    const [new_color3, setColor3] = useState(null);
    const [new_color4, setColor4] = useState(null);
    const [new_color5, setColor5] = useState(null);
    const [new_color6, setColor6] = useState(null);
    const [new_color7, setColor7] = useState(null);
    const [new_color8, setColor8] = useState(null);
    const [new_component1, setComponent1] = useState(null);
    const [new_component2, setComponent2] = useState(null);
    const [new_component3, setComponent3] = useState(null);
    const [new_component4, setComponent4] = useState(null);
    const [new_component5, setComponent5] = useState(null);
    const [new_component6, setComponent6] = useState(null);
    const [new_component7, setComponent7] = useState(null);
    const [new_component8, setComponent8] = useState(null);
    const [new_component9, setComponent9] = useState(null);
    const [new_component10, setComponent10] = useState(null);
    const [new_component11, setComponent11] = useState(null);
    const [new_component12, setComponent12] = useState(null);


    const [new_color_notes, setColorNotes] = useState(null);
    const [new_componentList, setComponentList] = useState([{ component: "" }]); 
    const [new_componentNames, setComponentNames] = useState([{ name: "" }]);
    const [new_numOfComponents, setNumOfComponents] = useState(1);
    const [new_packaging_notes, setPackNotes] = useState(null);
    const [new_product_notes, setProductNotes] = useState(null);
    const [new_product_status, setProductStatus] = useState(null);
    
    const { product_id } = useParams();
    const [productData, setProductData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/productEdit/${product_id}`)
        .then(response => {
            setProductData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [product_id]);
    
    var customer_id = productData?.customer_id ?? '';
    var customer_name = productData?.customer_name ?? '';
    var old_abs_id = productData?.old_abs_id ?? '';
    var product_category = productData?.product_category ?? '';
    var oem_product_id = productData?.oem_product_id ?? '';
    var product_title = productData?.product_title ?? '';
    var product_desc = productData?.product_desc ?? '';
    var product_repl = productData?.product_repl ?? '';
    var master_format = productData?.master_format ?? '';
    var master_received = productData?.master_received ?? '';
    master_received = master_received.slice(0, 10);
    var master_label = productData?.master_label ?? '';
    var master_capacity = productData?.master_capacity ?? '';
    var master_loc = productData?.master_loc ?? '';
    var films_loc = productData?.films_loc ?? '';
    var date_code_required = productData?.date_code_required ?? 0;
    var date_code_position = productData?.date_code_position ?? '';
    var inner_hub = productData?.inner_hub ?? '';
    var inner_hub_position = productData?.inner_hub_position ?? '';
    var floodcoat = productData?.floodcoat ?? 0;
    var rimage_print = productData?.rimage_print ?? 0;
    var color1 = productData?.color_1 ?? '';
    var color2 = productData?.color_2 ?? '';
    var color3 = productData?.color_3 ?? '';
    var color4 = productData?.color_4 ?? '';
    var color5 = productData?.color_5 ?? '';
    var color6 = productData?.color_6 ?? '';
    var color7 = productData?.color_7 ?? '';
    var color8 = productData?.color_8 ?? '';
    var color_notes = productData?.color_notes ?? '';
    var component1 = productData?.component_1 ?? '';
    var component2 = productData?.component_2 ?? '';
    var component3 = productData?.component_3 ?? '';
    var component4 = productData?.component_4 ?? '';
    var component5 = productData?.component_5 ?? '';
    var component6 = productData?.component_6 ?? '';
    var component7 = productData?.component_7 ?? '';
    var component8 = productData?.component_8 ?? '';
    var component9 = productData?.component_9 ?? '';
    var component10 = productData?.component_10 ?? '';
    var component11 = productData?.component_11 ?? '';
    var component12 = productData?.component_12 ?? '';
    var packaging_notes = productData?.packaging_notes ?? '';
    var product_notes = productData?.product_notes ?? '';
    var product_status = productData?.product_status ?? '';

    var componentName1 = productData?.componentName1 ?? '';
    var componentName2 = productData?.componentName2 ?? '';
    var componentName3 = productData?.componentName3 ?? '';
    var componentName4 = productData?.componentName4 ?? '';
    var componentName5 = productData?.componentName5 ?? '';
    var componentName6 = productData?.componentName6 ?? '';
    var componentName7 = productData?.componentName7 ?? '';
    var componentName8 = productData?.componentName8 ?? '';
    var componentName9 = productData?.componentName9 ?? '';
    var componentName10 = productData?.componentName10 ?? '';
    var componentName11 = productData?.componentName11 ?? '';
    var componentName12 = productData?.componentName12 ?? '';

    var componentType1 = productData?.componentType1 ?? '';
    var componentType2 = productData?.componentType2 ?? '';
    var componentType3 = productData?.componentType3 ?? '';
    var componentType4 = productData?.componentType4 ?? '';
    var componentType5 = productData?.componentType5 ?? '';
    var componentType6 = productData?.componentType6 ?? '';
    var componentType7 = productData?.componentType7 ?? '';
    var componentType8 = productData?.componentType8 ?? '';
    var componentType9 = productData?.componentType9 ?? '';
    var componentType10 = productData?.componentType10 ?? '';
    var componentType11 = productData?.componentType11 ?? '';
    var componentType12 = productData?.componentType12 ?? '';



    const handleNavigate = async () => {
        await Sleep(2000);
        navigate(`/product/${product_id}`);
    }

// edit product function
const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:3001/api/editProduct", { 
    product_id : product_id,
    old_abs_id : new_old_abs_id,
    product_category : new_product_category,
    oem_product_id : new_oem_product_id,
    product_title : new_product_title,
    product_desc : new_product_desc,
    product_repl : new_product_repl,
    master_format : new_master_format,
    master_received : new_master_received,
    master_label : new_master_label,
    master_capacity : new_master_capacity,
    master_loc : new_master_loc,
    films_loc : new_films_loc,
    date_code_required : new_date_code_required,
    date_code_position : new_date_code_position,
    inner_hub : new_inner_hub,
    inner_hub_position : new_inner_hub_position,
    floodcoat : new_floodcoat,
    rimage_print : new_rimage_print,
    colorList: new_colorList,
    color_1 : new_color1,
    color_2 : new_color2,
    color_3 : new_color3,
    color_4 : new_color4,
    color_5 : new_color5,
    color_6 : new_color6,
    color_7 : new_color7,
    color_8 : new_color8,
    color_notes : new_color_notes,
    component1 : new_component1,
    component2 : new_component2,
    component3 : new_component3,
    component4 : new_component4,
    component5 : new_component5,
    component6 : new_component6,
    component7 : new_component7,
    component8 : new_component8,
    component9 : new_component9,
    component10 : new_component10,
    component11 : new_component11,
    component12 : new_component12,
    packaging_notes : new_packaging_notes,
    product_notes : new_product_notes,
    product_status : new_product_status,
    }).then(()=> {
        alert('Edited product');
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
                    <h2>[EDIT] PRODUCT</h2>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="contact-info pt-3">
                        <div className="section-headers">
                            <h5>Contact Identification</h5>
                        </div>

                        <div className="form-row">
                                <label htmlFor="product_id" className="col-3 col-form-label">Product ID</label>
                                <div className="input-group input-group-sm mb-3 col-md-2">
                                    <input type="text" readOnly className="form-control" id="product_id" value={product_id}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="old_abs_id" className="col-3 col-form-label">Old ABS ID</label>
                                <div className="input-group input-group-sm mb-3 col-md-2">
                                    <input type="text" className="form-control" id="old_abs_id" defaultValue={old_abs_id} onChange={(e) => setOldID(e.target.value.toUpperCase())}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="customer_id" className="col-md-3 col-form-label">Customer ID</label>
                                <div className="input-group input-group-sm mb-3 col-md-2">
                                    <input type="text" readOnly className="form-control" id="customer_id" value={customer_id}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="customer_name" className="col-md-3 col-form-label">Customer Name</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" readOnly className="form-control" id="customer_name" value={customer_name}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="product_category" className="col-md-3 col-form-label">Category</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setCategory(e.target.value)} className="form-control" id="product_category" devaultValue={product_category}>
                                    <option value="{product_category}">{product_category}</option>
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
                                <label htmlFor="oem_product_id" className="col-md-3 col-form-label">OEM Product ID</label>
                                <div className="input-group input-group-sm mb-3 col-md-2">
                                    <input type="text" className="form-control" id="oem_product_id" defaultValue={oem_product_id} onChange={(e) => setOemID(e.target.value.toUpperCase())}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="product_title" className="col-md-3 col-form-label">Title</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" className="form-control" id="product_title" defaultValue={product_title} onChange={(e) => setTitle(e.target.value)} maxLengh="100"/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="product_desc" className="col-md-3 col-form-label">Description</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <textarea rows="4" cols="50" className="form-control" id="product_desc" defaultValue={product_desc} onChange={(e) => setDesc(e.target.value)}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="product_repl" className="col-md-3 col-form-label">Replication</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setRepl(e.target.value)} defaultValue={product_repl} className="form-control" id="product_repl">
                                    <option value="{product_repl}">{product_repl}</option>
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
                                <label htmlFor="master_format" className="col-md-3 col-form-label">Master Format</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setMasterFormat(e.target.value)} defaultValue={master_format} className="form-control" id="master_format">
                                    <option value="{master_format}">{master_format}</option>
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
                                <label htmlFor="master_received" className="col-md-3 col-form-label">Master Received</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                    <input type="date" max="9999-12-31" className="form-control" id="master_received" defaultValue={master_received} onChange={(e) => setMasterReceived(e.target.value)}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="master_label" className="col-md-3 col-form-label">Master Label</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" className="form-control" id="master_label" onChange={(e) => setMasterLabel(e.target.value)} defaultValue={master_label}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="master_capacity" className="col-md-3 col-form-label">Master Capacity</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" className="form-control" id="master_capacity" defaultValue={master_capacity} onChange={(e) => setMasterCapacity(e.target.value)}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="master_location" className="col-md-3 col-form-label">Master Location</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setMasterLoc(e.target.value)} className="form-control" id="master_location" defaultValue={master_loc}>
                                    <option value="{master_loc}">{master_loc}</option>
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
                                <label htmlFor="films_location" className="col-md-3 col-form-label">Films Location</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setFilmsLoc(e.target.value)} className="form-control" id="films_location" defaultValue={films_loc}>
                                    <option value="{films_loc}">{films_loc}</option>
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
                                <label htmlFor="date_code_required" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Date Code Required: </label>
                                
                                <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                    <input checked={date_code_required} type="checkbox" readOnly className="custom-control-input" id="date_code_required" />
                                    <label className="custom-control-label" htmlFor="date_code_required"></label>
                                </div>
                                        
                            </div>

                            <div className="form-row">
                                <label htmlFor="date_code_position" className="col-md-3 col-form-label">Date Code Position</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" onChange={(e) => setDatePosition(e.target.value)} className="form-control" id="date_code_position" defaultValue={date_code_position}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="inner_hub" className="col-md-3 col-form-label">Inner Hub</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" onChange={(e) => setInnerHub(e.target.value)} className="form-control" id="inner_hub" defaultValue={inner_hub}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="inner_hub_position" className="col-md-3 col-form-label">Inner Hub Position</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" onChange={(e) => setInnerPos(e.target.value)} className="form-control" id="inner_hub_position" defaultValue={inner_hub_position}/>
                                </div>
                            </div>
                        </div>

                        <div className="product-color pt-3">
                            <div className="section-headers">
                                <h5>Color Information</h5>
                            </div>

                            <div className="form-row">
                                <label htmlFor="floodcoat" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Floodcoat: </label>
                                <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                    <input checked={floodcoat} type="checkbox" readOnly className="custom-control-input" id="floodcoat" />
                                    <label className="custom-control-label" htmlFor="floodcoat"></label>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="rimage_print" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Rimage Print: </label>
                                <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                    <input checked={rimage_print} type="checkbox" readOnly className="custom-control-input" id="rimage_print" />
                                    <label className="custom-control-label" htmlFor="rimage_print"></label>
                                </div>
                            </div>

                            <div className="form-row">
                                {color1 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #1</span></strong>
                                    <input type="text" onChange={(e) => setColor1(e.target.value)} className="form-control" id="color1" value={color1}/> 
                                </div>
                                : 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Colors</span></strong>
                                    <input type="text" readOnly className="form-control" id="color1" defaultValue="None for this product..."/> 
                                </div>
                                }

                                {color2 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #2</span></strong>
                                    <input type="text" onChange={(e) => setColor2(e.target.value)} className="form-control" id="color2" defaultValue={color2}/> 
                                </div>
                                : null}

                                {color3 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #3</span></strong>
                                    <input type="text" onChange={(e) => setColor3(e.target.value)} className="form-control" id="color3" defaultValue={color3}/> 
                                </div>
                                : null}

                                {color4 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #4</span></strong>
                                    <input type="text" onChange={(e) => setColor4(e.target.value)} className="form-control" id="color4" defaultValue={color4}/> 
                                </div>
                                : null}

                                {color5 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #5</span></strong>
                                    <input type="text" onChange={(e) => setColor5(e.target.value)} className="form-control" id="color5" defaultValue={color5}/> 
                                </div>
                                : null}

                                {color6 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #6</span></strong>
                                    <input type="text" onChange={(e) => setColor6(e.target.value)} className="form-control" id="color6" defaultValue={color6}/> 
                                </div>
                                : null}

                                {color7 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #7</span></strong>
                                    <input type="text" onChange={(e) => setColor7(e.target.value)} className="form-control" id="color7" defaultValue={color7}/> 
                                </div>
                                : null}
                                
                                {color8 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #8</span></strong>
                                    <input type="text" onChange={(e) => setColor8(e.target.value)} className="form-control" id="color8" defaultValue={color8}/> 
                                </div>
                                : null}
                            </div>
                            <br></br>
                            
                            <div className="form-row">
                                <label htmlFor="color_notes" className="col-md-3 col-form-label">Color Notes</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <textarea rows="4" cols="50" onChange={(e) => setColorNotes(e.target.value)} className="form-control" id="color_notes" defaultValue={color_notes}/>
                                </div>
                            </div>

                        </div>

                        <div className="product-components pt-3">
                            <div className="section-headers">
                                <h5>Components Info</h5>
                            </div>
                            <br></br>

                            <div className="form-row">

                                {component1 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #1</span></strong>
                                    <input type="text" readOnly className="form-control" id="component1" value={`${component1} — ${componentName1} (${componentType1})`}/> 
                                </div>
                                : 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Components</span></strong>
                                    <input type="text" readOnly className="form-control" id="component1" value="None for this product..."/> 
                                </div>
                                }

                                {component2 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #2</span></strong>
                                    <input type="text" readOnly className="form-control" id="component2" defaultValue={`${component2} — ${componentName2} (${componentType2})`}/> 
                                </div>
                                : null}

                                {component3 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #3</span></strong>
                                    <input type="text" readOnly className="form-control" id="component3" value={`${component3} — ${componentName3} (${componentType3})`}/> 
                                </div>
                                : null}

                                {component4 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #4</span></strong>
                                    <input type="text" readOnly className="form-control" id="component4" value={`${component4} — ${componentName4} (${componentType4})`}/> 
                                </div>
                                : null}

                                {component5 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #5</span></strong>
                                    <input type="text" readOnly className="form-control" id="component5" value={`${component5} — ${componentName5} (${componentType5})`}/> 
                                </div>
                                : null}   

                                {component6 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #6</span></strong>
                                    <input type="text" readOnly className="form-control" id="component6" value={`${component6} — ${componentName6} (${componentType6})`}/> 
                                </div>
                                : null}

                                {component7 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #7</span></strong>
                                    <input type="text" readOnly className="form-control" id="component7" value={`${component7} — ${componentName7} (${componentType7})`}/> 
                                </div>
                                : null}

                                {component8 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #8</span></strong>
                                    <input type="text" readOnly className="form-control" id="component8" value={`${component8} — ${componentName8} (${componentType8})`}/> 
                                </div>
                                : null}

                                {component9 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #9</span></strong>
                                    <input type="text" readOnly className="form-control" id="component9" value={`${component9} — ${componentName9} (${componentType9})`}/> 
                                </div>
                                : null}

                                {component10 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #10</span></strong>
                                    <input type="text" readOnly className="form-control" id="component10" value={`${component10} — ${componentName10} (${componentType10})`}/> 
                                </div>
                                : null}

                                {component11 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #11</span></strong>
                                    <input type="text" readOnly className="form-control" id="component11" value={`${component11} — ${componentName11} (${componentType11})`}/> 
                                </div>
                                : null}

                                {component12 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #12</span></strong>
                                    <input type="text" readOnly className="form-control" id="component12" value={`${component12} — ${componentName12} (${componentType12})`}/> 
                                </div>
                                : null}

                            </div>
                            <br></br>

                            <div className="form-row">
                                <label htmlFor="packaging_notes" className="col-md-3 col-form-label">Packaging Notes</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <textarea rows="4" cols="50" onChange={(e) => setPackNotes(e.target.value)} className="form-control" id="packaging_notes" defaultValue={packaging_notes}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="product_notes" className="col-md-3 col-form-label">Product Notes</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <textarea rows="4" cols="50" onChange={(e) => setProductNotes(e.target.value)} className="form-control" id="product_notes" defaultValue={product_notes}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="product_status" className="col-md-3 col-form-label">Product Status</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setProductStatus(e.target.value)} className="form-control" id="product_status" defaultValue={product_status}>
                                    <option value="{product_status}">{product_status}</option>
                                    <option value="Current">Current</option>
                                    <option value="New">New</option>
                                </select>
                                </div>
                            </div>
                    </div>
                

                <br></br>
                
                <div>
                    <button onClick={() => handleNavigate({product_id})} id="edit-company" className="btn btn-outline-success">Update</button>
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
    );
};

export default ProductEdit;

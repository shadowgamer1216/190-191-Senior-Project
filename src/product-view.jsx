import React from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";


const ProductView = ({ handleLogout }) => {
    const navigate = useNavigate();

    const { product_id } = useParams();
    const [productData, setProductData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/product/${product_id}`)
        .then(response => {
            setProductData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [product_id]);

    var old_abs_id = productData?.old_abs_id ?? '';
    var customer_id = productData?.customer_id ?? '';
    const [customer_name, setCustomerName] = useState("");
    useEffect(() => {
        if(customer_id) {
            Axios.get(`http://localhost:3001/api/company/${customer_id}`).then((response) =>{
                setCustomerName(response.data.company_name);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [customer_id]);
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

    const [componentName1, setComponentName1] = useState(null);
    const [componentType1, setComponentType1] = useState(null);
    useEffect(() => {
        if(component1) {
            Axios.get(`http://localhost:3001/api/component/${component1}`).then((response) =>{
                setComponentName1(response.data.title);
                setComponentType1(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component1]);
    const [componentName2, setComponentName2] = useState(null);
    const [componentType2, setComponentType2] = useState(null);
    useEffect(() => {
        if(component2) {
            Axios.get(`http://localhost:3001/api/component/${component2}`).then((response) =>{
                setComponentName2(response.data.title);
                setComponentType2(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component2]);
    const [componentName3, setComponentName3] = useState(null);
    const [componentType3, setComponentType3] = useState(null);
    useEffect(() => {
        if(component3) {
            Axios.get(`http://localhost:3001/api/component/${component3}`).then((response) =>{
                setComponentName3(response.data.title);
                setComponentType3(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component3]);
    const [componentName4, setComponentName4] = useState(null);
    const [componentType4, setComponentType4] = useState(null);
    useEffect(() => {
        if(component4) {
            Axios.get(`http://localhost:3001/api/component/${component4}`).then((response) =>{
                setComponentName4(response.data.title);
                setComponentType4(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component4]);
    const [componentName5, setComponentName5] = useState(null);
    const [componentType5, setComponentType5] = useState(null);
    useEffect(() => {
        if(component5) {
            Axios.get(`http://localhost:3001/api/component/${component5}`).then((response) =>{
                setComponentName5(response.data.title);
                setComponentType5(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component5]);
    const [componentName6, setComponentName6] = useState(null);
    const [componentType6, setComponentType6] = useState(null);
    useEffect(() => {
        if(component6) {
            Axios.get(`http://localhost:3001/api/component/${component6}`).then((response) =>{
                setComponentName6(response.data.title);
                setComponentType6(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component6]);
    const [componentName7, setComponentName7] = useState(null);
    const [componentType7, setComponentType7] = useState(null);
    useEffect(() => {
        if(component7) {
            Axios.get(`http://localhost:3001/api/component/${component7}`).then((response) =>{
                setComponentName7(response.data.title);
                setComponentType7(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component7]);
    const [componentName8, setComponentName8] = useState(null);
    const [componentType8, setComponentType8] = useState(null);
    useEffect(() => {
        if(component8) {
            Axios.get(`http://localhost:3001/api/component/${component8}`).then((response) =>{
                setComponentName8(response.data.title);
                setComponentType8(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component8]);
    const [componentName9, setComponentName9] = useState(null);
    const [componentType9, setComponentType9] = useState(null);
    useEffect(() => {
        if(component9) {
            Axios.get(`http://localhost:3001/api/component/${component9}`).then((response) =>{
                setComponentName9(response.data.title);
                setComponentType9(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component9]);
    const [componentName10, setComponentName10] = useState(null);
    const [componentType10, setComponentType10] = useState(null);
    useEffect(() => {
        if(component10) {
            Axios.get(`http://localhost:3001/api/component/${component10}`).then((response) =>{
                setComponentName10(response.data.title);
                setComponentType10(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component10]);
    const [componentName11, setComponentName11] = useState(null);
    const [componentType11, setComponentType11] = useState(null);
    useEffect(() => {
        if(component11) {
            Axios.get(`http://localhost:3001/api/component/${component11}`).then((response) =>{
                setComponentName11(response.data.title);
                setComponentType11(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component11]);
    const [componentName12, setComponentName12] = useState(null);
    const [componentType12, setComponentType12] = useState(null);
    useEffect(() => {
        if(component12) {
            Axios.get(`http://localhost:3001/api/component/${component12}`).then((response) =>{
                setComponentName12(response.data.title);
                setComponentType12(response.data.component_type);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [component12]);

    const packaging_notes = productData?.packaging_notes ?? '';
    const product_notes = productData?.product_notes ?? '';
    const product_status = productData?.product_status ?? '';

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
                    <h2>[VIEW] PRODUCT</h2>
                </div>

                <form autoComplete="off">
                        <>
                        <div className="product-info pt-3">
                            <div className="section-headers">
                                <h5>Product Information</h5>
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
                                    <input type="text" readOnly className="form-control" id="old_abs_id" value={old_abs_id}/>
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
                                    <input type="text" readOnly className="form-control" id="product_category" value={product_category}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="oem_product_id" className="col-md-3 col-form-label">OEM Product ID</label>
                                <div className="input-group input-group-sm mb-3 col-md-2">
                                    <input type="text" readOnly className="form-control" id="oem_product_id" value={oem_product_id}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="product_title" className="col-md-3 col-form-label">Title</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" readOnly className="form-control" id="product_title" value={product_title}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="product_desc" className="col-md-3 col-form-label">Description</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <textarea rows="4" cols="50" readOnly className="form-control" id="product_desc" value={product_desc}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="product_repl" className="col-md-3 col-form-label">Replication</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                    <input type="text" readOnly className="form-control" id="product_repl" value={product_repl}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="master_format" className="col-md-3 col-form-label">Master Format</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                    <input type="text" readOnly className="form-control" id="master_format" value={master_format}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="master_received" className="col-md-3 col-form-label">Master Received</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                    <input type="text" readOnly className="form-control" id="master_received" value={master_received} />
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="master_label" className="col-md-3 col-form-label">Master Label</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" readOnly className="form-control" id="master_label" value={master_label}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="master_capacity" className="col-md-3 col-form-label">Master Capacity</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" readOnly className="form-control" id="master_capacity" value={master_capacity}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="master_location" className="col-md-3 col-form-label">Master Location</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                    <input type="text" readOnly className="form-control" id="master_location" value={master_loc}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="films_location" className="col-md-3 col-form-label">Films Location</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                    <input type="text" readOnly className="form-control" id="films_location" value={films_loc}/>
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
                                    <input type="text" readOnly className="form-control" id="date_code_position" value={date_code_position}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="inner_hub" className="col-md-3 col-form-label">Inner Hub</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" readOnly className="form-control" id="inner_hub" value={inner_hub}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="inner_hub_position" className="col-md-3 col-form-label">Inner Hub Position</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" readOnly className="form-control" id="inner_hub_position" value={inner_hub_position}/>
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
                                    <input type="text" readOnly className="form-control" id="color1" value={color1}/> 
                                </div>
                                : 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Colors</span></strong>
                                    <input type="text" readOnly className="form-control" id="color1" value="None for this product..."/> 
                                </div>
                                }

                                {color2 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #2</span></strong>
                                    <input type="text" readOnly className="form-control" id="color2" value={color2}/> 
                                </div>
                                : null}

                                {color3 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #3</span></strong>
                                    <input type="text" readOnly className="form-control" id="color3" value={color3}/> 
                                </div>
                                : null}

                                {color4 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #4</span></strong>
                                    <input type="text" readOnly className="form-control" id="color4" value={color4}/> 
                                </div>
                                : null}

                                {color5 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #5</span></strong>
                                    <input type="text" readOnly className="form-control" id="color5" value={color5}/> 
                                </div>
                                : null}

                                {color6 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #6</span></strong>
                                    <input type="text" readOnly className="form-control" id="color6" value={color6}/> 
                                </div>
                                : null}

                                {color7 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #7</span></strong>
                                    <input type="text" readOnly className="form-control" id="color7" value={color7}/> 
                                </div>
                                : null}
                                
                                {color8 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Color #8</span></strong>
                                    <input type="text" readOnly className="form-control" id="color8" value={color8}/> 
                                </div>
                                : null}
                            </div>
                            <br></br>
                            
                            <div className="form-row">
                                <label htmlFor="color_notes" className="col-md-3 col-form-label">Color Notes</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <textarea rows="4" cols="50" readOnly className="form-control" id="color_notes" value={color_notes}/>
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
                                    <input type="text" readOnly className="form-control" id="component2" value={`${component2} — ${componentName2} (${componentType2})`}/> 
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
                                    <textarea rows="4" cols="50" readOnly className="form-control" id="packaging_notes" value={packaging_notes}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="product_notes" className="col-md-3 col-form-label">Product Notes</label>
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <textarea rows="4" cols="50" readOnly className="form-control" id="product_notes" value={product_notes}/>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="product_status" className="col-md-3 col-form-label">Product Status</label>
                                <div className="input-group input-group-sm mb-3 col-md-3">
                                    <input type="text" readOnly className="form-control" id="product_status" value={product_status}/>
                                </div>
                            </div>
                        </div>
                    </>
                </form>
                
                <br></br>

                {/* <div className="product-location m-3 p-3">
                    <label htmlFor="add_location" className="col-form-label-sm">Choose New Location for this Product</label>
                    <div className="input-group input-group-sm mb-3 col-md-6">
                        <select className="form-control form-control-sm" id="add_location">
                            <option value="">Select Location</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <button type="submit" id="add_location" className="btn btn-info btn-sm ml-3">Change Location</button>
                    </div>
                </div> */}

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
    );
};

export default ProductView;
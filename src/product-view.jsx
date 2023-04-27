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
        Axios.get(`http://localhost:3001/api/products/${product_id}`)
        .then(response => {
            setProductData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [product_id]);

    const old_abs_id = productData?.old_abs_id ?? '';
    const customer_id = productData?.customer_id ?? '';
    const product_category = productData?.product_category ?? '';
    const oem_product_id = productData?.oem_product_id ?? '';
    const product_title = productData?.product_title ?? '';
    const product_desc = productData?.product_desc ?? '';
    const product_repl = productData?.product_repl ?? '';
    const master_format = productData?.master_format ?? '';
    var master_received = productData?.master_received ?? '';
    master_received = master_received.slice(0, 10);
    const master_label = productData?.master_label ?? '';
    const master_capacity = productData?.master_capacity ?? '';
    const master_loc = productData?.master_loc ?? '';
    const films_loc = productData?.films_loc ?? '';
    const date_code_required = productData?.date_code_required ?? 0;
    const date_code_position = productData?.date_code_position ?? '';
    const inner_hub = productData?.inner_hub ?? '';
    const inner_hub_position = productData?.inner_hub_position ?? '';
    const floodcoat = productData?.floodcoat ?? 0;
    const rimage_print = productData?.rimage_print ?? 0;
    const color1 = productData?.color1 ?? '';
    const color2 = productData?.color2 ?? '';
    const color3 = productData?.color3 ?? '';
    const color4 = productData?.color4 ?? '';
    const color5 = productData?.color5 ?? '';
    const color6 = productData?.color6 ?? '';
    const color7 = productData?.color7 ?? '';
    const color8 = productData?.color8 ?? '';
    const color_notes = productData?.color_notes ?? '';
    const component1 = productData?.component1 ?? '';
    const component2 = productData?.component2 ?? '';
    const component3 = productData?.component3 ?? '';
    const component4 = productData?.component4 ?? '';
    const component5 = productData?.component5 ?? '';
    const component6 = productData?.component6 ?? '';
    const component7 = productData?.component7 ?? '';
    const component8 = productData?.component8 ?? '';
    const component9 = productData?.component9 ?? '';
    const component10 = productData?.component10 ?? '';
    const component11 = productData?.component11 ?? '';
    const component12 = productData?.component12 ?? '';
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
                        <Link className="nav-link">Settings</Link>
                    </div>
                </div>

                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            </nav>

            <div className="container p-5">
                <div className="page-headers">
                    <h2>VIEW PRODUCT (READ)</h2>
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
                                <div className="input-group input-group-sm mb-3 col-md-8">
                                    <input type="text" readOnly className="form-control" id="customer_id" value={customer_id}/>
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
                                    <input checked={date_code_required} disabled type="checkbox" readOnly  className="custom-control-input" id="date_code_required" />
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
                                    <input checked={floodcoat} disabled type="checkbox" className="custom-control-input" id="floodcoat" />
                                    <label className="custom-control-label" htmlFor="floodcoat"></label>
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="rimage_print" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Rimage Print: </label>
                                <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                    <input checked={rimage_print} disabled type="checkbox" className="custom-control-input" id="rimage_print" />
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
                                    <input type="text" readOnly className="form-control" id="component1" value={component1}/> 
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
                                    <input type="text" readOnly className="form-control" id="component2" value={component2}/> 
                                </div>
                                : null}

                                {component3 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #3</span></strong>
                                    <input type="text" readOnly className="form-control" id="component3" value={component3}/> 
                                </div>
                                : null}

                                {component4 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #4</span></strong>
                                    <input type="text" readOnly className="form-control" id="component4" value={component4}/> 
                                </div>
                                : null}

                                {component5 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #5</span></strong>
                                    <input type="text" readOnly className="form-control" id="component5" value={component5}/> 
                                </div>
                                : null}   

                                {component6 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #6</span></strong>
                                    <input type="text" readOnly className="form-control" id="component6" value={component6}/> 
                                </div>
                                : null}

                                {component7 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #7</span></strong>
                                    <input type="text" readOnly className="form-control" id="component7" value={component7}/> 
                                </div>
                                : null}

                                {component8 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #8</span></strong>
                                    <input type="text" readOnly className="form-control" id="component8" value={component8}/> 
                                </div>
                                : null}

                                {component9 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #9</span></strong>
                                    <input type="text" readOnly className="form-control" id="component9" value={component9}/> 
                                </div>
                                : null}

                                {component10 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #10</span></strong>
                                    <input type="text" readOnly className="form-control" id="component10" value={component10}/> 
                                </div>
                                : null}

                                {component11 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #11</span></strong>
                                    <input type="text" readOnly className="form-control" id="component11" value={component11}/> 
                                </div>
                                : null}

                                {component12 ? 
                                <div className="input-group input-group col-10 mb-2">
                                    <strong><span className="input-group-text">Component #12</span></strong>
                                    <input type="text" readOnly className="form-control" id="component12" value={component12}/> 
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
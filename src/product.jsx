import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

function AddComponent() {
    const [inputValues, setInputValues] = useState({});
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

    const handleOnChange = (e) => {
        const abc = {};
        abc[e.target.className] = e.target.value;
        setInputValues({ ...inputValues, ...abc });
    };

    const removeClick = () => {
        //const element = document.getElementById("temp").remove();
        setCounter(counter - 1);
        console.log(counter);
    };

    return (
        <div className="product">
            <div className="form-row">
                <div className="input-group input-group-sm mb-3 col-sm-10">
                    <button type="button" id="component-add" className="btn btn-outline-primary btn-sm" onClick={handleClick}>Add New Component</button>
                </div>
            </div>

            {Object.keys(inputValues).map((c) => {
                return <p>{inputValues[c]}</p>;
            })}

            {Array.from(Array(counter)).map((c, index) => {
                return (
                    <div id="temp">
                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Component #{counter}</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input onChange={handleOnChange} key={c} className="form-control" type="text"></input>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-1">
                                <button type="button" id="component-remove" className="btn btn-outline-danger btn-sm" onClick={removeClick}>X</button>
                            </div>
                        </div>
                    </div>
                );
            })}


        </div>
    );
}

const Product = () => {
    const navigate = useNavigate();
    return (
        <div className="product-page">
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
                            <label htmlFor="abs-pn" className="col-sm-2 col-form-label">ABS Product P/N</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="abs-pn" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="old-abs-pn" className="col-sm-2 col-form-label">Old ABS P/N</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="old-abs-pn" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer" className="col-sm-2 col-form-label">Customer</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="customer" value="Absolute Media, Inc" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer-id" className="col-sm-2 col-form-label">Customer ID</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="customer-id" placeholder="ABSO" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="category" id="category">
                                    <option selected value="">Select Category</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="oem-pn" className="col-sm-2 col-form-label">OEM Product P/N</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="oem-pn" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="title" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="description" id="productarea" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="replication" className="col-sm-2 col-form-label">Replication</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="replication" id="replication">
                                    <option defaultValue="">Select Type</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master-format" className="col-sm-2 col-form-label">Master Format</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="master-format" id="master-format">
                                    <option selected value="">Select Format</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master-received" className="col-sm-2 col-form-label">Master Received</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="date" className="form-control" name="master-received" id="master-received" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master-label" className="col-sm-2 col-form-label">Master Label</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="master-label" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master-capacity" className="col-sm-2 col-form-label">Master Capacity</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="master-capacity" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master-location" className="col-sm-2 col-form-label">Master Location</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="master-location" id="master-location">
                                    <option selected value="">Select Location</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="films-location" className="col-sm-2 col-form-label">Films Location</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="films-location" id="films-location">
                                    <option selected value="">Select Location</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>

                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="date-code-required" />
                                    <label htmlFor="date-code-required" className="custom-control-label">Date Code Required?</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date-code-position" className="col-sm-2 col-form-label">Date Code Position</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="date-code-position" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="inner-hub" className="col-sm-2 col-form-label">Inner Hub</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="inner-hub" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="inner-hub-position" className="col-sm-2 col-form-label">Inner Hub Position</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" className="form-control" id="inner-hub-position" />
                            </div>
                        </div>
                    </div>

                    <div className="product-color pt-3">
                        <div className="section-headers">
                            <h5>Color Information</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="number-of-colors" className="col-sm-2 col-form-label">Number of Colors?</label>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <select className="form-control" name="number-of-colors" id="number-of-colors">
                                    <option selected value="">Select Value</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>

                            <div className="input-group input-group-sm col-sm-2 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="floodcoat" />
                                    <label htmlFor="floodcoat" className="custom-control-label">Floodcoat?</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-sm-2 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="rimage-print" />
                                    <label htmlFor="rimage-print" className="custom-control-label">Rimage Print?</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="color-notes" className="col-sm-2 col-form-label">Color Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="color-notes" id="productarea" />
                            </div>
                        </div>
                    </div>

                    <div className="product-components pt-3">
                        <div className="section-headers">
                            <h5>Components Info</h5>
                        </div>

                        <AddComponent></AddComponent>

                        <div className="form-row">
                            <label htmlFor="packaging-notes" className="col-sm-2 col-form-label">Packaging Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="packaging-notes" id="productarea" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product-notes" className="col-sm-2 col-form-label">Product Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="product-notes" id="productarea" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product-status" className="col-sm-2 col-form-label">Product Status</label>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <select className="form-control" name="product-status" id="product-status">
                                    <option selected value="">Select Status</option>
                                    <option value="cur">Current</option>
                                    <option value="new">New</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="submit">
                        <button type="submit" id="add-product" className="btn btn-success">Submit</button>
                    </div>

                </form>

                <div className="product-location m-3 p-3">
                    <label htmlFor="add-location" className="col-form-label-sm">Choose a new location for this Product</label>
                    <div className="input-group input-group-sm mb-3 col-sm-4">
                        <select className="form-control form-control-sm" name="add-location" id="add-location" placeholder="Select Value">
                            <option selected value="">Select Location</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <button type="submit" id="add-location" className="btn btn-info btn-sm ml-3">Add Location</button>
                    </div>

                </div>

                <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Home</button>


            </div>

            <div className="footer">
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
            </div>
        </div>
    );
};

export default Product;
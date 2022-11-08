import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"

const Product = () => {
    const navigate = useNavigate();
    return (
        <div className="wrapper p-3">
            <h1>Add Product Page</h1>
            <div className="form">
                <form className="form-col p-3">
                    <div className="product-info">
                        <b>Product Information</b>
                        <div className="form-row pt-3">
                            <div className="form-group col-md-6">
                                <label for="abs-pn">ABS Product P/N</label>
                                <input type="text" readOnly className="form-control-plaintext" id="abs-pn" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="old-abs-pn">Old ABS P/N</label>
                                <input type="text" className="form-control" id="old-abs-pn" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="customer">Customer</label>
                                <input type="text" readOnly className="form-control-plaintext" id="customer" value="Absolute Media, Inc" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="customer-id">Customer ID</label>
                                <input type="text" className="form-control" id="customer-id" placeholder="ABSO" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="category">Category</label>
                            <select className="form-control" name="category" id="category">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label for="oem-pn">OEM Product P/N</label>
                            <input type="text" className="form-control" id="oem-pn" />
                        </div>

                        <div className="form-group">
                            <label for="title">Title</label>
                            <input type="text" className="form-control" id="title" />
                        </div>

                        <div className="form-group">
                            <label for="description">Description</label>
                            <textarea rows="4" cols="50" className="form-control" name="description" id="description" />
                        </div>

                        <div className="form-group">
                            <label for="replication">Replication</label>
                            <select className="form-control" name="replication" id="replication">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="master-format">Master Format</label>
                                <select className="form-control" name="master-format" id="master-format">
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>

                            <div className="form-group col-md-6">
                                <label for="master-received">Master Received</label>
                                <input type="date" className="form-control" name="master-received" id="master-received" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="master-label">Master Label</label>
                                <input type="text" className="form-control" id="master-label" />
                            </div>

                            <div className="form-group col-md-6">
                                <label for="master-capacity">Master Capacity</label>
                                <input type="text" className="form-control" id="master-capacity" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="master-location">Master Location</label>
                                <select className="form-control" name="master-location" id="master-location">
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>

                            <div className="form-group col-md-6">
                                <label for="films-location">Films Location</label>
                                <select className="form-control" name="films-location" id="films-location">
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group custom-control custom-checkbox col-md-6 pl-5 pt-4">
                                <input type="checkbox" className="custom-control-input" id="date-code-required" />
                                <label for="date-code-required" className="custom-control-label">Date Code Required?</label>
                            </div>

                            <div className="form-group col-md-6 ">
                                <label for="date-code-position">Date Code Position</label>
                                <input type="text" className="form-control" id="date-code-position" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="inner-hub">Inner Hub</label>
                            <input type="text" className="form-control" id="inner-hub" />
                        </div>

                        <div className="form-group">
                            <label for="inner-hub-position">Inner Hub Position</label>
                            <input type="text" className="form-control" id="inner-hub-position" />
                        </div>
                    </div>

                    <div className="product-color">
                        <b>Color Information</b>

                        <div className="form-group custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="floodcoat" />
                            <label for="floodcoat" className="custom-control-label">Floodcoat?</label>
                        </div>
                        <div className="form-group custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="rimage-print" />
                            <label for="rimage-print" className="custom-control-label">Rimage Print?</label>
                        </div>

                        <div className="form-group">
                            <label for="number-of-colors">Number of Colors?</label>
                            <select className="form-control" name="number-of-colors" id="number-of-colors">
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

                        <div className="component-list">


                        </div>

                        <div className="form-group">
                            <label for="color-notes">Color Notes</label>
                            <textarea rows="4" cols="50" className="form-control" name="color-notes" id="color-notes" />
                        </div>
                    </div>
                    <div className="product-components">
                        <b>Components Info</b>

                        <div className="form-group">
                            <label for="component-add">Components</label>
                            <div className="form-row">
                                <button type="button" id="component-add" className="btn btn-outline-primary btn-sm">Add New</button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="packaging-notes">Packaging Notes</label>
                            <textarea rows="4" cols="50" className="form-control" name="packaging-notes" id="packaging-notes" />
                        </div>

                        <div className="form-group">
                            <label for="product-notes">Product Notes</label>
                            <textarea rows="4" cols="50" className="form-control" name="product-notes" id="product-notes" />
                        </div>

                        <div className="form-group">
                            <label for="product-status">Product Status</label>
                            <select className="form-control" name="product-status" id="product-status">
                                <option value="cur">Current</option>
                                <option value="new">New</option>
                            </select>
                        </div>
                    </div>

                    <div className="submit">
                        <button type="submit" id="add-product" className="btn btn-success">Submit</button>
                    </div>

                </form>

                <div className="location">
                    <div className="form-group">
                        <label for="add-location" className="col-form-label-sm">Choose a new location for this Product</label>
                        <div className="form-group">
                            <select className="form-control form-control-sm" name="add-location" id="add-location" placeholder="Select Value">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                        <button type="submit" id="add-location" className="btn btn-info btn-sm p-1">Add Location</button>
                    </div>
                </div>
            </div>

            <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Home</button>
        </div>
    );
};

export default Product;
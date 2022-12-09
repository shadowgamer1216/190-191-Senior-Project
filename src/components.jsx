import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

function AddItem() {
    const [inputFields, setInputFields] = useState([
        { field: '' }
    ])
    const handleChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    const addField = () => {
        let newField = { field: '' }
        setInputFields([...inputFields, newField])
    }
    const removeField = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    return (
        <div className="components">
            <div className="form-row">
                <div className="input-group input-group-sm mb-3 col-sm">
                    <button type="button" id="item-add" className="btn btn-outline-primary btn-sm" onClick={addField}>Add Item</button>
                </div>
            </div>

            {inputFields.map((input, index) => {
                return (
                    <div className="it-field" key={index}>
                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Item #{index + 1}</label>
                            <div className="input-group input-group-sm mb-3 col-sm-9">
                                <input
                                    key={index}
                                    className="form-control field"
                                    type="text"
                                    value={input.field}
                                    onChange={event => handleChange(index, event)}
                                />
                            </div>
                            <div className="input-group input-group-sm mb-3 col-sm-1">
                                <button
                                    type="button"
                                    id="color-remove"
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={removeField}
                                >X</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const Components = () => {
    const navigate = useNavigate();
    return (
        <div className="component-page">
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
                                <input type="text" readOnly className="form-control" id="CID" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="componenttype" className="col-sm-2 col-form-label">Component Type</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="componenttype" id="componenttype">
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
                                <input type="text" readOnly className="form-control" id="oem" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="desription1" className="col-sm-2 col-form-label">Description 1</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="description1" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="desription2" className="col-sm-2 col-form-label">Description 2</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="description2" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="desription3" className="col-sm-2 col-form-label">Description 3</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="description3" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="desription4" className="col-sm-2 col-form-label">Description 4</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="description4" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="desription5" className="col-sm-2 col-form-label">Description 5</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="description5" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="size" className="col-sm-2 col-form-label">Size</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <input type="text" readOnly className="form-control" id="size" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="supplier" className="col-sm-2 col-form-label">Supplier/Brand</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="supplier" id="supplier">
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
                                <input type="text" readOnly className="form-control" id="color" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-sm-2 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="ownedbycheck" />
                                    <label htmlFor="ownedbycheck" className="custom-control-label">Owned By Individual Company?</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="uom" className="col-sm-2 col-form-label">Unit of Measure</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select className="form-control" name="uom" id="uom">
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
                                <select className="form-control" name="status" id="status">
                                    <option selected value="">Select Value</option>
                                    <option value="new"> New</option>
                                    <option value="TBD"> TBD</option>
                                </select>
                            </div>
                        </div>

                        <AddItem></AddItem>

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

                        <div className="form-row">
                            <div className="input-group input-group-sm col-sm-3 pl-5">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="packagingcomponent" />
                                    <label htmlFor="packagingcomponent" className="custom-control-label">Packaging Component</label>
                                </div>
                            </div>
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
    )
}
export default Components;

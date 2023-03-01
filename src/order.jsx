import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from 'axios';

function AddNonItem() {
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
        <div className="order">
            <div className="form-row">
                <div className="input-group input-group-sm mb-3 col-sm-10">
                    <button type="button" id="item-add" className="btn btn-outline-primary btn-sm" onClick={addField}>Add New Non-Inventory Item</button>
                </div>
            </div>
            {inputFields.map((input, index) => {
                return (
                    <div className="it-field" key={index}>
                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Non-Inventory Item #{index + 1}</label>
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
                                    id="component-remove"
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={removeField}
                                >X</button>
                            </div>
                            
                            <label className="col-sm-2.75 col-form-label">Invoice</label>
                            <div className="input-group input-group-sm mb-3 col-sm-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="invoice1" />
                                    <label htmlFor="invoice" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-sm-2.75 col-form-label">Packing Slip</label>
                            <div className="input-group input-group-sm mb-3 col-sm-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="packingSlip1" />
                                   <label htmlFor="packingSlip" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-sm-2.75 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-sm-1">
                                <input type="text" className="form-control" id="quantity1" />
                            </div>

                            <label className="col-sm-2.75 col-form-label">Unit Price $</label>
                            <div className="input-group input-group-sm mb-3 col-sm-1">
                                <input type="text" className="form-control" id="unitPrice1" />
                            </div>

                            <label className="col-sm-2.75 col-form-label">Total Price $</label>
                            <div className="input-group input-group-sm mb-3 col-sm-1">
                                <input type="text" className="form-control" id="totalPrice1" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

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
        <div className="order">
            <div className="form-row">
                <div className="input-group input-group-sm mb-3 col-sm-10">
                    <button type="button" id="item-add" className="btn btn-outline-primary btn-sm" onClick={addField}>Add New Inventory Item</button>
                </div>
            </div>
            {inputFields.map((input, index) => {
                return (
                    <div className="it-field" key={index}>
                        <div className="form-row">
                            <label className="col-sm-2 col-form-label">Inventory Item #{index + 1}</label>
                            <div className="input-group input-group-sm mb-3 col-sm-3">
                                <select key={index} className="form-control" value={input.field} onChange={event => handleChange(index, event)}>
                                    <option defaultValue="0">Select Value</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>
                            </div>

                            <div className="input-group input-group-sm mb-3 col-sm-1">
                                <button
                                    type="button"
                                    id="component-remove"
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={removeField}
                                >X</button>
                            </div>

                            <div className="form-row">
                                <label className="col-sm-2.75 col-form-label">Invoice</label>
                                <div className="input-group input-group-sm mb-3 col-sm-1">
                                    <div className="form-group custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="invoice1" />
                                        <label htmlFor="invoice" className="custom-control-label"></label>
                                    </div>
                                </div>

                                <label className="col-sm-2.75 col-form-label">Packing Slip</label>
                                <div className="input-group input-group-sm mb-3 col-sm-1">
                                    <div className="form-group custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="packingSlip1" />
                                        <label htmlFor="packingSlip" className="custom-control-label"></label>
                                    </div>
                                </div>

                                <label className="col-sm-2.75 col-form-label">Quantity</label>
                                <div className="input-group input-group-sm mb-3 col-sm-1">
                                    <input type="text" className="form-control" id="quantity1" />
                                </div>

                                <label className="col-sm-2.75 col-form-label">Unit Price $</label>
                                <div className="input-group input-group-sm mb-3 col-sm-1">
                                    <input type="text" className="form-control" id="unitPrice1" />
                                </div>

                                <label className="col-sm-2.75 col-form-label">Total Price $</label>
                                <div className="input-group input-group-sm mb-3 col-sm-1">
                                    <input type="text" className="form-control" id="totalPrice1" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

const Order = () => {
    const navigate = useNavigate();
    const [salesPerson, setSalesPerson] = useState("");
    const [requestor, setRequestor] = useState("");
    const [cContact, setCCustomer] = useState("");
    const [reOrder, setReOrder] = useState("");

    // Custom Product
    const [factoryOrderQuantity, setFactoryOrderQuantity] = useState("");
    const [customInvoice, setCustomInvoice] = useState("");
    const [customPackingSlip, setCustomPackingSlip] = useState("");
    const [customQuantity, setCustomQuantity] = useState("");
    const [customUnitPrice, setCustomUnitPrice] = useState("");
    const [customTotalPrice, setCustomTotalPrice] = useState("");

    // Non-Inventory Line Items
    // Inventory Items
    // Billing Information
    // Invoice Information
    // Job Information

    const submit = () => {
        Axios.post("http://localhost:3001/api/insert", {
            salesPerson: salesPerson,
            requestor: requestor,
            cContact: cContact,
            reOrder: reOrder,
            factoryOrderQuantity: factoryOrderQuantity,
            customInvoice: customInvoice,
            customPackingSlip: customPackingSlip,
            customQuantity: customQuantity,
            customUnitPrice: customUnitPrice,
            customTotalPrice: customTotalPrice
        })
        .then(() => {
            alert('inserted');
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

                <button className="btn btn-outline-light">Sign In</button>
            </nav>

            <div className="container p-5">
                <div className="page-headers">
                    <h2>ADD ORDER</h2>
                </div>

            <form>
                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>ABSO - Absolute Media, Inc.</h5>
                    </div>

                    <div className="form-row">
                        <label htmlFor="salesPerson" className="col-sm-2 col-form-label">SalesPerson</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="salesPerson" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="requestor" className="col-sm-2 col-form-label">Requestor</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="requestor" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="cContact" className="col-sm-2 col-form-label">Customer Contact</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="cContact" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="reOrder" className="col-sm-2 col-form-label">Re-Order?</label>
                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="reOrder" />
                                <label htmlFor="reOrder" className="custom-control-label"></label>
                            </div>
                        </div>
                    </div>
                        
                </div>
                
                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Custom Product</h5>
                    </div>

                    <div className="form-row">
                        <label htmlFor="productTitle" className="col-sm-2 col-form-label">Product Title</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" readOnly className="form-control" id="productTitle" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="productID" className="col-sm-2 col-form-label">Product ID</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" readOnly className="form-control" id="productID" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="factoryOrderQuantity" className="col-sm-2 col-form-label">Factory Order Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="factoryOrderQuantity" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-sm-2.75 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customInvoice" />
                                <label htmlFor="customInvoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-sm-2.75 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="CustomPackingSlip" />
                                <label htmlFor="CustomPackingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-sm-2.75 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" className="form-control" id="customQuantity" />
                        </div>

                        <label className="col-sm-2.75 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" className="form-control" id="customUnitPrice" />
                        </div>

                        <label className="col-sm-2.75 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" READONLY className="form-control" id="customTotalPrice" />
                         </div>
                    </div>
                </div>

                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Non-Inventory Line Items</h5>
                    </div>

                    <AddNonItem></AddNonItem>
                </div>

                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Inventory Items</h5>
                    </div>

                    <AddItem></AddItem>
                </div>

                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Billing Information</h5>
                    </div>

                    <div className="form-row">
                        <label htmlFor="assemblyCharges" className="col-sm-2 col-form-label">Assembly Charges</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="assemblyCharges" />
                            $
                            <input type="text" className="form-control" id="money1" />
                            $
                            <input type="text" className="form-control" id="money2" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="printingCharges" className="col-sm-2 col-form-label">Date Code Printing Charges</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="printingCharges" />
                            $
                            <input type="text" className="form-control" id="money1" />
                            $
                            <input type="text" className="form-control" id="money2" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="setupCharge" className="col-sm-2 col-form-label">Date Code Setup Charge</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            $
                            <input type="text" className="form-control" id="setupCharge" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="chargeScreen" className="col-sm-2 col-form-label">Art Manipulation / Film Charges for Screens</label>
                        <div className="input-group input-group-sm mb-3 col-sm-5">
                            Number of Screens
                            <input type="text" className="form-control" id="chargeScreen" />
                        </div>
                        <div className="input-group input-group-sm mb-3 col-sm-5">
                            $
                            <input type="text" className="form-control" id="money" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="subTotal" className="col-sm-2 col-form-label">Sub Total</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            $
                            <input type="text" className="form-control" id="subTotal" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="taxable" className="col-sm-2 col-form-label">Taxable?</label>

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="taxRate" />
                                <label htmlFor="taxRate" className="custom-control-label">Tax Rate?</label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-8">
                            <input type="text" className="form-control" id="taxable" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="tax" className="col-sm-2 col-form-label">Tax</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            $
                            <input type="text" className="form-control" id="tax" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="freightCharges" className="col-sm-2 col-form-label">Freight Charges</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            $
                            <input type="text" className="form-control" id="freightCharges" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="priceTotal" className="col-sm-2 col-form-label">Order Price Total</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            $
                            <input type="text" className="form-control" id="priceTotal" />
                        </div>
                    </div>
                </div>

                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Invoice Information</h5>
                    </div>

                    <div className="form-row">
                        <label htmlFor="invoiceDate" className="col-sm-2 col-form-label">Invoice Date</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="date" className="form-control" name="invoiceDate" id="invoiceDate" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="invoiceDatePaid" className="col-sm-2 col-form-label">Invoice Date Paid</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="date" className="form-control" name="invoiceDatePaid" id="invoiceDatePaid" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="invoiceNotes" className="col-sm-2 col-form-label">Invoice Notes</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="invoiceNotes" id="custom-area" />
                            </div>
                    </div>
                </div>
                
                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Job Information</h5>
                    </div>

                    <div className="form-row">
                        <label htmlFor="ABSOrder" className="col-sm-2 col-form-label">ABS Sales Order Date</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="date" className="form-control" name="ABSOrder" id="ABSOrder" />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <label htmlFor="customerOrder" className="col-sm-2 col-form-label">Customer Order Date</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="date" className="form-control" name="customerOrder" id="customerOrder" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerPODate" className="col-sm-2 col-form-label">Customer PO Date</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="date" className="form-control" name="customerPODate" id="customerPODate" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerPONumber" className="col-sm-2 col-form-label">Customer PO Number</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="customerPONumber" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="creditChecked" className="col-sm-2 col-form-label">Credit Checked?</label>
                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="creditChecked" />
                                <label htmlFor="creditChecked" className="custom-control-label"></label>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="daysTurn" className="col-sm-2 col-form-label">Days Turn</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="daysTurn" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="dateCodePrinting" className="col-sm-2 col-form-label">Date Code Printing</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <input type="date" className="form-control" name="dateCodePrinting" id="dateCodePrinting" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="assemblyBy" className="col-sm-2 col-form-label">Assembly By</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <select className="form-control" name="assemblyBy" id="assemblyBy">
                                <option defaultValue="0">Select Value</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="discManufacturedBy" className="col-sm-2 col-form-label">Disc Manufactured By</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <select className="form-control" name="discManufacturedBy" id="discManufacturedBy">
                                <option defaultValue="0">Select Value</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="CDBrand" className="col-sm-2 col-form-label">CD-R / DVD-R Brand</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <select className="form-control" name="CDBrand" id="CDBrand">
                                <option defaultValue="0">Select Value</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="discProvidedBy" className="col-sm-2 col-form-label">Disc Provided By</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <select className="form-control" name="discProvidedBy" id="discProvidedBy">
                                <option defaultValue="0">Select Value</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerProvidedMaterial" className="col-sm-2 col-form-label">Customer Provided Material</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <textarea rows="4" cols="50" className="form-control" name="customerProvidedMaterial" id="custom-area" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerMaterialETA" className="col-sm-2 col-form-label">Customer Material ETA</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                             <input type="date" className="form-control" name="customerMaterialETA" id="customerMaterialETA" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerNotes" className="col-sm-2 col-form-label">Customer Notes</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <textarea rows="4" cols="50" className="form-control" name="customerNotes" id="custom-area" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="vendorNotes" className="col-sm-2 col-form-label">Vendor Notes</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <textarea rows="4" cols="50" className="form-control" name="vendorNotes" id="custom-area" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="orderNotes" className="col-sm-2 col-form-label">Order Notes</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <textarea rows="4" cols="50" className="form-control" name="orderNotes" id="custom-area" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="orderStatus" className="col-sm-2 col-form-label">Order Status</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <select className="form-control" name="orderStatus" id="orderStatus">
                                <option defaultValue="0">Submitted</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="submit p-3">
                    <button type="submit" id="add-product" className="btn btn-success">Submit</button>
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
export default Order;
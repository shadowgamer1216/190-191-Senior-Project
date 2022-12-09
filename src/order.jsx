import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"

const Order = () => {
    const navigate = useNavigate();
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
                            <input type="text" readOnly className="form-control" id="salesPerson" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="requestor" className="col-sm-2 col-form-label">Requestor</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" readOnly className="form-control" id="requestor" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="cContact" className="col-sm-2 col-form-label">Customer Contact</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" readOnly className="form-control" id="cContact" />
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
                            <input type="text" readOnly className="form-control" id="factoryOrderQuantity" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="Invoice" className="col-sm-2 col-form-label">Invoice</label>
                        <label htmlFor="packingSlip" className="col-sm-2 col-form-label">Packing Slip</label>
                        <label htmlFor="Quantity" className="col-sm-2 col-form-label">Quantity</label>
                        <label htmlFor="unitPrice" className="col-sm-2 col-form-label">Unit Price $</label>
                        <label htmlFor="totalPrice" className="col-sm-2 col-form-label">Total Price $</label>
                    </div>

                    <div className="form-row">

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="invoice" />
                                <label htmlFor="invoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="packingSlip" />
                                <label htmlFor="packingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="quantity" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="unitPrice" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="totalPrice" />
                        </div>
                    </div>
                </div>

                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Non-Inventory Line Items</h5>
                    </div>

                    <div className = "form-container">
                        <div className="form-row">
                            <label htmlFor="nonInventory1" className="col-sm-2 col-form-label">1</label>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <input type="text" readOnly className="form-control" id="nonInventory1" />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="invoice1" />
                                <label htmlFor="invoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="packingSlip1" />
                                <label htmlFor="packingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="quantity1" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="unitPrice1" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="totalPrice1" />
                        </div>
                    </div>

                    <div className = "form-container">
                        <div className="form-row">
                            <label htmlFor="nonInventory2" className="col-sm-2 col-form-label">2</label>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <input type="text" readOnly className="form-control" id="nonInventory2" />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="invoice2" />
                                <label htmlFor="invoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="packingSlip2" />
                                <label htmlFor="packingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="quantity2" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="unitPrice2" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="totalPrice2" />
                        </div>
                    </div>

                    <div className = "form-container">
                        <div className="form-row">
                            <label htmlFor="nonInventory3" className="col-sm-2 col-form-label">3</label>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <input type="text" readOnly className="form-control" id="nonInventory3" />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="invoice3" />
                                <label htmlFor="invoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="packingSlip3" />
                                <label htmlFor="packingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="quantity3" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="unitPrice3" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="totalPrice3" />
                        </div>
                    </div>

                    <div className = "form-container">
                        <div className="form-row">
                            <label htmlFor="nonInventory4" className="col-sm-2 col-form-label">4</label>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <input type="text" readOnly className="form-control" id="nonInventory4" />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="invoice4" />
                                <label htmlFor="invoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="packingSlip4" />
                                <label htmlFor="packingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="quantity4" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="unitPrice4" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="totalPrice4" />
                        </div>
                    </div>

                    <div className = "form-container">
                        <div className="form-row">
                            <label htmlFor="nonInventory5" className="col-sm-2 col-form-label">5</label>
                            <div className="input-group input-group-sm mb-3 col-sm-2">
                                <input type="text" readOnly className="form-control" id="nonInventory5" />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="invoice5" />
                                <label htmlFor="invoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="packingSlip5" />
                                <label htmlFor="packingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="quantity5" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="unitPrice5" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="totalPrice5" />
                        </div>
                    </div>
                </div>

                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Inventory Items</h5>
                    </div>

                    <div className="form-row">
                        <label htmlFor="inventory1" className="col-sm-2 col-form-label">1</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <select className="form-control" name="inventory1" id="inventory1">
                                <option defaultValue="0">Select Value</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                    </div>

                    <div className = "form-row">
                        <div className="form-row">
                            <label htmlFor="item1">Item 1 Quantity and Price</label>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="item1" />
                                <label htmlFor="invoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="item1" />
                                <label htmlFor="packingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="item1" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="item1" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="item1" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="inventory2" className="col-sm-2 col-form-label">2</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <select className="form-control" name="inventory2" id="inventory2">
                                <option defaultValue="0">Select Value</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                    </div>

                    <div className = "form-row">
                        <div className="form-row">
                            <label htmlFor="item1">Item 2 Quantity and Price</label>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="item2" />
                                <label htmlFor="invoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="item2" />
                                <label htmlFor="packingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="item2" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="item2" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="item2" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="inventory3" className="col-sm-2 col-form-label">3</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <select className="form-control" name="inventory3" id="inventory3">
                                <option defaultValue="0">Select Value</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                    </div>

                    <div className = "form-row">
                        <div className="form-row">
                            <label htmlFor="item1">Item 3 Quantity and Price</label>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="item3" />
                                <label htmlFor="invoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="item3" />
                                <label htmlFor="packingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="item3" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="item3" />
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-1"></div>

                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="text" readOnly className="form-control" id="item3" />
                        </div>
                    </div>
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
                                <textarea rows="4" cols="50" className="form-control" name="invoiceNotes" id="invoiceNotes" />
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
                            <input type="text" readOnly className="form-control" id="customerPONumber" />
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
                            <input type="text" readOnly className="form-control" id="daysTurn" />
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
                            <textarea rows="4" cols="50" className="form-control" name="customerProvidedMaterial" id="customerProvidedMaterial" />
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
                            <textarea rows="4" cols="50" className="form-control" name="customerNotes" id="customerNotes" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="vendorNotes" className="col-sm-2 col-form-label">Vendor Notes</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <textarea rows="4" cols="50" className="form-control" name="vendorNotes" id="vendorNotes" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="orderNotes" className="col-sm-2 col-form-label">Order Notes</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <textarea rows="4" cols="50" className="form-control" name="orderNotes" id="orderNotes" />
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

            </form>

            <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Submit</button>
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
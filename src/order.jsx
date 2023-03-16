import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState, useMemo } from "react";
import Axios from 'axios';

const Order = () => {
    const navigate = useNavigate();
    const [salesPerson, setSalesPerson] = useState("");
    const [requestor, setRequestor] = useState("");
    const [customerContact, setCustomerContact] = useState("");
    const [reOrder, setReOrder] = useState(false);

    // Custom Product
    const [factoryOrderQuantity, setFactoryOrderQuantity] = useState(0);
    const [customInvoice, setCustomInvoice] = useState(false);
    const [customPackingSlip, setCustomPackingSlip] = useState(false);
    const [customQuantity, setCustomQuantity] = useState(0);
    const [customUnitPrice, setCustomUnitPrice] = useState(0);
    const [customTotalPrice, setCustomTotalPrice] = useState(customQuantity * customUnitPrice);

    // Non-Inventory Line Items
    // Inventory Items

    // Billing Information
    const [assemblyChargesQuantity, setAssemblyChargesQuantity] = useState(0);
    const [assemblyChargesUnitPrice, setAssemblyChargesUnitPrice] = useState(0);
    const [assemblyChargesTotalPrice, setAssemblyChargesTotalPrice] = useState(0);
    const [printingChargesQuantity, setPrintingChargesQuantity] = useState(0);
    const [printingChargesUnitPrice, setPrintingChargesUnitPrice] = useState(0);
    const [printingChargesTotalPrice, setPrintingChargesTotalPrice] = useState(0);
    const [setupCharge, setSetupCharge] = useState(0);
    const [numberOfScreens, setNumberOfScreens] = useState(0);
    const [screensPrice, setScreensPrice] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [taxable, setTaxable] = useState(false);
    const [taxRate, setTaxRate] = useState(0);
    const [tax, setTax] = useState(0);
    const [freightCharges, setFreightCharges] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);

    // Invoice Information
    const [invoiceDate, setInvoiceDate] = useState("");
    const [invoiceDatePaid, setInvoiceDatePaid] = useState("");
    const [invoiceNotes, setInvoiceNotes] = useState("");

    // Job Information
    const [ABSOrder, setABSOrder] = useState("");
    const [customerOrder, setCustomerOrder] = useState("");
    const [customerPODate, setCustomerPODate] = useState("");
    const [customerPONumber, setCustomerPONumber] = useState(0);
    const [creditChecked, setCreditChecked] = useState(false);
    const [daysTurn, setDaysTurn] = useState(0);
    const [dateCodePrinting, setDateCodePrinting] = useState("");
    const [assemblyBy, setAssemblyBy] = useState("");
    const [discManufacturedBy, setDiscManufacturedBy] = useState("");
    const [CDBrand, setCDBrand] = useState("");
    const [discProvidedBy, setDiscProvidedBy] = useState("");
    const [customerProvidedMaterial, setCustomerProvidedMaterial] = useState("");
    const [customerMaterialETA, setCustomerMaterialETA] = useState("");
    const [customerNotes, setCustomerNotes] = useState("");
    const [vendorNotes, setVendorNotes] = useState("");
    const [orderNotes, setOrderNotes] = useState("");
    const [orderStatus, setOrderStatus] = useState("Submitted");

    const [productList, setProductList] = useState([]);
    const [productID, setProductID] = useState(0);

    const [contactList, setContactList] = useState([]);
    const [customerID, setCustomerID] = useState("");

    const CalculateTotal = ({customQuantity, customUnitPrice, customTotalPrice, setCustomTotalPrice}) => {
        //const [customTotalPrice, setCustomTotalPrice] = useState(customQuantity * customUnitPrice);
        setCustomTotalPrice(customQuantity * customUnitPrice)
        return (
            <div className="order">
                <div className="form-row">
                    <label className="col-sm-2.5 col-form-label">Total Price $</label>
                    <div className="input-group input-group-sm mb-3 col-sm-5">
                        <input type="number" readOnly defaultValue={customTotalPrice} className="form-control" id="customTotalPrice"
                        />
                    </div>
                </div>
            </div>
        );
    }

    const submit = () => {
        Axios.post("http://localhost:3001/api/insertOrder", {
            salesPerson: salesPerson,
            requestor: requestor,
            customerContact: customerContact,
            reOrder: reOrder,

            // Custom Product
            factoryOrderQuantity: factoryOrderQuantity,
            customInvoice: customInvoice,
            customPackingSlip: customPackingSlip,
            customQuantity: customQuantity,
            customUnitPrice: customUnitPrice,
            customTotalPrice: customTotalPrice,

            // Billing Information
            assemblyChargesQuantity: assemblyChargesQuantity,
            assemblyChargesUnitPrice: assemblyChargesUnitPrice,
            assemblyChargesTotalPrice: assemblyChargesTotalPrice,
            printingChargesQuantity: printingChargesQuantity,
            printingChargesUnitPrice: printingChargesUnitPrice,
            printingChargesTotalPrice: printingChargesTotalPrice,
            setupCharge: setupCharge,
            numberOfScreens: numberOfScreens,
            screensPrice: screensPrice,
            subTotal: subTotal,
            taxRate: taxRate,
            taxable: taxable,
            tax: tax,
            freightCharges: freightCharges,
            priceTotal: priceTotal,

            // Invoice Information
            invoiceDate: invoiceDate,
            invoiceDatePaid: invoiceDatePaid,
            invoiceNotes: invoiceNotes,

            // Job Information
            ABSOrder: ABSOrder,
            customerOrder: customerOrder,
            customerPODate: customerPODate,
            customerPONumber: customerPONumber,
            creditChecked: creditChecked,
            daysTurn: daysTurn,
            dateCodePrinting: dateCodePrinting,
            assemblyBy: assemblyBy,
            discManufacturedBy: discManufacturedBy,
            CDBrand: CDBrand,
            discProvidedBy: discProvidedBy,
            customerProvidedMaterial: customerProvidedMaterial,
            customerMaterialETA: customerMaterialETA,
            customerNotes: customerNotes,
            vendorNotes: vendorNotes,
            orderNotes: orderNotes,
            orderStatus: orderStatus
        }).then(() => {
            console.log("Success");
        })
    };

    const getProduct = useMemo(() => {
        Axios.get("http://localhost:3001/api/getProductInfo", {productID: productID}).then((response) => {
            setProductList(response.data);
        });
    }, [productID]);

    const getContact = useMemo(() => {
        Axios.get("http://localhost:3001/api/getContactInfo", {customerID: customerID}).then((response) => {
            setContactList(response.data);
        });
    }, [customerID]);

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
                                    <input type="text" readOnly className="form-control" id="totalPrice1" />
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
                                        <input type="text" readOnly className="form-control" id="totalPrice1" />
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    <h2>ADD ORDER</h2>
                </div>

            <form>
                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>ABSO - Absolute Media, Inc.</h5>
                    </div>
                    
                    <div className="form-row">
                        <label className="col-sm-6 col-form-label"><b><u>Billing Information</u></b></label>    {/* Contact Page*/}
                        <label className="col-sm-6 col-form-label"><b><u>Product Information</u></b></label>    {/* Product Page*/}
                    </div>

                    <div className="form-row">
                        <label className="col-sm-2 col-form-label"><b>Customer ID:</b></label>
                        <div className="input-group input-group-sm mb-2 col-sm-2">
                            <input type="text" className="form-control" id="name"
                            onChange = {(e) => {
                                setCustomerID(e.target.value)
                            }}/>
                        </div>
                        <div>
                            <button onClick={getContact} className="btn btn-outline-dark">Get Information</button>
                        </div>
                        <label className="col-sm-2 col-form-label"><b>Product ID:</b></label>
                        <div className="input-group input-group-sm mb-2 col-sm-2">
                            <input type="number" className="form-control" id="productID" 
                            onChange = {(e) => {
                                setProductID(e.target.value)
                            }}/>
                        </div>
                        <div>
                            <button onClick={getProduct} className="btn btn-outline-dark">Get Information</button>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-sm-6 col-form-label"><b>Company:</b></label>
                            {contactList.map((val, key) => {
                                return <div> {val.company} </div>
                            })}
                        <label className="col-sm-2 col-form-label"><b>Product Category:</b></label>
                            {productList.map((val, key) => {
                                return <div> {val.product_category} </div>
                            })}
                    </div>

                    <div className="form-row">
                        <label className="col-sm-6 col-form-label"><b>Phone:</b></label>
                            {contactList.map((val, key) => {
                                return <div> {val.phone} </div>
                            })}
                        <label className="col-sm-2 col-form-label"><b>OEM Product ID:</b></label>
                            {productList.map((val, key) => {
                                return <div> {val.oem_product_id} </div>
                            })}
                    </div>

                    <div className="form-row">
                        <label className="col-sm-6 col-form-label"><b>Address 1:</b></label>
                            {contactList.map((val, key) => {
                                return <div> {val.add_1} </div>
                            })}
                        <label className="col-sm-2 col-form-label"><b>Product Title:</b></label>
                            {productList.map((val, key) => {
                                return <div> {val.product_title} </div>
                            })}
                    </div>

                    <div className="form-row">
                        <label className="col-sm-6 col-form-label"><b>Address 2:</b></label>
                            {contactList.map((val, key) => {
                                return <div> {val.add_2} </div>
                            })}
                        <label className="col-sm-6 col-form-label"><b>Number of Colors:</b></label>
                            {/* {productList.map((val, key) => {
                                return <div> {val.product_category} </div>
                            })} */}
                    </div>

                    <div className="form-row">
                        <label className="col-sm-2 col-form-label"><b>City:</b></label>
                            {contactList.map((val, key) => {
                                return <div> {val.city} </div>
                            })}
                    </div>

                    <div className="form-row">
                        <label className="col-sm-2 col-form-label"><b>State:</b></label>
                            {contactList.map((val, key) => {
                                return <div> {val.state} </div>
                            })}
                    </div>

                    <div className="form-row">
                        <label className="col-sm-2 col-form-label"><b>Zip:</b></label>
                            {contactList.map((val, key) => {
                                return <div> {val.zip} </div>
                            })}
                    </div>

                    <div className="form-row">
                        <label htmlFor="salesPerson" className="col-sm-2 col-form-label">SalesPerson</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="salesPerson" 
                            onChange = {(e) => {
                                setSalesPerson(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="requestor" className="col-sm-2 col-form-label">Requestor</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="requestor"
                            onChange = {(e) => {
                                setRequestor(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="cContact" className="col-sm-2 col-form-label">Customer Contact</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="customerContact"
                            onChange = {(e) => {
                                setCustomerContact(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="reOrder" className="col-sm-2 col-form-label">Re-Order?</label>
                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={reOrder} className="custom-control-input" id="reOrder"
                                onChange = {() =>  {
                                    setReOrder((prev) => !prev) 
                                }}/>
                                <label htmlFor="reOrder" className="custom-control-label"></label>
                                {reOrder ? "Selected" : "Unchecked"}
                            </div>
                        </div>
                    </div>
                        
                </div>
                
                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Custom Product</h5>
                    </div>

                    <div className="form-row">
                        <label htmlFor="productTitle" className="col-sm-2 col-form-label"><b>Product Title:</b></label>
                            {productList.map((val, key) => {
                                return <div> {val.product_title} </div>
                            })}
                    </div>

                    <div className="form-row">
                        <label htmlFor="productID" className="col-sm-2 col-form-label"><b>Product ID:</b></label>
                            {productList.map((val, key) => {
                                return <div> {val.product_id} </div>
                            })}
                    </div>

                    <div className="form-row">
                        <label htmlFor="factoryOrderQuantity" className="col-sm-2 col-form-label">Factory Order Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="number" className="form-control" id="factoryOrderQuantity"
                            onChange = {(e) => {
                                setFactoryOrderQuantity(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-sm-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={customInvoice} className="custom-control-input" id="customInvoice"
                                onChange = {() => setCustomInvoice((prev) => !prev) }/>
                                <label htmlFor="customInvoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-sm-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked ={customPackingSlip} className="custom-control-input" id="CustomPackingSlip"
                                onChange = {() => setCustomPackingSlip((prev) => !prev)} />
                                <label htmlFor="CustomPackingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-sm-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="number" className="form-control" id="customQuantity"
                            onChange = {(e) => {
                                setCustomQuantity(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-sm-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-sm-1">
                            <input type="number" className="form-control" id="customUnitPrice"
                            onChange = {(e) => {
                                setCustomUnitPrice(+e.target.value)
                            }}/>
                        </div>

                        <CalculateTotal customQuantity={customQuantity} customUnitPrice={customUnitPrice} customTotalPrice={customTotalPrice} setCustomTotalPrice={setCustomTotalPrice}/>
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
                            <input type="number" className="form-control" id="assemblyChargesQuantity" placeholder="Quantity"
                            onChange = {(e) => {
                                setAssemblyChargesQuantity(e.target.value)
                            }}/>
                            
                            <input type="number" className="form-control" id="assemblyChargesUnitPrice" placeholder="Unit Price $"
                            onChange = {(e) => {
                                setAssemblyChargesUnitPrice(e.target.value)
                            }}/>
                            
                            <input type="number" readOnly className="form-control" id="assemblyChargesTotalPrice" placeholder="Total Price $"
                            onChange = {(e) => {
                                setAssemblyChargesTotalPrice(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="printingCharges" className="col-sm-2 col-form-label">Date Code Printing Charges</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="number" className="form-control" id="printingChargesQuantity" placeholder="Quantity"
                            onChange = {(e) => {
                                setPrintingChargesQuantity(e.target.value)
                            }}/>
                            
                            <input type="number" className="form-control" id="printingChargesUnitPrice" placeholder="Unit Price $"
                            onChange = {(e) => {
                                setPrintingChargesUnitPrice(e.target.value)
                            }}/>
                            
                            <input type="number" readOnly className="form-control" id="printingChargesTotalPrice" placeholder="Total Price $"
                            onChange = {(e) => {
                                setPrintingChargesTotalPrice(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="setupCharge" className="col-sm-2 col-form-label">Date Code Setup Charge</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            
                            <input type="number" className="form-control" id="setupCharge" placeholder="$"
                            onChange = {(e) => {
                                setSetupCharge(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="numberofScreens" className="col-sm-2 col-form-label">Art Manipulation / Film Charges for Screens</label>
                        <div className="input-group input-group-sm mb-3 col-sm-5">

                            <input type="number" className="form-control" id="numberOfScreens" placeholder="Number of Screens"
                            onChange = {(e) => {
                                setNumberOfScreens(e.target.value)
                            }}/>
                        </div>
                        <div className="input-group input-group-sm mb-3 col-sm-5">
                            
                            <input type="number" className="form-control" id="screensPrice" placeholder="$"
                            onChange = {(e) => {
                                setScreensPrice(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="subTotal" className="col-sm-2 col-form-label">Sub Total</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            
                            <input type="number" className="form-control" id="subTotal" placeholder="$"
                            onChange = {(e) => {
                                setSubTotal(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="taxable" className="col-sm-2 col-form-label">Taxable?</label>
                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={taxable} className="custom-control-input" id="taxRate"
                                onChange = {() => setTaxable((prev) => !prev)} />
                                <label htmlFor="taxRate" className="custom-control-label">Tax Rate?</label>
                            </div>
                        </div>

                        <div className="input-group input-group-sm mb-3 col-sm-8">
                            <input type="number" className="form-control" id="taxable"
                            onChange = {(e) => {
                                setTaxRate(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="tax" className="col-sm-2 col-form-label">Tax</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            
                            <input type="number" className="form-control" id="tax" placeholder="$"
                            onChange = {(e) => {
                                setTax(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="freightCharges" className="col-sm-2 col-form-label">Freight Charges</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            
                            <input type="number" className="form-control" id="freightCharges" placeholder="$"
                            onChange = {(e) => {
                                setFreightCharges(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="priceTotal" className="col-sm-2 col-form-label">Order Price Total</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            
                            <input type="text" className="form-control" id="priceTotal" placeholder="$"
                            onChange = {(e) => {
                                setPriceTotal(e.target.value)
                            }}/>
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
                                <input type="date" className="form-control" name="invoiceDate" id="invoiceDate"
                                onChange = {(e) => {
                                    setInvoiceDate(e.target.value)
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="invoiceDatePaid" className="col-sm-2 col-form-label">Invoice Date Paid</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="date" className="form-control" name="invoiceDatePaid" id="invoiceDatePaid"
                                onChange = {(e) => {
                                    setInvoiceDatePaid(e.target.value)
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="invoiceNotes" className="col-sm-2 col-form-label">Invoice Notes</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                                <textarea rows="4" cols="50" className="form-control" name="invoiceNotes" id="invoiceNotes"
                                onChange = {(e) => {
                                    setInvoiceNotes(e.target.value)
                                }}/>
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
                                <input type="date" className="form-control" name="ABSOrder" id="ABSOrder"
                                onChange = {(e) => {
                                    setABSOrder(e.target.value)
                                }}/>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <label htmlFor="customerOrder" className="col-sm-2 col-form-label">Customer Order Date</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="date" className="form-control" name="customerOrder" id="customerOrder"
                                onChange = {(e) => {
                                    setCustomerOrder(e.target.value)
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerPODate" className="col-sm-2 col-form-label">Customer PO Date</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="date" className="form-control" name="customerPODate" id="customerPODate"
                                onChange = {(e) => {
                                    setCustomerPODate(e.target.value)
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerPONumber" className="col-sm-2 col-form-label">Customer PO Number</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="customerPONumber"
                            onChange = {(e) => {
                                setCustomerPONumber(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="creditChecked" className="col-sm-2 col-form-label">Credit Checked?</label>
                        <div className="input-group input-group-sm col-sm-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={creditChecked} className="custom-control-input" id="creditChecked"
                                onChange = {() => setCreditChecked((prev) => !prev)} />
                                <label htmlFor="creditChecked" className="custom-control-label"></label>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="daysTurn" className="col-sm-2 col-form-label">Days Turn</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <input type="text" className="form-control" id="daysTurn"
                            onChange = {(e) => {
                                setDaysTurn(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="dateCodePrinting" className="col-sm-2 col-form-label">Date Code Printing</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <input type="date" className="form-control" name="dateCodePrinting" id="dateCodePrinting"
                            onChange = {(e) => {
                                setDateCodePrinting(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="assemblyBy" className="col-sm-2 col-form-label">Assembly By</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <select className="form-control" name="assemblyBy" id="assemblyBy"
                            onChange = {(e) => {
                                setAssemblyBy(e.target.value)
                            }}>
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
                            <select className="form-control" name="discManufacturedBy" id="discManufacturedBy"
                            onChange = {(e) => {
                                setDiscManufacturedBy(e.target.value)
                            }}>
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
                            <select className="form-control" name="CDBrand" id="CDBrand"
                            onChange = {(e) => {
                                setCDBrand(e.target.value)
                            }}>
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
                            <select className="form-control" name="discProvidedBy" id="discProvidedBy"
                            onChange = {(e) => {
                                setDiscProvidedBy(e.target.value)
                            }}>
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
                            <textarea rows="4" cols="50" className="form-control" name="customerProvidedMaterial" id="customerProvidedMaterial"
                            onChange = {(e) => {
                                setCustomerProvidedMaterial(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerMaterialETA" className="col-sm-2 col-form-label">Customer Material ETA</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                             <input type="date" className="form-control" name="customerMaterialETA" id="customerMaterialETA"
                             onChange = {(e) => {
                                setCustomerMaterialETA(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerNotes" className="col-sm-2 col-form-label">Customer Notes</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <textarea rows="4" cols="50" className="form-control" name="customerNotes" id="customerNotes"
                            onChange = {(e) => {
                                setCustomerNotes(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="vendorNotes" className="col-sm-2 col-form-label">Vendor Notes</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <textarea rows="4" cols="50" className="form-control" name="vendorNotes" id="vendorNotes"
                            onChange = {(e) => {
                                setVendorNotes(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="orderNotes" className="col-sm-2 col-form-label">Order Notes</label>
                        <div className="input-group input-group-sm mb-3 col-sm-10">
                            <textarea rows="4" cols="50" className="form-control" name="orderNotes" id="orderNotes"
                            onChange = {(e) => {
                                setOrderNotes(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="orderStatus" className="col-sm-2 col-form-label">Order Status</label>
                        <div className="input-group input-group-sm mb-3 col-sm-3">
                            <select className="form-control" name="orderStatus" id="orderStatus"
                            onChange = {(e) => {
                                setOrderStatus(e.target.value)
                            }}>
                                <option defaultValue="Submitted">Submitted</option>
                                <option value="Entered">Entered</option>
                                <option value="Partial Shipped">Partial Shipped</option>
                                <option value="Complete Shipped">Complete Shipped</option>
                                <option value="Invoiced">Invoiced</option>
                                <option value="On Hold">On Hold</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="submit p-3">
                    <button onClick = {submit} type="submit" id="add-order" className="btn btn-success">Submit</button>
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
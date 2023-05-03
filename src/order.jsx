import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from 'axios';
import Select from "react-select";

const Order = ({ handleLogout }) => {

    const routeChange = () => {
        let path = '/login';
        navigate(path);
    };
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (!authToken) {
            routeChange()
        }
    }, []);

    const navigate = useNavigate();
    
    const [productID, setProductID] = useState(null);
    const [companyID, setCompanyID] = useState(null);

    const [salesPerson, setSalesPerson] = useState(null);
    const [requestor, setRequestor] = useState(null);
    const [customerContact, setCustomerContact] = useState(null);
    const [reOrder, setReOrder] = useState(false);

    // Custom Product
    const [factoryOrderQuantity, setFactoryOrderQuantity] = useState(0);
    const [customInvoice, setCustomInvoice] = useState(false);
    const [customPackingSlip, setCustomPackingSlip] = useState(false);
    const [customQuantity, setCustomQuantity] = useState(0);
    const [customUnitPrice, setCustomUnitPrice] = useState(0);
    const [customTotalPrice, setCustomTotalPrice] = useState(customQuantity * customUnitPrice);

    // Non-Inventory Line Items
    const [nonItem1, setNonItem1] = useState(null);
    const [nonItemInvoice1, setNonItemInvoice1] = useState(false);
    const [nonItemPackingSlip1, setNonItemPackingSlip1] = useState(false);
    const [nonItemQuantity1, setNonItemQuantity1] = useState(0);
    const [nonItemUnitPrice1, setNonItemUnitPrice1] = useState(0);
    const [nonItemTotalPrice1, setNonItemTotalPrice1] = useState(nonItemQuantity1 * nonItemUnitPrice1);
    const [nonItem2, setNonItem2] = useState(null);
    const [nonItemInvoice2, setNonItemInvoice2] = useState(false);
    const [nonItemPackingSlip2, setNonItemPackingSlip2] = useState(false);
    const [nonItemQuantity2, setNonItemQuantity2] = useState(0);
    const [nonItemUnitPrice2, setNonItemUnitPrice2] = useState(0);
    const [nonItemTotalPrice2, setNonItemTotalPrice2] = useState(nonItemQuantity2 * nonItemUnitPrice2);
    const [nonItem3, setNonItem3] = useState(null);
    const [nonItemInvoice3, setNonItemInvoice3] = useState(false);
    const [nonItemPackingSlip3, setNonItemPackingSlip3] = useState(false);
    const [nonItemQuantity3, setNonItemQuantity3] = useState(0);
    const [nonItemUnitPrice3, setNonItemUnitPrice3] = useState(0);
    const [nonItemTotalPrice3, setNonItemTotalPrice3] = useState(nonItemQuantity3 * nonItemUnitPrice3);
    const [nonItem4, setNonItem4] = useState(null);
    const [nonItemInvoice4, setNonItemInvoice4] = useState(false);
    const [nonItemPackingSlip4, setNonItemPackingSlip4] = useState(false);
    const [nonItemQuantity4, setNonItemQuantity4] = useState(0);
    const [nonItemUnitPrice4, setNonItemUnitPrice4] = useState(0);
    const [nonItemTotalPrice4, setNonItemTotalPrice4] = useState(nonItemQuantity4 * nonItemUnitPrice4);
    const [nonItem5, setNonItem5] = useState(null);
    const [nonItemInvoice5, setNonItemInvoice5] = useState(false);
    const [nonItemPackingSlip5, setNonItemPackingSlip5] = useState(false);
    const [nonItemQuantity5, setNonItemQuantity5] = useState(0);
    const [nonItemUnitPrice5, setNonItemUnitPrice5] = useState(0);
    const [nonItemTotalPrice5, setNonItemTotalPrice5] = useState(nonItemQuantity5 * nonItemUnitPrice5);
    const [nonItem6, setNonItem6] = useState(null);
    const [nonItemInvoice6, setNonItemInvoice6] = useState(false);
    const [nonItemPackingSlip6, setNonItemPackingSlip6] = useState(false);
    const [nonItemQuantity6, setNonItemQuantity6] = useState(0);
    const [nonItemUnitPrice6, setNonItemUnitPrice6] = useState(0);
    const [nonItemTotalPrice6, setNonItemTotalPrice6] = useState(nonItemQuantity6 * nonItemUnitPrice6);

    // Inventory Items
    const [item1, setItem1] = useState(null);
    const [itemInvoice1, setItemInvoice1] = useState(false);
    const [itemPackingSlip1, setItemPackingSlip1] = useState(false);
    const [itemQuantity1, setItemQuantity1] = useState(0);
    const [itemUnitPrice1, setItemUnitPrice1] = useState(0);
    const [itemTotalPrice1, setItemTotalPrice1] = useState(itemQuantity1 * itemUnitPrice1);
    const [item2, setItem2] = useState(null);
    const [itemInvoice2, setItemInvoice2] = useState(false);
    const [itemPackingSlip2, setItemPackingSlip2] = useState(false);
    const [itemQuantity2, setItemQuantity2] = useState(0);
    const [itemUnitPrice2, setItemUnitPrice2] = useState(0);
    const [itemTotalPrice2, setItemTotalPrice2] = useState(itemQuantity2 * itemUnitPrice2);
    const [item3, setItem3] = useState(null);
    const [itemInvoice3, setItemInvoice3] = useState(false);
    const [itemPackingSlip3, setItemPackingSlip3] = useState(false);
    const [itemQuantity3, setItemQuantity3] = useState(0);
    const [itemUnitPrice3, setItemUnitPrice3] = useState(0);
    const [itemTotalPrice3, setItemTotalPrice3] = useState(itemQuantity3 * itemUnitPrice3);

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
    const [taxRate, setTaxRate] = useState(0);
    const [tax, setTax] = useState(0);
    const [freightCharges, setFreightCharges] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);

    // Invoice Information
    const [invoiceDate, setInvoiceDate] = useState(null);
    const [invoiceDatePaid, setInvoiceDatePaid] = useState(null);
    const [invoiceNotes, setInvoiceNotes] = useState(null);

    // Job Information
    const [ABSOrder, setABSOrder] = useState(null);
    const [customerOrder, setCustomerOrder] = useState(null);
    const [customerPODate, setCustomerPODate] = useState(null);
    const [customerPONumber, setCustomerPONumber] = useState(0);
    const [creditChecked, setCreditChecked] = useState(false);
    const [daysTurn, setDaysTurn] = useState(0);
    const [dateCodePrinting, setDateCodePrinting] = useState(null);
    const [customerProvidedMaterial, setCustomerProvidedMaterial] = useState(null);
    const [customerMaterialETA, setCustomerMaterialETA] = useState(null);
    const [customerNotes, setCustomerNotes] = useState(null);
    const [vendorNotes, setVendorNotes] = useState(null);
    const [orderNotes, setOrderNotes] = useState(null);
    const [orderStatus, setOrderStatus] = useState("Submitted");

    const customStyle = {
        control: base => ({
            ...base,
            height: 38,
            minHeight: 38,
            fontSize: '16px',
            backgroundColor: '#E2EAFF',
        }),
        valueContainer: (base, state) => ({
            ...base,
            borderWidth: 1,
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            paddingLeft: 10,
            paddingBottom: 5,
        }),
        option: base => ({
            ...base,
            fontSize: '14px',
        }),
        menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
        }),
        placeholder: (base, state) => ({
            ...base,
            overflow: 'hidden',
        }),
    };

    //Calculate Price's Total
    useEffect(() => {
        setCustomTotalPrice(Number((customQuantity * customUnitPrice).toFixed(2)));
        setNonItemTotalPrice1(Number((nonItemQuantity1 * nonItemUnitPrice1).toFixed(2)));
        setNonItemTotalPrice2(Number((nonItemQuantity2 * nonItemUnitPrice2).toFixed(2)));
        setNonItemTotalPrice3(Number((nonItemQuantity3 * nonItemUnitPrice3).toFixed(2)));
        setNonItemTotalPrice4(Number((nonItemQuantity4 * nonItemUnitPrice4).toFixed(2)));
        setNonItemTotalPrice5(Number((nonItemQuantity5 * nonItemUnitPrice5).toFixed(2)));
        setNonItemTotalPrice6(Number((nonItemQuantity6 * nonItemUnitPrice6).toFixed(2)));
        setItemTotalPrice1(Number((itemQuantity1 * itemUnitPrice1).toFixed(2)));
        setItemTotalPrice2(Number((itemQuantity2 * itemUnitPrice2).toFixed(2)));
        setItemTotalPrice3(Number((itemQuantity3 * itemUnitPrice3).toFixed(2)));
        setAssemblyChargesTotalPrice(Number((assemblyChargesQuantity * assemblyChargesUnitPrice).toFixed(2)));
        setPrintingChargesTotalPrice(Number((printingChargesQuantity * printingChargesUnitPrice).toFixed(2)));
    }, [customQuantity, customUnitPrice, 
        nonItemQuantity1, nonItemUnitPrice1, nonItemQuantity2, nonItemUnitPrice2, nonItemQuantity3, nonItemUnitPrice3, nonItemQuantity4, nonItemUnitPrice4, nonItemQuantity5, nonItemUnitPrice5, nonItemQuantity6, nonItemUnitPrice6,
        itemQuantity1, itemUnitPrice1, itemQuantity2, itemUnitPrice2, itemQuantity3, itemUnitPrice3,
        assemblyChargesQuantity, assemblyChargesUnitPrice,
        printingChargesQuantity,  printingChargesUnitPrice]);

    //Calculate SubTotal
    useEffect (() => {
        const totalScreens = numberOfScreens * screensPrice;
        setSubTotal(customTotalPrice + 
            nonItemTotalPrice1 + nonItemTotalPrice2 + nonItemTotalPrice3 + nonItemTotalPrice4 + nonItemTotalPrice5 + nonItemTotalPrice6 + 
            itemTotalPrice1 + itemTotalPrice2+ itemTotalPrice3 +
            assemblyChargesTotalPrice + printingChargesTotalPrice + setupCharge + totalScreens)
    },[customTotalPrice,
        nonItemTotalPrice1, nonItemTotalPrice2, nonItemTotalPrice3, nonItemTotalPrice4, nonItemTotalPrice5, nonItemTotalPrice6,
        itemTotalPrice1, itemTotalPrice2, itemTotalPrice3,
        assemblyChargesTotalPrice, printingChargesTotalPrice, setupCharge, numberOfScreens, screensPrice]);

    //Calculate Total and Tax
    useEffect(() => {
        setTax(Number((subTotal * taxRate).toFixed(2)));
        setPriceTotal(Number((subTotal + freightCharges + tax).toFixed(2)))
    }, [subTotal, taxRate, tax,
        freightCharges]);

    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const [submitting, setSubmitting] = useState(false);
    const submit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/api/insertOrder", {
            productID: productID,
            companyID: companyID,

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
            customerProvidedMaterial: customerProvidedMaterial,
            customerMaterialETA: customerMaterialETA,
            customerNotes: customerNotes,
            vendorNotes: vendorNotes,
            orderNotes: orderNotes,
            orderStatus: orderStatus
        }).then(() => {
            console.log("Success");
        })

        Axios.post("http://localhost:3001/api/insertOrderNonItem", {
            productID: productID,
            companyID: companyID,

            // Non-Inventory Items
            nonItem1: nonItem1,
            nonItemInvoice1: nonItemInvoice1,
            nonItemPackingSlip1: nonItemPackingSlip1,
            nonItemQuantity1: nonItemQuantity1,
            nonItemUnitPrice1: nonItemUnitPrice1,
            nonItemTotalPrice1: nonItemTotalPrice1,
            nonItem2: nonItem2,
            nonItemInvoice2: nonItemInvoice2,
            nonItemPackingSlip2: nonItemPackingSlip2,
            nonItemQuantity2: nonItemQuantity2,
            nonItemUnitPrice2: nonItemUnitPrice2,
            nonItemTotalPrice2: nonItemTotalPrice2,
            nonItem3: nonItem3,
            nonItemInvoice3: nonItemInvoice3,
            nonItemPackingSlip3: nonItemPackingSlip3,
            nonItemQuantity3: nonItemQuantity3,
            nonItemUnitPrice3: nonItemUnitPrice3,
            nonItemTotalPrice3: nonItemTotalPrice3,
            nonItem4: nonItem4,
            nonItemInvoice4: nonItemInvoice4,
            nonItemPackingSlip4: nonItemPackingSlip4,
            nonItemQuantity4: nonItemQuantity4,
            nonItemUnitPrice4: nonItemUnitPrice4,
            nonItemTotalPrice4: nonItemTotalPrice4,
            nonItem5: nonItem5,
            nonItemInvoice5: nonItemInvoice5,
            nonItemPackingSlip5: nonItemPackingSlip5,
            nonItemQuantity5: nonItemQuantity5,
            nonItemUnitPrice5: nonItemUnitPrice5,
            nonItemTotalPrice5: nonItemTotalPrice5,
            nonItem6: nonItem6,
            nonItemInvoice6: nonItemInvoice6,
            nonItemPackingSlip6: nonItemPackingSlip6,
            nonItemQuantity6: nonItemQuantity6,
            nonItemUnitPrice6: nonItemUnitPrice6,
            nonItemTotalPrice6: nonItemTotalPrice6,
        }).then(() => {
            console.log("Success");
        })

        Axios.post("http://localhost:3001/api/insertOrderItem", {
            productID: productID,
            companyID: companyID,

            // Inventory Items
            item1: item1,
            itemInvoice1: itemInvoice1,
            itemPackingSlip1: itemPackingSlip1,
            itemQuantity1: itemQuantity1,
            itemUnitPrice1: itemUnitPrice1,
            itemTotalPrice1: itemTotalPrice1,
            item2: item2,
            itemInvoice2: itemInvoice2,
            itemPackingSlip2: itemPackingSlip2,
            itemQuantity2: itemQuantity2,
            itemUnitPrice2: itemUnitPrice2,
            itemTotalPrice2: itemTotalPrice2,
            item3: item3,
            itemInvoice3: itemInvoice3,
            itemPackingSlip3: itemPackingSlip3,
            itemQuantity3: itemQuantity3,
            itemUnitPrice3: itemUnitPrice3,
            itemTotalPrice3: itemTotalPrice3,
        }).then(()=> {
            alert('Inserted new order');
        }).catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        setSubmitting(companyID && productID && factoryOrderQuantity);
    }, [companyID, productID, factoryOrderQuantity]);

    const handleNavigate = async (id) => {
        const idPassed = id.toString();
        await Sleep(2000);
        navigate(`/order/${idPassed}`);
    };

    const [latestOrderId, setOrderId] = useState(null);
    const nextOrderId = latestOrderId + 1;
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getLatestOrderId')
        .then(response => {
            setOrderId(response.data[0]['MAX(order_id)']);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const [companyOptions, setCompanyOptions] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getCompanyData')
        .then(response => {
            const options = response.data.map(option => {
                return { value: option.company_id, label: option.company_id + " — " + option.company_name };
            });
            setCompanyOptions(options);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const [productOptions, setProductOptions] = useState([]);
    useEffect(() => {
        setProductID(null);
        Axios.get('http://localhost:3001/api/getProductData')
        .then(response => {
            const options = response.data.map(option => {
                if(option.customer_id === companyID) { 
                    return { value: option.product_id, label: option.product_id + " — " + option.product_title + " (" + option.product_category + ")"};
                }
                else { return null; }
            });
            const filteredOptions = options.filter(option => option !== null);
            setProductOptions(filteredOptions);
        })
        .catch(error => {
            console.log(error);
        });
    }, [companyID]);

    const [componentOptions, setComponentOptions] = useState([]);
    useEffect(() => {
        setItem1(null);
        setItem2(null);
        setItem3(null);
        Axios.get('http://localhost:3001/api/getComponentData')
        .then(response => {
            const options = response.data.map(option => {
                if(option.customer_id === companyID) { 
                    return { value: option.component_id, label: option.component_id + " — " + option.title + " (" + option.component_type + ")"}; 
                }
                else { return null; }
            });
            const filteredOptions = options.filter(option => option !== null);
            setComponentOptions(filteredOptions);
        })
        .catch(error => {
            console.log(error);
        });
        
    }, [companyID]);
    
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
                    <h2>ADD ORDER</h2>
                </div>

            <form onSubmit={submit} autoComplete="off">
                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>ABSO - Absolute Media, Inc.</h5>
                    </div>

                    <div className="form-row">
                        <label htmlFor="companyID" className="col-md-3 col-form-label">Company ID <span style={{ color: 'red' }}>*</span></label>
                        <div className="input-group input-group mb-3 col-md-8">
                            <div className="form-control p-0">
                                <Select onChange={(e) => setCompanyID(e.value)} className="react-select" menuPortalTarget={document.body} styles={customStyle} value={companyOptions.filter(function(option) {
                                    return option.value === companyID;
                                })} id="companyID" required options={companyOptions}/>
                            </div>
                        </div>                    
                    </div>

                    <div className="form-row">
                        <label htmlFor="salesPerson" className="col-md-3 col-form-label">Salesperson</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" className="form-control" id="salesPerson" 
                            onChange = {(e) => {
                                setSalesPerson(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="requestor" className="col-md-3 col-form-label">Requestor</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" className="form-control" id="requestor"
                            onChange = {(e) => {
                                setRequestor(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="cContact" className="col-md-3 col-form-label">Customer Contact</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" className="form-control" id="customerContact"
                            onChange = {(e) => {
                                setCustomerContact(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="reOrder" className="col-md-3 col-form-label">Re-Order?</label>
                        <div className="input-group input-group-sm col-md-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={reOrder} className="custom-control-input" id="reOrder"
                                onChange = {() =>  {setReOrder((prev) => !prev) }}/>
                                <label htmlFor="reOrder" className="custom-control-label"></label>
                                {/* {reOrder ? "Selected" : "Unchecked"} */}
                            </div>
                        </div>
                    </div>
                        
                </div>
                
                {/* Custom Product */}
                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Custom Product</h5>
                    </div>

                    <div className="form-row">
                        <label htmlFor="productID" className="col-md-3 col-form-label">Product ID <span style={{ color: 'red' }}>*</span></label>
                        <div className="input-group input-group mb-3 col-md-8">
                            <div className="form-control p-0">
                                <Select onChange={(e) => setProductID(e.value)} className="react-select" menuPortalTarget={document.body} styles={customStyle} value={productOptions.filter(function(option) {
                                    return option.value === productID;
                                })} id="productID" required options={productOptions}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="factoryOrderQuantity" className="col-md-3 col-form-label">Factory Order Quantity <span style={{ color: 'red' }}>*</span></label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" className="form-control" id="factoryOrderQuantity" pattern="[0-9]*" required
                            onChange = {(e) => {
                                setFactoryOrderQuantity(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={customInvoice} className="custom-control-input" id="customInvoice"
                                onChange = {() => setCustomInvoice((prev) => !prev) }/>
                                <label htmlFor="customInvoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked ={customPackingSlip} className="custom-control-input" id="CustomPackingSlip"
                                onChange = {() => setCustomPackingSlip((prev) => !prev)} />
                                <label htmlFor="CustomPackingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="customQuantity" pattern="[0-9]*"
                            onChange = {(e) => {
                                setCustomQuantity(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="customUnitPrice" step="0.01"
                            onChange = {(e) => {
                                setCustomUnitPrice(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-3.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly value={customTotalPrice} className="form-control" id="customTotalPrice"/>
                        </div>
                    </div>
                </div>

                {/* Non-Inventory Items */}
                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Non-Inventory Line Items</h5>
                    </div>

                    {/* Non-Item #1 */}
                    <div className="form-row">
                        <label htmlFor="nonItem1" className="col-md-3 col-form-label">Non-Inventory Item #1</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" className="form-control" id="nonItem1"
                            onChange = {(e) => {
                                setNonItem1(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice1} className="custom-control-input" id="nonItemInvoice1"
                                onChange = {() => setNonItemInvoice1((prev) => !prev) }/>
                                <label htmlFor="nonItemInvoice1" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked ={nonItemPackingSlip1} className="custom-control-input" id="nonItemPackingSlip1"
                                onChange = {() => setNonItemPackingSlip1((prev) => !prev)} />
                                <label htmlFor="nonItemPackingSlip1" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemQuantity1" pattern="[0-9]*"
                            onChange = {(e) => {
                                setNonItemQuantity1(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemUnitPrice1" step="0.01"
                            onChange = {(e) => {
                                setNonItemUnitPrice1(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly value={nonItemTotalPrice1} className="form-control" id="nonItemTotalPrice1"/>
                        </div>
                    </div>

                    {/* Non-Item #2 */}
                    <div className="form-row">
                        <label htmlFor="nonItem2" className="col-md-3 col-form-label">Non-Inventory Item #2</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" className="form-control" id="nonItem2"
                            onChange = {(e) => {
                                setNonItem2(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice2} className="custom-control-input" id="nonItemInvoice2"
                                onChange = {() => setNonItemInvoice2((prev) => !prev) }/>
                                <label htmlFor="nonItemInvoice2" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked ={nonItemPackingSlip2} className="custom-control-input" id="nonItemPackingSlip2"
                                onChange = {() => setNonItemPackingSlip2((prev) => !prev)} />
                                <label htmlFor="nonItemPackingSlip2" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemQuantity2" pattern="[0-9]*"
                            onChange = {(e) => {
                                setNonItemQuantity2(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemUnitPrice2" step="0.01"
                            onChange = {(e) => {
                                setNonItemUnitPrice2(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly value={nonItemTotalPrice2} className="form-control" id="nonItemTotalPrice2"/>
                        </div>
                    </div>

                    {/* Non-Item #3 */}
                    <div className="form-row">
                        <label htmlFor="nonItem3" className="col-md-3 col-form-label">Non-Inventory Item #3</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" className="form-control" id="nonItem3"
                            onChange = {(e) => {
                                setNonItem3(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice3} className="custom-control-input" id="nonItemInvoice3"
                                onChange = {() => setNonItemInvoice3((prev) => !prev) }/>
                                <label htmlFor="nonItemInvoice3" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked ={nonItemPackingSlip3} className="custom-control-input" id="nonItemPackingSlip3"
                                onChange = {() => setNonItemPackingSlip3((prev) => !prev)} />
                                <label htmlFor="nonItemPackingSlip3" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemQuantity3" pattern="[0-9]*"
                            onChange = {(e) => {
                                setNonItemQuantity3(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemUnitPrice3" step="0.01"
                            onChange = {(e) => {
                                setNonItemUnitPrice3(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly value={nonItemTotalPrice3} className="form-control" id="nonItemTotalPrice3"/>
                        </div>
                    </div>

                    {/* Non-Item #4 */}
                    <div className="form-row">
                        <label htmlFor="nonItem4" className="col-md-3 col-form-label">Non-Inventory Item #4</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" className="form-control" id="nonItem4"
                            onChange = {(e) => {
                                setNonItem4(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice4} className="custom-control-input" id="nonItemInvoice4"
                                onChange = {() => setNonItemInvoice4((prev) => !prev) }/>
                                <label htmlFor="nonItemInvoice4" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked ={nonItemPackingSlip4} className="custom-control-input" id="nonItemPackingSlip4"
                                onChange = {() => setNonItemPackingSlip4((prev) => !prev)} />
                                <label htmlFor="nonItemPackingSlip4" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemQuantity4" pattern="[0-9]*"
                            onChange = {(e) => {
                                setNonItemQuantity4(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemUnitPrice4" step="0.01"
                            onChange = {(e) => {
                                setNonItemUnitPrice4(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly value={nonItemTotalPrice4} className="form-control" id="nonItemTotalPrice4"/>
                        </div>
                    </div>

                    {/* Non-Item #5 */}
                    <div className="form-row">
                        <label htmlFor="nonItem5" className="col-md-3 col-form-label">Non-Inventory Item #5</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" className="form-control" id="nonItem5"
                            onChange = {(e) => {
                                setNonItem5(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice5} className="custom-control-input" id="nonItemInvoice5"
                                onChange = {() => setNonItemInvoice5((prev) => !prev) }/>
                                <label htmlFor="nonItemInvoice5" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked ={nonItemPackingSlip5} className="custom-control-input" id="nonItemPackingSlip5"
                                onChange = {() => setNonItemPackingSlip5((prev) => !prev)} />
                                <label htmlFor="nonItemPackingSlip5" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemQuantity5" pattern="[0-9]*"
                            onChange = {(e) => {
                                setNonItemQuantity5(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemUnitPrice5" step="0.01"
                            onChange = {(e) => {
                                setNonItemUnitPrice5(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly value={nonItemTotalPrice5} className="form-control" id="nonItemTotalPrice5"/>
                        </div>
                    </div>

                    {/* Non-Item #6 */}
                    <div className="form-row">
                        <label htmlFor="nonItem6" className="col-md-3 col-form-label">Non-Inventory Item #6</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" className="form-control" id="nonItem6"
                            onChange = {(e) => {
                                setNonItem6(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice6} className="custom-control-input" id="nonItemInvoice6"
                                onChange = {() => setNonItemInvoice6((prev) => !prev) }/>
                                <label htmlFor="nonItemInvoice6" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked ={nonItemPackingSlip6} className="custom-control-input" id="nonItemPackingSlip6"
                                onChange = {() => setNonItemPackingSlip6((prev) => !prev)} />
                                <label htmlFor="nonItemPackingSlip6" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemQuantity6" pattern="[0-9]*"
                            onChange = {(e) => {
                                setNonItemQuantity6(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="nonItemUnitPrice6" step="0.01"
                            onChange = {(e) => {
                                setNonItemUnitPrice6(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly value={nonItemTotalPrice6} className="form-control" id="nonItemTotalPrice6"/>
                        </div>
                    </div>
                </div>

                {/* Inventory Items */}
                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Inventory Items</h5>
                    </div>

                    {/* Item #1 */}
                    <div className="form-row">
                        <label htmlFor="item1" className="col-md-3 col-form-label">Inventory Item #1</label>
                        <div className="input-group input-group mb-3 col-md-8">
                            <div className="form-control p-0">
                                <Select onChange={(e) => setItem1(e.value)} className="react-select" menuPortalTarget={document.body} styles={customStyle} value={componentOptions.filter(function(option) {
                                    return option.value === item1;
                                })} id="item1" options={componentOptions}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={itemInvoice1} className="custom-control-input" id="itemInvoice1"
                                onChange = {() => setItemInvoice1((prev) => !prev) }/>
                                <label htmlFor="itemInvoice1" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked ={itemPackingSlip1} className="custom-control-input" id="itemPackingSlip1"
                                onChange = {() => setItemPackingSlip1((prev) => !prev)} />
                                <label htmlFor="itemPackingSlip1" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="itemQuantity1" pattern="[0-9]*"
                            onChange = {(e) => {
                                setItemQuantity1(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="itemUnitPrice1" step="0.01"
                            onChange = {(e) => {
                                setItemUnitPrice1(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly value={itemTotalPrice1} className="form-control" id="itemTotalPrice1"/>
                        </div>
                    </div>

                    {/* Item #2 */}
                    <div className="form-row">
                        <label htmlFor="item2" className="col-md-3 col-form-label">Inventory Item #2</label>
                        <div className="input-group input-group mb-3 col-md-8">
                            <div className="form-control p-0">
                                <Select onChange={(e) => setItem2(e.value)} className="react-select" menuPortalTarget={document.body} styles={customStyle} value={componentOptions.filter(function(option) {
                                    return option.value === item2;
                                })} id="item2" options={componentOptions}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={itemInvoice2} className="custom-control-input" id="itemInvoice2"
                                onChange = {() => setItemInvoice2((prev) => !prev) }/>
                                <label htmlFor="itemInvoice2" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked ={itemPackingSlip2} className="custom-control-input" id="itemPackingSlip2"
                                onChange = {() => setItemPackingSlip2((prev) => !prev)} />
                                <label htmlFor="itemPackingSlip2" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="itemQuantity2" pattern="[0-9]*"
                            onChange = {(e) => {
                                setItemQuantity2(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="itemUnitPrice2" step="0.01"
                            onChange = {(e) => {
                                setItemUnitPrice2(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly value={itemTotalPrice2} className="form-control" id="itemTotalPrice2"/>
                        </div>
                    </div>

                    {/* Item #3 */}
                    <div className="form-row">
                        <label htmlFor="item3" className="col-md-3 col-form-label">Inventory Item #3</label>
                        <div className="input-group input-group mb-3 col-md-8">
                            <div className="form-control p-0">
                                <Select onChange={(e) => setItem3(e.value)} className="react-select" menuPortalTarget={document.body} styles={customStyle} value={componentOptions.filter(function(option) {
                                    return option.value === item3;
                                })} id="item3" options={componentOptions}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={itemInvoice3} className="custom-control-input" id="itemInvoice3"
                                onChange = {() => setItemInvoice3((prev) => !prev) }/>
                                <label htmlFor="itemInvoice3" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked ={itemPackingSlip3} className="custom-control-input" id="itemPackingSlip3"
                                onChange = {() => setItemPackingSlip3((prev) => !prev)} />
                                <label htmlFor="itemPackingSlip3" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="itemQuantity3" pattern="[0-9]*"
                            onChange = {(e) => {
                                setItemQuantity3(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" className="form-control" id="itemUnitPrice3" step="0.01"
                            onChange = {(e) => {
                                setItemUnitPrice3(+e.target.value)
                            }}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly value={itemTotalPrice3} className="form-control" id="itemTotalPrice3"/>
                        </div>
                    </div>
                </div>

                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Billing Information</h5>
                    </div>

                    <div className="form-row">
                        <label htmlFor="assemblyCharges" className="col-md-3 col-form-label">Assembly Charges $</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" className="form-control" id="assemblyChargesQuantity" placeholder="Quantity" pattern="[0-9]*"
                            onChange = {(e) => {
                                setAssemblyChargesQuantity(e.target.value)
                            }}/>
                            
                            <input type="number" className="form-control" id="assemblyChargesUnitPrice" placeholder="Unit Price $" step="0.01"
                            onChange = {(e) => {
                                setAssemblyChargesUnitPrice(e.target.value)
                            }}/>

                            <input type="number" readOnly value={assemblyChargesTotalPrice} className="form-control" id="assemblyChargesTotalPrice" />
                            
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="printingCharges" className="col-md-3 col-form-label">Date Code Printing Charges $</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" className="form-control" id="printingChargesQuantity" placeholder="Quantity" pattern="[0-9]*"
                            onChange = {(e) => {
                                setPrintingChargesQuantity(e.target.value)
                            }}/>
                            
                            <input type="number" className="form-control" id="printingChargesUnitPrice" placeholder="Unit Price $" step="0.01"
                            onChange = {(e) => {
                                setPrintingChargesUnitPrice(e.target.value)
                            }}/>
                            
                            <input type="number" readOnly value={printingChargesTotalPrice} className="form-control" id="pringtingChargesTotalPrice" />

                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="setupCharge" className="col-md-3 col-form-label">Date Code Setup Charge $</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            
                            <input type="number" className="form-control" id="setupCharge" step="0.01"
                            onChange = {(e) => {
                                setSetupCharge(+e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="numberofScreens" className="col-md-3 col-form-label">Art Manipulation / Film Charges for Screens</label>
                        <div className="input-group input-group-sm mb-3 col-md-4">

                            <input type="number" className="form-control" id="numberOfScreens" placeholder="Number of Screens" pattern="[0-9]*"
                            onChange = {(e) => {
                                setNumberOfScreens(e.target.value)
                            }}/>
                        </div>
                        <div className="input-group input-group-sm mb-3 col-md-4">
                            
                            <input type="number" className="form-control" id="screensPrice" placeholder="Price per Screen" step="0.01"
                            onChange = {(e) => {
                                setScreensPrice(e.target.value)
                            }}/>
                        </div>
                    </div>
             
                    <div className="form-row">
                        <label htmlFor="subTotal" className="col-md-3 col-form-label">Sub Total $</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" readOnly value={subTotal} className="form-control" id="subTotal" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="taxable" className="col-md-3 col-form-label">Tax Rate</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" className="form-control" id="taxable" step="0.01" placeholder="If 'None', Please enter 0."
                            onChange = {(e) => {
                                setTaxRate(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="tax" className="col-md-3 col-form-label">Tax</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" readOnly value={tax} className="form-control" id="tax" placeholder="$"/>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <label htmlFor="freightCharges" className="col-md-3 col-form-label">Freight Charges $</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" className="form-control" id="freightCharges" step="0.01"
                            onChange = {(e) => {
                                setFreightCharges(+e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="priceTotal" className="col-md-3 col-form-label">Order Price Total $</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">  
                            <input type="number" readOnly value={priceTotal} className="form-control" id="priceTotal"/>
                        </div>
                    </div>
                </div>

                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>Invoice Information</h5>
                    </div>

                    <div className="form-row">
                        <label htmlFor="invoiceDate" className="col-md-3 col-form-label">Invoice Date</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" name="invoiceDate" id="invoiceDate"
                                onChange = {(e) => {
                                    setInvoiceDate(e.target.value)
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="invoiceDatePaid" className="col-md-3 col-form-label">Invoice Date Paid</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" name="invoiceDatePaid" id="invoiceDatePaid"
                                onChange = {(e) => {
                                    setInvoiceDatePaid(e.target.value)
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="invoiceNotes" className="col-md-3 col-form-label">Invoice Notes</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
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
                        <label htmlFor="ABSOrder" className="col-md-3 col-form-label">ABS Sales Order Date</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" name="ABSOrder" id="ABSOrder"
                                onChange = {(e) => {
                                    setABSOrder(e.target.value)
                                }}/>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <label htmlFor="customerOrder" className="col-md-3 col-form-label">Customer Order Date</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" name="customerOrder" id="customerOrder" 
                                onChange = {(e) => {
                                    setCustomerOrder(e.target.value)
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerPODate" className="col-md-3 col-form-label">Customer PO Date</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" name="customerPODate" id="customerPODate"
                                onChange = {(e) => {
                                    setCustomerPODate(e.target.value)
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerPONumber" className="col-md-3 col-form-label">Customer PO Number</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" className="form-control" id="customerPONumber" pattern="[0-9]*"
                            onChange = {(e) => {
                                setCustomerPONumber(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="creditChecked" className="col-md-3 col-form-label">Credit Checked?</label>
                        <div className="input-group input-group-sm col-md-3 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={creditChecked} className="custom-control-input" id="creditChecked"
                                onChange = {() => setCreditChecked((prev) => !prev)} />
                                <label htmlFor="creditChecked" className="custom-control-label"></label>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="daysTurn" className="col-md-3 col-form-label">Days Turn</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" className="form-control" id="daysTurn" pattern="[0-9]*"
                            onChange = {(e) => {
                                setDaysTurn(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="dateCodePrinting" className="col-md-3 col-form-label">Date Code Printing</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                            <input type="date" className="form-control" name="dateCodePrinting" id="dateCodePrinting"
                            onChange = {(e) => {
                                setDateCodePrinting(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerProvidedMaterial" className="col-md-3 col-form-label">Customer Provided Material</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <textarea rows="4" cols="50" className="form-control" name="customerProvidedMaterial" id="customerProvidedMaterial"
                            onChange = {(e) => {
                                setCustomerProvidedMaterial(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerMaterialETA" className="col-md-3 col-form-label">Customer Material ETA</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                             <input type="date" className="form-control" name="customerMaterialETA" id="customerMaterialETA"
                             onChange = {(e) => {
                                setCustomerMaterialETA(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerNotes" className="col-md-3 col-form-label">Customer Notes</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <textarea rows="4" cols="50" className="form-control" name="customerNotes" id="customerNotes"
                            onChange = {(e) => {
                                setCustomerNotes(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="vendorNotes" className="col-md-3 col-form-label">Vendor Notes</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <textarea rows="4" cols="50" className="form-control" name="vendorNotes" id="vendorNotes"
                            onChange = {(e) => {
                                setVendorNotes(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="orderNotes" className="col-md-3 col-form-label">Order Notes</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <textarea rows="4" cols="50" className="form-control" name="orderNotes" id="orderNotes"
                            onChange = {(e) => {
                                setOrderNotes(e.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="orderStatus" className="col-md-3 col-form-label">Order Status</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
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
                    <button onClick={() => handleNavigate(nextOrderId)} disabled={!submitting} type="submit" id="add-order" className="btn btn-success">Submit</button>
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
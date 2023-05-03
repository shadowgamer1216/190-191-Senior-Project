import React from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from 'axios';

const Order = ({ handleLogout }) => {
    const navigate = useNavigate();
    
    const { order_id } = useParams();
    const [orderData, setOrderData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/order/${order_id}`)
        .then(response => {
            setOrderData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [order_id]);

    var productID = orderData?.product_id ?? '';
    console.log(productID);
    const [productName, setProductName] = useState('');
    useEffect(() => {
        if(productID) {
            Axios.get(`http://localhost:3001/api/product/${productID}`).then((response) =>{
                setProductName(response.data.product_title);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [productID]);
    const [productCategory, setProductCategory] = useState('');
    useEffect(() => {
        if(productID) {
            Axios.get(`http://localhost:3001/api/product/${productID}`).then((response) =>{
                setProductCategory(response.data.product_category);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [productID]);
    var companyID = orderData?.company_id ?? '';
    const [companyName, setCompanyName] = useState('');
    useEffect(() => {
        if(companyID) {
            Axios.get(`http://localhost:3001/api/company/${companyID}`).then((response) =>{
                setCompanyName(response.data.company_name);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [companyID]);
    var salesPerson = orderData?.salesperson ?? '';
    var requestor = orderData?.requestor ?? '';
    var customerContact = orderData?.customer_contact ?? '';
    var reOrder = orderData?.re_order ?? 0;

    // Custom Product
    var factoryOrderQuantity = orderData?.factory_order_quantity ?? '';
    var customInvoice = orderData?.custom_invoice ?? 0;
    var customPackingSlip = orderData?.custom_packing_slip ?? 0;
    var customQuantity = orderData?.custom_quantity ?? '';
    var customUnitPrice = orderData?.custom_unit_price ?? '';
    var customTotalPrice = orderData?.custom_total_price ?? '';

    // Non-Inventory Line Items
    var nonItem1 = orderData?.non_inventory_line_item1 ?? '';
    var nonItemInvoice1 = orderData?.non_inventory_invoice1 ?? 0;
    var nonItemPackingSlip1 = orderData?.non_inventory_packing_slip1 ?? 0;
    var nonItemQuantity1 = orderData?.non_inventory_quantity1 ?? '';
    var nonItemUnitPrice1 = orderData?.non_inventory_unit_price1 ?? '';
    var nonItemTotalPrice1 = orderData?.non_inventory_total_price1 ?? '';

    var nonItem2 = orderData?.non_inventory_line_item2 ?? '';
    var nonItemInvoice2 = orderData?.non_inventory_invoice2 ?? 0;
    var nonItemPackingSlip2 = orderData?.non_inventory_packing_slip2 ?? 0;
    var nonItemQuantity2 = orderData?.non_inventory_quantity2 ?? '';
    var nonItemUnitPrice2 = orderData?.non_inventory_unit_price2 ?? '';
    var nonItemTotalPrice2 = orderData?.non_inventory_total_price2 ?? '';
    
    var nonItem3 = orderData?.non_inventory_line_item3 ?? '';
    var nonItemInvoice3 = orderData?.non_inventory_invoice3 ?? 0;
    var nonItemPackingSlip3 = orderData?.non_inventory_packing_slip3 ?? 0;
    var nonItemQuantity3 = orderData?.non_inventory_quantity3 ?? '';
    var nonItemUnitPrice3 = orderData?.non_inventory_unit_price3 ?? '';
    var nonItemTotalPrice3 = orderData?.non_inventory_total_price3 ?? '';

    var nonItem4 = orderData?.non_inventory_line_item4 ?? '';
    var nonItemInvoice4 = orderData?.non_inventory_invoice4 ?? 0;
    var nonItemPackingSlip4 = orderData?.non_inventory_packing_slip4 ?? 0;
    var nonItemQuantity4 = orderData?.non_inventory_quantity4 ?? '';
    var nonItemUnitPrice4 = orderData?.non_inventory_unit_price4 ?? '';
    var nonItemTotalPrice4 = orderData?.non_inventory_total_price4 ?? '';

    var nonItem5 = orderData?.non_inventory_line_item5 ?? '';
    var nonItemInvoice5 = orderData?.non_inventory_invoice5 ?? 0;
    var nonItemPackingSlip5 = orderData?.non_inventory_packing_slip5 ?? 0;
    var nonItemQuantity5 = orderData?.non_inventory_quantity5 ?? '';
    var nonItemUnitPrice5 = orderData?.non_inventory_unit_price5 ?? '';
    var nonItemTotalPrice5 = orderData?.non_inventory_total_price5 ?? '';

    var nonItem6 = orderData?.non_inventory_line_item6 ?? '';
    var nonItemInvoice6 = orderData?.non_inventory_invoice6 ?? '';
    var nonItemPackingSlip6 = orderData?.non_inventory_packing_slip6 ?? '';
    var nonItemQuantity6 = orderData?.non_inventory_quantity6 ?? '';
    var nonItemUnitPrice6 = orderData?.non_inventory_unit_price6 ?? '';
    var nonItemTotalPrice6 = orderData?.non_inventory_total_price6 ?? '';

    // Inventory Items
    var item1 = orderData?.inventory_item1 ?? '';
    var itemInvoice1 = orderData?.inventory_invoice1 ?? 0;
    var itemPackingSlip1 = orderData?.inventory_packing_slip1 ?? 0;
    var itemQuantity1 = orderData?.inventory_quantity1 ?? '';
    var itemUnitPrice1 = orderData?.inventory_unit_price1 ?? '';
    var itemTotalPrice1 = orderData?.inventory_total_price1 ?? '';
    var item2 = orderData?.inventory_item2 ?? '';
    var itemInvoice2 = orderData?.inventory_invoice2 ?? 0;
    var itemPackingSlip2 = orderData?.inventory_packing_slip2 ?? 0;
    var itemQuantity2 = orderData?.inventory_quantity2 ?? '';
    var itemUnitPrice2 = orderData?.inventory_unit_price2 ?? '';
    var itemTotalPrice2 = orderData?.inventory_total_price2 ?? '';
    var item3 = orderData?.inventory_item3 ?? '';
    var itemInvoice3 = orderData?.inventory_invoice3 ?? 0;
    var itemPackingSlip3 = orderData?.inventory_packing_slip3 ?? 0;
    var itemQuantity3 = orderData?.inventory_quantity3 ?? '';
    var itemUnitPrice3 = orderData?.inventory_unit_price3 ?? '';
    var itemTotalPrice3 = orderData?.inventory_total_price3 ?? '';

    // Billing Information
    var assemblyChargesQuantity = orderData?.assembly_charges_quantity ?? '';
    var assemblyChargesUnitPrice = orderData?.assembly_charges_unit_price ?? '';
    var assemblyChargesTotalPrice = orderData?.assembly_charges_total_price ?? '';
    var printingChargesQuantity = orderData?.date_code_printing_charges_quantity ?? '';
    var printingChargesUnitPrice = orderData?.date_code_printing_charges_unit_price ?? '';
    var printingChargesTotalPrice = orderData?.date_code_printing_charges_total_price ?? '';
    var setupCharge = orderData?.date_code_setup_charge ?? '';
    var numberOfScreens = orderData?.number_of_screens ?? '';
    var screensPrice = orderData?.art_manipulation ?? '';
    var subTotal = orderData?.sub_total ?? '';
    var taxRate = orderData?.tax_rate ?? '';
    var tax = orderData?.tax ?? '';
    var freightCharges = orderData?.freight_charges ?? '';
    var priceTotal = orderData?.order_price_total ?? '';

    // Invoice Information
    var invoiceDate = orderData?.invoice_date ?? '';
    var invoiceDatePaid = orderData?.invoice_date_paid ?? '';
    var invoiceNotes = orderData?.invoice_notes ?? '';

    // Job Information
    var ABSOrder = orderData?.abs_sales_order_date ?? '';
    var customerOrder = orderData?.customer_order_date ?? '';
    var customerPODate = orderData?.customer_po_date ?? '';
    var customerPONumber = orderData?.customer_po_number ?? '';
    var creditChecked = orderData?.credit_checked ?? 0;
    var daysTurn = orderData?.days_turn ?? '';
    var dateCodePrinting = orderData?.date_code_printing ?? '';
    var customerProvidedMaterial = orderData?.customer_provided_material ?? '';
    var customerMaterialETA = orderData?.customer_material_eta ?? '';
    var customerNotes = orderData?.customer_notes ?? '';
    var vendorNotes = orderData?.vendor_notes ?? '';
    var orderNotes = orderData?.order_notes ?? '';
    var orderStatus = orderData?.order_status ?? '';

    
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
                    <h2>[VIEW] ORDER</h2>
                </div>

            <form autoComplete="off">
                <div className="company-info pt-3">
                    <div className="section-headers">
                        <h5>ABSO - Absolute Media, Inc.</h5>
                    </div>
                    
                    <div className="form-row">
                        <label htmlFor="companyID" className="col-md-3 col-form-label">Company ID</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="companyID" value={companyID}/>
                        </div>                    
                    </div>

                    <div className="form-row">
                        <label htmlFor="companyName" className="col-md-3 col-form-label">Company Name</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="companyName" value={companyName}/>
                        </div>                    
                    </div>

                    <div className="form-row">
                        <label htmlFor="salesPerson" className="col-md-3 col-form-label">Salesperson</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="salesPerson" value={salesPerson}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="requestor" className="col-md-3 col-form-label">Requestor</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="requestor" value={requestor}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="cContact" className="col-md-3 col-form-label">Customer Contact</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="customerContact" value={customerContact}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="reOrder" className="col-md-3 col-form-label">Re-Order?</label>
                        <div className="input-group input-group-sm col-md-2 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={reOrder} readOnly className="custom-control-input" id="reOrder"/>
                                <label htmlFor="reOrder" className="custom-control-label"></label>
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
                        <label htmlFor="productID" className="col-md-3 col-form-label">Product ID</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="productID" value={productID}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="productName" className="col-md-3 col-form-label">Product Name</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="productName" value={productName}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="productCategory" className="col-md-3 col-form-label">Product Category</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="productCategory" value={productCategory}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="factoryOrderQuantity" className="col-md-3 col-form-label">Factory Order Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" readOnly className="form-control" id="factoryOrderQuantity" value={factoryOrderQuantity}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={customInvoice} readOnly className="custom-control-input" id="customInvoice"/>
                                <label htmlFor="customInvoice" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={customPackingSlip} readOnly className="custom-control-input" id="CustomPackingSlip"/>
                                <label htmlFor="CustomPackingSlip" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="customQuantity" value={customQuantity}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="customUnitPrice" value={customUnitPrice}/>
                        </div>

                        <label className="col-md-3.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="customTotalPrice" value={customTotalPrice}/>
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
                            <input type="text" readOnly className="form-control" id="nonItem1" value={nonItem1}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice1} readOnly className="custom-control-input" id="nonItemInvoice1"/>
                                <label htmlFor="nonItemInvoice1" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemPackingSlip1} readOnly className="custom-control-input" id="nonItemPackingSlip1"/>
                                <label htmlFor="nonItemPackingSlip1" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemQuantity1" value={nonItemQuantity1}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemUnitPrice1" value={nonItemUnitPrice1}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemTotalPrice1" value={nonItemTotalPrice1}/>
                        </div>
                    </div>

                    {/* Non-Item #2 */}
                    <div className="form-row">
                        <label htmlFor="nonItem2" className="col-md-3 col-form-label">Non-Inventory Item #2</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="nonItem2" value={nonItem2}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice2} readOnly className="custom-control-input" id="nonItemInvoice2"/>
                                <label htmlFor="nonItemInvoice2" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemPackingSlip2} readOnly className="custom-control-input" id="nonItemPackingSlip2"/>
                                <label htmlFor="nonItemPackingSlip2" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemQuantity2" value={nonItemQuantity2}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemUnitPrice2" value={nonItemUnitPrice2}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemTotalPrice2" value={nonItemTotalPrice2}/>
                        </div>
                    </div>

                    {/* Non-Item #3 */}
                    <div className="form-row">
                        <label htmlFor="nonItem3" className="col-md-3 col-form-label">Non-Inventory Item #3</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="nonItem3" value={nonItem3}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice3} readOnly className="custom-control-input" id="nonItemInvoice3"/>
                                <label htmlFor="nonItemInvoice3" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemPackingSlip3} readOnly className="custom-control-input" id="nonItemPackingSlip3"/>
                                <label htmlFor="nonItemPackingSlip3" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemQuantity3" value={nonItemQuantity3}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemUnitPrice3" value={nonItemUnitPrice3}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemTotalPrice3" value={nonItemTotalPrice3}/>
                        </div>
                    </div>

                    {/* Non-Item #4 */}
                    <div className="form-row">
                        <label htmlFor="nonItem4" className="col-md-3 col-form-label">Non-Inventory Item #4</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="nonItem4" value={nonItem4}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice4} readOnly className="custom-control-input" id="nonItemInvoice4"/>
                                <label htmlFor="nonItemInvoice4" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemPackingSlip4} readOnly className="custom-control-input" id="nonItemPackingSlip4"/>
                                <label htmlFor="nonItemPackingSlip4" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemQuantity4" value={nonItemQuantity4}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemUnitPrice4" value={nonItemUnitPrice4}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemTotalPrice4" value={nonItemTotalPrice4}/>
                        </div>
                    </div>

                    {/* Non-Item #5 */}
                    <div className="form-row">
                        <label htmlFor="nonItem5" className="col-md-3 col-form-label">Non-Inventory Item #5</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="nonItem5" value={nonItem5}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice5} readOnly className="custom-control-input" id="nonItemInvoice5"/>
                                <label htmlFor="nonItemInvoice5" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemPackingSlip5} readOnly className="custom-control-input" id="nonItemPackingSlip5"/>
                                <label htmlFor="nonItemPackingSlip5" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemQuantity5" value={nonItemQuantity5}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemUnitPrice5" value={nonItemUnitPrice5}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemTotalPrice5" value={nonItemTotalPrice5}/>
                        </div>
                    </div>

                    {/* Non-Item #6 */}
                    <div className="form-row">
                        <label htmlFor="nonItem6" className="col-md-3 col-form-label">Non-Inventory Item #6</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="nonItem6" value={nonItem6}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemInvoice6} readOnly className="custom-control-input" id="nonItemInvoice6"/>
                                <label htmlFor="nonItemInvoice6" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={nonItemPackingSlip6} readOnly className="custom-control-input" id="nonItemPackingSlip6"/>
                                <label htmlFor="nonItemPackingSlip6" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemQuantity6" value={nonItemQuantity6}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemUnitPrice6" value={nonItemUnitPrice6}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="nonItemTotalPrice6" value={nonItemTotalPrice6}/>
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
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="item1" value={item1}/>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={itemInvoice1} readOnly className="custom-control-input" id="itemInvoice1"/>
                                <label htmlFor="itemInvoice1" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={itemPackingSlip1} readOnly className="custom-control-input" id="itemPackingSlip1"/>
                                <label htmlFor="itemPackingSlip1" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="itemQuantity1" value={itemQuantity1}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="itemUnitPrice1" value={itemUnitPrice1}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="itemTotalPrice1" value={itemTotalPrice1}/>
                        </div>
                    </div>

                    {/* Item #2 */}
                    <div className="form-row">
                        <label htmlFor="item2" className="col-md-3 col-form-label">Inventory Item #2</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="item2" value={item2}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={itemInvoice2} readOnly className="custom-control-input" id="itemInvoice2"/>
                                <label htmlFor="itemInvoice2" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={itemPackingSlip2} readOnly className="custom-control-input" id="itemPackingSlip2"/>
                                <label htmlFor="itemPackingSlip2" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="itemQuantity2" value={itemQuantity2}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="itemUnitPrice2" value={itemUnitPrice2}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="itemTotalPrice2" value={itemTotalPrice2}/>
                        </div>
                    </div>

                    {/* Item #3 */}
                    <div className="form-row">
                        <label htmlFor="item3" className="col-md-3 col-form-label">Inventory Item #3</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="text" readOnly className="form-control" id="item3" value={item3}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label className="col-md-2.5 col-form-label">Invoice</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={itemInvoice3} readOnly className="custom-control-input" id="itemInvoice3"/>
                                <label htmlFor="itemInvoice3" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Packing Slip</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={itemPackingSlip3} readOnly className="custom-control-input" id="itemPackingSlip3"/>
                                <label htmlFor="itemPackingSlip3" className="custom-control-label"></label>
                            </div>
                        </div>

                        <label className="col-md-2.5 col-form-label">Quantity</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="itemQuantity3" value={itemQuantity3}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Unit Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="itemUnitPrice3" value={itemUnitPrice3}/>
                        </div>

                        <label className="col-md-2.5 col-form-label">Total Price $</label>
                        <div className="input-group input-group-sm mb-3 col-md-1">
                            <input type="number" readOnly className="form-control" id="itemTotalPrice3" value={itemTotalPrice3}/>
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
                            <input type="number" readOnly className="form-control" id="assemblyChargesQuantity" placeholder="Quantity" value={assemblyChargesQuantity}/>
                            
                            <input type="number" readOnly className="form-control" id="assemblyChargesUnitPrice" placeholder="Unit Price $" value={assemblyChargesUnitPrice}/>

                            <input type="number" readOnly className="form-control" id="assemblyChargesTotalPrice" value={assemblyChargesTotalPrice}/>
                            
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="printingCharges" className="col-md-3 col-form-label">Date Code Printing Charges $</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" readOnly className="form-control" id="printingChargesQuantity" placeholder="Quantity" value={printingChargesQuantity}/>
                            
                            <input type="number" readOnly className="form-control" id="printingChargesUnitPrice" placeholder="Unit Price $" value={printingChargesUnitPrice}/>
                            
                            <input type="number" readOnly className="form-control" id="printingChargesTotalPrice" value={printingChargesTotalPrice}/>

                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="setupCharge" className="col-md-3 col-form-label">Date Code Setup Charge $</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            
                            <input type="number" readOnly className="form-control" id="setupCharge" value={setupCharge}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="numberofScreens" className="col-md-3 col-form-label">Art Manipulation / Film Charges for Screens</label>
                        <div className="input-group input-group-sm mb-3 col-md-4">
                            <input type="number" readOnly className="form-control" id="numberOfScreens" placeholder="Number of Screens" value={numberOfScreens}/>
                        </div>
                        <div className="input-group input-group-sm mb-3 col-md-4">
                            <input type="number" readOnly className="form-control" id="screensPrice" placeholder="Price per Screen" value={screensPrice}/>
                        </div>
                    </div>
             
                    <div className="form-row">
                        <label htmlFor="subTotal" className="col-md-3 col-form-label">Sub Total $</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" readOnly className="form-control" id="subTotal" value={subTotal}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="taxable" className="col-md-3 col-form-label">Tax Rate</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" readOnly className="form-control" id="taxable" value={taxRate}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="tax" className="col-md-3 col-form-label">Tax</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" readOnly className="form-control" id="tax" value={tax}/>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <label htmlFor="freightCharges" className="col-md-3 col-form-label">Freight Charges $</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" readOnly className="form-control" id="freightCharges" value={freightCharges}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="priceTotal" className="col-md-3 col-form-label">Order Price Total $</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">  
                            <input type="number" readOnly className="form-control" id="priceTotal" value={priceTotal}/>
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
                            <input type="date" readOnly className="form-control" id="invoiceDate" value={invoiceDate}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="invoiceDatePaid" className="col-md-3 col-form-label">Invoice Date Paid</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                            <input type="date" readOnly className="form-control" id="invoiceDatePaid" value={invoiceDatePaid}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="invoiceNotes" className="col-md-3 col-form-label">Invoice Notes</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <textarea rows="4" cols="50" readOnly className="form-control" id="invoiceNotes" value={invoiceNotes}/>
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
                            <input type="date" readOnly className="form-control" id="ABSOrder" value={ABSOrder}/>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <label htmlFor="customerOrder" className="col-md-3 col-form-label">Customer Order Date</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                            <input type="date" readOnly className="form-control" id="customerOrder" value={customerOrder}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerPODate" className="col-md-3 col-form-label">Customer PO Date</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                            <input type="date" readOnly className="form-control" id="customerPODate" value={customerPODate}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerPONumber" className="col-md-3 col-form-label">Customer PO Number</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" readOnly className="form-control" id="customerPONumber" value={customerPONumber}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="creditChecked" className="col-md-3 col-form-label">Credit Checked?</label>
                        <div className="input-group input-group-sm col-md-3 pl-5">
                            <div className="form-group custom-control custom-checkbox">
                                <input type="checkbox" checked={creditChecked} readOnly className="custom-control-input" id="creditChecked"/>
                                <label htmlFor="creditChecked" className="custom-control-label"></label>
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="daysTurn" className="col-md-3 col-form-label">Days Turn</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <input type="number" readOnly className="form-control" id="daysTurn" value={daysTurn}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="dateCodePrinting" className="col-md-3 col-form-label">Date Code Printing</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                            <input type="date" readOnly className="form-control" id="dateCodePrinting" value={dateCodePrinting}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerProvidedMaterial" className="col-md-3 col-form-label">Customer Provided Material</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <textarea rows="4" cols="50" readOnly className="form-control" id="customerProvidedMaterial" value={customerProvidedMaterial}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerMaterialETA" className="col-md-3 col-form-label">Customer Material ETA</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                            <input type="date" readOnly className="form-control" id="customerMaterialETA" value={customerMaterialETA}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="customerNotes" className="col-md-3 col-form-label">Customer Notes</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <textarea rows="4" cols="50" readOnly className="form-control" id="customerNotes" value={customerNotes}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="vendorNotes" className="col-md-3 col-form-label">Vendor Notes</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <textarea rows="4" cols="50" readOnly className="form-control" id="vendorNotes" value={vendorNotes}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="orderNotes" className="col-md-3 col-form-label">Order Notes</label>
                        <div className="input-group input-group-sm mb-3 col-md-8">
                            <textarea rows="4" cols="50" readOnly className="form-control" id="orderNotes" value={orderNotes}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="orderStatus" className="col-md-3 col-form-label">Order Status</label>
                        <div className="input-group input-group-sm mb-3 col-md-3">
                            <input type="text" readOnly className="form-control" name="orderStatus" id="orderStatus" value={orderStatus}/>
                        </div>
                    </div>
                </div>

            </form>

            <br></br>
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
    )
}
export default Order;
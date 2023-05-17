import React from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from 'axios';


const OrderEdit = ({ handleLogout }) => {
    const navigate = useNavigate();
    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const [new_salesperson, setSalesPerson] = useState(null);
    const [new_requestor, setRequestor] = useState(null);
    const [new_customer_contact, setCustomerContact] = useState(null);
    const [new_reOrder, setReOrder] = useState(0);

    const [new_factoryOrderQuantity, setFactoryOrderQuantity] = useState(0);
    const [new_customInvoice, setCustomInvoice] = useState(0);
    const [new_customPackingSlip, setCustomPackingSlip] = useState(0);
    const [new_customQuantity, setCustomQuantity] = useState(0);
    const [new_customUnitPrice, setCustomUnitPrice] = useState(0);
    const [new_customTotalPrice, setCustomTotalPrice] = useState(0);


    const [new_nonItem1, setNonItem1] = useState(null);
    const [new_nonItemInvoice1, setNonItemInvoice1] = useState(0);
    const [new_nonItemPackingSlip1, setNonItemPackingSlip1] = useState(0);
    const [new_nonItemQuantity1, setNonItemQuantity1] = useState(0);
    const [new_nonItemUnitPrice1, setNonItemUnitPrice1] = useState(0);
    const [new_nonItemTotalPrice1, setNonItemTotalPrice1] = useState(0);
    const [new_nonItem2, setNonItem2] = useState(null);
    const [new_nonItemInvoice2, setNonItemInvoice2] = useState(0);
    const [new_nonItemPackingSlip2, setNonItemPackingSlip2] = useState(0);
    const [new_nonItemQuantity2, setNonItemQuantity2] = useState(0);
    const [new_nonItemUnitPrice2, setNonItemUnitPrice2] = useState(0);
    const [new_nonItemTotalPrice2, setNonItemTotalPrice2] = useState(0);
    const [new_nonItem3, setNonItem3] = useState(null);
    const [new_nonItemInvoice3, setNonItemInvoice3] = useState(0);
    const [new_nonItemPackingSlip3, setNonItemPackingSlip3] = useState(0);
    const [new_nonItemQuantity3, setNonItemQuantity3] = useState(0);
    const [new_nonItemUnitPrice3, setNonItemUnitPrice3] = useState(0);
    const [new_nonItemTotalPrice3, setNonItemTotalPrice3] = useState(0);
    const [new_nonItem4, setNonItem4] = useState(null);
    const [new_nonItemInvoice4, setNonItemInvoice4] = useState(0);
    const [new_nonItemPackingSlip4, setNonItemPackingSlip4] = useState(0);
    const [new_nonItemQuantity4, setNonItemQuantity4] = useState(0);
    const [new_nonItemUnitPrice4, setNonItemUnitPrice4] = useState(0);
    const [new_nonItemTotalPrice4, setNonItemTotalPrice4] = useState(0);
    const [new_nonItem5, setNonItem5] = useState(null);
    const [new_nonItemInvoice5, setNonItemInvoice5] = useState(0);
    const [new_nonItemPackingSlip5, setNonItemPackingSlip5] = useState(0);
    const [new_nonItemQuantity5, setNonItemQuantity5] = useState(0);
    const [new_nonItemUnitPrice5, setNonItemUnitPrice5] = useState(0);
    const [new_nonItemTotalPrice5, setNonItemTotalPrice5] = useState(0);
    const [new_nonItem6, setNonItem6] = useState(null);
    const [new_nonItemInvoice6, setNonItemInvoice6] = useState(0);
    const [new_nonItemPackingSlip6, setNonItemPackingSlip6] = useState(0);
    const [new_nonItemQuantity6, setNonItemQuantity6] = useState(0);
    const [new_nonItemUnitPrice6, setNonItemUnitPrice6] = useState(0);
    const [new_nonItemTotalPrice6, setNonItemTotalPrice6] = useState(0);

    const [new_item1, setItem1] = useState(null);
    const [new_itemName1, setItemName1] = useState(null);
    const [new_itemType1, setItemType1] = useState(null);
    const [new_itemInvoice1, setItemInvoice1] = useState(0);
    const [new_itemPackingSlip1, setItemPackingSlip1] = useState(0);
    const [new_itemQuantity1, setItemQuantity1] = useState(0);
    const [new_itemUnitPrice1, setItemUnitPrice1] = useState(0);
    const [new_itemTotalPrice1, setItemTotalPrice1] = useState(0);

    const [new_item2, setItem2] = useState(null);
    const [new_itemName2, setItemName2] = useState(null);
    const [new_itemType2, setItemType2] = useState(null);
    const [new_itemInvoice2, setItemInvoice2] = useState(0);
    const [new_itemPackingSlip2, setItemPackingSlip2] = useState(0);
    const [new_itemQuantity2, setItemQuantity2] = useState(0);
    const [new_itemUnitPrice2, setItemUnitPrice2] = useState(0);
    const [new_itemTotalPrice2, setItemTotalPrice2] = useState(0);

    const [new_item3, setItem3] = useState(null);
    const [new_itemName3, setItemName3] = useState(null);
    const [new_itemType3, setItemType3] = useState(null);
    const [new_itemInvoice3, setItemInvoice3] = useState(0);
    const [new_itemPackingSlip3, setItemPackingSlip3] = useState(0);
    const [new_itemQuantity3, setItemQuantity3] = useState(0);
    const [new_itemUnitPrice3, setItemUnitPrice3] = useState(0);
    const [new_itemTotalPrice3, setItemTotalPrice3] = useState(0);

    const [new_assemblyChargesQuantity, setAssemblyChargesQuantity] = useState(0);
    const [new_assemblyChargesUnitPrice, setAssemblyChargesUnitPrice] = useState(0);
    const [new_assemblyChargesTotalPrice, setAssemblyChargesTotalPrice] = useState(0);
    const [new_printingChargesQuantity, setPrintingChargesQuantity] = useState(0);
    const [new_printingChargesUnitPrice, setPrintingChargesUnitPrice] = useState(0);
    const [new_printingChargesTotalPrice, setPrintingChargesTotalPrice] = useState(0);
    const [new_setupCharge, setSetupCharge] = useState(0);
    const [new_numberOfScreens, setNumberOfScreens] = useState(0);
    const [new_screensPrice, setScreensPrice] = useState(0);
    const [new_subTotal, setSubTotal] = useState(0);
    const [new_taxRate, setTaxRate] = useState(0);
    const [new_tax, setTax] = useState(0);
    const [new_freightCharges, setFreightCharges] = useState(0);
    const [new_priceTotal, setPriceTotal] = useState(0);

    const [new_invoice_date, setInvoiceDate] = useState(null);
    const [new_invoice_date_paid, setInvoiceDatePaid] = useState(null);
    const [new_invoice_notes, setInvoiceNotes] = useState(null);

    const [new_abs_sales_order_date, setABSOrder] = useState(null);
    const [new_customer_order_date, setCustomerOrder] = useState(null);
    const [new_customer_po_date, setCustomerPODate] = useState(null);
    const [new_customer_po_number, setCustomerPONumber] = useState(null);
    const [new_credit_checked, setCreditChecked] = useState(0);
    const [new_days_turn, setDaysTurn] = useState(null);
    const [new_date_code_printing, setDateCodePrinting] = useState(null);
    const [new_customer_provided_material, setCustomerProvidedMaterial] = useState(null);
    const [new_customer_material_eta, setCustomerMaterialETA] = useState(null);
    const [new_customer_notes, setCustomerNotes] = useState(null);
    const [new_vendor_notes, setVendorNotes] = useState(null);
    const [new_order_notes, setOrderNotes] = useState(null);
    const [new_order_status, setOrderStatus] = useState(null);

    const { order_id } = useParams();
    const [orderData, setOrderData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/orderEdit/${order_id}`)
            .then(response => {
                setOrderData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [order_id]);

    var companyID = orderData?.company_id ?? '';
    var companyName = orderData?.company_name ?? '';

    var productID = orderData?.product_id ?? '';
    var productName = orderData?.product_name ?? '';
    var productType = orderData?.product_type ?? '';

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
    var itemName1 = orderData?.inventory_item1_name ?? '';
    var itemType1 = orderData?.inventory_item1_type ?? '';
    var itemInvoice1 = orderData?.inventory_invoice1 ?? 0;
    var itemPackingSlip1 = orderData?.inventory_packing_slip1 ?? 0;
    var itemQuantity1 = orderData?.inventory_quantity1 ?? '';
    var itemUnitPrice1 = orderData?.inventory_unit_price1 ?? '';
    var itemTotalPrice1 = orderData?.inventory_total_price1 ?? '';
    var item2 = orderData?.inventory_item2 ?? '';
    var itemName2 = orderData?.inventory_item2_name ?? '';
    var itemType2 = orderData?.inventory_item2_type ?? '';
    var itemInvoice2 = orderData?.inventory_invoice2 ?? 0;
    var itemPackingSlip2 = orderData?.inventory_packing_slip2 ?? 0;
    var itemQuantity2 = orderData?.inventory_quantity2 ?? '';
    var itemUnitPrice2 = orderData?.inventory_unit_price2 ?? '';
    var itemTotalPrice2 = orderData?.inventory_total_price2 ?? '';
    var item3 = orderData?.inventory_item3 ?? '';
    var itemName3 = orderData?.inventory_item3_name ?? '';
    var itemType3 = orderData?.inventory_item3_type ?? '';
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
    var credit_Checked = orderData?.credit_checked ?? 0;
    var daysTurn = orderData?.days_turn ?? '';
    var dateCodePrinting = orderData?.date_code_printing ?? '';
    var customerProvidedMaterial = orderData?.customer_provided_material ?? '';
    var customerMaterialETA = orderData?.customer_material_eta ?? '';
    var customerNotes = orderData?.customer_notes ?? '';
    var vendorNotes = orderData?.vendor_notes ?? '';
    var orderNotes = orderData?.order_notes ?? '';
    var orderStatus = orderData?.order_status ?? '';

    //setting variables for calculations
    useEffect(() => {
        setCustomQuantity(customQuantity);
        setCustomUnitPrice(customUnitPrice);
        
        setNonItemQuantity1(nonItemQuantity1);
        setNonItemUnitPrice1(nonItemUnitPrice1);
        setNonItemQuantity2(nonItemQuantity2);
        setNonItemUnitPrice2(nonItemUnitPrice2);
        setNonItemQuantity3(nonItemQuantity3);
        setNonItemUnitPrice3(nonItemUnitPrice3);
        setNonItemQuantity4(nonItemQuantity4);
        setNonItemUnitPrice4(nonItemUnitPrice4);
        setNonItemQuantity5(nonItemQuantity5);
        setNonItemUnitPrice5(nonItemUnitPrice5);
        setNonItemQuantity6(nonItemQuantity6);
        setNonItemUnitPrice6(nonItemUnitPrice6);

        setItemQuantity1(itemQuantity1);
        setItemUnitPrice1(itemUnitPrice1);
        setItemQuantity2(itemQuantity2);
        setItemUnitPrice2(itemUnitPrice2);
        setItemQuantity3(itemQuantity3);
        setItemUnitPrice3(itemUnitPrice3);

        setAssemblyChargesQuantity(assemblyChargesQuantity);
        setAssemblyChargesUnitPrice(assemblyChargesUnitPrice);
        setPrintingChargesQuantity(printingChargesQuantity);
        setPrintingChargesUnitPrice(printingChargesUnitPrice);

        setSetupCharge(setupCharge);
        setNumberOfScreens(numberOfScreens);
        setScreensPrice(screensPrice);

        setSubTotal(subTotal);
        setTaxRate(taxRate);
        setTax(tax);
        setFreightCharges(freightCharges);

        setPriceTotal(priceTotal);
      }, [customQuantity, customUnitPrice,
            nonItemQuantity1, nonItemUnitPrice1, nonItemQuantity2, nonItemUnitPrice2, nonItemQuantity3, nonItemUnitPrice3, nonItemQuantity4, nonItemUnitPrice4, nonItemQuantity5, nonItemUnitPrice5, nonItemQuantity6, nonItemUnitPrice6,
            itemQuantity1, itemUnitPrice1, itemQuantity2, itemUnitPrice2, itemQuantity3, itemUnitPrice3,
            assemblyChargesQuantity, assemblyChargesUnitPrice, printingChargesQuantity, printingChargesUnitPrice, setupCharge, numberOfScreens, screensPrice,
            subTotal, taxRate, tax, freightCharges,
            priceTotal]);

    //Calculate Price's Total
    useEffect(() => {
        setCustomTotalPrice(Number((new_customQuantity * new_customUnitPrice).toFixed(2)));
        setNonItemTotalPrice1(Number((new_nonItemQuantity1 * new_nonItemUnitPrice1).toFixed(2)));
        setNonItemTotalPrice2(Number((new_nonItemQuantity2 * new_nonItemUnitPrice2).toFixed(2)));
        setNonItemTotalPrice3(Number((new_nonItemQuantity3 * new_nonItemUnitPrice3).toFixed(2)));
        setNonItemTotalPrice4(Number((new_nonItemQuantity4 * new_nonItemUnitPrice4).toFixed(2)));
        setNonItemTotalPrice5(Number((new_nonItemQuantity5 * new_nonItemUnitPrice5).toFixed(2)));
        setNonItemTotalPrice6(Number((new_nonItemQuantity6 * new_nonItemUnitPrice6).toFixed(2)));
        setItemTotalPrice1(Number((new_itemQuantity1 * new_itemUnitPrice1).toFixed(2)));
        setItemTotalPrice2(Number((new_itemQuantity2 * new_itemUnitPrice2).toFixed(2)));
        setItemTotalPrice3(Number((new_itemQuantity3 * new_itemUnitPrice3).toFixed(2)));
        setAssemblyChargesTotalPrice(Number((new_assemblyChargesQuantity * new_assemblyChargesUnitPrice).toFixed(2)));
        setPrintingChargesTotalPrice(Number((new_printingChargesQuantity * new_printingChargesUnitPrice).toFixed(2)));
    }, [new_customQuantity, new_customUnitPrice, 
        new_nonItemQuantity1, new_nonItemUnitPrice1, new_nonItemQuantity2, new_nonItemUnitPrice2, new_nonItemQuantity3, new_nonItemUnitPrice3, new_nonItemQuantity4, new_nonItemUnitPrice4, new_nonItemQuantity5, new_nonItemUnitPrice5, new_nonItemQuantity6, new_nonItemUnitPrice6,
        new_itemQuantity1, new_itemUnitPrice1, new_itemQuantity2, new_itemUnitPrice2, new_itemQuantity3, new_itemUnitPrice3,
        new_assemblyChargesQuantity, new_assemblyChargesUnitPrice,
        new_printingChargesQuantity,  new_printingChargesUnitPrice]);

    //Calculate SubTotal
    useEffect (() => {
        const totalScreens = new_numberOfScreens * new_screensPrice;
        setSubTotal(new_customTotalPrice + 
            new_nonItemTotalPrice1 + new_nonItemTotalPrice2 + new_nonItemTotalPrice3 + new_nonItemTotalPrice4 + new_nonItemTotalPrice5 + new_nonItemTotalPrice6 + 
            new_itemTotalPrice1 + new_itemTotalPrice2+ new_itemTotalPrice3 +
            new_assemblyChargesTotalPrice + new_printingChargesTotalPrice + totalScreens + Number(new_setupCharge));
    },[new_customTotalPrice,
        new_nonItemTotalPrice1, new_nonItemTotalPrice2, new_nonItemTotalPrice3, new_nonItemTotalPrice4, new_nonItemTotalPrice5, new_nonItemTotalPrice6,
        new_itemTotalPrice1, new_itemTotalPrice2, new_itemTotalPrice3,
        new_assemblyChargesTotalPrice, new_printingChargesTotalPrice, new_setupCharge, new_numberOfScreens, new_screensPrice]);

    //Calculate Total and Tax
    useEffect(() => {
        setTax(Number((new_subTotal * new_taxRate).toFixed(2)));
        setPriceTotal(Number(new_subTotal) + Number(new_freightCharges) + Number(new_tax));
    }, [new_subTotal, new_taxRate, new_tax,
        new_freightCharges]);

    const handleNavigate = async () => {
        await Sleep(4000);
        navigate(`/order/${order_id}`);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/editOrder", {
            order_id: order_id,
            salesperson: new_salesperson,
            requestor: new_requestor,
            customer_contact: new_customer_contact,
            reOrder: new_reOrder,

            factoryOrderQuantity: new_factoryOrderQuantity,
            customInvoice: new_customInvoice,
            customPackingSlip: new_customPackingSlip,
            customQuantity: new_customQuantity,
            customUnitPrice: new_customUnitPrice,
            customTotalPrice: new_customTotalPrice,

            nonItem1: new_nonItem1,
            nonItemInvoice1: new_nonItemInvoice1,
            nonItemPackingSlip1: new_nonItemPackingSlip1,
            nonItemQuantity1: new_nonItemQuantity1,
            nonItemUnitPrice1: new_nonItemUnitPrice1,
            nonItemTotalPrice1: new_nonItemTotalPrice1,

            nonItem2: new_nonItem2,
            nonItemInvoice2: new_nonItemInvoice2,
            nonItemPackingSlip2: new_nonItemPackingSlip2,
            nonItemQuantity2: new_nonItemQuantity2,
            nonItemUnitPrice2: new_nonItemUnitPrice2,
            nonItemTotalPrice2: new_nonItemTotalPrice2,

            nonItem3: new_nonItem3,
            nonItemInvoice3: new_nonItemInvoice3,
            nonItemPackingSlip3: new_nonItemPackingSlip3,
            nonItemQuantity3: new_nonItemQuantity3,
            nonItemUnitPrice3: new_nonItemUnitPrice3,
            nonItemTotalPrice3: new_nonItemTotalPrice3,

            nonItem4: new_nonItem4,
            nonItemInvoice4: new_nonItemInvoice4,
            nonItemPackingSlip4: new_nonItemPackingSlip4,
            nonItemQuantity4: new_nonItemQuantity4,
            nonItemUnitPrice4: new_nonItemUnitPrice4,
            nonItemTotalPrice4: new_nonItemTotalPrice4,

            nonItem5: new_nonItem5,
            nonItemInvoice5: new_nonItemInvoice5,
            nonItemPackingSlip5: new_nonItemPackingSlip5,
            nonItemQuantity5: new_nonItemQuantity5,
            nonItemUnitPrice5: new_nonItemUnitPrice5,
            nonItemTotalPrice5: new_nonItemTotalPrice5,

            nonItem6: new_nonItem6,
            nonItemInvoice6: new_nonItemInvoice6,
            nonItemPackingSlip6: new_nonItemPackingSlip6,
            nonItemQuantity6: new_nonItemQuantity6,
            nonItemUnitPrice6: new_nonItemUnitPrice6,
            nonItemTotalPrice6: new_nonItemTotalPrice6,

            //item1: new_item1String,
            item1: new_item1,
            itemName1: new_itemName1,
            itemType1: new_itemType1,
            itemInvoice1: new_itemInvoice1,
            itemPackingSlip1: new_itemPackingSlip1,
            itemQuantity1: new_itemQuantity1,
            itemUnitPrice1: new_itemUnitPrice1,
            itemTotalPrice1: new_itemTotalPrice1,
            //item2: new_item2String,
            item2: new_item2,
            itemName2: new_itemName2,
            itemType2: new_itemType2,
            itemInvoice2: new_itemInvoice2,
            itemPackingSlip2: new_itemPackingSlip2,
            itemQuantity2: new_itemQuantity2,
            itemUnitPrice2: new_itemUnitPrice2,
            itemTotalPrice2: new_itemTotalPrice2,
            //item3: new_item3String,
            item3: new_item3,
            itemName3: new_itemName3,
            itemType3: new_itemType3,
            itemInvoice3: new_itemInvoice3,
            itemPackingSlip3: new_itemPackingSlip3,
            itemQuantity3: new_itemQuantity3,
            itemUnitPrice3: new_itemUnitPrice3,
            itemTotalPrice3: new_itemTotalPrice3,

            assemblyChargesQuantity: new_assemblyChargesQuantity,
            assemblyChargesUnitPrice: new_assemblyChargesUnitPrice,
            assemblyChargesTotalPrice: new_assemblyChargesTotalPrice,
            printingChargesQuantity: new_printingChargesQuantity,
            printingChargesUnitPrice: new_printingChargesUnitPrice,
            printingChargesTotalPrice: new_printingChargesTotalPrice,
            setupCharge: new_setupCharge,
            numberOfScreens: new_numberOfScreens,
            screensPrice: new_screensPrice,
            subTotal: new_subTotal,
            taxRate: new_taxRate,
            tax: new_tax,
            freightCharges: new_freightCharges,
            priceTotal: new_priceTotal,

            invoice_date: new_invoice_date,
            invoice_date_paid: new_invoice_date_paid,
            invoice_notes: new_invoice_notes,

            abs_sales_order_date: new_abs_sales_order_date,
            customer_order_date: new_customer_order_date,
            customer_po_date: new_customer_po_date,
            customer_po_number: new_customer_po_number,
            credit_checked: new_credit_checked,
            days_turn: new_days_turn,
            date_code_printing: new_date_code_printing,
            customer_provided_material: new_customer_provided_material,
            customer_material_eta: new_customer_material_eta,
            customer_notes: new_customer_notes,
            vendor_notes: new_vendor_notes,
            order_notes: new_order_notes,
            order_status: new_order_status,
        }).then(() => {
            alert('Edited order');
        }).catch(err => {
            console.log(err);
        });

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
                        <Link className="nav-link" to="/">Home</Link>
                    </div>
                </div>

                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            </nav>

            <div className="container p-5">
                <div className="page-headers">
                    <h2>[EDIT] ORDER</h2>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="company-info pt-3">
                        <div className="section-headers">
                            <h5>ABSO - Absolute Media, Inc.</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="companyID" className="col-md-3 col-form-label">Company ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="companyID" defaultValue={companyID} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="companyName" className="col-md-3 col-form-label">Company Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="companyName" defaultValue={companyName} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="salesPerson" className="col-md-3 col-form-label">Salesperson</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="salesPerson" defaultValue={salesPerson} onChange={(e) => {
                                    setSalesPerson(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="requestor" className="col-md-3 col-form-label">Requestor</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="requestor" defaultValue={requestor} onChange={(e) => {
                                    setRequestor(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="cContact" className="col-md-3 col-form-label">Customer Contact</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="customerContact" defaultValue={customerContact} onChange={(e) => {
                                    setCustomerContact(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="reorder" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Re-Order?</label>
                            <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                <input defaultChecked={reOrder} type="checkbox" readOnly className="custom-control-input" id="reorder" onChange={(e) => {
                                    setReOrder(e.target.value)
                                }} />
                                <label className="custom-control-label" htmlFor="reorder"></label>
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
                                <input type="text" readOnly className="form-control" id="productID" value={productID} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="productName" className="col-md-3 col-form-label">Product Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="productName" value={productName} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="productCategory" className="col-md-3 col-form-label">Product Category</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" readOnly className="form-control" id="productCategory" value={productType} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="factoryOrderQuantity" className="col-md-3 col-form-label">Factory Order Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="number" onChange={(e) => {setFactoryOrderQuantity(e.target.value)}}className="form-control" id="factoryOrderQuantity" defaultValue={factoryOrderQuantity} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-md-2.5 col-form-label">Invoice</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={customInvoice} defaultValue={customInvoice} className="custom-control-input" id="customInvoice" />
                                    <label htmlFor="customInvoice" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Packing Slip</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={customPackingSlip} defaultValue={customPackingSlip} className="custom-control-input" id="CustomPackingSlip" />
                                    <label htmlFor="CustomPackingSlip" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" className="form-control" id="customQuantity" defaultValue={customQuantity} onChange={(e) => {setCustomQuantity(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Unit Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" className="form-control" id="customUnitPrice" defaultValue={customUnitPrice} onChange={(e) => {setCustomUnitPrice(e.target.value)}}/>
                            </div>

                            <label className="col-md-3.5 col-form-label">Total Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" readOnly className="form-control" id="customTotalPrice" value={new_customTotalPrice}/>
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
                                <input type="text"  className="form-control" id="nonItem1" defaultValue={nonItem1} onChange={(e) => {setNonItem1(e.target.value)}} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-md-2.5 col-form-label">Invoice</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemInvoice1} onChange={(e) => {setNonItem1(e.target.value)}} className="custom-control-input" id="nonItemInvoice1" />
                                    <label htmlFor="nonItemInvoice1" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Packing Slip</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemPackingSlip1} onChange={(e) => {setNonItemPackingSlip1(e.target.value)}} className="custom-control-input" id="nonItemPackingSlip1" />
                                    <label htmlFor="nonItemPackingSlip1" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" className="form-control" id="nonItemQuantity1" defaultValue={nonItemQuantity1} onChange={(e) => {setNonItemQuantity1(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Unit Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" className="form-control" id="nonItemUnitPrice1" defaultValue={nonItemUnitPrice1} onChange={(e) => {setItemUnitPrice1(e.target.value)}} />
                            </div>

                            <label className="col-md-2.5 col-form-label">Total Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" readOnly className="form-control" id="nonItemTotalPrice1" value={new_nonItemTotalPrice1}/>
                            </div>
                        </div>

                        {/* Non-Item #2 */}
                        <div className="form-row">
                            <label htmlFor="nonItem2" className="col-md-3 col-form-label">Non-Inventory Item #2</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="nonItem2" defaultValue={nonItem2} onChange={(e) => {setNonItem2(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-md-2.5 col-form-label">Invoice</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemInvoice2} onChange={(e) => {setNonItemInvoice2(e.target.value)}} className="custom-control-input" id="nonItemInvoice2" />
                                    <label htmlFor="nonItemInvoice2" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Packing Slip</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemPackingSlip2} onChange={(e) => {setNonItemPackingSlip2(e.target.value)}} className="custom-control-input" id="nonItemPackingSlip2" />
                                    <label htmlFor="nonItemPackingSlip2" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" onChange={(e) => {setNonItemQuantity2(e.target.value)}} className="form-control" id="nonItemQuantity2" defaultValue={nonItemQuantity2} />
                            </div>

                            <label className="col-md-2.5 col-form-label">Unit Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" onChange={(e) => {setNonItemUnitPrice2(e.target.value)}} className="form-control" id="nonItemUnitPrice2" defaultValue={nonItemUnitPrice2} />
                            </div>

                            <label className="col-md-2.5 col-form-label">Total Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" readOnly className="form-control" id="nonItemTotalPrice2" value={new_nonItemTotalPrice2} />
                            </div>
                        </div>

                        {/* Non-Item #3 */}
                        <div className="form-row">
                            <label htmlFor="nonItem3" className="col-md-3 col-form-label">Non-Inventory Item #3</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" onChange={(e) => {setNonItem3(e.target.value)}} className="form-control" id="nonItem3" defaultValue={nonItem3} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-md-2.5 col-form-label">Invoice</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemInvoice3} onChange={(e) => {setNonItemInvoice3(e.target.value)}} className="custom-control-input" id="nonItemInvoice3" />
                                    <label htmlFor="nonItemInvoice3" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Packing Slip</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemPackingSlip3} onChange={(e) => {setNonItemPackingSlip3(e.target.value)}} className="custom-control-input" id="nonItemPackingSlip3" />
                                    <label htmlFor="nonItemPackingSlip3" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" onChange={(e) => {setNonItemQuantity3(e.target.value)}} className="form-control" id="nonItemQuantity3" defaultValue={nonItemQuantity3} />
                            </div>

                            <label className="col-md-2.5 col-form-label">Unit Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" onChange={(e) => {setNonItemUnitPrice3(e.target.value)}} className="form-control" id="nonItemUnitPrice3" defaultValue={nonItemUnitPrice3} />
                            </div>

                            <label className="col-md-2.5 col-form-label">Total Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" readOnly className="form-control" id="nonItemTotalPrice3" value={new_nonItemTotalPrice3} />
                            </div>
                        </div>

                        {/* Non-Item #4 */}
                        <div className="form-row">
                            <label htmlFor="nonItem4" className="col-md-3 col-form-label">Non-Inventory Item #4</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" onChange={(e) => {setNonItem4(e.target.value)}} className="form-control" id="nonItem4" defaultValue={nonItem4} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-md-2.5 col-form-label">Invoice</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemInvoice4}  onChange={(e) => {setNonItemInvoice4(e.target.value)}}className="custom-control-input" id="nonItemInvoice4" />
                                    <label htmlFor="nonItemInvoice4" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Packing Slip</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemPackingSlip4} onChange={(e) => {setNonItemPackingSlip4(e.target.value)}} className="custom-control-input" id="nonItemPackingSlip4" />
                                    <label htmlFor="nonItemPackingSlip4" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" className="form-control" id="nonItemQuantity4" defaultValue={nonItemQuantity4} onChange={(e) => {setNonItemQuantity4(e.target.value)}} />
                            </div>

                            <label className="col-md-2.5 col-form-label">Unit Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" className="form-control" id="nonItemUnitPrice4" defaultValue={nonItemUnitPrice4} onChange={(e) => {setNonItemUnitPrice4(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Total Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" readOnly className="form-control" id="nonItemTotalPrice4" value={new_nonItemTotalPrice4} />
                            </div>
                        </div>

                        {/* Non-Item #5 */}
                        <div className="form-row">
                            <label htmlFor="nonItem5" className="col-md-3 col-form-label">Non-Inventory Item #5</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" onChange={(e) => {setNonItem5(e.target.value)}} className="form-control" id="nonItem5" defaultValue={nonItem5} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-md-2.5 col-form-label">Invoice</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemInvoice5} onChange={(e) => {setNonItemInvoice5(e.target.value)}} className="custom-control-input" id="nonItemInvoice5" />
                                    <label htmlFor="nonItemInvoice5" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Packing Slip</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemPackingSlip5} onChange={(e) => {setNonItemPackingSlip5(e.target.value)}} className="custom-control-input" id="nonItemPackingSlip5" />
                                    <label htmlFor="nonItemPackingSlip5" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" className="form-control" id="nonItemQuantity5" defaultValue={nonItemQuantity5} onChange={(e) => {setNonItemQuantity5(e.target.value)}} />
                            </div>

                            <label className="col-md-2.5 col-form-label">Unit Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" className="form-control" id="nonItemUnitPrice5" defaultValue={nonItemUnitPrice5} onChange={(e) => {setNonItemUnitPrice5(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Total Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" readOnly className="form-control" id="nonItemTotalPrice5" value={new_nonItemTotalPrice5}/>
                            </div>
                        </div>

                        {/* Non-Item #6 */}
                        <div className="form-row">
                            <label htmlFor="nonItem6" className="col-md-3 col-form-label">Non-Inventory Item #6</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="nonItem6" defaultValue={nonItem6} onChange={(e) => {setNonItem6(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-md-2.5 col-form-label">Invoice</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemInvoice6} onChange={(e) => {setNonItemInvoice6(e.target.value)}} className="custom-control-input" id="nonItemInvoice6" />
                                    <label htmlFor="nonItemInvoice6" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Packing Slip</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={nonItemPackingSlip6} onChange={(e) => {setNonItemPackingSlip6(e.target.value)}}className="custom-control-input" id="nonItemPackingSlip6" />
                                    <label htmlFor="nonItemPackingSlip6" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" className="form-control" id="nonItemQuantity6" defaultValue={nonItemQuantity6} onChange={(e) => {setNonItemQuantity6(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Unit Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" className="form-control" id="nonItemUnitPrice6" defaultValue={nonItemUnitPrice6} onChange={(e) => {setNonItemUnitPrice6(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Total Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01"  className="form-control" readOnly id="nonItemTotalPrice6" value={new_nonItemTotalPrice6}/>
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
                                <input type="text" className="form-control" id="item1" defaultValue={item1} onChange={(e) => {setItem1(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-name-1" className="col-md-3 col-form-label">Item Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="item-name-1" defaultValue={itemName1} onChange={(e) => {setItemName1(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-type-1" className="col-md-3 col-form-label">Item Type</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="item-type-1" defaultValue={itemType1} onChange={(e) => {setItemType1(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-md-2.5 col-form-label">Invoice</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={itemInvoice1} onChange={(e) => {setItemInvoice1(e.target.value)}} className="custom-control-input" id="itemInvoice1" />
                                    <label htmlFor="itemInvoice1" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Packing Slip</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={itemPackingSlip1} onChange={(e) => {setItemPackingSlip1(e.target.value)}} className="custom-control-input" id="itemPackingSlip1" />
                                    <label htmlFor="itemPackingSlip1" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" className="form-control" id="itemQuantity1" defaultValue={itemQuantity1} onChange={(e) => {setItemQuantity1(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Unit Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" className="form-control" id="itemUnitPrice1" defaultValue={itemUnitPrice1} onChange={(e) => {setItemUnitPrice2(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Total Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" readOnly className="form-control" id="itemTotalPrice1" value={new_itemTotalPrice1}/>
                            </div>
                        </div>

                        {/* Item #2 */}
                        <div className="form-row">
                            <label htmlFor="item2" className="col-md-3 col-form-label">Inventory Item #2</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="item2" defaultValue={item2} onChange={(e) => {setItem2(e.target.value)}} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-name-2" className="col-md-3 col-form-label">Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="item-name-2" defaultValue={itemName2} onChange={(e) => {setItemName2(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-type-2" className="col-md-3 col-form-label">Type</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="item-type-2" defaultValue={itemType2} onChange={(e) => {setItemType2(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-md-2.5 col-form-label">Invoice</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={itemInvoice2} onChange={(e) => {setItemInvoice2(e.target.value)}} className="custom-control-input" id="itemInvoice2" />
                                    <label htmlFor="itemInvoice2" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Packing Slip</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={itemPackingSlip2} onChange={(e) => {setNonItemPackingSlip2(e.target.value)}} className="custom-control-input" id="itemPackingSlip2" />
                                    <label htmlFor="itemPackingSlip2" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" className="form-control" id="itemQuantity2" defaultValue={itemQuantity2} onChange={(e) => {setItemQuantity2(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Unit Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" className="form-control" id="itemUnitPrice2" defaultValue={itemUnitPrice2} onChange={(e) => {setItemUnitPrice2(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Total Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" readOnly className="form-control" id="itemTotalPrice2" value={new_itemTotalPrice2}/>
                            </div>
                        </div>

                        {/* Item #3 */}
                        <div className="form-row">
                            <label htmlFor="item3" className="col-md-3 col-form-label">Inventory Item #3</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text"  className="form-control" id="item3" defaultValue={item3} onChange={(e) => {setItem3(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-name-3" className="col-md-3 col-form-label">Name</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text"  className="form-control" id="item-name-3" defaultValue={itemName3} onChange={(e) => {setItemName3(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="item-type-3" className="col-md-3 col-form-label">Type</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="item-type-3" defaultValue={itemType3} onChange={(e) => {setItemType3(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label className="col-md-2.5 col-form-label">Invoice</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={itemInvoice3} onChange={(e) => {setItemInvoice3(e.target.value)}} className="custom-control-input" id="itemInvoice3" />
                                    <label htmlFor="itemInvoice3" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Packing Slip</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <div className="form-group custom-control custom-checkbox">
                                    <input type="checkbox" defaultChecked={itemPackingSlip3} onChange={(e) => {setItemPackingSlip3(e.target.value)}}className="custom-control-input" id="itemPackingSlip3" />
                                    <label htmlFor="itemPackingSlip3" className="custom-control-label"></label>
                                </div>
                            </div>

                            <label className="col-md-2.5 col-form-label">Quantity</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" className="form-control" id="itemQuantity3" defaultValue={itemQuantity3} onChange={(e) => {setItemQuantity3(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Unit Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" className="form-control" id="itemUnitPrice3" defaultValue={itemUnitPrice3} onChange={(e) => {setItemUnitPrice3(e.target.value)}}/>
                            </div>

                            <label className="col-md-2.5 col-form-label">Total Price $</label>
                            <div className="input-group input-group-sm mb-3 col-md-1">
                                <input type="number" step="0.01" readOnly className="form-control" id="itemTotalPrice3" value={new_itemTotalPrice3}/>
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
                                <input type="number" className="form-control" id="assemblyChargesQuantity" placeholder="Quantity" defaultValue={assemblyChargesQuantity} onChange={(e) => {setAssemblyChargesQuantity(e.target.value)}}/>

                                <input type="number" step="0.01" className="form-control" id="assemblyChargesUnitPrice" placeholder="Unit Price $" defaultValue={assemblyChargesUnitPrice} onChange={(e) => {setAssemblyChargesUnitPrice(e.target.value)}}/>

                                <input type="number" step="0.01" readOnly className="form-control" id="assemblyChargesTotalPrice" value={new_assemblyChargesTotalPrice}/>

                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="printingCharges" className="col-md-3 col-form-label">Date Code Printing Charges $</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="number" className="form-control" id="printingChargesQuantity" placeholder="Quantity" defaultValue={printingChargesQuantity} onChange={(e) => {setPrintingChargesQuantity(e.target.value)}}/>

                                <input type="number" step="0.01" className="form-control" id="printingChargesUnitPrice" placeholder="Unit Price $" defaultValue={printingChargesUnitPrice} onChange={(e) => {setPrintingChargesUnitPrice(e.target.value)}}/>

                                <input type="number" step="0.01" readOnly className="form-control" id="printingChargesTotalPrice" value={new_printingChargesTotalPrice}/>

                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="setupCharge" className="col-md-3 col-form-label">Date Code Setup Charge $</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">

                                <input type="number" step="0.01" className="form-control" id="setupCharge" defaultValue={setupCharge} onChange={(e) => {setSetupCharge(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="numberofScreens" className="col-md-3 col-form-label">Art Manipulation / Film Charges for Screens</label>
                            <div className="input-group input-group-sm mb-3 col-md-4">
                                <input type="number" className="form-control" id="numberOfScreens" placeholder="Number of Screens" defaultValue={numberOfScreens} onChange={(e) => {setNumberOfScreens(e.target.value)}}/>
                            </div>
                            <div className="input-group input-group-sm mb-3 col-md-4">
                                <input type="number" step="0.01" className="form-control" id="screensPrice" placeholder="Price per Screen" defaultValue={screensPrice} onChange={(e) => {setScreensPrice(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="subTotal" className="col-md-3 col-form-label">Sub Total $</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="number" step="0.01" readOnly className="form-control" id="subTotal" value={new_subTotal}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="taxable" className="col-md-3 col-form-label">Tax Rate</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="number" step="0.01" className="form-control" id="taxable" defaultValue={taxRate} onChange={(e) => {setTaxRate(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="tax" className="col-md-3 col-form-label">Tax</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="number" step="0.01" readOnly className="form-control" id="tax" value={new_tax}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="freightCharges" className="col-md-3 col-form-label">Freight Charges $</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="number" step="0.01" className="form-control" id="freightCharges" defaultValue={freightCharges} onChange={(e) => {setFreightCharges(e.target.value)}}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="priceTotal" className="col-md-3 col-form-label">Order Price Total $</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="number" step="0.01" readOnly className="form-control" id="priceTotal" value={new_priceTotal} />
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
                                <input type="date" className="form-control" id="invoiceDate" defaultValue={invoiceDate} onChange={(e) => {
                                    setInvoiceDate(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="invoiceDatePaid" className="col-md-3 col-form-label">Invoice Date Paid</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" id="invoiceDatePaid" defaultValue={invoiceDatePaid} onChange={(e) => {
                                    setInvoiceDatePaid(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="invoiceNotes" className="col-md-3 col-form-label">Invoice Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" id="invoiceNotes" defaultValue={invoiceNotes} onChange={(e) => {
                                    setInvoiceNotes(e.target.value)
                                }} />
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
                                <input type="date" className="form-control" id="ABSOrder" defaultValue={ABSOrder} onChange={(e) => {
                                    setABSOrder(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customerOrder" className="col-md-3 col-form-label">Customer Order Date</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" id="customerOrder" defaultValue={customerOrder} onChange={(e) => {
                                    setCustomerOrder(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customerPODate" className="col-md-3 col-form-label">Customer PO Date</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" id="customerPODate" defaultValue={customerPODate} onChange={(e) => {
                                    setCustomerPODate(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customerPONumber" className="col-md-3 col-form-label">Customer PO Number</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="number" className="form-control" id="customerPONumber" defaultValue={customerPONumber} onChange={(e) => {
                                    setCustomerPONumber(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="creditChecked" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Credit Checked?</label>
                            <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                <input defaultChecked={credit_Checked}onChange={(e) => {setCreditChecked(e.target.value)}} type="checkbox" className="custom-control-input" id="creditChecked" />
                                <label className="custom-control-label" htmlFor="creditChecked"></label>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="daysTurn" className="col-md-3 col-form-label">Days Turn</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="number" className="form-control" id="daysTurn" defaultValue={daysTurn} onChange={(e) => {
                                    setDaysTurn(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="dateCodePrinting" className="col-md-3 col-form-label">Date Code Printing</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" id="dateCodePrinting" defaultValue={dateCodePrinting} onChange={(e) => {
                                    setDateCodePrinting(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customerProvidedMaterial" className="col-md-3 col-form-label">Customer Provided Material</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" id="customerProvidedMaterial" defaultValue={customerProvidedMaterial} onChange={(e) => {
                                    setCustomerProvidedMaterial(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customerMaterialETA" className="col-md-3 col-form-label">Customer Material ETA</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="date" className="form-control" id="customerMaterialETA" defaultValue={customerMaterialETA} onChange={(e) => {
                                    setCustomerMaterialETA(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customerNotes" className="col-md-3 col-form-label">Customer Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" id="customerNotes" defaultValue={customerNotes} onChange={(e) => {
                                    setCustomerNotes(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="vendorNotes" className="col-md-3 col-form-label">Vendor Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" id="vendorNotes" defaultValue={vendorNotes} onChange={(e) => {
                                    setVendorNotes(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="orderNotes" className="col-md-3 col-form-label">Order Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" id="orderNotes" defaultValue={orderNotes} onChange={(e) => {
                                    setOrderNotes(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="orderStatus" className="col-md-3 col-form-label">Order Status</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select className="form-control" name="orderStatus" id="orderStatus" defaultValue={orderStatus}
                                    onChange={(e) => {
                                        setOrderStatus(e.target.value)
                                    }}>
                                    <option value="{orderStatus}">{orderStatus}</option>
                                    <option value="Submitted">Submitted</option>
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

                    <div>
                        <button onClick={() => handleNavigate({ order_id })} id="edit-order" className="btn btn-outline-success">Update</button>
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
export default OrderEdit;

const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "password",
    database: "absolutemedia",
});

app.post("/api/insert", (req, res)=> {
    const customer_id = req.body.customer_id;
    const company = req.body.company; //testing company
    const fname = req.body.fname;
    const lname = req.body.lname;
    const contact_type = req.body.contact_type;
    const title = req.body.title;
    const dept = req.body.dept;
    const add_1 = req.body.add_1;
    const add_2 = req.body.add_2;
    const city = req.body.city;
    const state_in_country = req.body.state_in_country;
    const zip = req.body.zip;
    const country = req.body.country;
    const phone = req.body.phone;
    const extension = req.body.extension;
    const fax = req.body.fax;
    const email = req.body.fax;
    const cell_phone_number = req.body.cell_phone_number;
    const third_party_compnay = req.body.third_party_company;
    const notes = req.body.notes;


    const sqlInsert = "INSERT INTO contact_table (customer_id, company, fname, lname, contact_type, title, dept, add_1, add_2, city, state_in_country, zip, country, phone, extension, fax, email, cell_phone_number, third_party_company, notes) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    db.query(sqlInsert, [customer_id, company, fname, lname, contact_type, title, dept, add_1, add_2, city, state_in_country, zip, country, phone, extension, fax, email, cell_phone_number, third_party_compnay, notes], (err, result)=>{
        console.log(result);
    
    });
});

app.post("/api/insertOrder", (req, res) => {
    //go to back_end directory in terminal and type 'node index.js'
    const salesPerson = req.body.salesPerson;
    const requestor = req.body.requestor;
    const customerContact = req.body.customerContact;
    const reOrder =  req.body.reOrder;
    
    // Custom Product
    const factoryOrderQuantity = req.body.factoryOrderQuantity;
    const customInvoice = req.body.customInvoice;
    const customPackingSlip = req.body.customPackingSlip;
    const customQuantity = req.body.customQuantity;
    const customUnitPrice = req.body.customUnitPrice;
    const customTotalPrice = req.body.customTotalPrice;
    
    // Billing Information
    const assemblyChargesQuantity = req.body.assemblyChargesQuantity;
    const assemblyChargesUnitPrice = req.body.assemblyChargesUnitPrice;
    const assemblyChargesTotalPrice = req.body.assemblyChargesTotalPrice;
    const printingChargesQuantity = req.body.printingChargesQuantity;
    const printingChargesUnitPrice = req.body.printingChargesUnitPrice;
    const printingChargesTotalPrice = req.body.printingCharegsTotalPrice;
    const setupCharge = req.body.setupCharge;
    const numberOfScreens = req.body.numberOfScreens;
    const screensPrice = req.body.screensPrice;
    const subTotal = req.body.subTotal;
    const taxable = req.body.taxable;
    const taxRate = req.body.taxRate;
    const tax = req.body.tax;
    const freightCharges = req.body.freightCharges;
    const priceTotal = req.body.priceTotal;
    
    // Invoice Information
    const invoiceDate = req.body.invoiceDate;
    const invoiceDatePaid = req.body.invoiceDatePaid;
    const invoiceNotes = req.body.invoiceNotes;
    
    // Job Information
    const ABSOrder = req.body.ABSOrder;
    const customerOrder = req.body.customerOrder;
    const customerPODate = req.body.customerPODate;
    const customerPONumber = req.body.customerPONumber;
    const creditChecked = req.body.creditChecked;
    const daysTurn = req.body.daysTurn;
    const dateCodePrinting = req.body.dateCodePrinting;
    const assemblyBy = req.body.assemblyBy;
    const discManufacturedBy = req.body.discManufacturedBy;
    const CDBrand = req.body.CDBrand;
    const discProvidedBy = req.body.discProvidedBy;
    const customerProvidedMaterial = req.body.customerProvidedMaterial;
    const customerMaterialETA = req.body.customerMaterialETA;
    const customerNotes = req.body.customerNotes;
    const vendorNotes = req.body.vendorNotes;
    const orderNotes = req.body.orderNotes;
    const orderStatus = req.body.orderStatus;
    
    db.query(
        "INSERT INTO order_table (salesperson, requestor, customer_contact, re_order, \
                                  factory_order_quantity, custom_invoice, custom_packing_slip, custom_quantity, custom_unit_price, custom_total_price, \
                                  assembly_charges_quantity, assembly_charges_unit_price, assembly_charges_total_price, date_code_printing_charges_quantity, date_code_printing_charges_unit_price, date_code_printing_charges_total_price, date_code_setup_charge, number_of_screens, art_manipulation, sub_total, taxable, tax_rate, tax, freight_charges, order_price_total, \
                                  invoice_date, invoice_date_paid, invoice_notes, \
                                  abs_sales_order_date, customer_order_date, customer_po_date, customer_po_number, credit_checked, days_turn, date_code_printing, assembly_by, disc_manufactured_by, cd_dvd_brand, disc_provided_by, customer_provided_material, customer_material_eta, customer_notes, vendor_notes, order_notes, order_status) \
                                  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [salesPerson, requestor, customerContact, reOrder,
            factoryOrderQuantity, customInvoice, customPackingSlip, customQuantity, customUnitPrice, customTotalPrice,
            assemblyChargesQuantity, assemblyChargesUnitPrice, assemblyChargesTotalPrice, printingChargesQuantity, printingChargesUnitPrice, printingChargesTotalPrice, setupCharge, numberOfScreens, screensPrice, subTotal, taxable, taxRate, tax, freightCharges, priceTotal,
            invoiceDate, invoiceDatePaid, invoiceNotes,
            ABSOrder, customerOrder, customerPODate, customerPONumber, creditChecked, daysTurn, dateCodePrinting, assemblyBy, discManufacturedBy, CDBrand, discProvidedBy, customerProvidedMaterial, customerMaterialETA, customerNotes, vendorNotes, orderNotes, orderStatus]
            , (err, result) => {
                console.log(result);
        }
    );
});

//Get information from the product table
app.get("/api/getProductInfo", (req, res) => {
    const productID = req.body.productID;
   db.query("SELECT * FROM product_table", (err, result) => {
       if (err) {
           console.log(err);
       }
       else {
           res.send(result);
       }
   });
});

//Get information from the contact table
app.get("/api/getContactInfo", (req, res) => {
     const customerID = req.body.customerID;
    // const phone = req.body.phone;
    db.query("SELECT * FROM contact_table WHERE customer_id = ?", [customerID], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.post("/api/insertProduct", (req, res) => {
    const oldId = req.body.old_abs_id;
    const customerId = req.body.customer_id;
    const productCategory = req.body.product_category;
    const oemId = req.body.oem_product_id;
    const productTitle = req.body.product_title;
    const productDesc = req.body.product_desc;
    const productRepl = req.body.product_repl;
    const masterFormat = req.body.master_format;
    const masterReceived = req.body.master_received;
    const masterLabel = req.body.master_label;
    const masterCapacity = req.body.master_capacity;
    const masterLoc = req.body.master_loc;
    const filmsLoc = req.body.films_loc;
    const dateCodeRequired = req.body.date_code_required;
    const dateCodePosition = req.body.date_code_position;
    const innerHub = req.body.inner_hub;
    const innerHubPosition = req.body.inner_hub_position;
    const floodCoat = req.body.floodcoat;
    const rimagePrint = req.body.rimage_print;
    const colorOne = req.body.color_1;
    const colorTwo = req.body.color_2;
    const colorThree = req.body.color_3;
    const colorFour = req.body.color_4;
    const colorFive = req.body.color_5;
    const colorSix = req.body.color_6;
    const colorSeven = req.body.color_7;
    const colorEight = req.body.color_8;
    const colorNotes = req.body.color_notes;
    const componentOne = req.body.component_1;
    const componentTwo = req.body.component_2;
    const componentThree = req.body.component_3;
    const componentFour = req.body.component_4;
    const componentFive = req.body.component_5;
    const componentSix = req.body.component_6;
    const componentSeven = req.body.component_7;
    const componentEight = req.body.component_8;
    const componentNine = req.body.component_9;
    const componentTen = req.body.component_10;
    const componentEleven = req.body.component_11;
    const componentTwelve = req.body.component_12;
    const packagingNotes = req.body.packaging_notes;
    const productNotes = req.body.product_notes;
    const productStatus = req.body.product_status;

    const sqlInsert = "INSERT INTO product_table (old_abs_id, customer_id, product_category, oem_product_id, product_title, product_desc, product_repl, master_format, master_received, master_label, master_capacity, master_loc, films_loc, date_code_required, date_code_position, inner_hub, inner_hub_position, floodcoat, rimage_print, color_1, color_2, color_3, color_4, color_5, color_6, color_7, color_8, color_notes, component_1, component_2, component_3, component_4, component_5, component_6, component_7, component_8, component_9, component_10, component_11, component_12, packaging_notes, product_notes, product_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [oldId, customerId, productCategory, oemId, productTitle, productDesc, productRepl, masterFormat, masterReceived, masterLabel, masterCapacity, masterLoc, filmsLoc, dateCodeRequired, dateCodePosition, innerHub, innerHubPosition, floodCoat, rimagePrint, colorOne, colorTwo, colorThree, colorFour, colorFive, colorSix, colorSeven, colorEight, colorNotes, componentOne, componentTwo, componentThree, componentFour, componentFive, componentSix, componentSeven, componentEight, componentNine, componentTen, componentEleven, componentTwelve, packagingNotes, productNotes, productStatus], (err, result) => {
        console.log(result);
    });
});

app.post("/api/insertLocation" , (req, res) =>{
    const location_id = req.body.location_id;
    const location_type = req.body.location_type;
    const item_id = req.body.item_id;
    const qty = req.body.qty;
    const item_owner = req.body.item_owner;
    const physical_location = req.body.physical_location;
    const notes = req.body.notes;

    const sqlInsert = "INSERT INTO location_table (location_id, item_id, physical_location, location_type, item_owner, notes, qty) VALUES (?,?,?,?,?,?,?)";
    db.query(sqlInsert, [location_id, item_id, physical_location, location_type, item_owner, notes, qty], (err, result) => {
        console.log(result);
    });
});

app.post("/api/insertItem" , (req, res) =>{
    const customer_id = req.body.customer_id;
    const item_id = req.body.item_id;
    const mfr_pn = req.body.mfr_pn;
    const description = req.body.description;
    const carrier = req.body.carrier;
    const quantity = req.body.quantity;
    const disposition = req.body.disposition;
    const signed_for_by = req.body.signed_for_by;
    const date_in = req.body.date_in;
    const date_complete = req.body.date_complete;

    const sqlInsert = "INSERT INTO item_check_in_table (customer_id, item_id, mfr_pn, description, quantity, carrier, signed_for_by, disposition, date_in, date_complete) VALUES (?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [customer_id, item_id, mfr_pn, description, quantity, carrier, signed_for_by, disposition, date_in, date_complete], (err, result) => {
        console.log(result);
    });
});

app.post("/api/insertComponent", (req, res) =>{
    /*------------------------------------------ Component Page ------------------------------------------*/
    const customer_id = req.body.customer_id;
    const component_type = req.body.component_type;
    //const other_value = req.body.other_value;
    const oem_pn = req.body.oem_pn;
    const component_description = req.body.component_description;
    const size = req.body.size;
    const supplier_brand_id = req.body.supplier_brand_id;
    const color = req.body.color;
    const notes = req.body.notes;
    const uom = req.body.uom;
    const component_status = req.body.component_status;
    const owned_by = req.body.owned_by;
    const packaging_component = req.body.packaging_component;
    //const item_locaiton = req.body.item_locaiton;

    const sqlInsert = "INSERT INTO component_table (customer_id, component_type, oem_pn, component_description, size, supplier_brand_id, color, notes, uom, component_status, owned_by, packaging_component) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [customer_id, component_type, oem_pn, component_description, size, supplier_brand_id, color, notes, uom, component_status, owned_by, packaging_component], (err, result) => {
        console.log(result);
    });
    /*------------------------------------------ Component Page ------------------------------------------*/
});

app.listen(3001, () =>{
    console.log("running on port 3001");
});
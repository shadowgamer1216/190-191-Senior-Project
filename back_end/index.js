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

// PORT LISTEN
app.listen(3001, () =>{
    console.log("Running on port 3001");
});

// LATEST CONTACT ID - GET API <=
app.get("/api/getLatestContactId", (req, res) => {
    db.query ("SELECT MAX(contact_id) FROM contact_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// CONTACT INFO BY ID - GET API <=
app.get("/api/contact/:contact_id", (req, res) => {
    const contact_id = req.params.contact_id;
    db.query("SELECT * FROM contact_table WHERE contact_id = ?", [contact_id], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving contact data');
        } else {
            res.send(result[0]);
        }
    });
});

// CONTACT PAGE - POST API =>
app.post("/api/insertContact", (req, res)=> {
    const company_id = req.body.company_id;
    const company_name = req.body.company_name;
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
    const third_party_company = req.body.third_party_company;
    const notes = req.body.notes;


    const sqlInsert = "INSERT INTO contact_table (company_id, company_name, fname, lname, contact_type, title, dept, add_1, add_2, city, state_in_country, zip, country, phone, extension, fax, email, cell_phone_number, third_party_company, notes) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

    db.query(sqlInsert, [company_id, company_name, fname, lname, contact_type, title, dept, add_1, add_2, city, state_in_country, zip, country, phone, extension, fax, email, cell_phone_number, third_party_company, notes], (err, result)=>{
        console.log(result);
    
    });
});

// ORDER ID LIST - GET API <=
app.get("/api/getOrderIdList", (req, res) => {
    db.query ("SELECT order_id FROM order_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// LATEST ORDER ID - GET API <=
/*app.get("/api/getLatestOrderId", (req, res) => {
    db.query ("SELECT MAX(order_id) FROM order_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});*/

// ORDER INFO BY ID - GET API <=
app.get("/api/order/:order_id", (req, res) => {
    const order_id = req.params.order_id;
    db.query("SELECT * FROM order_table WHERE order_id = ?", [order_id], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving order data');
        } else {
            res.send(result[0]);
        }
    });
});

// ORDER PAGE - POST API =>
app.post("/api/insertOrder", (req, res) => {
    //go to back_end directory in terminal and type 'node index.js'
    const companyID = req.body.companyID;
    const companyName = req.body.companyName;

    const productID = req.body.productID;
    const productName = req.body.productName;
    const productType = req.body.productType;

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

    // Non-Inventory Items
    const nonItem1 = req.body.nonItem1;
    const nonItemInvoice1 = req.body.nonItemInvoice1;
    const nonItemPackingSlip1 = req.body.nonItemPackingSlip1;
    const nonItemQuantity1 = req.body.nonItemQuantity1;
    const nonItemUnitPrice1 = req.body.nonItemUnitPrice1;
    const nonItemTotalPrice1 = req.body.nonItemTotalPrice1;
    const nonItem2 = req.body.nonItem2;
    const nonItemInvoice2 = req.body.nonItemInvoice2;
    const nonItemPackingSlip2 = req.body.nonItemPackingSlip2;
    const nonItemQuantity2 = req.body.nonItemQuantity2;
    const nonItemUnitPrice2 = req.body.nonItemUnitPrice2;
    const nonItemTotalPrice2 = req.body.nonItemTotalPrice2;
    const nonItem3 = req.body.nonItem3;
    const nonItemInvoice3 = req.body.nonItemInvoice3;
    const nonItemPackingSlip3 = req.body.nonItemPackingSlip3;
    const nonItemQuantity3 = req.body.nonItemQuantity3;
    const nonItemUnitPrice3 = req.body.nonItemUnitPrice3;
    const nonItemTotalPrice3 = req.body.nonItemTotalPrice3;
    const nonItem4 = req.body.nonItem4;
    const nonItemInvoice4 = req.body.nonItemInvoice4;
    const nonItemPackingSlip4 = req.body.nonItemPackingSlip4;
    const nonItemQuantity4 = req.body.nonItemQuantity4;
    const nonItemUnitPrice4 = req.body.nonItemUnitPrice4;
    const nonItemTotalPrice4 = req.body.nonItemTotalPrice4;
    const nonItem5 = req.body.nonItem5;
    const nonItemInvoice5 = req.body.nonItemInvoice5;
    const nonItemPackingSlip5 = req.body.nonItemPackingSlip5;
    const nonItemQuantity5 = req.body.nonItemQuantity5;
    const nonItemUnitPrice5 = req.body.nonItemUnitPrice5;
    const nonItemTotalPrice5 = req.body.nonItemTotalPrice5;
    const nonItem6 = req.body.nonItem6;
    const nonItemInvoice6 = req.body.nonItemInvoice6;
    const nonItemPackingSlip6 = req.body.nonItemPackingSlip6;
    const nonItemQuantity6 = req.body.nonItemQuantity6;
    const nonItemUnitPrice6 = req.body.nonItemUnitPrice6;
    const nonItemTotalPrice6 = req.body.nonItemTotalPrice6;

    // Inventory Items
    const item1 = req.body.item1;
    const itemName1 = req.body.itemName1;
    const itemType1 = req.body.itemType1;
    const itemInvoice1 = req.body.itemInvoice1;
    const itemPackingSlip1 = req.body.itemPackingSlip1;
    const itemQuantity1 = req.body.itemQuantity1;
    const itemUnitPrice1 = req.body.itemUnitPrice1;
    const itemTotalPrice1 = req.body.itemTotalPrice1;
    const item2 = req.body.item2;
    const itemName2 = req.body.itemName2;
    const itemType2 = req.body.itemType2;
    const itemInvoice2 = req.body.itemInvoice2;
    const itemPackingSlip2 = req.body.itemPackingSlip2;
    const itemQuantity2 = req.body.itemQuantity2;
    const itemUnitPrice2 = req.body.itemUnitPrice2;
    const itemTotalPrice2 = req.body.itemTotalPrice2;
    const item3 = req.body.item3;
    const itemName3 = req.body.itemName3;
    const itemType3 = req.body.itemType3;
    const itemInvoice3 = req.body.itemInvoice3;
    const itemPackingSlip3 = req.body.itemPackingSlip3;
    const itemQuantity3 = req.body.itemQuantity3;
    const itemUnitPrice3 = req.body.itemUnitPrice3;
    const itemTotalPrice3 = req.body.itemTotalPrice3;

    // Billing Information
    const assemblyChargesQuantity = req.body.assemblyChargesQuantity;
    const assemblyChargesUnitPrice = req.body.assemblyChargesUnitPrice;
    const assemblyChargesTotalPrice = req.body.assemblyChargesTotalPrice;
    const printingChargesQuantity = req.body.printingChargesQuantity;
    const printingChargesUnitPrice = req.body.printingChargesUnitPrice;
    const printingChargesTotalPrice = req.body.printingChargesTotalPrice;
    const setupCharge = req.body.setupCharge;
    const numberOfScreens = req.body.numberOfScreens;
    const screensPrice = req.body.screensPrice;
    const subTotal = req.body.subTotal;
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
    const customerProvidedMaterial = req.body.customerProvidedMaterial;
    const customerMaterialETA = req.body.customerMaterialETA;
    const customerNotes = req.body.customerNotes;
    const vendorNotes = req.body.vendorNotes;
    const orderNotes = req.body.orderNotes;
    const orderStatus = req.body.orderStatus;
    
    db.query(
        "INSERT INTO order_table (company_id, company_name, product_id, product_name, product_type, salesperson, requestor, customer_contact, re_order, factory_order_quantity, custom_invoice, custom_packing_slip, custom_quantity, custom_unit_price, custom_total_price," + 
        " non_inventory_line_item1, non_inventory_invoice1, non_inventory_packing_slip1, non_inventory_quantity1, non_inventory_unit_price1, non_inventory_total_price1, non_inventory_line_item2, non_inventory_invoice2, non_inventory_packing_slip2, non_inventory_quantity2," +
        " non_inventory_unit_price2, non_inventory_total_price2, non_inventory_line_item3, non_inventory_invoice3, non_inventory_packing_slip3, non_inventory_quantity3, non_inventory_unit_price3, non_inventory_total_price3, non_inventory_line_item4, non_inventory_invoice4," +
        " non_inventory_packing_slip4, non_inventory_quantity4, non_inventory_unit_price4, non_inventory_total_price4, non_inventory_line_item5, non_inventory_invoice5, non_inventory_packing_slip5, non_inventory_quantity5, non_inventory_unit_price5, non_inventory_total_price5," +
        " non_inventory_line_item6, non_inventory_invoice6, non_inventory_packing_slip6, non_inventory_quantity6, non_inventory_unit_price6, non_inventory_total_price6, inventory_item1, inventory_item1_name, inventory_item1_type, inventory_invoice1, inventory_packing_slip1," +
        " inventory_quantity1, inventory_unit_price1, inventory_total_price1, inventory_item2, inventory_item2_name, inventory_item2_type, inventory_invoice2, inventory_packing_slip2, inventory_quantity2, inventory_unit_price2, inventory_total_price2, inventory_item3," +
        " inventory_item3_name, inventory_item3_type, inventory_invoice3, inventory_packing_slip3, inventory_quantity3, inventory_unit_price3, inventory_total_price3, assembly_charges_quantity, assembly_charges_unit_price, assembly_charges_total_price," +
        " date_code_printing_charges_quantity, date_code_printing_charges_unit_price, date_code_printing_charges_total_price, date_code_setup_charge, number_of_screens, art_manipulation, sub_total, tax_rate, tax, freight_charges, order_price_total, invoice_date," +
        " invoice_date_paid, invoice_notes, abs_sales_order_date, customer_order_date, customer_po_date, customer_po_number, credit_checked, days_turn, date_code_printing, customer_provided_material, customer_material_eta, customer_notes, vendor_notes, order_notes," +
        " order_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [companyID, companyName, productID, productName, productType, salesPerson, requestor, customerContact, reOrder, factoryOrderQuantity, customInvoice, customPackingSlip, customQuantity, customUnitPrice, customTotalPrice, nonItem1, nonItemInvoice1, nonItemPackingSlip1, nonItemQuantity1, nonItemUnitPrice1, nonItemTotalPrice1, nonItem2, nonItemInvoice2, nonItemPackingSlip2, nonItemQuantity2, nonItemUnitPrice2, nonItemTotalPrice2, nonItem3, nonItemInvoice3, nonItemPackingSlip3, nonItemQuantity3, nonItemUnitPrice3, nonItemTotalPrice3, nonItem4, nonItemInvoice4, nonItemPackingSlip4, nonItemQuantity4, nonItemUnitPrice4, nonItemTotalPrice4, nonItem5, nonItemInvoice5, nonItemPackingSlip5, nonItemQuantity5, nonItemUnitPrice5, nonItemTotalPrice5, nonItem6, nonItemInvoice6, nonItemPackingSlip6, nonItemQuantity6, nonItemUnitPrice6, nonItemTotalPrice6, item1, itemName1, itemType1, itemInvoice1, itemPackingSlip1, itemQuantity1, itemUnitPrice1, itemTotalPrice1, item2, itemName2, itemType2,  itemInvoice2, itemPackingSlip2, itemQuantity2, itemUnitPrice2, itemTotalPrice2, item3, itemName3, itemType3, itemInvoice3, itemPackingSlip3, itemQuantity3, itemUnitPrice3, itemTotalPrice3, assemblyChargesQuantity, assemblyChargesUnitPrice, assemblyChargesTotalPrice, printingChargesQuantity, printingChargesUnitPrice, printingChargesTotalPrice, setupCharge, numberOfScreens, screensPrice, subTotal, taxRate, tax, freightCharges, priceTotal, invoiceDate, invoiceDatePaid, invoiceNotes,ABSOrder, customerOrder, customerPODate, customerPONumber, creditChecked, daysTurn, dateCodePrinting, customerProvidedMaterial, customerMaterialETA, customerNotes, vendorNotes, orderNotes, orderStatus], (err, result) => {
            console.log(result);
        }
    );
});

// PRODUCT TABLE INFO - GET API <=
app.get("/api/getProductData", (req, res) => {
    //db.query ("SELECT MAX(product_id), product_category, oem_product_id, product_title FROM product_table", (err, result) =>{
    db.query ("SELECT product_id, customer_id, product_title, product_category FROM product_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// PRODUCT TABLE INFO - GET API <=
app.get("/api/getProductInfo", (req, res) => {
    db.query ("SELECT product_id, product_category, oem_product_id, product_title FROM product_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});


// LATEST PRODUCT ID - GET API <=
app.get("/api/getLatestProductId", (req, res) => {
    db.query ("SELECT MAX(product_id) FROM product_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// COMPANY TABLE INFO - GET API <=
app.get("/api/getCompanyData", (req, res) => {
    db.query ("SELECT company_id, company_name FROM company_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// COMPONENT TABLE INFO - GET API <=
app.get("/api/getComponentData", (req, res) => {
    db.query ("SELECT component_id, customer_id, title, component_type FROM component_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

app.get("/api/getSearchCompany", (req, res) =>{
    const company_id = req.query.company_id;
    const company_name = req.query.company_name;
    let query = "SELECT * FROM company_table";
    let queryParams = [];

    if (company_id) {
        query += " WHERE company_id LIKE ?";
        queryParams.push(`%${company_id}%`);
    }
    if (company_name) {
        if (queryParams.length > 0) {
            query += " AND company_name LIKE ?";
        } else {
            query += " WHERE company_name LIKE ?";
        }
        queryParams.push(`%${company_name}%`);
    }

    db.query(query, queryParams, (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

app.get("/api/getSearchContact", (req, res) =>{
    const company_id = req.query.company_id;
    const company_name = req.query.company_name;
    let query = "SELECT * FROM contact_table";
    let queryParams = [];

    if (company_id) {
        query += " WHERE company_id LIKE ?";
        queryParams.push(`%${company_id}%`);
    }
    if (company_name) {
        if (queryParams.length > 0) {
            query += " AND company_name LIKE ?";
        } else {
            query += " WHERE company_name LIKE ?";
        }
        queryParams.push(`%${company_name}%`);
    }

    db.query(query, queryParams, (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

app.get("/api/getSearchComponent", (req, res) =>{
    const component_id = req.query.component_id;
    const customer_id = req.query.customer_id;
    const component_type = req.query.component_type;
    const title = req.query.title;
    let query = "SELECT * FROM component_table";
    let queryParams = [];

    if (component_id) {
        query += " WHERE component_id LIKE ?";
        queryParams.push(`%${component_id}%`);
    }
    if (customer_id) {
        if (queryParams.length > 0) {
            query += " AND customer_id LIKE ?";
        } else {
            query += " WHERE customer_id LIKE ?";
        }
        queryParams.push(`%${customer_id}%`);
    }
    if (component_type) {
        if (queryParams.length > 0) {
            query += " AND component_type LIKE ?";
        } else {
            query += " WHERE component_type LIKE ?";
        }
        queryParams.push(`%${component_type}%`);
    }
    if (title) {
        if (queryParams.length > 0) {
            query += " AND title LIKE ?";
        } else {
            query += " WHERE title LIKE ?";
        }
        queryParams.push(`%${title}%`);
    }

    db.query(query, queryParams, (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

app.get("/api/getSearchProduct", (req, res) =>{
    const product_id = req.query.product_id;
    const customer_id = req.query.customer_id;
    const product_type = req.query.product_category;
    const product_title = req.query.product_title;
    let query = "SELECT * FROM product_table";
    let queryParams = [];

    if (product_id) {
        query += " WHERE product_id LIKE ?";
        queryParams.push(`%${product_id}%`);
    }
    if (customer_id) {
        if (queryParams.length > 0) {
            query += " AND customer_id LIKE ?";
        } else {
            query += " WHERE customer_id LIKE ?";
        }
        queryParams.push(`%${customer_id}%`);
    }
    if (product_type) {
        if (queryParams.length > 0) {
            query += " AND product_type LIKE ?";
        } else {
            query += " WHERE product_type LIKE ?";
        }
        queryParams.push(`%${product_type}%`);
    }
    if (title) {
        if (queryParams.length > 0) {
            query += " AND product_title LIKE ?";
        } else {
            query += " WHERE product_title LIKE ?";
        }
        queryParams.push(`%${product_title}%`);
    }

    db.query(query, queryParams, (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

app.get("/api/getSearchLocation", (req, res) =>{
    const location_id = req.query.location_id;
    const location_type = req.query.location_type;
    const item_id = req.query.item_id;
    const physical_location = req.query.physical_location;
    let query = "SELECT * FROM location_table";
    let queryParams = [];

    if (location_id) {
        query += " WHERE location_id LIKE ?";
        queryParams.push(`%${location_id}%`);
    }
    if (location_type) {
        if (queryParams.length > 0) {
            query += " AND location_type LIKE ?";
        } else {
            query += " WHERE location_type LIKE ?";
        }
        queryParams.push(`%${location_type}%`);
    }
    if (item_id) {
        if (queryParams.length > 0) {
            query += " AND item_id LIKE ?";
        } else {
            query += " WHERE item_id LIKE ?";
        }
        queryParams.push(`%${item_id}%`);
    }
    if (physical_location) {
        if (queryParams.length > 0) {
            query += " AND physical_location LIKE ?";
        } else {
            query += " WHERE physical_location LIKE ?";
        }
        queryParams.push(`%${physical_location}%`);
    }

    db.query(query, queryParams, (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

app.get("/api/getItemCheckIn", (req, res) =>{
    const customer_id = req.query.customer_id;
    const item_id = req.query.item_id;
    let query = "SELECT * FROM item_check_in_table";
    let queryParams = [];

    if (customer_id) {
        query += " WHERE customer_id LIKE ?";
        queryParams.push(`%${customer_id}%`);
    }
    if (item_id) {
        if (queryParams.length > 0) {
            query += " AND item_id LIKE ?";
        } else {
            query += " WHERE item_id LIKE ?";
        }
        queryParams.push(`%${item_id}%`);
    }

    db.query(query, queryParams, (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// DELETE COMPANY BY ID API
app.delete("/api/company/:company_id", (req, res) => {
    const company_id = req.params.company_id;
    db.query("DELETE FROM company_table WHERE company_id = ?", [company_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error removing company.");
        } else {
            res.status(200).send("Company removed successfully.");
        }
    });
});

// DELETE CONTACT BY ID API
app.delete("/api/contact/:contact_id", (req, res) => {
    const contact_id = req.params.contact_id;
    db.query("DELETE FROM contact_table WHERE contact_id = ?", [contact_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error removing contact.");
        } else {
            res.status(200).send("Contact removed successfully.");
        }
    });
});

// DELETE COMPONENT BY ID API
app.delete("/api/component/:component_id", (req, res) => {
    const component_id = req.params.component_id;
    db.query("DELETE FROM component_table WHERE component_id = ?", [component_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error removing component.");
        } else {
            res.status(200).send("Component removed successfully.");
        }
    });
});

// DELETE PRODUCT BY ID API
app.delete("/api/product/:product_id", (req, res) => {
    const product_id = req.params.product_id;
    db.query("DELETE FROM product_table WHERE product_id = ?", [product_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error removing product.");
        } else {
            res.status(200).send("Company removed successfully.");
        }
    });
});

// DELETE LOCATION BY ID API
app.delete("/api/location/:location_id", (req, res) => {
    const location_id = req.params.location_id;
    db.query("DELETE FROM location_table WHERE location_id = ?", [location_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error removing location.");
        } else {
            res.status(200).send("Component removed successfully.");
        }
    });
});

// DELETE ITEM CHECK IN BY ID API
app.delete("/api/itemcheckin/:customer_id", (req, res) => {
    const customer_id = req.params.customer_id;
    db.query("DELETE FROM location_table WHERE customer_id = ?", [customer_id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error removing item.");
        } else {
            res.status(200).send("Item removed successfully.");
        }
    });
});

// PRODUCT INFO BY ID - GET API <=
app.get("/api/product/:product_id", (req, res) => {
    const product_id = req.params.product_id;
    db.query("SELECT * FROM product_table WHERE product_id = ?", [product_id], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving product data');
        } else {
            res.send(result[0]);
        }
    });
});

// PRODUCT PAGE - POST API =>
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
    var colorCount = 0;
    var colors = [null, null, null, null, null, null, null, null];
    for(let i=0; i<req.body.numOfColors; i++) 
    {
        colors[i] = req.body.colorList[i].color;
        colorCount = i;
    }
    if(colors[0] !== "") { colorCount += 1; }
    if(colors[0] === "") { colors[0] = null }
    const colorNotes = req.body.color_notes;
    var components = [null, null, null, null, null, null, null, null, null, null, null, null];
    for(let i=0; i<req.body.numOfComponents; i++) 
    {
        components[i] = req.body.componentList[i].component;
    }
    if(components[0] === "") { components[0] = null }
    var componentNames = [];
    var componentTypes = [];
    for(let i=0; i<req.body.numOfComponents; i++) 
    {
        const nameString = req.body.componentNames[i].name;
        const emDashIndex = nameString.indexOf("—"); // find index of em dash
        const openParenIndex = nameString.indexOf("("); // find index of opening parenthesis
        const closeParenIndex = nameString.indexOf(")"); // find index of closing parenthesis

        const componentName = nameString.substring(emDashIndex + 2, openParenIndex - 1); // extract name
        const componentType = nameString.substring(openParenIndex + 1, closeParenIndex); // extract type

        componentNames.push(componentName);
        componentTypes.push(componentType);
    }
    if(componentNames[0] === "") { componentNames[0] = null }
    const packagingNotes = req.body.packaging_notes;
    const productNotes = req.body.product_notes;
    const productStatus = req.body.product_status;

    const sqlInsert = "INSERT INTO product_table (old_abs_id, customer_id, product_category, oem_product_id, product_title, product_desc, product_repl, master_format, master_received, master_label, master_capacity, master_loc, films_loc, date_code_required, date_code_position, inner_hub, inner_hub_position, floodcoat, rimage_print, num_colors, color_1, color_2, color_3, color_4, color_5, color_6, color_7, color_8, color_notes, component_1, component_2, component_3, component_4, component_5, component_6, component_7, component_8, component_9, component_10, component_11, component_12, component_name1, component_name2, component_name3, component_name4, component_name5, component_name6, component_name7, component_name8, component_name9, component_name10, component_name11, component_name12, component_type1, component_type2, component_type3, component_type4, component_type5, component_type6, component_type7, component_type8, component_type9, component_type10, component_type11, component_type12, packaging_notes, product_notes, product_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [oldId, customerId, productCategory, oemId, productTitle, productDesc, productRepl, masterFormat, masterReceived, masterLabel, masterCapacity, masterLoc, filmsLoc, dateCodeRequired, dateCodePosition, innerHub, innerHubPosition, floodCoat, rimagePrint, colorCount, colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], colors[6], colors[7], colorNotes, components[0], components[1], components[2], components[3], components[4], components[5], components[6], components[7], components[8], components[9], components[10], components[11], componentNames[0], componentNames[1], componentNames[2], componentNames[3], componentNames[4], componentNames[5], componentNames[6], componentNames[7], componentNames[8], componentNames[9], componentNames[10], componentNames[11], componentTypes[0], componentTypes[1], componentTypes[2], componentTypes[3], componentTypes[4], componentTypes[5], componentTypes[6], componentTypes[7], componentTypes[8], componentTypes[9], componentTypes[10], componentTypes[11], packagingNotes, productNotes, productStatus], (err, result) => {
        console.log(result);
    });
});

// LOCATION PAGE - POST API =>
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
    const sqlInsert2 = "INSERT INTO location_history (location_id, item_id, qty) VALUES (?,?,?)";
    db.query(sqlInsert2, [location_id, item_id, qty], (err, result) =>{
        console.log(result);
    });
});

app.get("/api/getLocationHistory", (req, res) =>{
    const location_id = req.body.location_id;
    const item_id = req.body.item_id;
    const qty = req.body.qty;
    //const date = req.body.date;

    db.query("SELECT location_id, item_id, qty, date_added FROM location_history", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// LOCATION INFO BY ID - GET API <=
app.get("/api/location/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM location_table WHERE id = ?", [id], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving location data');
        } else {
            res.send(result[0]);
        }
    });
});

// LATEST LOCATION ID - GET API <=
app.get("/api/getLatestLocationId", (req, res) => {
    db.query ("SELECT MAX(id) FROM location_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// ITEM CHECKIN TABLE PAGE - POST API =>
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

// ITEM INFO BY ID - GET API <=
app.get("/api/itemCheckIn/:id", (req, res) => {
    const id = req.params.id;
    db.query("SELECT * FROM item_check_in_table WHERE id = ?", [id], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving item check in data');
        } else {
            res.send(result[0]);
        }
    });
});

// LATEST ITEM CHECK IN ID - GET API <=
app.get("/api/getLatestItemCheckInId", (req, res) => {
    db.query ("SELECT MAX(id) FROM item_check_in_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// LATEST COMPONENT ID - GET API <=
app.get("/api/getLatestComponentId", (req, res) => {
    db.query ("SELECT MAX(component_id) FROM component_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// COMPONENT INFO BY ID - GET API <=
app.get("/api/component/:component_id", (req, res) => {
    const component_id = req.params.component_id;
    db.query("SELECT * FROM component_table WHERE component_id = ?", [component_id], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving component data');
        } else {
            res.send(result[0]);
        }
    });
});

// COMPONENT PAGE - POST API =>
app.post("/api/insertComponent", (req, res) =>{
    /*------------------------------------------ Component Page ------------------------------------------*/
    const customer_id = req.body.customer_id;
    const component_type = req.body.component_type;
    const title = req.body.title;
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

    const sqlInsert = "INSERT INTO component_table (customer_id, component_type, title, oem_pn, component_description, size, supplier_brand_id, color, notes, uom, component_status, owned_by, packaging_component) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [customer_id, component_type, title, oem_pn, component_description, size, supplier_brand_id, color, notes, uom, component_status, owned_by, packaging_component], (err, result) => {
        console.log(result);
    });
    /*------------------------------------------ Component Page ------------------------------------------*/
});

// LATEST SHIPPING ID - GET API <=
app.get("/api/getLatestShippingId", (req, res) => {
    db.query ("SELECT MAX(shipping_id) FROM shipping_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// SHIPPING INFO BY ID - GET API <=
app.get("/api/shipping/:shipping_id", (req, res) => {
    const shipping_id = req.params.shipping_id;
    db.query("SELECT * FROM shipping_table WHERE shipping_id = ?", [shipping_id], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving shipping data');
        } else {
            res.send(result[0]);
        }
    });
});

// SHIPPING TABLE INFO - GET API <=
app.get("/api/getShippingData", (req, res) => {
    db.query ("SELECT shipping_id, company_name FROM shipping_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// SHIPPING PAGE - POST API =>
app.post("/api/insertShipping", (req, res) =>{
    const order_id = req.body.order_id;
    const company_name = req.body.company_name;
    const contact_name = req.body.contact_name;
    const add1 = req.body.add1;
    const add2 = req.body.add2;
    const city = req.body.city;
    const country_state = req.body.state;
    const zip = req.body.zip;
    const province = req.body.province;
    const country = req.body.country;
    const phone = req.body.phone;
    const fax = req.body.fax;
    const email = req.body.email;
    const fedex = req.body.fax;
    const ups = req.body.ups;
    const courier_willcall = req.body.courier_willcall;
    const abs = req.body.abs;
    const other_ship_method = req.body.other_ship_method;
    const payment_type = req.body.payment_type;
    const account_number = req.body.account_number;
    const request_ship_date = req.body.request_ship_date;
    const request_ship_time = req.body.request_ship_time;
    const arrival_ship_date = req.body.arrival_ship_date;
    const arrival_ship_time = req.body.arrival_ship_time;
    const fob = req.body.fob;
    const notes = req.body.notes;

    const sqlInsert =  "INSERT INTO shipping_table (order_id, company_name, contact_name, add1, add2, city, country_state, zip, province, country, phone, fax, email, fedex, ups, courier_willcall, abs, other_ship_method, payment_type, account_number, request_ship_date, request_ship_time, arrival_ship_date, arrival_ship_time, fob, notes) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [order_id, company_name, contact_name, add1, add2, city, country_state, zip, province, country, phone, fax, email, fedex, ups, courier_willcall, abs, other_ship_method, payment_type, account_number, request_ship_date, request_ship_time, arrival_ship_date, arrival_ship_time, fob, notes], (err, result) => {
        console.log(result);
    })
});

// COMPANY INFO BY ID - GET API <=
app.get("/api/company/:company_id", (req, res) => {
    const company_id = req.params.company_id;
    db.query("SELECT * FROM company_table WHERE company_id = ?", [company_id], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving company data');
        } else {
            res.send(result[0]);
        }
    });
});

// COMPANY PAGE - POST API =>
//--------------------Company page----------------------
app.post("/api/insertCompany" , (req, res) =>{

    const company_id = req.body.company_id;
    const company_name  = req.body.company_name;
    const addr1 = req.body.addr1;
    const addr2 = req.body.addr2;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const zip = req.body.zip;
    const salesperson = req.body.salesperson;
    const phone = req.body.phone;
    const extension = req.body.extension;
    const fax = req.body.fax;
    const email = req.body.email;
    const web_addr = req.body.web_addr;
    const tax_id = req.body.tax_id;
    const resale = req.body.resale;
    const status = req.body.status;
    const customer = req.body.customer;
    const vendor = req.body.vendor;
    const other = req.body.other;
    const notes = req.body.notes;


     const sqlInsert = "INSERT INTO company_table (company_id, company_name, addr1, addr2, city, state, country, zip, salesperson, phone, extension, fax, email, web_addr, tax_id, resale, status, customer, vendor, other, notes) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
     db.query(sqlInsert, [company_id, company_name, addr1, addr2, city, state, country, zip, salesperson, phone, extension, fax, email, web_addr, tax_id, resale, status, customer, vendor, other, notes], (err, result) => {
         console.log(result);
     });
});
//----------------end of Company page------------------


app.get("/api/orders", (req, res) =>{
    const customer_id = req.body.customer_id;
    const company = req.body.company;

        db.query("SELECT * FROM orders", (err, result) =>{
            if (err) throw err;
            res.send(result);
        });
    
});
app.post("/api/viewonly", (req, res) => {
    const user = req.body.user
    const viewOnly = req.body.viewOnly;
    var query = "INSERT INTO users (username, viewonly) VALUES (?,?)";
    db.query(query, [user, viewOnly], (err, result) =>{
        if (err) throw err;
    });
});

app.get("/api/getuser/:user", (req, res) => {
    const user = req.params.user
    var query = "SELECT * FROM users WHERE username = '" + user + "'";
    db.query( query, (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});


app.get("/api/packingSlip", (req, res) =>{
        db.query("SELECT * FROM packing_slip_table", (err, result) =>{
            if (err) throw err;
            res.send(result);
        });
    
});

// PACKING SLIP TABLE PAGE - POST API =>
app.post("/api/insertPackingSlip" , (req, res) =>{
    const company_name = req.body.company_name;
    const contact_name = req.body.contact_name;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const country = req.body.country;
    const order_id = req.body.order_id;
    const ship_date = req.body.ship_date;
    const order_date = req.body.order_date;
    const po = req.body.po;
    const ship_via = req.body.ship_via;
    const saturday_delivery = req.body.saturday_delivery;
    const notes = req.body.notes;
    const abspn = req.body.abspn;
    const product_title = req.body.product_title;
    const quantity = req.body.quantity;
    const oem = req.body.oem;
    const packing_slip_id = req.body.packing_slip_id;

    const sqlInsert = "INSERT INTO packing_slip_table (company_name, contact_name, address, city, state, zip, country, order_id, ship_date, order_date, po, ship_via, saturday_delivery, notes, abspn, product_title, quantity, oem, packing_slip_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [company_name, contact_name, address, city, state, zip, country, order_id, ship_date, order_date, po, ship_via, saturday_delivery, notes, abspn, product_title, quantity, oem, packing_slip_id], (err, result) => {
        console.log(result);
    });
});

// LATEST PACKING SLIP ID - GET API <=
app.get("/api/getLatestPackingSlipId", (req, res) => {
    db.query ("SELECT MAX(packing_slip_master_id) FROM packing_slip_table", (err, result) =>{
        if (err) throw err;
        res.send(result);
    });
});

// PACKING SLIP INFO BY ID - GET API <=
app.get("/api/packingSlip/:packing_slip_master_id", (req, res) => {
    const packing_slip_master_id = req.params.packing_slip_master_id;
    db.query("SELECT * FROM packing_slip_table WHERE packing_slip_master_id = ?", [packing_slip_master_id], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving packing slip data');
        } else {
            res.send(result[0]);
        }
    });
});

// SHIPPING INFO BY COMPANY NAME - GET API <=
app.get("/api/shippingDetails/:company_name", (req, res) => {
    const company_name = req.params.company_name;
    db.query("SELECT * FROM shipping_table WHERE company_name = ?", [company_name], (err, result) =>{
        if (err) {
            console.error(err);
            res.status(500).send('Error shipping slip data');
        } else {
            res.send(result[0]);
        }
    });
});
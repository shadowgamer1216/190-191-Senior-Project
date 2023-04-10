#CREATE SCHEMA 191_database; /* schema for entire DB */

DROP TABLE IF EXISTS contact_table;
CREATE TABLE contact_table (
    contact_id INT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(8) NOT NULL,
    company VARCHAR(128) NOT NULL,
    fname VARCHAR(64) DEFAULT NULL,
    lname VARCHAR(64) DEFAULT NULL,
    contact_type VARCHAR(64) DEFAULT NULL,
    title VARCHAR(64) DEFAULT NULL,
    dept VARCHAR(128) DEFAULT NULL,
    add_1 VARCHAR(64) DEFAULT NULL,
    add_2 VARCHAR(64) DEFAULT NULL,
    city VARCHAR(64) DEFAULT NULL,
    state_in_country VARCHAR(4) DEFAULT NULL,
    zip VARCHAR(16) DEFAULT NULL,
    country VARCHAR(128) DEFAULT NULL,
    phone VARCHAR(15) DEFAULT NULL,
    extension VARCHAR(5) DEFAULT NULL,
    cell_phone_number VARCHAR(15) DEFAULT NULL,
    third_party_company VARCHAR(128) DEFAULT '',
    fax VARCHAR(15) DEFAULT NULL,
    email VARCHAR(128) DEFAULT NULL,
    notes TEXT,
    PRIMARY KEY (contact_id)
	#PRIMARY KEY  (contact_id),
	#FOREIGN KEY (company) REFERENCES company_table(company_name)
);

DROP TABLE IF EXISTS location_table;
CREATE TABLE location_table (
    id INT NOT NULL AUTO_INCREMENT,
    location_id VARCHAR(64) NOT NULL DEFAULT '',
    location_type VARCHAR(64) DEFAULT NULL,
    item_id INT DEFAULT NULL,
    qty INT DEFAULT '0',
    item_owner VARCHAR(64) DEFAULT NULL,
    physical_location VARCHAR(64) DEFAULT NULL,
    notes TEXT,
    PRIMARY KEY (id),
    KEY location_id (location_id),
    KEY item_id (item_id)
);

DROP TABLE IF EXISTS location_history;
create table location_history(
	id INT NOT NULL AUTO_INCREMENT,
	location_id VARCHAR(20) NOT NULL DEFAULT '',
	item_id INT NOT NULL DEFAULT '0',
	qty INT NOT NULL DEFAULT '0',
	date_added DATE NOT NULL DEFAULT (CURRENT_DATE),
	KEY id (id)
);

DROP TABLE IF EXISTS item_check_in_table;
CREATE TABLE item_check_in_table (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(4) DEFAULT NULL,
    item_id VARCHAR(25) DEFAULT NULL,
    mfr_pn VARCHAR(25) DEFAULT NULL,
    description VARCHAR(100) DEFAULT NULL,
    carrier VARCHAR(50) DEFAULT NULL,
    quantity VARCHAR(25) DEFAULT NULL,
    disposition VARCHAR(100) DEFAULT NULL,
    signed_for_by VARCHAR(25) DEFAULT NULL,
    date_in DATETIME DEFAULT NULL,
    date_complete DATETIME DEFAULT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS component_table;
CREATE TABLE component_table (
    customer_id VARCHAR(25) NOT NULL DEFAULT '',
    component_type VARCHAR(25) DEFAULT NULL,
    oem_pn VARCHAR(50) DEFAULT NULL,
    component_description TEXT,
    size VARCHAR(25) DEFAULT NULL,
    supplier_brand_id VARCHAR(25) DEFAULT NULL,
    color VARCHAR(25) DEFAULT NULL,
    notes TEXT,
    uom VARCHAR(25) DEFAULT NULL,
    component_status VARCHAR(25) DEFAULT NULL,
    owned_by INT DEFAULT NULL,
    packaging_component INT DEFAULT NULL,
    PRIMARY KEY (customer_id)
);

DROP TABLE IF EXISTS product_table;
CREATE TABLE product_table (
    product_id INT NOT NULL AUTO_INCREMENT,
    old_abs_id VARCHAR(50) DEFAULT NULL,
    customer_id VARCHAR(50) NOT NULL,
    product_category VARCHAR(50) DEFAULT NULL,
    oem_product_id VARCHAR(50) DEFAULT NULL,
    product_title VARCHAR(200) DEFAULT NULL,
    product_desc TEXT,
    product_repl VARCHAR(50) DEFAULT NULL,
    master_format VARCHAR(50) DEFAULT NULL,
    master_received DATE DEFAULT NULL,
    master_label VARCHAR(50) DEFAULT NULL,
    master_capacity VARCHAR(50) DEFAULT NULL,
    master_loc VARCHAR(50) DEFAULT NULL,
    films_loc VARCHAR(50) DEFAULT NULL,
    date_code_required INT DEFAULT NULL,
    date_code_position VARCHAR(50) DEFAULT NULL,
    inner_hub VARCHAR(50) DEFAULT NULL,
    inner_hub_position VARCHAR(50) DEFAULT NULL,
    floodcoat INT DEFAULT NULL,
    rimage_print INT DEFAULT NULL,
    num_colors INT DEFAULT NULL,
    color_1 VARCHAR(50) DEFAULT NULL,
    color_2 VARCHAR(50) DEFAULT NULL,
    color_3 VARCHAR(50) DEFAULT NULL,
    color_4 VARCHAR(50) DEFAULT NULL,
    color_5 VARCHAR(50) DEFAULT NULL,
    color_6 VARCHAR(50) DEFAULT NULL,
    color_7 VARCHAR(50) DEFAULT NULL,
    color_8 VARCHAR(50) DEFAULT NULL,
    color_notes TEXT,
    component_1 VARCHAR(50) DEFAULT NULL,
    component_2 VARCHAR(50) DEFAULT NULL,
    component_3 VARCHAR(50) DEFAULT NULL,
    component_4 VARCHAR(50) DEFAULT NULL,
    component_5 VARCHAR(50) DEFAULT NULL,
    component_6 VARCHAR(50) DEFAULT NULL,
    component_7 VARCHAR(50) DEFAULT NULL,
    component_8 VARCHAR(50) DEFAULT NULL,
    component_9 VARCHAR(50) DEFAULT NULL,
    component_10 VARCHAR(50) DEFAULT NULL,
    component_11 VARCHAR(50) DEFAULT NULL,
    component_12 VARCHAR(50) DEFAULT NULL,
    packaging_notes TEXT,
    product_notes TEXT,
    product_status VARCHAR(25) DEFAULT NULL,
    PRIMARY KEY (product_id),
    KEY (customer_id)
);

DROP TABLE IF EXISTS order_table;
CREATE TABLE order_table (
    product_id INT NOT NULL AUTO_INCREMENT,
    contact_id INT DEFAULT NULL,
    salesperson VARCHAR(64) DEFAULT NULL,
    requestor VARCHAR(64) DEFAULT NULL,
    customer_contact VARCHAR(64) DEFAULT NULL,
    re_order BOOL DEFAULT NULL,
    factory_order_quantity INT DEFAULT NULL,
    custom_invoice BOOL DEFAULT NULL,
    custom_packing_slip BOOL DEFAULT NULL,
    custom_quantity INT DEFAULT NULL,
    custom_unit_price FLOAT DEFAULT NULL,
    custom_total_price FLOAT DEFAULT NULL,
    assembly_charges_quantity INT DEFAULT NULL,
    assembly_charges_unit_price FLOAT DEFAULT NULL,
    assembly_charges_total_price FLOAT DEFAULT NULL,
    date_code_printing_charges_quantity INT DEFAULT NULL,
    date_code_printing_charges_unit_price FLOAT DEFAULT NULL,
    date_code_printing_charges_total_price FLOAT DEFAULT NULL,
    date_code_setup_charge FLOAT DEFAULT NULL,
    number_of_screens INT DEFAULT NULL,
    art_manipulation FLOAT DEFAULT NULL,
    sub_total FLOAT DEFAULT NULL,
    taxable BOOL DEFAULT NULL,
    tax_rate FLOAT DEFAULT NULL,
    tax FLOAT DEFAULT NULL,
    freight_charges FLOAT DEFAULT NULL,
    order_price_total FLOAT DEFAULT NULL,
    invoice_date VARCHAR(64) DEFAULT NULL,
    invoice_date_paid VARCHAR(64) DEFAULT NULL,
    invoice_notes TEXT DEFAULT NULL,
    abs_sales_order_date VARCHAR(64) DEFAULT NULL,
    customer_order_date VARCHAR(64) DEFAULT NULL,
    customer_po_date VARCHAR(64) DEFAULT NULL,
    customer_po_number INT DEFAULT NULL,
    credit_checked BOOL DEFAULT NULL,
    days_turn INT DEFAULT NULL,
    date_code_printing VARCHAR(64) DEFAULT NULL,
    assembly_by VARCHAR(128) DEFAULT NULL,
    disc_manufactured_by VARCHAR(128) DEFAULT NULL,
    cd_dvd_brand VARCHAR(128) DEFAULT NULL,
    disc_provided_by VARCHAR(128) DEFAULT NULL,
    customer_provided_material TEXT,
    customer_material_eta VARCHAR(64) DEFAULT NULL,
    customer_notes TEXT DEFAULT NULL,
    vendor_notes TEXT DEFAULT NULL,
    order_notes TEXT DEFAULT NULL,
    order_status VARCHAR(128) DEFAULT NULL,
    PRIMARY KEY (product_id),
    KEY (contact_id)
);

DROP TABLE IF EXISTS order_nonItem;
CREATE TABLE order_nonItem (
    product_id INT NOT NULL AUTO_INCREMENT,
    contact_id INT DEFAULT NULL,
    non_inventory_line_item1 VARCHAR(256) DEFAULT NULL,
    non_inventory_invoice1 BOOL DEFAULT NULL,
    non_inventory_packing_slip1 BOOL DEFAULT NULL,
    non_inventory_quantity1 INT DEFAULT NULL,
    non_inventory_unit_price1 FLOAT DEFAULT NULL,
    non_inventory_total_price1 FLOAT DEFAULT NULL,
    non_inventory_line_item2 VARCHAR(256) DEFAULT NULL,
    non_inventory_invoice2 BOOL DEFAULT NULL,
    non_inventory_packing_slip2 BOOL DEFAULT NULL,
    non_inventory_quantity2 INT DEFAULT NULL,
    non_inventory_unit_price2 FLOAT DEFAULT NULL,
    non_inventory_total_price2 FLOAT DEFAULT NULL,
    non_inventory_line_item3 VARCHAR(256) DEFAULT NULL,
    non_inventory_invoice3 BOOL DEFAULT NULL,
    non_inventory_packing_slip3 BOOL DEFAULT NULL,
    non_inventory_quantity3 INT DEFAULT NULL,
    non_inventory_unit_price3 FLOAT DEFAULT NULL,
    non_inventory_total_price3 FLOAT DEFAULT NULL,
    non_inventory_line_item4 VARCHAR(256) DEFAULT NULL,
    non_inventory_invoice4 BOOL DEFAULT NULL,
    non_inventory_packing_slip4 BOOL DEFAULT NULL,
    non_inventory_quantity4 INT DEFAULT NULL,
    non_inventory_unit_price4 FLOAT DEFAULT NULL,
    non_inventory_total_price4 FLOAT DEFAULT NULL,
    non_inventory_line_item5 VARCHAR(256) DEFAULT NULL,
    non_inventory_invoice5 BOOL DEFAULT NULL,
    non_inventory_packing_slip5 BOOL DEFAULT NULL,
    non_inventory_quantity5 INT DEFAULT NULL,
    non_inventory_unit_price5 FLOAT DEFAULT NULL,
    non_inventory_total_price5 FLOAT DEFAULT NULL,
    non_inventory_line_item6 VARCHAR(256) DEFAULT NULL,
    non_inventory_invoice6 BOOL DEFAULT NULL,
    non_inventory_packing_slip6 BOOL DEFAULT NULL,
    non_inventory_quantity6 INT DEFAULT NULL,
    non_inventory_unit_price6 FLOAT DEFAULT NULL,
    non_inventory_total_price6 FLOAT DEFAULT NULL,
    PRIMARY KEY (product_id),
    KEY (contact_id)
);

DROP TABLE IF EXISTS order_item;
CREATE TABLE order_item (
    product_id INT NOT NULL AUTO_INCREMENT,
    contact_id INT DEFAULT NULL,
    inventory_item1 VARCHAR(256) DEFAULT NULL,
    inventory_invoice1 BOOL DEFAULT NULL,
    inventory_packing_slip1 BOOL DEFAULT NULL,
    inventory_quantity1 INT DEFAULT NULL,
    inventory_unit_price1 FLOAT DEFAULT NULL,
    inventory_total_price1 FLOAT DEFAULT NULL,
    inventory_item2 VARCHAR(256) DEFAULT NULL,
    inventory_invoice2 BOOL DEFAULT NULL,
    inventory_packing_slip2 BOOL DEFAULT NULL,
    inventory_quantity2 INT DEFAULT NULL,
    inventory_unit_price2 FLOAT DEFAULT NULL,
    inventory_total_price2 FLOAT DEFAULT NULL,
    inventory_item3 VARCHAR(256) DEFAULT NULL,
    inventory_invoice3 BOOL DEFAULT NULL,
    inventory_packing_slip3 BOOL DEFAULT NULL,
    inventory_quantity3 INT DEFAULT NULL,
    inventory_unit_price3 FLOAT DEFAULT NULL,
    inventory_total_price3 FLOAT DEFAULT NULL,
    PRIMARY KEY (product_id),
    KEY (contact_id)
);

DROP TABLE IF EXISTS shipping_table;
CREATE TABLE shipping_table (
    company_name VARCHAR(128) NOT NULL,
    contact_name VARCHAR(50) NOT NULL,
    add1 VARCHAR(50) NOT NULL,
    add2 VARCHAR(50) DEFAULT NULL,
    city VARCHAR(50) NOT NULL,
    country_state VARCHAR(15) NOT NULL,
    zip INT NOT NULL,
    province VARCHAR(50) DEFAULT NULL,
    country VARCHAR(50) NOT NULL,
    phone INT NOT NULL,
    fax VARCHAR(20) DEFAULT NULL,
    email VARCHAR(50) NOT NULL,
    fedex VARCHAR(10) DEFAULT NULL,
    ups VARCHAR(10) DEFAULT NULL,
    courier_willcall VARCHAR(10) DEFAULT NULL,
    abs VARCHAR(10) DEFAULT NULL,
    other_ship_method VARCHAR(10) DEFAULT NULL,
    payment_type VARCHAR(10),
    account_number VARCHAR(50),
    request_ship_date DATE,
    request_ship_time VARCHAR(15),
    arrival_ship_date DATE,
    arrival_ship_time VARCHAR(15),
    fob VARCHAR(50) DEFAULT NULL,
    notes TEXT
);

DROP TABLE IF EXISTS company_table;
CREATE TABLE company_table (
    company_ID VARCHAR(8) NOT NULL DEFAULT '',
    company_Name VARCHAR(128) NOT NULL,
    addr1 VARCHAR(64) DEFAULT NULL,
    addr2 VARCHAR(64) DEFAULT NULL,
    city VARCHAR(64) DEFAULT NULL,
    state VARCHAR(4) DEFAULT NULL,
    country VARCHAR(25) DEFAULT NULL,
    zip VARCHAR(16) DEFAULT NULL,
    salesperson VARCHAR(60) DEFAULT NULL,
    phone VARCHAR(16) DEFAULT NULL,
    extension VARCHAR(5) DEFAULT NULL,
    fax VARCHAR(16) DEFAULT NULL,
    email VARCHAR(128) DEFAULT NULL,
    web_addr VARCHAR(128) DEFAULT NULL,
    tax_ID VARCHAR(64) DEFAULT NULL,
    credit_checked CHAR(1) DEFAULT NULL,
    status VARCHAR(10) DEFAULT 'Active',
    customer CHAR(1) DEFAULT NULL,
    vendor CHAR(1) DEFAULT NULL,
    OEM CHAR(1) DEFAULT NULL,
    other_class VARCHAR(60) DEFAULT NULL,
    notes TEXT,
    PRIMARY KEY (company_Name)
);


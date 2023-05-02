#CREATE SCHEMA absolutemedia; /* schema for entire DB */

SET foreign_key_checks = 0;
DROP TABLE IF EXISTS company_table;
DROP TABLE IF EXISTS component_table;
DROP TABLE IF EXISTS contact_table;
DROP TABLE IF EXISTS product_table;
DROP TABLE IF EXISTS location_table;
DROP TABLE IF EXISTS location_history;
DROP TABLE IF EXISTS item_check_in_table;
DROP TABLE IF EXISTS order_table;
DROP TABLE IF EXISTS order_nonItem;
DROP TABLE IF EXISTS order_item;
DROP TABLE IF EXISTS shipping_table;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS shipping;
SET foreign_key_checks = 1;

CREATE TABLE company_table (
    company_id VARCHAR(8) NOT NULL DEFAULT '',
    company_name VARCHAR(100) NOT NULL,
    addr1 VARCHAR(50) DEFAULT NULL,
    addr2 VARCHAR(50) DEFAULT NULL,
    city VARCHAR(50) DEFAULT NULL,
    state VARCHAR(4) DEFAULT NULL,
    country VARCHAR(50) DEFAULT NULL,
    zip VARCHAR(50) DEFAULT NULL,
    salesperson VARCHAR(50) DEFAULT NULL,
    phone VARCHAR(50) DEFAULT NULL,
    extension VARCHAR(10) DEFAULT NULL,
    fax VARCHAR(50) DEFAULT NULL,
    email VARCHAR(100) DEFAULT NULL,
    web_addr VARCHAR(100) DEFAULT NULL,
    tax_id VARCHAR(50) DEFAULT NULL,
    resale VARCHAR(50) DEFAULT NULL,
    status VARCHAR(10) DEFAULT NULL,
    customer INT DEFAULT NULL,
    vendor INT DEFAULT NULL,
    other INT DEFAULT NULL,
    notes TEXT,
    PRIMARY KEY (company_id)
);

CREATE TABLE component_table (
    component_id INT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(4) DEFAULT NULL,
    component_type VARCHAR(50) DEFAULT NULL,
    title VARCHAR(50) DEFAULT NULL,
    oem_pn VARCHAR(50) DEFAULT NULL,
    component_description TEXT,
    size VARCHAR(50) DEFAULT NULL,
    supplier_brand_id VARCHAR(50) DEFAULT NULL,
    color VARCHAR(50) DEFAULT NULL,
    notes TEXT,
    uom VARCHAR(50) DEFAULT NULL,
    component_status VARCHAR(50) DEFAULT NULL,
    owned_by INT DEFAULT NULL,
    packaging_component INT DEFAULT NULL,
    PRIMARY KEY (component_id),
	FOREIGN KEY (customer_id) REFERENCES company_table(company_id)
);

CREATE TABLE contact_table (
    contact_id INT NOT NULL AUTO_INCREMENT,
    company_id VARCHAR(4) NOT NULL,
    company_name VARCHAR(50) DEFAULT NULL,
    fname VARCHAR(50) DEFAULT NULL,
    lname VARCHAR(50) DEFAULT NULL,
    contact_type VARCHAR(10) DEFAULT NULL,
    title VARCHAR(100) DEFAULT NULL,
    dept VARCHAR(50) DEFAULT NULL,
    add_1 VARCHAR(50) DEFAULT NULL,
    add_2 VARCHAR(50) DEFAULT NULL,
    city VARCHAR(50) DEFAULT NULL,
    state_in_country VARCHAR(50) DEFAULT NULL,
    zip VARCHAR(50) DEFAULT NULL,
    country VARCHAR(50) DEFAULT NULL,
    phone VARCHAR(50) DEFAULT NULL,
    extension VARCHAR(10) DEFAULT NULL,
    cell_phone_number VARCHAR(50) DEFAULT NULL,
    third_party_company VARCHAR(100) DEFAULT NULL,
    fax VARCHAR(50) DEFAULT NULL,
    email VARCHAR(100) DEFAULT NULL,
    notes TEXT,
    PRIMARY KEY (contact_id),
	FOREIGN KEY (company_id) REFERENCES company_table(company_id)
);

CREATE TABLE product_table (
    product_id INT NOT NULL AUTO_INCREMENT,
    old_abs_id VARCHAR(50) DEFAULT NULL,
    customer_id VARCHAR(4) NOT NULL,
    product_category VARCHAR(50) DEFAULT NULL,
    oem_product_id VARCHAR(50) DEFAULT NULL,
    product_title VARCHAR(100) DEFAULT NULL,
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
    product_status VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (product_id),
	FOREIGN KEY (customer_id) REFERENCES company_table(company_id)
);

CREATE TABLE location_table (
    id INT NOT NULL AUTO_INCREMENT,
    location_id VARCHAR(50) NOT NULL DEFAULT '',
    location_type VARCHAR(50) DEFAULT NULL,
    item_id INT DEFAULT NULL,
    qty INT DEFAULT '0',
    item_owner VARCHAR(50) DEFAULT NULL,
    physical_location VARCHAR(50) DEFAULT NULL,
    notes TEXT,
    PRIMARY KEY (id),
    KEY location_id (location_id),
	FOREIGN KEY (item_id) REFERENCES component_table(component_id)
);

CREATE TABLE location_history (
	id INT NOT NULL AUTO_INCREMENT,
	location_id VARCHAR(50) NOT NULL DEFAULT '',
	item_id INT NOT NULL DEFAULT '0',
	qty INT NOT NULL DEFAULT '0',
	date_added DATE NOT NULL DEFAULT (CURRENT_DATE),
	PRIMARY KEY (id),
	FOREIGN KEY (item_id) REFERENCES component_table(component_id)
);

CREATE TABLE item_check_in_table (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(4) DEFAULT NULL,
    item_id INT DEFAULT NULL,
    mfr_pn VARCHAR(50) DEFAULT NULL,
    description TEXT,
    carrier VARCHAR(50) DEFAULT NULL,
    quantity VARCHAR(50) DEFAULT NULL,
    disposition VARCHAR(100) DEFAULT NULL,
    signed_for_by VARCHAR(50) DEFAULT NULL,
    date_in DATETIME DEFAULT NULL,
    date_complete DATETIME DEFAULT NULL,
    PRIMARY KEY (id),
	FOREIGN KEY (item_id) REFERENCES component_table(component_id)
);

CREATE TABLE order_table (
	order_id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    company_id VARCHAR(4) NOT NULL,
    salesperson VARCHAR(50) DEFAULT NULL,
    requestor VARCHAR(50) DEFAULT NULL,
    customer_contact VARCHAR(50) DEFAULT NULL,
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
    tax_rate FLOAT DEFAULT NULL,
    tax FLOAT DEFAULT NULL,
    freight_charges FLOAT DEFAULT NULL,
    order_price_total FLOAT DEFAULT NULL,
    invoice_date VARCHAR(50) DEFAULT NULL,
    invoice_date_paid VARCHAR(50) DEFAULT NULL,
    invoice_notes TEXT DEFAULT NULL,
    abs_sales_order_date VARCHAR(50) DEFAULT NULL,
    customer_order_date VARCHAR(50) DEFAULT NULL,
    customer_po_date VARCHAR(50) DEFAULT NULL,
    customer_po_number INT DEFAULT NULL,
    credit_checked BOOL DEFAULT NULL,
    days_turn INT DEFAULT NULL,
    date_code_printing VARCHAR(50) DEFAULT NULL,
    customer_provided_material TEXT,
    customer_material_eta VARCHAR(50) DEFAULT NULL,
    customer_notes TEXT DEFAULT NULL,
    vendor_notes TEXT DEFAULT NULL,
    order_notes TEXT DEFAULT NULL,
    order_status VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (product_id) REFERENCES product_table(product_id),
    FOREIGN KEY (company_id) REFERENCES company_table(company_id)
);

CREATE TABLE order_nonItem (
	order_id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    company_id VARCHAR(4) NOT NULL,
    non_inventory_line_item1 VARCHAR(255) DEFAULT NULL,
    non_inventory_invoice1 BOOL DEFAULT NULL,
    non_inventory_packing_slip1 BOOL DEFAULT NULL,
    non_inventory_quantity1 INT DEFAULT NULL,
    non_inventory_unit_price1 FLOAT DEFAULT NULL,
    non_inventory_total_price1 FLOAT DEFAULT NULL,
    non_inventory_line_item2 VARCHAR(255) DEFAULT NULL,
    non_inventory_invoice2 BOOL DEFAULT NULL,
    non_inventory_packing_slip2 BOOL DEFAULT NULL,
    non_inventory_quantity2 INT DEFAULT NULL,
    non_inventory_unit_price2 FLOAT DEFAULT NULL,
    non_inventory_total_price2 FLOAT DEFAULT NULL,
    non_inventory_line_item3 VARCHAR(255) DEFAULT NULL,
    non_inventory_invoice3 BOOL DEFAULT NULL,
    non_inventory_packing_slip3 BOOL DEFAULT NULL,
    non_inventory_quantity3 INT DEFAULT NULL,
    non_inventory_unit_price3 FLOAT DEFAULT NULL,
    non_inventory_total_price3 FLOAT DEFAULT NULL,
    non_inventory_line_item4 VARCHAR(255) DEFAULT NULL,
    non_inventory_invoice4 BOOL DEFAULT NULL,
    non_inventory_packing_slip4 BOOL DEFAULT NULL,
    non_inventory_quantity4 INT DEFAULT NULL,
    non_inventory_unit_price4 FLOAT DEFAULT NULL,
    non_inventory_total_price4 FLOAT DEFAULT NULL,
    non_inventory_line_item5 VARCHAR(255) DEFAULT NULL,
    non_inventory_invoice5 BOOL DEFAULT NULL,
    non_inventory_packing_slip5 BOOL DEFAULT NULL,
    non_inventory_quantity5 INT DEFAULT NULL,
    non_inventory_unit_price5 FLOAT DEFAULT NULL,
    non_inventory_total_price5 FLOAT DEFAULT NULL,
    non_inventory_line_item6 VARCHAR(255) DEFAULT NULL,
    non_inventory_invoice6 BOOL DEFAULT NULL,
    non_inventory_packing_slip6 BOOL DEFAULT NULL,
    non_inventory_quantity6 INT DEFAULT NULL,
    non_inventory_unit_price6 FLOAT DEFAULT NULL,
    non_inventory_total_price6 FLOAT DEFAULT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (product_id) REFERENCES product_table(product_id),
    FOREIGN KEY (company_id) REFERENCES company_table(company_id)
);

CREATE TABLE order_item (
	order_id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    company_id VARCHAR(4) NOT NULL,
    inventory_item1 VARCHAR(255) DEFAULT NULL,
    inventory_invoice1 BOOL DEFAULT NULL,
    inventory_packing_slip1 BOOL DEFAULT NULL,
    inventory_quantity1 INT DEFAULT NULL,
    inventory_unit_price1 FLOAT DEFAULT NULL,
    inventory_total_price1 FLOAT DEFAULT NULL,
    inventory_item2 VARCHAR(255) DEFAULT NULL,
    inventory_invoice2 BOOL DEFAULT NULL,
    inventory_packing_slip2 BOOL DEFAULT NULL,
    inventory_quantity2 INT DEFAULT NULL,
    inventory_unit_price2 FLOAT DEFAULT NULL,
    inventory_total_price2 FLOAT DEFAULT NULL,
    inventory_item3 VARCHAR(255) DEFAULT NULL,
    inventory_invoice3 BOOL DEFAULT NULL,
    inventory_packing_slip3 BOOL DEFAULT NULL,
    inventory_quantity3 INT DEFAULT NULL,
    inventory_unit_price3 FLOAT DEFAULT NULL,
    inventory_total_price3 FLOAT DEFAULT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (product_id) REFERENCES product_table(product_id),
    FOREIGN KEY (company_id) REFERENCES company_table(company_id)
);

CREATE TABLE shipping_table (
    shipping_id INT NOT NULL AUTO_INCREMENT,
    order_id INT DEFAULT NULL,
    company_name VARCHAR(100) NOT NULL,
    contact_name VARCHAR(50) DEFAULT NULL,
    add1 VARCHAR(50) DEFAULT NULL,
    add2 VARCHAR(50) DEFAULT NULL,
    city VARCHAR(50) DEFAULT NULL,
    country_state VARCHAR(50) DEFAULT NULL,
    zip VARCHAR(50) DEFAULT NULL,
    province VARCHAR(50) DEFAULT NULL,
    country VARCHAR(50) NOT NULL,
    phone INT NOT NULL,
    fax VARCHAR(50) DEFAULT NULL,
    email VARCHAR(50) NOT NULL,
    fedex VARCHAR(50) DEFAULT NULL,
    ups VARCHAR(50) DEFAULT NULL,
    courier_willcall VARCHAR(50) DEFAULT NULL,
    abs VARCHAR(50) DEFAULT NULL,
    other_ship_method VARCHAR(50) DEFAULT NULL,
    payment_type VARCHAR(50),
    account_number VARCHAR(50),
    request_ship_date DATE,
    request_ship_time VARCHAR(50),
    arrival_ship_date DATE,
    arrival_ship_time VARCHAR(50),
    fob VARCHAR(50) DEFAULT NULL,
    notes TEXT,
	PRIMARY KEY (shipping_id),
    FOREIGN KEY (order_id) REFERENCES order_table(order_id)
);

CREATE TABLE orders (
    orderID INT AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(255),
    company_address VARCHAR(255),
    customer VARCHAR(255),
    customer_address VARCHAR(255),
    date DATE
);

CREATE TABLE shipping (
    company VARCHAR(50),
    address VARCHAR(50),
    city VARCHAR(50),
    state VARCHAR(50),
    zip VARCHAR(50),
    orderMaster VARCHAR(50),
    shipDate VARCHAR(50),
    orderDate VARCHAR(50),
    po VARCHAR(50),
    saturdayDelivery VARCHAR(50),
    notes VARCHAR(50),
    quantity VARCHAR(50),
    abspn VARCHAR(50),
    description VARCHAR(50),
    productTitle VARCHAR(50),
    oem VARCHAR(50),
    product VARCHAR(50)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  userid INT NOT NULL,
  username VARCHAR(45) NULL,
  viewonly TINYINT NULL DEFAULT 0,
  PRIMARY KEY (userid),
  UNIQUE INDEX username_UNIQUE (username ASC) VISIBLE
);

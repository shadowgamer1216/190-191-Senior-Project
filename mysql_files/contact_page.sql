create schema 191_database; /* schema for entire DB */

create table contact_table (
  contact_id mediumint NOT NULL auto_increment,
  customer_id varchar(8) NOT NULL default '',
  company varchar(128) NOT NULL default '',
  fname varchar(64) default NULL,
  lname varchar(64) default NULL,
  contact_type varchar(64) default NULL,
  title varchar(64) default NULL,
  dept varchar(128) default NULL,
  add_1 varchar(64) default NULL,
  add_2 varchar(64) default NULL,
  city varchar(64) default NULL,
  state_in_country varchar(4) default NULL,
  zip varchar(16) default NULL,
  country varchar(128) default NULL,
  phone varchar(15) default NULL,
  extension varchar(5) default NULL,
  cell_phone_number varchar(15) default NULL,
  third_party_company varchar(128) default '',
  fax varchar(15) default NULL,
  email varchar(128) default NULL,
  notes mediumtext,
  PRIMARY KEY  (contact_id)
  #PRIMARY KEY  (contact_id),
  #FOREIGN KEY (company) REFERENCES company_table(company_name)
);

DROP TABLE IF EXISTS location_table;
create table location_table(
	id int(11) NOT NULL auto_increment,
	location_id VARCHAR(64) NOT NULL DEFAULT '', 
	location_type VARCHAR(64) NOT NULL DEFAULT '',
	item_id INT(11) DEFAULT NULL,
	qty INT(11) DEFAULT '0',
	item_owner VARCHAR(64) DEFAULT NULL,
	physical_location VARCHAR(64) DEFAULT NULL,
	notes TEXT,
	PRIMARY KEY (id),
	KEY location_id (location_id),
	KEY item_id (item_id)
);
INSERT INTO location_table(id, location_id, item_id, physical_location, location_type, item_owner, notes, qty)
VALUES();

DROP TABLE IF EXISTS item_check_in_table;
create table item_check_in_table(
	id INT(11) NOT NULL auto_increment,
	customer_id VARCHAR(4) DEFAULT NULL,
	item_id VARCHAR(25) DEFAULT NULL, 
	mfr_pn VARCHAR(25) DEFAULT NULL,
	item_description VARCHAR(100) DEFAULT NULL,
	carrier VARCHAR(50) DEFAULT NULL,
	quantity VARCHAR(25) DEFAULT NULL,
	disposition VARCHAR(100) DEFAULT NULL,
	signed_for_by VARCHAR(25) DEFAULT NULL,
	date_in DATETIME DEFAULT NULL,
	date_complete DATETIME DEFAULT NULL,
	PRIMARY KEY (id)
);
INSERT INTO item_check_in_table (id, customer_id, item_id, mfr_pn, item_description, quantity, carrier, signed_for_by, disposition, date_in, date_complete)
VALUES();

create table component_table (
	customer_id TEXT PRIMARY KEY NOT NULL,
	component_type TEXT,
	oem_pn INT,
	description_1 TEXT,
	description_2 TEXT,
	description_3 TEXT,
	description_4 TEXT,
	description_5 TEXT,
	size TEXT,
	supplier_brand_id TEXT,
	color TEXT,
	notes TEXT,
	owned_by TEXT,
	uom TEXT,
	component_status TEXT,
	packaging_component BIT,
	item_location TEXT
);

DROP TABLE IF EXISTS product_table;
CREATE TABLE product_table (
  product_id INT(25) NOT NULL AUTO_INCREMENT,
  old_abs_pn INT(11) DEFAULT '0',
  oem_product_pn VARCHAR(50) DEFAULT NULL,
  customer VARCHAR(200) DEFAULT NULL,
  customer_id VARCHAR(4) DEFAULT NULL,
  product_category VARCHAR(50) DEFAULT NULL,
  product_title VARCHAR(200) DEFAULT NULL,
  product_description TEXT,
  product_replication VARCHAR(50) DEFAULT NULL,
  master_format VARCHAR(50) DEFAULT NULL,
  master_recd DATE DEFAULT NULL,
  master_label VARCHAR(50) DEFAULT NULL,
  master_capacity VARCHAR(50) DEFAULT NULL,
  master_loc VARCHAR(50) DEFAULT NULL,
  films_loc VARCHAR(50) DEFAULT NULL,
  date_code_req CHAR(1) DEFAULT NULL,
  date_code_position VARCHAR(50) DEFAULT NULL,
  inner_hub VARCHAR(10) DEFAULT NULL,
  inner_hub_position VARCHAR(50) DEFAULT NULL,
  floodcoat CHAR(1) DEFAULT NULL,
  rimage_print CHAR(1) DEFAULT NULL,
  no_of_colors CHAR(2) DEFAULT NULL,
  color_1 VARCHAR(25) DEFAULT NULL,
  color_2 VARCHAR(25) DEFAULT NULL,
  color_3 VARCHAR(25) DEFAULT NULL,
  color_4 VARCHAR(25) DEFAULT NULL,
  color_5 VARCHAR(25) DEFAULT NULL,
  color_6 VARCHAR(25) DEFAULT NULL,
  color_7 VARCHAR(25) DEFAULT NULL,
  color_8 VARCHAR(25) DEFAULT NULL,
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
  date_created DATETIME DEFAULT '0000-00-00 00:00:00',
  product_status VARCHAR(25) NOT NULL DEFAULT 'Current',
  PRIMARY KEY (product_id),
  KEY (customer_id)
);
INSERT INTO product_table (product_id, old_abs_pn, oem_product_pn, customer, customer_id, product_category, product_title, product_description, product_replication, master_format, master_recd, master_label, master_capacity, master_loc, films_loc, date_code_req, date_code_position, inner_hub, inner_hub_position, floodcoat, rimage_print, no_of_colors, color_1, color_2, color_3, color_4, color_5, color_6, color_7, color_8, color_notes, component_1, component_2, component_3, component_4, component_5, component_6, component_7, component_8, component_9, component_10, component_11, component_12, packaging_notes, product_notes, date_created, product_status)
VALUES();

create table order_table (
	-- Billing Information (Company's Information)
    company_name TEXT,
    contact TEXT,
    phone INT,
    address1 TEXT,
    address2 TEXT,
    city TEXT,
    state TEXT,
    zip INT,
    -- Product Information
	product_id INT PRIMARY KEY NOT NULL,
    product_category TEXT,
    OEM_product_id INT,
    product_title TEXT,
    number_of_colors INT,
    salesperson TEXT,
    requestor TEXT,
    customer_contact TEXT,
    re_order BIT,
    -- Custom Product
    product_title TEXT,
    product_id INT,
    factory_order_quantity INT,
    custom_invoice BIT,
    custom_packing_slip BIT,
    custom_quantity INT,
    custom_unit_price FLOAT,
    custom_total_price FLOAT,
    -- Non-Inventory Line Items
    non_inventory_line_item TEXT,
    non_inventory_invoice BIT,
    non_inventory_packing_slip BIT,
    non_inventory_quantity INT,
    non_inventory_unit_price FLOAT,
    non_inventory_total_price FLOAT,
    -- Inventory Items
    inventory_item TEXT,
    inventory_invoice BIT,
    inventory_packing_slip BIT,
    inventory_quantity INT,
    inventory_unit_price FLOAT,
    inventory_total_price FLOAT,
    -- Billing Information
    assembly_charges_quantity INT,
    assembly_charges_unit_price FLOAT,
    assembly_charges_total_price FLOAT,
    date_code_printing_charges_quantity INT,
    date_code_printing_charges1_unit_price FLOAT,
    date_code_printing_charges2_total_price FLOAT,
    date_code_setup_charge FLOAT,
    number_of_screens INT,
    art_manipulation FLOAT,
    sub_total FLOAT,
    taxable BIT,
    tax_rate FLOAT,
    tax FLOAT,
    freight_charges FLOAT,
    order_price_total FLOAT,
    -- Invoice Information
    invoice_date DATE,
    invoice_date_paid DATE,
    invoice_notes TEXT,
    abs_sales_order_date DATE,
    customer_order_date DATE,
    customer_po_date DATE,
    customer_po_number INT,
    credit_checked BIT,
    days_turn INT,
    date_code_printing DATE,
    assembly_by TEXT,
    disc_manufactured_by TEXT,
    cd_dvd_brand TEXT,
    disc_provided_by TEXT,
    customer_provided_material TEXT,
    customer_material_eta DATE,
    customer_notes TEXT,
    vendor_notes TEXT,
    order_notes TEXT,
    order_status TEXT
);

create table shipping_table(
	customer_id INT PRIMARY KEY NOT NULL,
	company_name TEXT,
	contact_name TEXT, 
	add1 TEXT,
	add2 TEXT,
	city TEXT,
	country_state TEXT,
	zip INT,
	province TEXT,
	country TEXT,
	phone TEXT,
	fax TEXT
);

create table shipment_info_table(
	fedex TEXT,
	ups TEXT,
	courier_willcall TEXT,
	other_ship_method TEXT,
	payment_type TEXT,
	account_number TEXT,
	request_ship_date DATE,
	request_ship_time DATETIME,
	arrival_ship_date DATE,
	arrival_ship_time DATETIME,
	fob TEXT,
	notes TEXT
);

create table company_table(
	company_ID INT PRIMARY KEY NOT NULL,
	company_Name TEXT,
	tax_ID INT,
	status TEXT,
	customer BIT,
	OEM BIT,
	credit_checked BIT,
	vendor BIT,
	salesperson TEXT,
	phone INT,
	extension INT,
	fax TEXT,
	email TEXT,
	web_addr TEXT,
	country TEXT,
	state TEXT,
	zip INT,
	city TEXT,
	Addr1 TEXT,
	Addr2 TEXT
);
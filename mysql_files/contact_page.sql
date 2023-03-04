create schema 191_database; /* schema for entire DB */

DROP TABLE IF EXISTS contact_table;
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
  product_id INT NOT NULL auto_increment,
  old_abs_id INT DEFAULT NULL,
  customer_id VARCHAR(4) DEFAULT NULL,
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
  #date_code_req CHAR(3) DEFAULT NULL,
  date_code_position VARCHAR(50) DEFAULT NULL,
  inner_hub VARCHAR(10) DEFAULT NULL,
  inner_hub_position VARCHAR(50) DEFAULT NULL,
  #floodcoat CHAR(3) DEFAULT NULL,
  #rimage_print CHAR(3) DEFAULT NULL,
  #color_1 VARCHAR(25) DEFAULT NULL,
  #color_2 VARCHAR(25) DEFAULT NULL,
  #color_3 VARCHAR(25) DEFAULT NULL,
  #color_4 VARCHAR(25) DEFAULT NULL,
  #color_5 VARCHAR(25) DEFAULT NULL,
  #color_6 VARCHAR(25) DEFAULT NULL,
  #color_7 VARCHAR(25) DEFAULT NULL,
  #color_8 VARCHAR(25) DEFAULT NULL,
  color_notes TEXT,
  #component_1 VARCHAR(50) DEFAULT NULL,
  #component_2 VARCHAR(50) DEFAULT NULL,
  #component_3 VARCHAR(50) DEFAULT NULL,
  #component_4 VARCHAR(50) DEFAULT NULL,
  #component_5 VARCHAR(50) DEFAULT NULL,
  #component_6 VARCHAR(50) DEFAULT NULL,
  #component_7 VARCHAR(50) DEFAULT NULL,
  #component_8 VARCHAR(50) DEFAULT NULL,
  #component_9 VARCHAR(50) DEFAULT NULL,
  #component_10 VARCHAR(50) DEFAULT NULL,
  #component_11 VARCHAR(50) DEFAULT NULL,
  #component_12 VARCHAR(50) DEFAULT NULL,
  packaging_notes TEXT,
  product_notes TEXT,
  product_status VARCHAR(25) DEFAULT NULL,
  PRIMARY KEY (product_id),
  KEY (customer_id)
);

DROP TABLE IF EXISTS order_table;
create table order_table (
	-- Billing Information (Contact's Information)
    #company_name VARCHAR(128) DEFAULT NULL,
    #contact VARCHAR(64) DEFAULT NULL,
    #phone VARCHAR(15) DEFAULT NULL,
    #address1 VARCHAR(64) DEFAULT NULL,
    #address2 VARCHAR(64) DEFAULT NULL,
    #city VARCHAR(64) DEFAULT NULL,
    #state VARCHAR(4) DEFAULT NULL,
    #zip VARCHAR(16) DEFAULT NULL,
    -- Product Information
	product_id INT NOT NULL AUTO_INCREMENT,
    #product_category VARCHAR(64) DEFAULT NULL,
    #OEM_product_id VARCHAR(64) DEFAULT NULL,
    #product_title VARCHAR(256) DEFAULT NULL,
    #number_of_colors CHAR(2) DEFAULT NULL,
    salesperson VARCHAR(64) DEFAULT NULL,
    requestor VARCHAR(64) DEFAULT NULL,
    customer_contact VARCHAR(64) DEFAULT NULL,
    #re_order BOOL DEFAULT NULL,
    -- Custom Product
    #product_title VARCHAR(256) DEFAULT NULL,
    #product_id INT(25) DEFAULT NULL,
    factory_order_quantity INT DEFAULT NULL,
    #custom_invoice BOOL DEFAULT NULL,
    #custom_packing_slip BOOL DEFAULT NULL,
    custom_quantity INT DEFAULT NULL,
    custom_unit_price FLOAT DEFAULT NULL,
    custom_total_price FLOAT DEFAULT NULL,
    -- Non-Inventory Line Items
    #non_inventory_line_item VARCHAR(256) DEFAULT NULL,
    #non_inventory_invoice BOOL DEFAULT NULL,
    #non_inventory_packing_slip BOOL DEFAULT NULL,
    #non_inventory_quantity INT(2) DEFAULT NULL,
    #non_inventory_unit_price FLOAT(7,2) DEFAULT NULL,
    #non_inventory_total_price FLOAT(7,2) DEFAULT NULL,
    -- Inventory Items
    #inventory_item VARCHAR(256) DEFAULT NULL,
    #inventory_invoice BOOL DEFAULT NULL,
    #inventory_packing_slip BOOL DEFAULT NULL,
    #inventory_quantity INT(2) DEFAULT NULL,
    #inventory_unit_price FLOAT(7,2) DEFAULT NULL,
    #inventory_total_price FLOAT(7,2) DEFAULT NULL,
    -- Billing Information
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
    #taxable BOOL DEFAULT NULL,
    tax_rate FLOAT DEFAULT NULL,
    tax FLOAT DEFAULT NULL,
    freight_charges FLOAT DEFAULT NULL,
    order_price_total FLOAT DEFAULT NULL,
    -- Invoice Information
    invoice_date VARCHAR(64) DEFAULT NULL,
    invoice_date_paid VARCHAR(64) DEFAULT NULL,
    invoice_notes TEXT DEFAULT NULL,
    -- Job Information
    abs_sales_order_date VARCHAR(64) DEFAULT NULL,
    customer_order_date VARCHAR(64) DEFAULT NULL,
    customer_po_date VARCHAR(64) DEFAULT NULL,
    customer_po_number INT DEFAULT NULL,
    #credit_checked BOOL DEFAULT NULL,
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
    PRIMARY KEY (product_id)
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
  ID int (11) NOT NULL auto_increment,
	company_ID varchar (8) NOT NULL default '',
	company_Name varchar (128) default NULL,
  addr1 varchar (64) default NULL,
	addr2 varchar (64) default NULL,
  city varchar (64) default NULL,
  state varchar (4) default NULL,
  country varchar (25) default NULL,
	zip varchar (16) default NULL,
  salesperson varchar (60) default NULL,
	phone varchar (16) default NULL,
	extension varchar (5) default NULL,
	fax varchar (16) default NULL,
	email varchar (128) default NULL,
	web_addr varchar (128) default NULL,
	tax_ID varchar (64) default NULL,
  credit_checked char (1) default NULL,
	status varchar (10) default 'Active',
	customer char (1) default NULL,
  vendor char (1) default NULL,
	OEM char (1) default NULL,
  other_class varchar (60) default NULL,
  notes TEXT,
  PRIMARY KEY (ID)
);
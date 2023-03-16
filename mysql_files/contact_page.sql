create schema 191_database; /* schema for entire DB */

DROP TABLE IF EXISTS contact_table;
create table contact_table (
  contact_id mediumint NOT NULL auto_increment,
  customer_id varchar(8) NOT NULL,
  company varchar(128) NOT NULL,
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
	id INT NOT NULL auto_increment,
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
create table item_check_in_table(
	id INT NOT NULL auto_increment,
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
create table component_table (
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
  product_id INT NOT NULL auto_increment,
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
create table order_table (
	product_id INT NOT NULL AUTO_INCREMENT,
    contact_id INT DEFAULT NULL,
    -- Product Information
    salesperson VARCHAR(64) DEFAULT NULL,
    requestor VARCHAR(64) DEFAULT NULL,
    customer_contact VARCHAR(64) DEFAULT NULL,
    re_order BOOL DEFAULT NULL,
    -- Custom Product
    factory_order_quantity INT DEFAULT NULL,
    custom_invoice BOOL DEFAULT NULL,
    custom_packing_slip BOOL DEFAULT NULL,
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
    taxable BOOL DEFAULT NULL,
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
    PRIMARY KEY (product_id)
    #PRIMARY KEY(contact_id)
);

DROP TABLE IF EXISTS shipping_table;
create table shipping_table(
	company_name varchar(128) NOT NULL,
	contact_name varchar(50) NOT NULL, 
	add1 varchar(50) NOT NULL,
	add2 varchar(50) default NULL,
	city varchar(50) NOT NULL,
	country_state varchar(15)NOT NULL,
	zip INT NOT NULL,
	province varchar(50) default NULL,
	country varchar(50) NOT NULL,
	phone INT NOT NULL,
	fax varchar(20) default NULL,
 	email varchar(50) NOT NULL,
	fedex varchar(10) default NULL,
	ups varchar(10) default NULL,
	courier_willcall varchar(10) default NULL,
  	abs varchar(10) default NULL,
	other_ship_method varchar(10) default NULL,
	payment_type varchar(10),
	account_number varchar(50),
	request_ship_date DATE,
	request_ship_time VARCHAR(15),
	arrival_ship_date DATE,
	arrival_ship_time VARCAHR(15),
	fob varchar(50) default null,
	notes TEXT

create table company_table(
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
  PRIMARY KEY (company_Name)
);

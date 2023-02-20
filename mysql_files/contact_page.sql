create schema 191_database; /* schema for entire DB */

create table contact_table(
	customer_id INT PRIMARY KEY NOT NULL,
	company_name TEXT, 
	fname TEXT,
	lname TEXT,
	contact_type TEXT,
	title TEXT,
	dept TEXT,
	add1 TEXT,
	add2 TEXT,
	city TEXT,
	country_state TEXT,
	zip INT,
	country TEXT,
	phone TEXT,
	extension TEXT,
	fax TEXT,
	email TEXT,
	cell_phone TEXT,
	third_party_company TEXT,
	notes TEXT
);

create table location_table(
	location_id INT PRIMARY KEY NOT NULL,
	location_type TEXT,
	item_id INT,
	qty INT,
	item_owner TEXT,
	physical_location TEXT,
	notes TEXT
);

create table item_check_in_table(
	customer_id INT PRIMARY KEY NOT NULL,
	item_id INT,
	mfr_pn TEXT,
	item_description TEXT,
	carrier TEXT,
	quantity INT,
	disposition TEXT,
	signed_by_for TEXT,
	date_in DATETIME;
	date_completed DATE
);

create table product_table(
	product_pn INT PRIMARY KEY NOT NULL, 
	old_pn INT, 
	customer_name TEXT,
	customer_id INT, 
	product_category TEXT,
	oem_pn INT, 
	product_title TEXT, 
	product_desc TEXT, 
	replication TEXT, 
	master_format TEXT, 
	master_received DATE, 
	master_label TEXT, 
	master_capacity TEXT, 
	master_location TEXT, 
	date_code_req BIT, 
	date_code_position TEXT, 
	inner_hub TEXT, 
	inner_hub_position TEXT, 
	flood_coat BIT, 
	rimage_print BIT, 
	color TEXT,
	color_notes TEXT, 
	component TEXT, 
	packaging_notes TEXT, 
	product_notes TEXT, 
	product_status TEXT,
	location_id INT, 
);

create table order_table (
	product_id INT PRIMARY KEY NOT NULL,
    product_category TEXT,
    OEM_product_id INT,
    product_title TEXT,
    number_of_colors INT,
    salesperson TEXT,
    requestor TEXT,
    customer_contact TEXT,
    re_order BIT,
    factory_order_quantity INT,
    custom_invoice BIT,
    custom_packing_slip BIT,
    custom_quantity INT,
    custom_unit_price FLOAT,
    custom_total_price FLOAT,
    non_inventory_line_item TEXT,
    non_inventory_invoice BIT,
    non_inventory_packing_slip BIT,
    non_inventory_quantity INT,
    non_inventory_unit_price FLOAT,
    non_inventory_total_price FLOAT,
    inventory_item TEXT,
    inventory_invoice BIT,
    inventory_packing_slip BIT,
    inventory_quantity INT,
    inventory_unit_price FLOAT,
    inventory_total_price FLOAT,
    assembly_charges INT,
    assembly_charges1 FLOAT,
    assembly_charges2 FLOAT,
    date_code_printing_charges INT,
    date_code_printing_charges1 FLOAT,
    date_code_printing_charges2 FLOAT,
    date_code_setup_charge FLOAT,
    art_manipulation FLOAT,
    number_of_screens INT,
    sub_total FLOAT,
    taxable BIT,
    tax_rate FLOAT,
    tax FLOAT,
    freight_charges FLOAT,
    order_price_total FLOAT,
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
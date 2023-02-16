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
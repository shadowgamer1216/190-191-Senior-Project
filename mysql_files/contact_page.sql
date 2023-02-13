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
	notes TEXT,
);
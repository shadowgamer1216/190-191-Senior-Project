const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require('cors');




const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "absolutemedia",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

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

app.listen(3001, () =>{
    console.log("running on port 3001");
});
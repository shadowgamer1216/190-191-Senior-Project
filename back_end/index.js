const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require('cors');




const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password1!",
    database: "absolutemedia",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res)=> {
    const customerID = req.body.customerID;
    const sqlInsert = "INSERT INTO contact (customerID) Values (?)";
    db.query(sqlInsert, (customerID), (err, result)=>{
        console.log(err);
    
    });
});

app.listen(3001, () =>{
    console.log("running on port 3001");
});
const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database',
});

app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO test_table (test_data) VALUES ('testing');"
    db.query(sqlInsert, (err, result)=> {
        res.send("hello");
    });
});

app.listen(3001, () =>{
    console.log("running on port 3001");
});
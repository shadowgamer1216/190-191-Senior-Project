const bodyParser = require("body-parser")
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
import React, { useEffect, useState } from "react";
import axios from "axios";
const { Sequelize } = require ('sequelize');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
const sequelize = new Sequelize(
    'absolutemedia',
    'root',
    'password', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
  );
  var Order = sequelize.define('Order', {
    company,
    companyAddress,
    invoiceNumber,
    customerName,
    customerAddress,
    invoiceDate,
    items,
    total,
  }, {
    freezeTableName: true
  });

  export async function findOrder({orderID}) {
    const orders = await Order.findAll({where: {orderID: orderID}});
    return orders;
  }
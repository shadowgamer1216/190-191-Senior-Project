import React, { useEffect, useState } from "react";
import axios from "axios";
const { Sequelize } = require ('sequelize');

function Invoice({ match }) {
  const sequelize = new Sequelize(
    'absolutemedia',
    'root',
    'password', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
  );
  var order = sequelize.define('Order')

  useEffect(() => {
    // Use the `match.params.orderId` variable to construct the URL with the order ID
    axios.get(`http://localhost:3002/api/orders/${match.params.orderId}`)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [match.params.orderId]);


  if (!order) {
    return <div>Loading...</div>;
  }

  const {
    company,
    companyAddress,
    invoiceNumber,
    customerName,
    customerAddress,
    invoiceDate,
    items,
    total,
  } = order;

  return (
    <div className="invoice">
      <div className="header">
        <div className="company">
          <h1>{company}</h1>
          <p>{companyAddress}</p>
        </div>
        <div className="invoice-number">
          <h2>Invoice #{invoiceNumber}</h2>
        </div>
      </div>
      <div className="billing">
        <div className="customer">
          <h3>Bill To:</h3>
          <p>{customerName}</p>
          <p>{customerAddress}</p>
        </div>
        <div className="invoice-date">
          <h3>Invoice Date:</h3>
          <p>{invoiceDate}</p>
        </div>
      </div>
      <table className="items">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Description</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
              <td>${item.unitPrice.toFixed(2)}</td>
              <td>${item.totalPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total:</td>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Invoice;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Invoice({ match }) {
  const [invoiceData, setInvoiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInvoiceData() {
      try {
        const response = await axios.get(`/api/orders/${match.params.id}`);
        setInvoiceData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchInvoiceData();
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Invoice #{invoiceData.invoiceNumber}</h1>
      <p>Company: {invoiceData.company}</p>
      <p>Company Address: {invoiceData.companyAddress}</p>
      <p>Customer: {invoiceData.customerName}</p>
      <p>Customer Address: {invoiceData.customerAddress}</p>
      <p>Invoice Date: {invoiceData.invoiceDate}</p>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Description</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map(item => (
            <tr key={item.id}>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
              <td>{item.unitPrice}</td>
              <td>{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: {invoiceData.total}</p>
    </div>
  );
}

export default Invoice;

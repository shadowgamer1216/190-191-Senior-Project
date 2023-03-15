const express = require('express');
const mysql = require('mysql');

const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'absolutemedia'
});

// Define the API endpoint to retrieve the order data
app.get('/api/orders/:orderId', (req, res) => {
  const orderId = req.params.orderId;

  // Get the order data from the database
  pool.query(`SELECT * FROM orders WHERE id = ${orderId}`, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      // Return the order data in JSON format
      const order = results[0];
      res.json({
        company: order.company_name,
        companyAddress: order.company_address,
        invoiceNumber: order.invoice_number,
        customerName: order.customer_name,
        customerAddress: order.customer_address,
        invoiceDate: order.invoice_date,
        items: JSON.parse(order.items),
        total: parseFloat(order.total)
      });
    }
  });
});

// Start the server
app.listen(3003, () => {
  console.log('Server listening on port 3003');
});

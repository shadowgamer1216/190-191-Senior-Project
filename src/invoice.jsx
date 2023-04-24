import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});



function Invoice({ match }) {

  const [invoiceData, setInvoiceData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const fetchInvoiceData = async () => {
   

    try {
      const response = await Axios.get('http://localhost:3001/api/orders');
      const orders = response.data;
  
      const doc = new jsPDF();
      
      doc.setFontSize(22);
      
      doc.text('ABSOLUTE MEDIA, INC.', 10, 10);
      doc.setFontSize(12);

      doc.text('3350 Victor Ct. Santa Clara, CA 95054', 10, 15)
      doc.text('(408) 970-3283', 10, 20)
      
      doc.autoTable({
        head: [['Order ID', 'Company', 'Company Address', 'Customer', 'Customer Address', 'Date']],
        body: orders.map(({ orderID, company, company_address, customer, customer_address, date }) => [orderID, company, company_address, customer, customer_address, date]),
      margin: { top: 30}
      });
      const pdfURL = doc.output('bloburl');
      const pdfWindow = window.open();
      pdfWindow.location.href = pdfURL;
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    
      <div className='block7'>
        <button type='button' onClick={fetchInvoiceData} className='HomePageButton'>
          Fetch Orders
        </button>
      </div>
    
  );
}

export default Invoice;






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
  /*const [invoiceData, setInvoiceData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [showPdf, setShowPdf] = useState(false);

  const fetchInvoiceData = () => {
    Axios.get("http://localhost:3001/api/orders").then((response) =>{
      setInvoiceData(response.data);
    });
  };

  useEffect(() => {
    fetchInvoiceData();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setShowPdf(true); // Set showPdf to true once the PDF is loaded
  };

  const renderInvoice = () => (
    <Document
      file={null}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page>
        <View>
          <Text>Invoice #{invoiceData.invoiceNumber}</Text>
          <Text>Company: {invoiceData.company}</Text>
          <Text>Company Address: {invoiceData.companyAddress}</Text>
          <Text>Customer: {invoiceData.customerName}</Text>
          <Text>Customer Address: {invoiceData.customerAddress}</Text>
          <Text>Invoice Date: {invoiceData.invoiceDate}</Text>
          <View>
            {invoiceData.items.map(item => (
              <View key={item.id}>
                <Text>{item.quantity}</Text>
                <Text>{item.description}</Text>
                <Text>{item.unitPrice}</Text>
                <Text>{item.totalPrice}</Text>
              </View>
            ))}
          </View>
          <Text>Total: {invoiceData.total}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <div className='block7'>
        <button type='button' onClick={fetchInvoiceData} className='HomePageButton'>
          Fetch Orders
        </button>
      </div>
      {showPdf && renderInvoice()} {/* Conditionally render the PDF }
      <p>Page {numPages} of {numPages}</p>
    </div>
  );
}*/

export default Invoice;






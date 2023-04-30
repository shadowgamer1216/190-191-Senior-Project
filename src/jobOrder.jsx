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



function JobOrder({ match }) {

  const [jobOrderData, setJobOrderData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const fetchJobOrderData = async () => {
   

    try {
        const response = await Axios.get('http://localhost:3001/api/orders');
        const orders = response.data;
    
        const doc = new jsPDF();
        
        doc.setFontSize(15);
        doc.text('ABSOLUTE MEDIA, INC.', 73, 10);

        doc.setFontSize(25);
        doc.text('Job Order Sheet', 70, 20);

        doc.setFontSize(12);
        doc.text('Date, Time', 93, 25);

        doc.rect(20,30, 35, 7);
        doc.setFontSize(10);
        doc.text('ABS FG Product PN', 21, 35);
        doc.rect(55,30, 50, 7);
        doc.rect(105,30, 35, 7);
        doc.text('Order Master ID', 106, 35);
        doc.rect(140,30, 50, 7);

        doc.rect(20, 37, 35, 7);
        doc.text('FG Product Title', 21, 42);
        doc.rect(55, 37, 135, 7);

        doc.rect(20, 44, 35, 14);
        doc.text('FG Product Category', 21, 49);
        doc.text('/ Type', 21, 56);
        doc.rect(55, 44, 50, 14);
        doc.rect(105, 44, 35, 7);
        doc.rect(105, 51, 35, 7);
        doc.rect(140, 44, 25, 14);
        doc.text('Production', 143, 49);
        doc.rect(165, 44, 25, 14);
        doc.text('First Article', 168, 49);

        //CheckBox
        doc.rect(150, 52, 3, 3);
        doc.rect(175, 52, 3, 3);

        doc.rect(20, 58, 35, 14);
        doc.text('Order Quantity', 21, 65);
        doc.rect(55, 58, 25, 14);
        doc.text('Customer', 56, 63);
        doc.rect(80, 58, 25, 14);
        doc.text('Factory', 81, 63);
        doc.rect(105, 58, 35, 7);
        doc.text('OEM product ID', 106, 63);
        doc.rect(105, 65, 35, 7);
        doc.text('Customer Name', 106, 70);
        doc.rect(140, 58, 50, 7);
        doc.rect(140, 65, 50, 7);

        const textWidth = doc.getTextWidth('Customer');
        doc.line(56, 64, 56 + textWidth, 64);
        const textWidth1 = doc.getTextWidth('Factory');
        doc.line(81, 64, 81 + textWidth1, 64);

        doc.rect(20, 72, 35, 14);
        doc.text('Scheduled Ship', 21, 77);
        doc.text('Date / Time', 21, 84);
        doc.rect(55, 72, 25, 14);
        doc.rect(80, 72, 25, 14);
        doc.text('CD-ROM ETA', 81, 77);
        doc.rect(105, 72, 35, 7);
        doc.text('Customer PO #', 106, 77);
        doc.rect(105, 79, 35, 7);
        doc.text('CD Manufacturer', 106, 84);
        doc.rect(140, 72, 50, 7);
        doc.rect(140, 79, 50, 7);

        const textWidth2 = doc.getTextWidth('CD-ROM ETA:');
        doc.line(81, 78, 81 + textWidth2, 78);

        doc.rect(20, 86, 35, 7);
        doc.text('OEM ID', 21, 91);
        doc.rect(55, 86, 135, 7);

        doc.rect(20, 93, 35, 21);
        doc.text('Packaging', 21, 103);
        doc.rect(55, 93, 135, 21);
        doc.setFont('helvetica', 'bold');
        doc.text('Product Packaging Information', 56, 98);

        const textWidth3 = doc.getTextWidth('Product Packaging Information');
        doc.line(56, 99, 56 + textWidth3, 99);

        doc.setFont('helvetica', 'normal');

        doc.rect(20, 114, 35, 7);
        doc.text('Packaging Notes', 21, 119);
        doc.rect(55, 114, 135, 7);

        doc.rect(20, 121, 35, 14);
        doc.text('Shipping', 21, 126);
        doc.text('Instructions', 21, 133);
        doc.rect(55, 121, 85, 14);
        doc.rect(140, 121, 25, 14);
        doc.text('Ship Via', 141, 130);
        doc.rect(165, 121, 25, 14);

        doc.rect(20, 135, 170, 7);
        doc.text('Job Order Notes', 95, 140);

        doc.rect(20, 142, 170, 7);

        doc.rect(20, 149, 85, 14);
        doc.rect(105, 149, 85, 14);

        doc.rect(20, 163, 85, 14);
        doc.rect(105, 163, 85, 14);

        doc.rect(20, 177, 85, 14);
        doc.rect(105, 177, 85, 14);

        doc.rect(20, 191, 85, 14);
        doc.rect(105, 191, 85, 14);

        doc.rect(20, 205, 85, 14);
        doc.rect(105, 205, 85, 14);

        doc.rect(20, 219, 85, 14);
        doc.rect(105, 219, 85, 14);


        doc.rect(20, 233, 85, 14);
        doc.rect(105, 233, 85, 14);


        doc.rect(20, 247, 85, 14);
        doc.rect(105, 247, 85, 14);



        //doc.rect();
        
        // doc.autoTable({
        //   head: [['Order ID', 'Company', 'Company Address', 'Customer', 'Customer Address', 'Date']],
        //   body: orders.map(({ orderID, company, company_address, customer, customer_address, date }) => [orderID, company, company_address, customer, customer_address, date]),
        // margin: { top: 30}
        // });


        const pdfURL = doc.output('bloburl');
        const pdfWindow = window.open();
        pdfWindow.location.href = pdfURL;
      } catch (error) {
        console.error(error);
      }
    };

  

  return (
    
      <div className='block7'>
        <button type='button' onClick={fetchJobOrderData} className='HomePageButton'>
          Fetch Job Orders
        </button>
      </div>
    
  );
}

export default JobOrder;
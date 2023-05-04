import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
//import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     backgroundColor: "white",
//     color: "black",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//   },
//   viewer: {
//     width: window.innerWidth, //the pdf viewer will take up all of the width and height
//     height: window.innerHeight,
//   },
// });

function QCInspection({ match }) {

  const shipping_id = 2;

  const [shippingData, setShippingData] = useState(null);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/shipping/${shipping_id}`)
      .then(response => {
        setShippingData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  var order_id = shippingData?.shipping_id ?? '';
  console.log(order_id);
  const [orderData, setOrderData] = useState(null);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/order/${order_id}`)
      .then(response => {
        setOrderData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [order_id]);

  var product_id = orderData?.product_id ?? '';
  console.log(product_id);
  const [productData, setProductData] = useState('');
  useEffect(() => {
    if (product_id) {
      Axios.get(`http://localhost:3001/api/product/${product_id}`).then((response) => {
        setProductData(response.data);
      }).catch(err => {
        console.log(err);
      });
    }
  }, [product_id]);

  const productTitle = productData?.product_title ?? '';
  const productCategory = productData?.product_category ?? '';
  const customerOrderQuantity = orderData?.custom_quantity ?? '';
  const factoryOrderQuantity = orderData?.factory_order_quantity ?? '';
  const oemProductID = productData?.oem_product_id ?? '';
  const companyName = shippingData?.company_name ?? '';
  const companyNameSlice = companyName.slice(0, 18);
  const shipDate = shippingData?.request_ship_date ?? '';
  const shipDateSlice = shipDate.slice(0, 10);
  const shipTime = shippingData?.request_ship_time ?? '';

  const productPackagingNotes = productData?.product_notes ?? '';
  const productNotesSlice = productPackagingNotes.slice(0, 210);
  const maxLength = 70;
  const splitStrings = [];
  for (let i = 0; i < productNotesSlice.length; i += maxLength) {
    splitStrings.push(productNotesSlice.substr(i, maxLength));
  }
  const productNotes1 = splitStrings[0];
  const productNotes2 = splitStrings[1];
  const productNotes3 = splitStrings[2];

  const packagingNotes = productData?.packaging_notes ?? '';
  const packagingNotesSlice = packagingNotes.slice(0, 70);

  //const oemProductID = 1;
  //const productPackaging = '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890';

  const fetchQCInspectionData = async () => {

    try {

      const doc = new jsPDF();

      // const orderNum = orders[0].orderID;
      // doc.text(orderNum, 61, 34);

      doc.setFontSize(15);
      doc.text('ABSOLUTE MEDIA, INC.', 73, 10);

      doc.setFontSize(25);
      doc.text('QC Inspection Sheet', 63, 20);

      doc.setFontSize(12);
      doc.text('Date, Time', 93, 25);

      doc.rect(15, 30, 180, 80);
      doc.rect(15, 120, 180, 45);
      doc.rect(15, 175, 180, 30);
      doc.rect(15, 215, 180, 30);
      doc.rect(15, 255, 180, 20);

      firstBox(doc);
      secondBox(doc);
      thirdBox(doc);
      fourthBox(doc);
      fifthBox(doc);

      input(doc);

      const pdfURL = doc.output('bloburl');
      const pdfWindow = window.open();
      pdfWindow.location.href = pdfURL;
    } catch (error) {
      console.error(error);
    }
  };

  function firstBox(doc) {
    doc.setFont('helvetica', 'bold');

    //First Row
    doc.rect(15, 30, 45, 5);
    doc.rect(60, 30, 30, 5);
    doc.rect(90, 30, 45, 5);
    doc.rect(135, 30, 60, 5);
    doc.text('ABS Product ID', 16, 34);
    doc.text('Order Master ID', 91, 34);

    //Second Row
    doc.rect(15, 35, 45, 5);
    doc.rect(60, 35, 135, 5);
    doc.text('Product Title', 16, 39);

    //Third Row
    doc.rect(15, 40, 45, 10);
    doc.rect(60, 40, 25, 10);
    doc.rect(85, 40, 5, 5);
    doc.rect(85, 45, 5, 5);
    doc.rect(90, 40, 25, 10);
    doc.rect(115, 40, 40, 5);
    doc.rect(115, 45, 40, 5);
    doc.rect(155, 40, 40, 5);
    doc.rect(155, 45, 40, 5);
    doc.text('Product Category / ', 16, 44);
    doc.text('Type', 16, 49);
    doc.text('D', 101, 44);
    doc.text('P', 101, 49);
    doc.text('Production ', 116, 44);
    doc.text('Make Silver(s) ', 116, 49);
    doc.text('Analyze Master ', 156, 44);
    doc.text('First Article ', 156, 49);
    doc.rect(139, 41, 3, 3);
    doc.rect(145, 46, 3, 3);
    doc.rect(188, 41, 3, 3);
    doc.rect(180, 46, 3, 3);

    //Fourth Row
    doc.rect(15, 50, 45, 10);
    doc.rect(60, 50, 25, 10);
    doc.rect(85, 50, 30, 10);
    doc.rect(115, 50, 40, 5);
    doc.rect(115, 55, 40, 5);
    doc.rect(155, 50, 40, 5);
    doc.rect(155, 55, 40, 5);
    doc.text('Order Quantity', 16, 56);
    doc.text('Customer', 62, 54);
    const textWidth = doc.getTextWidth('Customer');
    doc.line(62, 54, 62 + textWidth, 54);
    doc.text('Factory', 92, 54);
    const textWidth1 = doc.getTextWidth('Factory');
    doc.line(92, 54, 92 + textWidth1, 54);
    doc.text('OEM Product ID', 116, 54);
    doc.text('Customer Name', 116, 59);

    //Fifth Row
    doc.rect(15, 60, 45, 10);
    doc.rect(60, 60, 25, 10);
    doc.rect(85, 60, 30, 10);
    doc.rect(115, 60, 40, 5);
    doc.rect(115, 65, 40, 5);
    doc.rect(155, 60, 40, 5);
    doc.rect(155, 65, 40, 5);
    doc.text('Scheduled Ship', 16, 64);
    doc.text('Date / Time', 16, 69);
    doc.text('CD-ROM ETA:', 86, 66);
    const textWidth2 = doc.getTextWidth('CD-ROM ETA:');
    doc.line(86, 67, 86 + textWidth2, 67);
    doc.text('CD Manufacturer', 116, 64);
    doc.text('Customer PO #', 116, 69);

    //Sixth Row
    doc.rect(15, 70, 45, 5);
    doc.rect(60, 70, 135, 5);
    doc.text('OEM ID', 16, 74);

    //Seventh Row
    doc.rect(15, 75, 45, 20);
    doc.rect(60, 75, 135, 20);
    doc.text('Packaging', 16, 87);
    doc.text('Product Packaging Information', 61, 79);
    const textWidth3 = doc.getTextWidth('Product Packaging Information');
    doc.line(61, 80, 61 + textWidth3, 80);

    //Eighth Row
    doc.rect(15, 95, 45, 5);
    doc.rect(60, 95, 135, 5);
    doc.text('Packaging Notes', 16, 99);

    //Ninth Row
    doc.rect(15, 100, 140, 10);
    doc.rect(155, 100, 40, 10);
    doc.text('Final QC Inspection By: ______________________________________', 16, 108);
    doc.text('Date: ___________', 156, 108);
  }

  function secondBox(doc) {
    //First Row
    doc.rect(15, 120, 110, 5);
    doc.rect(125, 120, 70, 5);

    //Second Row
    doc.rect(15, 125, 80, 5);
    doc.rect(95, 125, 30, 5);
    doc.rect(125, 125, 50, 5);
    doc.rect(175, 125, 20, 5);

    //Third Row
    doc.rect(15, 130, 80, 5);
    doc.rect(95, 130, 30, 5);
    doc.rect(125, 130, 50, 5);
    doc.rect(175, 130, 20, 5);

    //Fourth Row
    doc.rect(15, 135, 80, 5);
    doc.rect(95, 135, 30, 5);
    doc.rect(125, 135, 50, 5);
    doc.rect(175, 135, 20, 5);

    //Fifth Row
    doc.rect(15, 140, 80, 5);
    doc.rect(95, 140, 30, 5);
    doc.rect(125, 140, 50, 5);
    doc.rect(175, 140, 20, 5);

    //Sixth Row
    doc.rect(15, 145, 110, 10);
    doc.rect(125, 145, 35, 10);
    doc.rect(160, 145, 35, 10);

    //Seventh Row
    doc.rect(15, 155, 145, 10);
    doc.rect(160, 155, 35, 10);

    doc.setFont('helvetica', 'bold');
    doc.text('CD-R Gold Master', 16, 124);
    doc.text('CD-R Silver Master', 126, 124);
    doc.text('Release Gold Master to CD-ROM Manufacturer', 16, 153);
    doc.text('YES ____', 126, 153);
    doc.text('NO ____', 161, 153);
    doc.text('Gold/Silver Master Inspection By:______________________________', 16, 163);
    doc.text('Date:________', 161, 163);

    doc.setFont('helvetica', 'normal');
    doc.text('Label name', 16, 129);
    doc.text('Label name', 126, 129);
    doc.text('Byte count', 16, 134);
    doc.text('Byte count', 126, 134);
    doc.text('Virus Check Pass', 16, 139);
    doc.text('Compares to Gold', 126, 139);
    doc.text('CDA Analysis Pass', 16, 144);
    doc.text('CDA Analysis Pass', 126, 144);
  }

  function thirdBox(doc) {
    //First Row
    doc.rect(15, 175, 180, 5);

    //Second Row
    doc.rect(15, 180, 60, 5);
    doc.rect(75, 180, 30, 5);
    doc.rect(105, 180, 60, 5);
    doc.rect(165, 180, 15, 5);
    doc.rect(180, 180, 15, 5);

    //Third Row
    doc.rect(15, 185, 60, 5);
    doc.rect(75, 185, 30, 5);
    doc.rect(105, 185, 75, 5);
    doc.rect(180, 185, 15, 5);

    //Fourth Row
    doc.rect(15, 190, 90, 5);
    doc.rect(105, 190, 45, 5);
    doc.rect(150, 190, 45, 5);

    //Fifth Row
    doc.rect(15, 195, 135, 10);
    doc.rect(150, 195, 45, 10);

    doc.setFont('helvetica', 'bold');
    doc.text('Incoming CD Inspection', 16, 179);
    doc.text('YES ____', 106, 194);
    doc.text('NO ____', 151, 194);
    doc.text('Date Inspection By:______________________________', 16, 203);
    doc.text('Date:_____________', 151, 203);

    doc.setFont('helvetica', 'normal');
    doc.text('Physical count of lot', 16, 184);
    doc.text('QC Samples To Pull / Pulled', 106, 184);
    doc.text('Label', 16, 189);
    doc.text('Byte Count', 106, 189);
    doc.text('Analyzer Report compares to Gold / Silver', 16, 194);
  }

  function fourthBox(doc) {
    //First Row
    doc.rect(15, 215, 20, 5);
    doc.rect(35, 215, 120, 5);
    doc.rect(155, 215, 20, 5);
    doc.rect(175, 215, 20, 5);

    //Second Row
    doc.rect(15, 220, 20, 5);
    doc.rect(35, 220, 40, 5);
    doc.rect(75, 220, 40, 5);
    doc.rect(115, 220, 40, 5);
    doc.rect(155, 220, 20, 5);
    doc.rect(175, 220, 20, 5);

    //Third Row
    doc.rect(15, 225, 20, 5);
    doc.rect(35, 225, 40, 5);
    doc.rect(75, 225, 40, 5);
    doc.rect(115, 225, 40, 5);
    doc.rect(155, 225, 20, 5);
    doc.rect(175, 225, 20, 5);

    //Fourth Row
    doc.rect(15, 230, 20, 5);
    doc.rect(35, 230, 40, 5);
    doc.rect(75, 230, 40, 5);
    doc.rect(115, 230, 40, 5);
    doc.rect(155, 230, 20, 5);
    doc.rect(175, 230, 20, 5);

    //Fifth Row
    doc.rect(15, 235, 130, 10);
    doc.rect(145, 235, 50, 10);

    doc.setFont('helvetica', 'bold');
    doc.text('CD-R', 16, 219);
    doc.text('YES ____', 156, 219);
    doc.text('NO ____', 176, 219);
    doc.text('CD-ROM', 16, 224);
    doc.text('PASS', 16, 229);
    doc.text('FAIL', 16, 234);
    doc.text('Physical Inspection By:_______________________', 16, 243);
    doc.text('Date:_______________', 146, 243);

    doc.setFont('helvetica', 'normal');
    doc.text('Recording Surface of each disc Visually Inspected', 36, 219);
    doc.text('Lacquer', 36, 224);
    doc.text('Clouding', 76, 224);
    doc.text('Mouse Bites', 116, 224);
    doc.text('Dimples', 156, 224);
    doc.text('Pits', 176, 224);
  }

  function fifthBox(doc) {
    //First Row
    doc.rect(15, 255, 60, 10);
    doc.rect(75, 255, 15, 10);
    doc.rect(90, 255, 15, 10);
    doc.rect(105, 255, 15, 10);
    doc.rect(120, 255, 15, 10);
    doc.rect(135, 255, 15, 10);
    doc.rect(150, 255, 15, 10);
    doc.rect(165, 255, 15, 10);
    doc.rect(180, 255, 15, 10);
    doc.setFont('helvetica', 'bold');
    doc.text('IMAGE QUALITY', 16, 262);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Correct', 76, 259);
    doc.text('Artwork', 76, 264);
    doc.text('OEM', 91, 259);
    doc.text('Part No', 91, 264);
    doc.text('Pms', 106, 259);
    doc.text('Match', 106, 264);
    doc.text('In', 121, 259);
    doc.text('Register', 121, 264);
    doc.text('Over', 136, 259);
    doc.text('Exposed', 136, 264);
    doc.text('Moire\'', 151, 259);
    doc.text('Pattern', 151, 264);
    doc.text('Heavy', 166, 259);
    doc.text('Print', 166, 264);
    doc.text('Contam.', 181, 259);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');

    //Second Row
    doc.rect(15, 265, 60, 5);
    doc.rect(75, 265, 15, 5);
    doc.rect(90, 265, 15, 5);
    doc.rect(105, 265, 15, 5);
    doc.rect(120, 265, 15, 5);
    doc.rect(135, 265, 15, 5);
    doc.rect(150, 265, 15, 5);
    doc.rect(165, 265, 15, 5);
    doc.rect(180, 265, 15, 5);
    doc.text('PASS', 16, 269);

    //Third Row
    doc.rect(15, 270, 60, 5);
    doc.rect(75, 270, 15, 5);
    doc.rect(90, 270, 15, 5);
    doc.rect(105, 270, 15, 5);
    doc.rect(120, 270, 15, 5);
    doc.rect(135, 270, 15, 5);
    doc.rect(150, 270, 15, 5);
    doc.rect(165, 270, 15, 5);
    doc.rect(180, 270, 15, 5);
    doc.text('FAIL', 16, 274);
  }

  function input(doc) {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    doc.text(product_id.toString(), 61, 34);
    doc.text(order_id.toString(), 136, 34);

    doc.text(productTitle, 61, 39);

    doc.text(productCategory, 61, 49);

    doc.text(customerOrderQuantity.toString(), 69, 59);
    doc.text(factoryOrderQuantity.toString(), 96, 59);
    doc.text(oemProductID.toString(), 156, 54);
    doc.text(companyNameSlice, 156, 59);

    doc.text(shipDateSlice, 61, 64);
    doc.text(shipTime, 61, 69);

    doc.text(productNotes1.toString(), 61, 84);
    doc.text(productNotes2.toString(), 61, 89);
    doc.text(productNotes3.toString(), 61, 94);

    doc.text(packagingNotesSlice.toString(), 61, 99);
  }

  return (

    <div className='block9'>
      <button type='button' onClick={fetchQCInspectionData} className='HomePageButton'>
        Fetch Orders
      </button>
    </div>

  );
}

export default QCInspection;
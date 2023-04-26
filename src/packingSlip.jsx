import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import jsPDF from 'jspdf';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import 'jspdf-autotable';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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



function PackingSlip({ match }) {

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetchPackingSlipData();
    }, []);

    const fetchPackingSlipData = async () => {
    
        try {
            const response = await Axios.get('http://localhost:3001/api/packingSlip');
            setOrders(response.data);
        }catch (error) {
            console.error(error);
        }
    };

    const generatePDF = () => {
        const docDefinition = {
            content: [
                {
                    columns: [
                        {
                            stack: [
                                {
                                    text: 'ABSOLUTE MEDIA, INC.',
                                    fontSize: 22,
                                    bold: true,
                                    margin: [0, 0, 0, 10],
                                    style: 'header'
                                },
                                {
                                    text: ['3350 Victor Ct. Santa Clara, CA 95054\n',
                                       'Tel: (408) 970-3283  Fax: (408) 764-2454\n\n\n\n']
                                },
                            ],
                        },
                        {
                            text: 'Packing Slip #',
                            fontSize: 22,
                            bold: true,
                            alignment: 'right',
                            margin: [0, 0, 0, 10],
                            width: '*',
                        },
                    ],
                },
                {
                    text: 'Ship To:\n',
                    bold: true
                },
                {
                    columns:[
                        {
                            stack:[
                                {
                                    text: orders[0].company,
                                },
                                {
                                    text: orders[0].address,
                                },
                                {
                                    text: orders[0].city + ", " + orders[0].state + " " + orders[0].zip,
                                },
                            ],
                            
                        },
                        {   
                            stack: [
                                {
                                    text: "Order Master ID: " + orders[0].orderMaster,
                                },
                                {
                                    text: "Ship Date: " + orders[0].shipDate,
                                },
                                {
                                    text: "Order Date: " + orders[0].orderDate,
                                },
                                {
                                    text: "P.O. " + orders[0].po,
                                },
                                {
                                    text: "Saturday Delivery? " + orders[0].saturdayDelivery,
                                },
                                {
                                    text: "Packing Slip Notes: " + orders[0].notes,
                                },
                            ],
                        }
                    ],
                },
                {
                    text: 'Details',
                    fontSize: 18,
                    bold: true,
                    margin: [0, 20, 0, 10],
                },
                {
                    table: {
                        headerRows: 1,
                        widths: [50, '*', '*', '*', '*'],
                        body: [
                            [
                                { text: 'Quantity', bold: true },
                                { text: 'ABS P/N', bold: true },
                                { text: 'Product Title', bold: true },
                                { text: 'OEM P/N', bold: true },
                                { text: 'Product', bold: true },
                            ],
                            ...orders.map((order) => [
                                order.quantity,
                                order.abspn,
                                order.productTitle,
                                order.oem,
                                order.product,
                            ]),
                        ],
                    },
                    margin: [0, 0, 0, 40],
                },
                {
                    text: "=============================================================================\n\n\n",
                    margin: [0, 300 * 0.67, 0, 0],
                },
                {
                    text: "Recipient Signature _____________________________ Date ___________ Time _____\n\n\n"
                },
                {
                    text: "Print Name _____________________________\n\n\n"
                },
            ],
        };
        pdfMake.createPdf(docDefinition).open();
    };

    return (
        orders.length > 0 && (
            <div className='block8'>
                <button type='button' onClick={generatePDF} className='HomePageButton'>
                    Generate Packing Slip
                </button>
            </div>
        )
    );
}

export default PackingSlip;
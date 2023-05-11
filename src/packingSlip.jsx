import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useParams, Link } from 'react-router-dom';
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
    const [packingSlipData, setPackingSlipData] = useState(null);
    const [showPdf, setShowPdf] = useState(false);
    const { packing_slip_master_id } = useParams();

    const fetchPackingSlipData = async () => {
        try {
            const response = await Axios.get(`http://localhost:3001/api/packingSlip/${packing_slip_master_id}`);
            const packingSlipData = response.data;

            var docDefinition = {
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
                            stack: [
                                {
                                    text: 'Packing Slip #',
                                    fontSize: 22,
                                    bold: true,
                                    alignment: 'right',
                                    margin: [0, 0, 0, 10],
                                    width: '*',
                                },
                                {
                                    text: "ABSO -" + packingSlipData.packing_slip_master_id,
                                    alignment: 'right',
                                    margin: [0, 0, 0, 10]
                                },
                            ],
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
                                    text: packingSlipData?.company_name ?? 'N/A',
                                },
                                {
                                    text: (packingSlipData?.address ?? 'N/A'),
                                },
                                {
                                    text: packingSlipData.city + (packingSlipData.state ? ", " + packingSlipData.state : "") + " " + packingSlipData.zip,

                                },
                            ],
                            
                        },
                        {   
                            stack: [
                                {
                                    text: "Order Master ID: " + (packingSlipData?.order_id ?? 'N/A'),
                                },
                                {
                                    text: "Ship Date: " + packingSlipData.ship_date.slice(0,10),
                                },
                                {
                                    text: "Order Date: " + packingSlipData.order_date.slice(0,10),
                                },
                                {
                                    text: "P.O. " + (packingSlipData?.po ?? 'N/A'),
                                },
                                {
                                    text: "Saturday Delivery? " + (packingSlipData?.saturday_delivery ?? 'N/A'),
                                },
                                {
                                    text: "Packing Slip Notes: " + (packingSlipData?.notes ?? 'N/A'),
                                },
                            ],
                        }
                    ],
                },
                {
                    text: '\n\nDetails',
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
                                    [
                                        { text: packingSlipData.quantity},
                                        { text: packingSlipData.abspn},
                                        { text: packingSlipData.product_title},
                                        { text: packingSlipData.oem},
                                        { text: packingSlipData.product},
                                    ]

                                    
                                ],
                            },
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
        
        } catch (error) {
            console.log(error);
        }  
    };

    return (
        <div className='block8'>
            <button type='button' onClick={fetchPackingSlipData} className='HomePageButton'>
                View PDF
            </button>
            <Link to="/">
                <button type='button' className='HomePageButton'>
                    Home
                </button>
            </Link>
        </div>
        
    );
}
export default PackingSlip;
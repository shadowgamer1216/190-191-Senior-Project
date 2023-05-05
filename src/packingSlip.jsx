import React, { useState, useEffect } from 'react';
import Axios from 'axios';
//import jsPDF from 'jspdf';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useParams } from 'react-router-dom';


import 'jspdf-autotable';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
//import { async } from 'q';
//import { text } from 'pdfkit';
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
                            text: 'Packing Slip # \n',
                            fontSize: 22,
                            bold: true,
                            alignment: 'right',
                            margin: [0, 0, 0, 10],
                            width: '*',
                        },
                        {
                            text: packingSlipData.packing_slip_id,
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
                                    text: packingSlipData.company_name,
                                },
                                {
                                    text: packingSlipData.address,
                                },
                                {
                                    text: packingSlipData.city + (packingSlipData.state ? ", " + packingSlipData.state : "") + " " + packingSlipData.zip,

                                },
                            ],
                            
                        },
                        {   
                            stack: [
                                {
                                    text: "Order Master ID: " + packingSlipData.order_id,
                                },
                                {
                                    text: "Ship Date: " + packingSlipData.ship_date.slice(0,10),
                                },
                                {
                                    text: "Order Date: " + packingSlipData.order_date.slice(0,10),
                                },
                                {
                                    text: "P.O. " + packingSlipData.po,
                                },
                                {
                                    text: "Saturday Delivery? " + packingSlipData.saturday_delivery,
                                },
                                {
                                    text: "Packing Slip Notes: " + packingSlipData.notes,
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
                // {
                //     table: {
                //         headerRows: 1,
                //         widths: [50, '*', '*', '*', '*'],
                //         body: [
                //             [
                //                 { text: 'Quantity', bold: true },
                //                 { text: 'ABS P/N', bold: true },
                //                 { text: 'Product Title', bold: true },
                //                 { text: 'OEM P/N', bold: true },
                //                 { text: 'Product', bold: true },
                //             ],
                //             ...packingSlipData.map((packingSlipData) => [
                //                 packingSlipData.quantity,
                //                 packingSlipData.abspn,
                //                 packingSlipData.productTitle,
                //                 packingSlipData.oem,
                //                 packingSlipData.product,
                //             ]),
                //         ],
                //     },
                //     margin: [0, 0, 0, 40],
                // },
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
            Fetch Orders
          </button>
        </div>
      );
    }

// const  PackingSlip = ({ match }) => { 
//     const [orders, setOrders] = useState(null);
//     const { packing_slip_master_id } = useParams();
    
    
//     var company_name = orders?.company_name ?? '';
//     var address = orders?.address ?? '';
//     var city = orders?.city ?? '';
//     var state = orders?.state ?? '';
//     var zip = orders?.zip ?? '';
//     var order_id = orders?.order_id ?? '';
//     var ship_date = orders?.ship_date ?? '';
//     var order_date = orders?.order_date ?? '';
//     var po = orders?.po ?? '';
//     var saturday_delivery = orders?.saturday_delivery ?? '';
//     var notes = orders?.notes ?? '';

//     useEffect(() => {
//         if(packing_slip_master_id){
//             Axios.get(`http://localhost:3001/api/packingSlip/${packing_slip_master_id}`)
//             .then((response) => {
//                 setOrders(response.data);
//                 //console.log("response: " + JSON.stringify(response.data));
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//         }
//     },[packing_slip_master_id]);

//     console.log("company name: " + company_name);
//     //console.log("orders: " + JSON.stringify(orders));

//     const generatePDF = () => {
//         const docDefinition = {
//             content: [
//                 {
//                     columns: [
//                         {
//                             stack: [
//                                 {
//                                     text: 'ABSOLUTE MEDIA, INC.',
//                                     fontSize: 22,
//                                     bold: true,
//                                     margin: [0, 0, 0, 10],
//                                     style: 'header'
//                                 },
//                                 {
//                                     text: ['3350 Victor Ct. Santa Clara, CA 95054\n',
//                                        'Tel: (408) 970-3283  Fax: (408) 764-2454\n\n\n\n']
//                                 },
//                             ],
//                         },
//                         {
//                             text: 'Packing Slip #',
//                             fontSize: 22,
//                             bold: true,
//                             alignment: 'right',
//                             margin: [0, 0, 0, 10],
//                             width: '*',
//                         },
//                     ],
//                 },
//                 {
//                     text: 'Ship To:\n' + company_name,
//                     bold: true
//                 },
                
//                 // {
//                 //     columns:[
//                 //         {
//                 //             stack:[
//                 //                 {
//                 //                     text: company_name,
//                 //                 },
//                 //                 {
//                 //                     text: address,
//                 //                 },
//                 //                 {
//                 //                     text: city + (state ? ", " + state : "") + " " + zip,

//                 //                 },
//                 //             ],
                            
//                 //         },
//                 //         {   
//                 //             stack: [
//                 //                 {
//                 //                     text: "Order Master ID: " + order_id,
//                 //                 },
//                 //                 {
//                 //                     text: "Ship Date: " + ship_date,
//                 //                 },
//                 //                 {
//                 //                     text: "Order Date: " + order_date,
//                 //                 },
//                 //                 {
//                 //                     text: "P.O. " + po,
//                 //                 },
//                 //                 {
//                 //                     text: "Saturday Delivery? " + saturday_delivery,
//                 //                 },
//                 //                 {
//                 //                     text: "Packing Slip Notes: " + notes,
//                 //                 },
//                 //             ],
//                 //         }
//                 //     ],
//                 // },
//                 // {
//                 //     text: 'Details',
//                 //     fontSize: 18,
//                 //     bold: true,
//                 //     margin: [0, 20, 0, 10],
//                 // },
//                 // {
//                 //     table: {
//                 //         headerRows: 1,
//                 //         widths: [50, '*', '*', '*', '*'],
//                 //         body: [
//                 //             [
//                 //                 { text: 'Quantity', bold: true },
//                 //                 { text: 'ABS P/N', bold: true },
//                 //                 { text: 'Product Title', bold: true },
//                 //                 { text: 'OEM P/N', bold: true },
//                 //                 { text: 'Product', bold: true },
//                 //             ],
//                 //             ...orders.map((order) => [
//                 //                 order.quantity,
//                 //                 order.abspn,
//                 //                 order.productTitle,
//                 //                 order.oem,
//                 //                 order.product,
//                 //             ]),
//                 //         ],
//                 //     },
//                 //     margin: [0, 0, 0, 40],
//                 // },
//                 {
//                     text: "=============================================================================\n\n\n",
//                     margin: [0, 300 * 0.67, 0, 0],
//                 },
//                 {
//                     text: "Recipient Signature _____________________________ Date ___________ Time _____\n\n\n"
//                 },
//                 {
//                     text: "Print Name _____________________________\n\n\n"
//                 },
//             ],
//         };
//         pdfMake.createPdf(docDefinition).open();
//     };

//     return (
//         orders && orders.length > 0 && (
//             <div className='block8'>
//                 <button type='button' onClick={generatePDF} className='HomePageButton'>
//                     Generate Packing Slip
//                 </button>
//             </div>
//         )
//     );
// }

export default PackingSlip;
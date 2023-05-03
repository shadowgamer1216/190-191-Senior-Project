import React, { useState } from 'react';
import Axios from 'axios';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function Invoice({ match }) {
  const [invoiceData, setInvoiceData] = useState(null);
  const [showPdf, setShowPdf] = useState(false);

  const fetchInvoiceData = async () => {
    try {
      const response = await Axios.get('http://localhost:3001/api/orders');
      const orders = response.data;

      var docDefinition = {
        content: [
          {
            alignment: 'justify',
            columns:[
          {
            text: 'ABSOLUTE MEDIA, INC.',
            style: 'header',
          },
          {
            text: 'Invoice # ABSO-' + orders[0].orderID,
            style: 'header',
          },
        ]
      },
        
          {
            text: [
              '3350 Victor Ct. Santa Clara, CA 95054\n',
              'Tel: (408) 970-3283  Fax: (408) 764-2454\n\n\n\n',
            ],
          },
          {
            alignment: 'justify',
            columns: [

              {
              text: 'Bill To\n',
              bold: true,
              },
             
              {
                text: 'Ship To',
                bold: true
              }
            ],
          },
          {
            alignment: 'justify',
            columns: [

              {
                text: `${orders[0].company}\n${orders[0].company_address}`,
                style: 'body',
                },
             
              {
                text: `${orders[0].customer}\n${orders[0].customer_address}\n\n`,
                style: 'body'
              }
            ],
          },


          
          {
            table: {
              widths: [ '*', '*', '*', '*' ],

              body: [
                [
                  {
                    border: [false, false, false, false],
                    text: 'Invoice Date',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: 'Invoice Date here'
                  },
                  {
                    border: [false, false, false, false],
                    text: 'P.O.',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: 'PO here'
                  },
                ],
                [
                  {
                    border: [false, false, false, false],
                    text: 'Terms',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: 'Terms here'
                  },
                  {
                    border: [false, false, false, false],
                    text: 'ABS Order Number',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: 'ABS Order Number'
                  },
                ],
                [
                  {
                    border: [false, false, false, false],
                    text: 'FOB',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: 'FOB here'
                  },
                  {
                    border: [false, false, false, false],
                    text: 'ABS Sales Order Date',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: 'ABS Sales Order Date'
                  },
                ],
                [
                  {
                    border: [false, false, false, false],
                    text: 'Ship Via',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: 'Shipping here'
                  },
                  {
                    border: [false, false, false, false],
                    text: 'Order Master ID',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: 'Order Master ID here'
                  },
                ],
                [
                  {
                    border: [false, false, false, false],
                    text: 'Ship Date',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: 'Ship Date here\n\n'
                  },
                  {
                    border: [false, false, false, false],
                    text: ''
                  },
                  {
                    border: [false, false, false, false],
                    text: ''
                  }
                  
                ],
              ],
              style: 'InvoiceTable'
            }
          },
          {
            table: {
              body: [
                [
                  {
                  bold: true,
                  text: 'Quantity'
                  },
                  {
                  bold: true,
                  text: 'Item Description'
                  },
                  {
                  bold: true,
                  text: 'Unit Price'
                  },
                  {
                  bold: true,
                  text: 'Total Price'
                  }
                  
                ],
                [
                  'quantity goes here',
                  'Item description here',
                  'prices for items',
                  'total here',
                ],
                [
                  {
                    border: [true, true, false, true],
                    text: ''
                  },
                  {
                    border: [false, true, false, true],
                    text: ''
                  },
                  {
                    border: [false, true, false, true],
                    text: ''
                  },
                    {
                      border: [false, true, true, true],
                      table: {
                        body: [
                          ['Subtotal', 'subtotal here'],
                          ['Grand Total', 'grandtotal here'],
                        ],
                      },
                    },
                ],
              ],
            },
          },
        ],

        styles: {
          header: {
            fontSize: 18,
            bold: true,
          },
          
        },
      };

      pdfMake.createPdf(docDefinition).open();

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


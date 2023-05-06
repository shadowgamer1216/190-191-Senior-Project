import React, { useState } from 'react';
import Axios from 'axios';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function Invoice({ orderID }) {
  var tableRows = [];
  
  var rows = [];

  const fetchInvoiceData = async () => {
    try {
      const response = await Axios.get('http://localhost:3001/api/invoice');///' + orderID.toString());
      const orders = response.data;
      orders[0].customer ??= ''
      orders[0].customer_address ??= ''
      orders[0].customer_city ??= ''
      orders[0].customer_state ??= ''
      orders[0].customer_zip ??= ''
      orders[0].shipping ??= ''
      orders[0].shipping_address ??= ''
      orders[0].shipping_city ??= ''
      orders[0].shipping_state ??= ''
      orders[0].shipping_zip ??= ''
      orders[0].invoice_date ??= ''
      orders[0].terms ??= ''
      orders[0].fob ??= ''
      orders[0].ship_via ??= ''
      orders[0].ship_date ??= ''
      orders[0].po ??= ''
      orders[0].product_id ??= ''
      orders[0].product_title ??= ''
      orders[0].oem_pn ??= ''
      orders[0].quantity1 ??= ''
      orders[0].quantity2 ??= ''
      orders[0].quantity3 ??= ''
      orders[0].quantity4 ??= ''
      orders[0].quantity5 ??= ''
      orders[0].quantity6 ??= ''
      orders[0].quantity7 ??= ''
      orders[0].quantity8 ??= ''
      orders[0].quantity9 ??= ''
      orders[0].quantity10 ??= ''
      orders[0].desctiption1 ??= ''
      orders[0].desctiption2 ??= ''
      orders[0].desctiption3 ??= ''
      orders[0].desctiption4 ??= ''
      orders[0].desctiption5 ??= ''
      orders[0].desctiption6 ??= ''
      orders[0].desctiption7 ??= ''
      orders[0].desctiption8 ??= ''
      orders[0].desctiption9 ??= ''
      orders[0].desctiption10 ??= ''
      orders[0].price1 ??= ''
      orders[0].price2 ??= ''
      orders[0].price3 ??= ''
      orders[0].price4 ??= ''
      orders[0].price5 ??= ''
      orders[0].price6 ??= ''
      orders[0].price7 ??= ''
      orders[0].price8 ??= ''
      orders[0].price9 ??= ''
      orders[0].price10 ??= ''
      orders[0].totPrice1 ??= ''
      orders[0].totPrice2 ??= ''
      orders[0].totPrice3 ??= ''
      orders[0].totPrice4 ??= ''
      orders[0].totPrice5 ??= ''
      orders[0].totPrice6 ??= ''
      orders[0].totPrice7 ??= ''
      orders[0].totPrice8 ??= ''
      orders[0].totPrice9 ??= ''
      orders[0].totPrice10 ??= ''

      var tableTitle = [{ text: 'Quantity', colSpan: 1}, { text: 'Item Description', colSpan: 1},{text: 'Unit Price', colSpan: 1},{ text: 'Total Price', colSpan: 1}]


      if(orders[0].product_id){
        var title = [['ABS Product ID: ' + orders[0].product_id + '\nProduct Title: ' + orders[0].product_title + '\nOEM P/N: ' + orders[0].oem_pn + '\nProduct: ' + orders[0].desctiption1]]
        rows = [orders[0].quantity1, title, orders[0].price1, orders[0].totPrice1]
        tableRows.push(rows);
      }
      if(orders[0].quantity2){
        rows = [orders[0].quantity2, orders[0].desctiption2, orders[0].price2, orders[0].totPrice2]
        tableRows.push(rows)
      }

      if(orders[0].quantity3){
        rows = [orders[0].quantity3, orders[0].desctiption3, orders[0].price3, orders[0].totPrice3]
        tableRows.push(rows)
      }
      if(orders[0].quantity4){
        rows = [orders[0].quantity4, orders[0].desctiption4, orders[0].price4, orders[0].totPrice4]
        tableRows.push(rows)
      }
      if(orders[0].quantity5){
        rows = [orders[0].quantity5, orders[0].desctiption5, orders[0].price5, orders[0].totPrice5]
        tableRows.push(rows)

      }
      if(orders[0].quantity6){
        rows = [orders[0].quantity6, orders[0].desctiption6, orders[0].price6, orders[0].totPrice6]
        tableRows.push(rows)

        
      }
      if(orders[0].quantity7){
        rows = [orders[0].quantity7, orders[0].desctiption7, orders[0].price7, orders[0].totPrice7]
        tableRows.push(rows)

      }
      if(orders[0].quantity8){
        rows = [orders[0].quantity8, orders[0].desctiption8, orders[0].price8, orders[0].totPrice8]
        tableRows.push(rows)

      }
      if(orders[0].quantity9){
        rows = [orders[0].quantity9, orders[0].desctiption9, orders[0].price9, orders[0].totPrice9]
        tableRows.push(rows)

      }
      if(orders[0].quantity10){
        rows = [orders[0].quantity10, orders[0].desctiption10, orders[0].price10, orders[0].totPrice10]
        tableRows.push(rows)

      }
      var customerCity = '';
      var shippingCity = '';
      if(orders[0].customer_city){
      customerCity = orders[0].customer_city + ","
      }
      if(orders[0].shipping_city){
      var shippingCity = orders[0].shipping_city + ","
      }


    








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
            text: 'Invoice # ABSO-' + orders[0].invoiceID,
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
                text: `${orders[0].customer}\n${orders[0].customer_address}\n${customerCity} ${orders[0].customer_state} ${orders[0].customer_zip}`,
                style: 'body',
                },
             
              {
                text: `${orders[0].shipping}\n${orders[0].shipping_address}\n${shippingCity} ${orders[0].shipping_state} ${orders[0].shipping_zip}`,
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
                    text: orders[0].invoice_date
                  },
                  {
                    border: [false, false, false, false],
                    text: 'P.O.',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: orders[0].po
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
                    text: orders[0].terms
                  },
                  {
                    border: [false, false, false, false],
                    text: 'ABS Order Number',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: orders[0].order_num
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
                    text: orders[0].fob
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
              widths: [ '*', '*', '*', '*' ],
              body: [
                
                tableTitle,
                ...tableRows,
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
                          
                          [{text: 'Subtotal'},
                          {text: 'subtotal here'}],
                          [{text: 'Grand Total'}, 
                          {text: 'grandtotal here'}],
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


 

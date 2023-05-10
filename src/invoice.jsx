import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Link, useNavigate } from "react-router-dom"
import Select from "react-select";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function Invoice({handleLogout}) {
  var tableRows = [];
  const [orderID, setOrderID] = useState('');
  const [orders, setOrders] = useState([]); 
  var rows = [];
  const customStyle = {
    control: base => ({
        ...base,
        height: 38,
        minHeight: 38,
        fontSize: '16px',
        backgroundColor: '#E2EAFF',
    }),
    valueContainer: (base, state) => ({
        ...base,
        borderWidth: 1,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        paddingLeft: 10,
        paddingBottom: 5,
    }),
    option: base => ({
        ...base,
        fontSize: '14px',
    }),
    menuPortal: (base) => ({
        ...base,
        zIndex: 9999,
    }),
    placeholder: (base, state) => ({
        ...base,
        overflow: 'hidden',
    }),
};

  const navigate = useNavigate();

  const routeChange = () => {
    let path = '/login';
    navigate(path);
};

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (!authToken) {
        routeChange()
    }
    
     Axios.get('http://localhost:3001/api/getinvoices')
     .then(response => {
      const options = response.data.map(option => {
        return {value: option.order_num, label: option.order_num};
      });
      setOrders(options);
      console.log(orders)

     })
     .catch(error => {
      console.log(error)
     });

}, []);
    
  
    const fetchInvoiceData = async (orderID) => {
      try {
      const response = await Axios.get('http://localhost:3001/api/invoice', {params: {order: orderID}});
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
      orders[0].assemblyCharge ??= ''
      orders[0].printingCharge ??= ''
      orders[0].setupCharge ??= ''
      orders[0].screensCharge ??= ''
      orders[0].taxRate ??= ''
      orders[0].tax ??= ''
      orders[0].freightCharge ??= ''


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
      if(orders[0].assemblyCharge){
        rows = ['', 'Assembly Charge', '', orders[0].assemblyCharge]
        tableRows.push(rows)
      }
      if(orders[0].printingCharge){
        rows = ['', 'Printing Charge', '', orders[0].printingCharge]
        tableRows.push(rows)
      }
      if(orders[0].setupCharge){
        rows = ['', 'Setup Charge', '', orders[0].setupCharge]
        tableRows.push(rows)
      }
      if(orders[0].screensCharge){
        rows = ['', 'Screens Charge', '', orders[0].screensCharge]
        tableRows.push(rows)
      }
      if(orders[0].freightCharge){
        rows = ['', 'freight Charge', '', orders[0].freightCharge]
        tableRows.push(rows)
      }
      if(orders[0].taxRate){
        rows = ['', 'Tax Rate', (orders[0].taxRate * 100) + '%', orders[0].tax]
        tableRows.push(rows)
      }
      var customerCity = '';
      var shippingCity = '';
      if(orders[0].customer_city){
      customerCity = orders[0].customer_city + ","
      }
      if(orders[0].shipping_city){
      shippingCity = orders[0].shipping_city + ","
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
                    text: orders[0].terms,
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
                    text: orders[0].order_date
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
                    text: orders[0].ship_via
                  },
                  {
                    border: [false, false, false, false],
                    text: 'Order ID',
                    bold: true,

                  },
                  {
                    border: [false, false, false, false],
                    text: 'ABSO-' + orders[0].order_num
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
                    text: orders[0].ship_date + '\n\n'
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
                          {text: '$' + orders[0].SubTotal}],
                          [{text: 'Grand Total'}, 
                          {text: '$' + orders[0].GrandTotal}],
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
    <div className="page">

            <nav className="navbar navbar-expand-lg navbar-dark bg-maroon">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <label className="navbar-brand">ABSOLUTE MEDIA, INC.</label>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                    </div>
                </div>

                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            </nav>
            <div className="container p-5">

            <div className="page-headers">
                    <h2>Invoice</h2>
                </div>

              <div className="form-row">
                        <label htmlFor="orderID" className="col-md-3 col-form-label"><h4>Order ID <span style={{ color: 'red' }}>*</span></h4></label>
                        <div className="input-group input-group mb-3 col-md-8">
                            <div className="form-control p-0">
                                <Select onChange={(e) => setOrderID(e.value)} className="react-select" menuPortalTarget={document.body} styles={customStyle} value={orders.filter(function(option) {
                                    return option.value === orderID;
                                })} id="orderID" required options={orders}/>
                            </div>
                        </div> 
                        
                    </div>

                    <div>
                        <button  type='button' onClick={() => fetchInvoiceData(orderID)} className='HomePageButton'>
                          Create Invoice
                        </button>
                    </div>   
                                        
                    </div>  
                                                      
                    <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm">
                            <label>Absolute Media, Inc.</label>
                        </div>
                        <div className="col-sm">
                            <label>3350 Victor Ct. Santa Clara, CA 95054</label>
                        </div>
                        <div className="col-sm">
                            <label>(408) 970-3283</label>
                        </div>
                    </div>
                </div>
            </footer>
  </div>

  
  );

}

export default Invoice;


 

    import React, { useState, useEffect } from 'react';
    import Axios from 'axios';
    import pdfMake from 'pdfmake/build/pdfmake';
    import pdfFonts from 'pdfmake/build/vfs_fonts';
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    function JobOrder({ match }) {

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
      //const companyNameSlice = companyName.slice(0, 18);
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
      // const productNotes1 = splitStrings[0];
      // const productNotes2 = splitStrings[1];
      // const productNotes3 = splitStrings[2];
    
      const packagingNotes = productData?.packaging_notes ?? '';
      //const packagingNotesSlice = packagingNotes.slice(0, 70);

      const fetchJobOrderData = async () => {
      
          try {

          var docDefinition = {
            content: [
              {
                alignment: 'justify',
                columns:[
              {
                fontSize: 18,
                bold: true,
                text: 'ABSOLUTE MEDIA, INC.',
              },
              {
                fontSize: 18,
                bold: true,
                text: 'Job Order Sheet',
              },
            ]
          },

          {
            table: {
              widths: ['*', '*', '*', '*', '*'],
              heights: [0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 75],
              body: [
                [ //First Row
                  {
                    bold: true,
                    text: 'ABS FG Product PN',
                  },
                  {
                    text: product_id,
                    margin: [0, 0, 0, 0]
                  },
                  {
                    bold: true,
                    text: 'Order Master ID'
                  },
                  {
                    colSpan: 2,
                    text: order_id,
                    margin: [0, 0, 0, 0]
                  },
                  ''
                ],
                [ //Second Row
                  {
                    bold: true,
                    text: 'FG Product Title'
                  },
                  {
                    colSpan: 4,
                    text: productTitle,
                    margin: [0, 0, 0, 0]
                  },
                  '',
                  '',
                  ''
                ],
                [ //Third Row
                  {
                    bold: true,
                    rowSpan: 2,
                    text: 'FG Product Category / Type'
                  },
                  {
                    rowSpan: 2,
                    text: productCategory,
                    margin: [0, 0, 0, 0]
                  },
                  {
                    text: ''
                  },
                  {
                    bold: true,
                    rowSpan: 2,
                    text: 'Production ',
                  },
                  {
                    bold: true,
                    rowSpan: 2,
                    text: 'First Article '
                  }
                ],
                [ //Fourth Row
                  '', '', { text: '' }, '', ''
                ],
                [ //Fifth Row
                  {
                    bold: true,
                    rowSpan: 2,
                    text: 'Order Quantity'
                  },
                  {
                    border: [true, true, true, false],
                    bold: true,
                    decoration: 'underline',
                    text: 'Customer'
                  },
                  {
                    border: [true, true, true, false],
                    bold: true,
                    decoration: 'underline',
                    text: 'Factory'
                  },
                  {
                    bold: true,
                    text: 'OEM Product ID'
                  },
                  {
                    text: oemProductID,
                    margin: [0, 0, 0, 0]
                  }
                ],
                [ //Sixth Row
                  '',
                  {
                    border: [true, false, true, true],
                    text: customerOrderQuantity,
                    margin: [0, 0, 0, 0]
                  },
                  {
                    border: [true, false, true, true],
                    text: factoryOrderQuantity,
                    margin: [0, 0, 0, 0]
                  },
                  {
                    bold: true,
                    text: 'Customer Name'
                  },
                  {
                    text: companyName,
                    margin: [0, 0, 0, 0]
                  }
                ],
                [ //Seventh Row
                  {
                    bold: true,
                    rowSpan: 2,
                    text: 'Scheduled Ship Date / Time'
                  },
                  {
                    border: [true, true, true, false],
                    text: shipDateSlice,
                    margin: [0, 0, 0, 0]
                  },
                  {
                    border: [true, true, true, false],
                    bold: true,
                    rowSpan: 2,
                    decoration: 'underline',
                    text: 'CD-ROM ETA:'
                  },
                  {
                    bold: true,
                    text: 'Customer PO #'
                  },
                  {
                    text: '',
                    margin: [0, 0, 0, 0]
                  }
                ],
                [ //Eighth Row
                  '',
                  {
                    border: [true, false, true, true],
                    text: shipTime,
                    margin: [0, 0, 0, 0]
                  },
                  '',
                  {
                    bold: true,
                    text: 'CD Manufacturer'
                  },
                  {
                    text: '',
                    margin: [0, 0, 0, 0]
                  }
                ],
                [ //Ninth Row
                  {
                    bold: true,
                    text: 'OEM ID'
                  },
                  {
                    colSpan: 4,
                    text: '',
                    margin: [0, 0, 0, 0]
                  },
                  '',
                  '',
                  ''
                ],
                [ //Tenth Row
                  {
                    bold: true,
                    rowSpan: 2,
                    text: 'Packaging',
                  },
                  {
                    border: [true, true, true, false],
                    bold: true,
                    decoration: 'underline',
                    colSpan: 4,
                    text: 'Product Packaging Information'
                  },
                  '',
                  '',
                  '',
                ],
                [ //Eleventh Row
                  '',
                  {
                    border: [true, false, true, true],
                    colSpan: 4,
                    text: productPackagingNotes,
                    margin: [0, 0, 0, 0],
                  },
                  '',
                  '',
                  '',
                ],
                [ //Twelvth Row
                  {
                    bold: true,
                    text: 'Packaging Notes'
                  },
                  {
                    colSpan: 4,
                    text: packagingNotes,
                    margin: [0, 0, 0, 0,]
                  },
                  '',
                  '',
                  ''
                ],
                [ //Thirteenth Row
                  {
                    bold: true,
                    text: 'Shipping Instructions',
                    margin: [0, 0, 0, 0]
                  },
                  {
                    colSpan: 2,
                    text: '',
                    margin: [0, 0, 0, 0]
                  },
                  '',
                  {
                    bold: true,
                    text: 'Ship Via'
                  },
                  {
                    text: '',
                    margin: [0, 0, 0, 0]
                  }
                ],
                [ //Fourteenth Row
                  {
                    alignment: 'center',
                    bold: true,
                    colSpan: 5,
                    text: 'Job Order Notes'
                  },
                  '',
                  '',
                  '',
                  ''
                ]
              ],
            }
          },
          {
            table: {
              widths: ['*', '*'],
              heights: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
              body: [
                [ { text: '' }, { text: '' } ],
                [ { text: '' }, { text: '' } ],
                [ { text: '' }, { text: '' } ],
                [ { text: '' }, { text: '' } ],
                [ { text: '' }, { text: '' } ],
                [ { text: '' }, { text: '' } ],
                [ { text: '' }, { text: '' } ],
                [ { text: '' }, { text: '' } ],
                [ { text: '' }, { text: '' } ],
                [ { text: '' }, { text: '' } ]
              ]
            }
          }
        ],
        }


          pdfMake.createPdf(docDefinition).open();

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
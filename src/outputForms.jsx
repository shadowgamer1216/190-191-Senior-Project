import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";
import Select from "react-select";

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


const OutputForms = ({ handleLogout }) => {

    const navigate = useNavigate();

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

    const [shippingID, setShippingID] = useState(null);
    const [shippingOptions, setShippingOptions] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getShippingData')
            .then(response => {
                const options = response.data.map(option => {
                    return { value: option.shipping_id, label: option.shipping_id + " — " + option.company_name };
                });
                setShippingOptions(options);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const shipping_id = shippingID;

    const [shippingData, setShippingData] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/shipping/${shipping_id}`)
            .then(response => {
                setShippingData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [shipping_id]);

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

    const companyName = shippingData?.company_name ?? '';
    const companyNameSlice = companyName.slice(0, 18);
    const shipDate = shippingData?.request_ship_date ?? '';
    const shipDateSlice = shipDate.slice(0, 10);
    const shipTime = shippingData?.request_ship_time ?? '';
    const productPackagingNotes = productData?.product_notes ?? '';
    const productNotesSlice = productPackagingNotes.slice(0, 320);
    const packagingNotes = productData?.packaging_notes ?? '';
    const packagingNotesSlice = packagingNotes.slice(0, 80);
    const shippingInstructions = shippingData?.notes ?? '';
    const shippingInstructionsSlice= shippingInstructions(0, 50);

    /*--------------------------------------------------------------- Job Order ---------------------------------------------------------------*/
    const fetchJobOrderData = async () => {

        try {

            var docDefinition = {
                content: [
                    {
                        alignment: 'justify',
                        columns: [
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
                            heights: [0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 50],
                            body: [
                                [ //First Row
                                    {
                                        bold: true,
                                        text: 'ABS Product ID',
                                    },
                                    {
                                        fontSize: 10,
                                        text: product_id,
                                        margin: [0, 0, 0, 0]
                                    },
                                    {
                                        bold: true,
                                        text: 'Order Master ID'
                                    },
                                    {
                                        fontSize: 10,
                                        colSpan: 2,
                                        text: order_id,
                                        margin: [0, 0, 0, 0]
                                    },
                                    ''
                                ],
                                [ //Second Row
                                    {
                                        bold: true,
                                        text: 'Product Title'
                                    },
                                    {
                                        fontSize: 10,
                                        colSpan: 4,
                                        text: (productData?.product_title ?? ''),
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
                                        text: 'Product Category / Type'
                                    },
                                    {
                                        fontSize: 10,
                                        rowSpan: 2,
                                        text: (productData?.product_category ?? ''),
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
                                        fontSize: 10,
                                        text: (productData?.oem_product_id ?? ''),
                                        margin: [0, 0, 0, 0]
                                    }
                                ],
                                [ //Sixth Row
                                    '',
                                    {
                                        fontSize: 10,
                                        border: [true, false, true, true],
                                        text: (orderData?.custom_quantity ?? ''),
                                        margin: [0, 0, 0, 0]
                                    },
                                    {
                                        fontSize: 10,
                                        border: [true, false, true, true],
                                        text: (orderData?.factory_order_quantity ?? ''),
                                        margin: [0, 0, 0, 0]
                                    },
                                    {
                                        bold: true,
                                        text: 'Customer Name'
                                    },
                                    {
                                        fontSize: 10,
                                        text: companyNameSlice,
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
                                        fontSize: 10,
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
                                        fontSize: 10,
                                        text: (orderData?.customer_po_number ?? ''),
                                        margin: [0, 0, 0, 0]
                                    }
                                ],
                                [ //Eighth Row
                                    '',
                                    {
                                        fontSize: 10,
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
                                        fontSize: 10,
                                        colSpan: 4,
                                        text: (productData?.oem_product_id ?? ''),
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
                                        fontSize: 10,
                                        border: [true, false, true, true],
                                        colSpan: 4,
                                        text: productNotesSlice,
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
                                        fontSize: 10,
                                        colSpan: 4,
                                        text: packagingNotesSlice,
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
                                        fontSize: 10,
                                        colSpan: 2,
                                        text: shippingInstructionsSlice,
                                        margin: [0, 0, 0, 0]
                                    },
                                    '',
                                    {
                                        bold: true,
                                        text: 'Ship Via'
                                    },
                                    {
                                        fontSize: 10,
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
                                [{ text: '' }, { text: '' }],
                                [{ text: '' }, { text: '' }],
                                [{ text: '' }, { text: '' }],
                                [{ text: '' }, { text: '' }],
                                [{ text: '' }, { text: '' }],
                                [{ text: '' }, { text: '' }],
                                [{ text: '' }, { text: '' }],
                                [{ text: '' }, { text: '' }],
                                [{ text: '' }, { text: '' }],
                                [{ text: '' }, { text: '' }]
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
    /*--------------------------------------------------------------- Job Order ---------------------------------------------------------------*/


    /*------------------------------------------------------------- QC Inspection -------------------------------------------------------------*/
    const fetchQCInspectionData = async () => {
        try {

            var docDefinition = {
                content: [
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                fontSize: 18,
                                bold: true,
                                text: 'ABSOLUTE MEDIA, INC.',
                            },
                            {
                                fontSize: 18,
                                bold: true,
                                text: 'QC Inspection Sheet',
                            },
                        ]
                    },

                    //Table 1
                    {
                        table: {
                            widths: ['*', '*', '*', '*', '*'],
                            heights: [0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 50],
                            body: [
                                [ //First Row
                                    {
                                        bold: true,
                                        text: 'ABS Product ID',
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
                                        text: 'Product Title'
                                    },
                                    {
                                        colSpan: 4,
                                        text: (productData?.product_title ?? ''),
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
                                        text: 'Product Category / Type'
                                    },
                                    {
                                        rowSpan: 2,
                                        text: (productData?.product_category ?? ''),
                                        margin: [0, 0, 0, 0]
                                    },
                                    {
                                        alignment: 'center',
                                        border: [true, true, true, false],
                                        bold: true,
                                        text: 'D'
                                    },
                                    {
                                        bold: true,
                                        text: 'Production'
                                    },
                                    {
                                        bold: true,
                                        text: 'Analyze Master'
                                    }
                                ],
                                [ //Fourth Row
                                    '', '',
                                    {
                                        alignment: 'center',
                                        border: [true, false, true, true],
                                        bold: true,
                                        text: 'P'
                                    },
                                    {
                                        bold: true,
                                        text: 'Make Silver(s)'
                                    },
                                    {
                                        bold: true,
                                        text: 'First Article'
                                    }
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
                                        text: (productData?.oem_product_id ?? ''),
                                        margin: [0, 0, 0, 0]
                                    }
                                ],
                                [ //Sixth Row
                                    '',
                                    {
                                        border: [true, false, true, true],
                                        text: (orderData?.custom_quantity ?? ''),
                                        margin: [0, 0, 0, 0]
                                    },
                                    {
                                        border: [true, false, true, true],
                                        text: (orderData?.factory_order_quantity ?? ''),
                                        margin: [0, 0, 0, 0]
                                    },
                                    {
                                        bold: true,
                                        text: 'Customer Name'
                                    },
                                    {
                                        text: companyNameSlice,
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
                                        text: (orderData?.customer_po_number ?? ''),
                                        margin: [0, 0, 0, 0]
                                    }
                                ],
                                [ //Eighth Row
                                    '',
                                    {
                                        border: [true, false, true, true],
                                        text: (shippingData?.request_ship_time ?? ''),
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
                                        text: (productData?.oem_product_id ?? ''),
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
                                        text: productNotesSlice,
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
                                        text: packagingNotesSlice,
                                        margin: [0, 0, 0, 0,]
                                    },
                                    '',
                                    '',
                                    ''
                                ],
                                [ //Thirteenth Row
                                    {
                                        bold: true,
                                        colSpan: 4,
                                        text: 'Final QC Inspection By: ________________________________________________',
                                        margin: [0, 15, 0, 0]
                                    },
                                    '',
                                    '',
                                    '',
                                    {
                                        bold: true,
                                        text: 'Date: ___________',
                                        margin: [0, 15, 0, 0]
                                    }
                                ]
                            ],
                        },
                        style: {
                            fontSize: 10
                        },
                    },
                    {
                        // Use stack to add space between tables
                        stack: [
                            { text: '\n' }, // add an empty line
                        ]
                    },

                    //Table 2
                    {
                        table: {
                            widths: ['*', '*', '*', '*'],
                            //heights: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
                            body: [
                                [
                                    {
                                        bold: true,
                                        colSpan: 2,
                                        text: 'CD-R Gold Master'
                                    },
                                    '',
                                    {
                                        bold: true,
                                        colSpan: 2,
                                        text: 'CD-R Silver Master'
                                    },
                                    ''
                                ],
                                [
                                    {
                                        text: 'Label Name'
                                    },
                                    {
                                        text: (productData?.master_label ?? ''),
                                        margin: [0, 0, 0, 0,]
                                    },
                                    {
                                        text: 'Label Name'
                                    },
                                    {
                                        text: '',
                                        margin: [0, 0, 0, 0,]
                                    }
                                ],
                                [
                                    {
                                        text: 'Byte Count'
                                    },
                                    {
                                        text: (productData?.master_capacity ?? ''),
                                        margin: [0, 0, 0, 0,]
                                    },
                                    {
                                        text: 'Byte Count'
                                    },
                                    {
                                        text: '',
                                        margin: [0, 0, 0, 0,]
                                    }
                                ],
                                [
                                    {
                                        text: 'Virus Check Pass'
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        text: 'Compares to Gold'
                                    },
                                    {
                                        text: ''
                                    }
                                ],
                                [
                                    {
                                        text: 'CDA Analysis Pass'
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        text: 'CDA Analysis Pass'
                                    },
                                    {
                                        text: ''
                                    }
                                ],
                                [
                                    {
                                        bold: true,
                                        colSpan: 2,
                                        text: 'Release Gold Master to CD-ROM Manufacturer'
                                    },
                                    '',
                                    {
                                        alignment: 'bottom',
                                        bold: true,
                                        text: 'YES __________'
                                    },
                                    {
                                        alignment: 'bottom',
                                        bold: true,
                                        text: 'NO __________'
                                    }
                                ],
                                [
                                    {
                                        bold: true,
                                        colSpan: 3,
                                        text: 'Gold/Silver Master Inspection By: __________________________________',
                                        margin: [0, 15, 0, 0]
                                    },
                                    '',
                                    '',
                                    {
                                        bold: true,
                                        text: 'Date: ______________',
                                        margin: [0, 15, 0, 0]
                                    }
                                ]
                            ],
                        },
                        style: {
                            fontSize: 10
                        },
                    },
                    {
                        // Use stack to add space between tables
                        stack: [
                            { text: '\n' }, // add an empty line
                        ]
                    },

                    //Table 3
                    {
                        table: {
                            widths: ['*', '*', '*', '*', '*'],
                            //heights: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
                            body: [
                                [
                                    {
                                        bold: true,
                                        colSpan: 5,
                                        text: 'Incoming CD Inspection'
                                    },
                                    '',
                                    '',
                                    '',
                                    ''
                                ],
                                [
                                    {
                                        text: 'Physical count of lot'
                                    },
                                    {
                                        text: '',
                                    },
                                    {
                                        text: 'QC Samples To Pull / Pulled'
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        text: ''
                                    }
                                ],
                                [
                                    {
                                        text: 'Label'
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        colSpan: 2,
                                        text: 'Byte Count'
                                    },
                                    '',
                                    {
                                        text: ''
                                    }
                                ],
                                [
                                    {
                                        colSpan: 2,
                                        text: 'Analyzer Report compares to Gold / Silver'
                                    },
                                    '',
                                    {
                                        alignment: 'bottom',
                                        bold: true,
                                        text: 'YES __________'
                                    },
                                    {
                                        alignment: 'bottom',
                                        bold: true,
                                        colSpan: 2,
                                        text: 'NO ___________________'
                                    },
                                    ''
                                ],
                                [
                                    {
                                        bold: true,
                                        colSpan: 3,
                                        text: 'Date Inspection By: __________________________________________',
                                        margin: [0, 15, 0, 0]
                                    },
                                    '',
                                    '',
                                    {
                                        bold: true,
                                        colSpan: 2,
                                        text: 'Date: ______________________',
                                        margin: [0, 15, 0, 0]
                                    },
                                    ''
                                ]
                            ],
                        },
                        style: {
                            fontSize: 10
                        },
                    },
                    {
                        // Use stack to add space between tables
                        stack: [
                            { text: '\n' }, // add an empty line
                        ]
                    },

                    //Table 4
                    {
                        table: {
                            widths: ['*', '*', '*', '*', '*', '*'],
                            //heights: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
                            body: [
                                [
                                    {
                                        bold: true,
                                        text: 'CD-R'
                                    },
                                    {
                                        colSpan: 3,
                                        text: 'Recording surface of each disc Visually Inspected'
                                    },
                                    '',
                                    '',
                                    {
                                        bold: true,
                                        text: 'YES ______'
                                    },
                                    {
                                        bold: true,
                                        text: 'NO ______'
                                    }
                                ],
                                [
                                    {
                                        bold: true,
                                        text: 'CD-ROM'
                                    },
                                    {
                                        text: 'Lacquer',
                                    },
                                    {
                                        text: 'Clouding'
                                    },
                                    {
                                        text: 'Mouse Bites'
                                    },
                                    {
                                        text: 'Dimples'
                                    },
                                    {
                                        text: 'Pits'
                                    }
                                ],
                                [
                                    {
                                        bold: true,
                                        text: 'PASS'
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        text: ''
                                    }
                                ],
                                [
                                    {
                                        bold: true,
                                        text: 'FAIL'
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        text: ''
                                    },
                                    {
                                        text: ''
                                    }
                                ],
                                [
                                    {
                                        bold: true,
                                        colSpan: 4,
                                        text: 'Physical Inspection By: __________________________________________',
                                        margin: [0, 15, 0, 0]
                                    },
                                    '',
                                    '',
                                    '',
                                    {
                                        bold: true,
                                        colSpan: 2,
                                        text: 'Date: ______________________',
                                        margin: [0, 15, 0, 0]
                                    },
                                    ''
                                ]
                            ],
                        },
                        style: {
                            fontSize: 10
                        },
                    },
                    {
                        // Use stack to add space between tables
                        stack: [
                            { text: '\n' }, // add an empty line
                        ]
                    },

                    //Table 5
                    {
                        table: {
                            widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
                            body: [
                                [
                                    {
                                        bold: true,
                                        colSpan: 2,
                                        text: 'IMAGE QUALITY'
                                    },
                                    '',
                                    {
                                        text: 'Correct Artwork'
                                    },
                                    {
                                        text: 'OEM Part No'
                                    },
                                    {
                                        text: 'Pms Match'
                                    },
                                    {
                                        text: 'In Register'
                                    },
                                    {
                                        text: 'Over Exposed'
                                    },
                                    {
                                        text: 'Moire\' Pattern'
                                    },
                                    {
                                        text: 'Heavy Print'
                                    },
                                    {
                                        text: 'Contam.'
                                    }
                                ],
                                [
                                    {
                                        bold: true,
                                        colSpan: 2,
                                        text: 'PASS'
                                    },
                                    '', { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }
                                ],
                                [
                                    {
                                        bold: true,
                                        colSpan: 2,
                                        text: 'FAIL'
                                    },
                                    '', { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }, { text: '' }
                                ]
                            ],
                        },
                        style: {
                            fontSize: 10
                        },
                    }
                ],
            }


            pdfMake.createPdf(docDefinition).open();

        } catch (error) {
            console.error(error);
        }
    };

    /*------------------------------------------------------------- QC Inspection -------------------------------------------------------------*/


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
                    <h2>Output Forms</h2>
                </div>

                <div className="form-row">
                    <label htmlFor="order-id"
                        className="col-md-8 col-form-label"><h4>Order ID: <span style={{ color: 'red' }}>{order_id}</span></h4></label>
                </div>
                <div className="form-row">
                    <label htmlFor="shippingID" className="col-md-3 col-form-label"><h4>Shipping ID <span style={{ color: 'red' }}>*</span></h4></label>
                    <div className="input-group input-group mb-3 col-md-8">
                        <div className="form-control p-0">
                            <Select onChange={(e) => setShippingID(e.value)} className="react-select" menuPortalTarget={document.body} styles={customStyle} value={shippingOptions.filter(function (option) {
                                return option.value === shippingID;
                            })} id="shippingID" required options={shippingOptions} />
                        </div>
                    </div>
                </div>
                <div className='JobOrders'>
                    <button type='button' onClick={fetchJobOrderData} className='HomePageButton'>Job Orders</button>
                </div>

                <div className='QCInspection'>
                    <button type='button' onClick={fetchQCInspectionData} className='HomePageButton'>QC Inspection</button>
                </div>

                <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Home</button>
            </div>
        </div>
    );
};

export default OutputForms;
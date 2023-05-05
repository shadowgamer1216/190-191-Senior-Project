import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";
import Select from "react-select";


const Product = ({ handleLogout }) => {

    const routeChange = () => {
        let path = '/login';
        navigate(path);
    };
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (!authToken) {
            routeChange()
        }
    }, []);
    
    const navigate = useNavigate();

    const [old_abs_id, setOldID] = useState(null);
    const [customer_id, setCustomerID] = useState(null);
    const [product_category, setCategory] = useState(null);
    const [oem_product_id, setOemID] = useState(null);
    const [product_title, setTitle] = useState(null);
    const [product_desc, setDesc] = useState(null);
    const [product_repl, setRepl] = useState(null);
    const [master_format, setMasterFormat] = useState(null);
    const [master_received, setMasterReceived] = useState(null);
    const [master_label, setMasterLabel] = useState(null);
    const [master_capacity, setMasterCapacity] = useState(null);
    const [master_loc, setMasterLoc] = useState(null);
    const [films_loc, setFilmsLoc] = useState(null);
    const [date_code_required, setDateRequired] = useState(0);
    const [date_code_position, setDatePosition] = useState(null);
    const [inner_hub, setInnerHub] = useState(null);
    const [inner_hub_position, setInnerPos] = useState(null);
    const [floodcoat, setFloodcoat] = useState(0);
    const [rimage_print, setRimPrint] = useState(0);
    const [colorList, setColorList] = useState([{ color: "" }]); 
    const [numOfColors, setNumOfColors] = useState(1);
    const handleColorAdd = () => {
        setColorList([...colorList, { color: "" }]);
        setNumOfColors(numOfColors => numOfColors + 1);
    };
    const handleColorRemove = (index) => {
        const list = [...colorList];
        list.splice(index, 1);
        setColorList(list);
        setNumOfColors(numOfColors => numOfColors - 1);
    };
    const handleColorChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...colorList];
        list[index][name] = value;
        setColorList(list);
        //console.log(list);
    };
    const [color_notes, setColorNotes] = useState(null);
    const [componentList, setComponentList] = useState([{ component: "" }]); 
    const [componentNames, setComponentNames] = useState([{ name: "" }]);
    const [numOfComponents, setNumOfComponents] = useState(1);
    const handleComponentAdd = () => {
        setComponentList([...componentList, { component: "" }]);
        setNumOfComponents(numOfComponents => numOfComponents + 1);

        setSelectedComponent([...selectedComponent, { value: "", label: "" }]);

        setComponentNames([...componentNames, { name: "" }]);
    };
    const handleComponentRemove = (index) => {
        const list = [...componentList];
        list.splice(index, 1);
        setComponentList(list);
        setNumOfComponents(numOfComponents => numOfComponents - 1);
        //console.log(list);

        const list2 = [...selectedComponent];
        list2.splice(index, 1);
        setSelectedComponent(list2);
        //console.log(list2);

        const list3 = [...componentNames];
        list2.splice(index, 1);
        setComponentNames(list3);
        console.log(list3);
    };
    const handleComponentChange = (e, index) => {
        const list = [...componentList];
        list[index]["component"] = e.value;
        setComponentList(list);
        //console.log(list);

        const list2 = [...selectedComponent];
        list2[index]["value"] = e.value;
        list2[index]["label"] = e.label;
        setSelectedComponent(list2);
        //console.log(list2);

        const list3 = [...componentNames];
        list3[index]["name"] = e.label;
        setComponentNames(list3);
        console.log(list3);
    };
    const [packaging_notes, setPackNotes] = useState(null);
    const [product_notes, setProductNotes] = useState(null);
    const [product_status, setProductStatus] = useState(null);
    

    
    useEffect(() => {
        const allColorsHave = colorList.length > 0 && colorList.every((item) => {
            return item.color;
        });
        const allComponentsHave = componentList.length > 0 && componentList.every((item) => {
            return item.component;
        });
        const shouldIncludeColor = colorList.length > 1;
        const shouldIncludeComponent = componentList.length > 1;

        setSubmitting(customer_id && product_category && product_title && 
            (!shouldIncludeColor || allColorsHave) && 
            (!shouldIncludeComponent || allComponentsHave)
        );
    }, [customer_id, product_category, product_title, colorList, componentList]);

    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const [submitting, setSubmitting] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/insertProduct", 
        {
            old_abs_id: old_abs_id,
            customer_id: customer_id,
            product_category: product_category,
            oem_product_id: oem_product_id,
            product_title: product_title,
            product_desc: product_desc,
            product_repl: product_repl,
            master_format: master_format,
            master_received: master_received,
            master_label: master_label,
            master_capacity: master_capacity,
            master_loc: master_loc,
            films_loc: films_loc,
            date_code_required: date_code_required,
            date_code_position: date_code_position,
            inner_hub: inner_hub,
            inner_hub_position: inner_hub_position,
            floodcoat: floodcoat,
            rimage_print: rimage_print,
            colorList: colorList,
            numOfColors: numOfColors,
            color_notes: color_notes,
            componentList: componentList,
            componentNames: componentNames,
            numOfComponents: numOfComponents,
            packaging_notes: packaging_notes,
            product_notes: product_notes,
            product_status: product_status
        }).then(()=> {
            alert('Inserted new product');
        }).catch(err => {
            console.log(err);
        });
    }

    const handleNavigate = async (pId) => {
        const pIdPassed = pId.toString();
        await Sleep(2000);
        navigate(`/product/${pIdPassed}`);
    }

    const [latestProductId, setProductId] = useState(null);
    const nextNewProductId = latestProductId + 1;
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getLatestProductId')
        .then(response => {
            setProductId(response.data[0]['MAX(product_id)']);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const [customerOptions, setCustomerOptions] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getCompanyData')
        .then(response => {
            const options = response.data.map(option => {
                return { value: option.company_id, label: option.company_id + " — " + option.company_name };
            });
            setCustomerOptions(options);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const [selectedComponent, setSelectedComponent] = useState([{ value: "", label: "" }]);
    const [componentOptions, setComponentOptions] = useState([]);
    useEffect(() => {
        setComponentList([{ component: "" }]);
        setNumOfComponents(1);
        setSelectedComponent([{ value: "", label: "" }]);
        Axios.get('http://localhost:3001/api/getComponentData')
        .then(response => {
            const options = response.data.map(option => {
                if(option.customer_id === customer_id) { 
                    return { value: option.component_id, label: option.component_id + " — " + option.title + " (" + option.component_type + ")"}; 
                }
                else { return null; }
            });
            const filteredOptions = options.filter(option => option !== null);
            setComponentOptions(filteredOptions);
        })
        .catch(error => {
            console.log(error);
        });
        
    }, [customer_id]);

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

    const clearComponentOne = (index) => {
        setComponentList(prevState => {
            const resetState = [...prevState];
            resetState[index] = { component: "" };
            return resetState;
        });
        setSelectedComponent(prevState => {
            const resetState = [...prevState];
            resetState[index] = { value: "", label: "" };
            return resetState;
        });
    }
    const clearColorOne = (index) => {
        setColorList(prevState => {
            const resetState = [...prevState];
            resetState[index] = { color: "" };
            return resetState;
        });
    }
    
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
                    <h2>ADD PRODUCT</h2>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="product-info pt-3">
                        <div className="section-headers">
                            <h5>Product Information</h5>
                        </div>
                        
                        <div className="form-row">
                            <label htmlFor="product_id" className="col-3 col-form-label">Product ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input tabIndex="-1" readOnly type="text" className="form-control" id="product_id" value={nextNewProductId}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="old_abs_id" className="col-3 col-form-label">Old ABS ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input onChange={(e) => setOldID(e.target.value.toUpperCase())} type="text" className="form-control" id="old_abs_id" maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer_id" className="col-md-3 col-form-label">Customer ID <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group mb-3 col-md-8">
                                <div className="form-control p-0">
                                    <Select onChange={(e) => setCustomerID(e.value)} className="react-select" styles={customStyle} value={customerOptions.filter(function(option) {
                                        return option.value === customer_id;
                                    })} id="customer_id" required options={customerOptions}/>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_category" className="col-md-3 col-form-label">Category <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setCategory(e.target.value)} className="form-control" id="product_category" required>
                                    <option value="">Select Category</option>
                                    <option value="CD-R">CD-R</option>
                                    <option value="MD-R">MD-R</option>
                                    <option value="BC-R">BC-R</option>
                                    <option value="CD-ROM">CD-ROM</option>
                                    <option value="MD-ROM">MD-ROM</option>
                                    <option value="DVD">DVD</option>
                                    <option value="DVD-R">DVD-R</option>
                                    <option value="DVD-5">DVD-5</option>
                                    <option value="DVD-9">DVD-9</option>
                                    <option value="Diskette">Diskette</option>
                                    <option value="Tape">Tape</option>
                                    <option value="Other">Other</option>

                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="oem_product_id" className="col-md-3 col-form-label">OEM Product ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input onChange={(e) => setOemID(e.target.value.toUpperCase())} type="text" className="form-control" id="oem_product_id" maxLength = "50"/>
                            </div>
                        </div>

                        <br></br>

                        <div className="form-row">
                            <label htmlFor="product_title" className="col-md-3 col-form-label">Title <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="product_title" maxLength = "100" required/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_desc" className="col-md-3 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea onChange={(e) => setDesc(e.target.value)} rows="4" cols="50" className="form-control" id="product_desc" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_repl" className="col-md-3 col-form-label">Replication</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setRepl(e.target.value)} className="form-control" id="product_repl">
                                    <option value="">Select Type</option>
                                    <option value="Replicated">Replicated</option>
                                    <option value="Non-Recorded">Non-Recorded</option>
                                    <option value="Replicated Only">Replicated Only</option>
                                    <option value="First Article">First Article</option>
                                    <option value="Pre-Replicated">Pre-Replicated</option>
                                    <option value="Pre-Duplicated">Pre-Duplicated</option>
                                    <option value="Pre-Duped by Cus">Pre-Duped by Cus</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_format" className="col-md-3 col-form-label">Master Format</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setMasterFormat(e.target.value)} className="form-control" id="master_format">
                                    <option value="">Select Format</option>
                                    <option value="CD-R">CD-R</option>
                                    <option value="CD-ROM">CD-ROM</option>
                                    <option value="DVD-R">DVD-R</option>
                                    <option value="VHS">VHS</option>
                                    <option value="DLT Tape">DLT Tape</option>
                                    <option value="Diskette">Diskette</option>
                                    <option value="FTP Site">FTP Site</option>
                                    <option value="USB">USB</option>
                                    <option value="Email">Email</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_received" className="col-md-3 col-form-label">Master Received</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input onChange={(e) => setMasterReceived(e.target.value)} type="date" max="9999-12-31" className="form-control" id="master_received" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_label" className="col-md-3 col-form-label">Master Label</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input onChange={(e) => setMasterLabel(e.target.value)} type="text" className="form-control" id="master_label" maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_capacity" className="col-md-3 col-form-label">Master Capacity</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input onChange={(e) => setMasterCapacity(e.target.value)} type="text" className="form-control" id="master_capacity"  maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="master_location" className="col-md-3 col-form-label">Master Location</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setMasterLoc(e.target.value)} className="form-control" id="master_location">
                                    <option value="">Select Location</option>
                                    <option value="Vendor">Vendor</option>
                                    <option value="Docket">Docket</option>
                                    <option value="Absolute">Absolute</option>
                                    <option value="Master CDR Location">Master CDR Location</option>
                                    <option value="TS">TS</option>
                                    <option value="W.S.">W.S.</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="films_location" className="col-md-3 col-form-label">Films Location</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setFilmsLoc(e.target.value)} className="form-control" id="films_location">
                                    <option value="">Select Location</option>
                                    <option value="Vendor">Vendor</option>
                                    <option value="Docket">Docket</option>
                                    <option value="Absolute">Absolute</option>
                                    <option value="Films Location">Films Location</option>
                                    <option value="W.S.">W.S.</option>
                                    <option value="Use Film from KECU-5926">Use Film from KECU-5926</option>
                                    <option value="Docket WIND-6707">Docket WIND-6707</option>
                                    <option value="GRIC-6999">GRIC-6999</option>
                                    <option value="In Docket">In Docket</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="date_code_required" className="col-form-label col-md-3 float-sm-left pt-1 mb-2">Date Code Required?</label>
                            <div className="custom-control custom-checkbox col-md-6 float-md-left pt-1 mb-2 ml-2">
                                <input onChange={(prev) => setDateRequired(prev => !prev)} checked={date_code_required} type="checkbox" className="custom-control-input" id="date_code_required" />
                                <label className="custom-control-label" htmlFor="date_code_required"></label>
                            </div>  
                        </div>

                        <div className="form-row">
                            <label htmlFor="date_code_position" className="col-md-3 col-form-label">Date Code Position</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input onChange={(e) => setDatePosition(e.target.value)} type="text" className="form-control" id="date_code_position" maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="inner_hub" className="col-md-3 col-form-label">Inner Hub</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input onChange={(e) => setInnerHub(e.target.value)} type="text" className="form-control" id="inner_hub" maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="inner_hub_position" className="col-md-3 col-form-label">Inner Hub Position</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input onChange={(e) => setInnerPos(e.target.value)} type="text" className="form-control" id="inner_hub_position" maxLength = "50"/>
                            </div>
                        </div>
                    </div>

                    <div className="product-color pt-3">
                        <div className="section-headers">
                            <h5>Color Information</h5>
                        </div>

                        <div className="form-row">
                            <div className="input-group input-group-sm col-md-3">
                                <div className="form-group custom-control custom-checkbox">
                                    <input onChange={(prev) => setFloodcoat(prev => !prev)} checked={floodcoat} type="checkbox" className="custom-control-input" id="floodcoat" />
                                    <label htmlFor="floodcoat" className="custom-control-label">Floodcoat?</label>
                                </div>
                            </div>

                            <div className="input-group input-group-sm col-md-3">
                                <div className="form-group custom-control custom-checkbox">
                                    <input onChange={(prev) => setRimPrint(prev => !prev)} checked={rimage_print} type="checkbox" className="custom-control-input" id="rimage_print" />
                                    <label htmlFor="rimage_print" className="custom-control-label">Rimage Print?</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            {colorList.length > 1 ? <h6 className="ml-2">Select a color for all fields added (*): </h6> : <h6 className="ml-2">Select a color or leave it blank (N/A): </h6>}
                        </div>
                        <div className="dynamic-color-list">
                            {colorList.map((singleColor, index) => (
                                <div key={index} className="colors">
                                    <div className="form-row">
                                        <div className="input-group input-group col-10 mb-2">
                                            <div className="input-group-prepend">
                                                {colorList.length > 1 ? 
                                                <strong><span className="input-group-text">Color #{index + 1}<span style={{ color: 'red' }}>*</span></span></strong> 
                                                : <strong><span className="input-group-text">Color #{index + 1}  </span></strong>}
                                            </div>
                                            {colorList.length > 1 ? 
                                            <input className="form-control field" 
                                            name="color" type="text" id="color" required value={singleColor.color}
                                            onChange={(e) => handleColorChange(e, index)} maxLength = "50"/> 
                                            : <input className="form-control field" 
                                            name="color" type="text" id="color" value={singleColor.color}
                                            onChange={(e) => handleColorChange(e, index)} maxLength = "50"/>}
                                        </div>
                                        <div>
                                            {colorList.length > 0 && 
                                            (
                                                <button onClick={()=>clearColorOne(index)} type="button" id="color_remove" 
                                                className="btn btn-outline-dark btn-sm mt-1 mr-1">Clear</button>
                                            )}
                                            {colorList.length > 1 && 
                                            ( 
                                                <button onClick={()=>handleColorRemove(index)} 
                                                type="button" id="color_remove" 
                                                className="btn btn-outline-danger btn-sm mt-1">X</button>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-row pl-2">
                                            {colorList.length - 1 === index && colorList.length < 8 && 
                                            (   
                                                <button onClick={handleColorAdd} 
                                                type="button" className="btn btn-success btn-sm">Add Color</button>
                                            )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <br></br>
                        <div className="form-row">
                            <label htmlFor="color_notes" className="col-md-3 col-form-label">Color Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea onChange={(e) => setColorNotes(e.target.value)} rows="4" cols="50" className="form-control" id="color_notes" />
                            </div>
                        </div>

                    </div>

                    <div className="product-components pt-3">
                        <div className="section-headers">
                            <h5>Components Info</h5>
                        </div>
                        <br></br>

                        <div className="form-row">
                            {customer_id !== null ? 
                                <>
                                    {componentList.length > 1 ? <h6 className="ml-2">Select a component for all fields added (*): </h6> 
                                    : <h6 className="ml-2">Select a component or leave it blank (N/A): </h6>}
                                </> 
                                
                                : <h6 className="ml-2">Select a customer in order to start choosing components! </h6>}
                        </div>
                        {customer_id !== null && componentOptions.length !== 0 ?
                            <div className="dynamic-component-list">
                                {componentList.map((singleComponent, index) => (
                                    <div key={index} className="components">
                                        <div className="form-row">
                                            <div className="input-group input-group col-10 mb-2">
                                                <div className="input-group-prepend">
                                                    {componentList.length > 1 ? 
                                                    <strong><span className="input-group-text">Component #{index + 1}<span style={{ color: 'red' }}>*</span></span></strong> 
                                                    : <strong><span className="input-group-text">Component #{index + 1}</span></strong>}
                                                </div>
                                                <div className="form-control p-0">
                                                    {componentList.length > 1 ? 
                                                    <Select key={`${customer_id}-${index}`} onChange={(e) => handleComponentChange(e, index)} value={selectedComponent[index]}
                                                    className="react-select" styles={customStyle} id="component" required options={componentOptions}/>
                                                    : 
                                                    <Select key={`${customer_id}-${index}`} onChange={(e) => handleComponentChange(e, index)} value={selectedComponent[index]}
                                                    className="react-select" styles={customStyle} id="component" options={componentOptions}/>}
                                                </div>
                                            </div>
                                            <div>
                                                {componentList.length > 0 && 
                                                (
                                                    <button onClick={()=>clearComponentOne(index)} type="button" id="component_remove" 
                                                    className="btn btn-outline-dark btn-sm mt-1 mr-1">Clear</button>
                                                )}
                                                {componentList.length > 1 && 
                                                ( 
                                                    <button onClick={()=>handleComponentRemove(index)} type="button" id="component_remove" 
                                                    className="btn btn-outline-danger btn-sm mt-1">X</button>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-row pl-2">
                                                {componentList.length - 1 === index && componentList.length < 12 && 
                                                (   
                                                    <button onClick={handleComponentAdd} 
                                                    type="button" className="btn btn-success btn-sm">Add Component</button>
                                                )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        :   <div className="form-row">
                                <div className="input-group input-group col-10 mb-2">
                                    <div className="input-group-prepend">
                                        <strong><span className="input-group-text">Component #1</span></strong>
                                    </div>
                                    <div className="form-control p-0">
                                        <Select className="react-select" styles={customStyle} id="component" options={componentOptions} placeholder="No options available..."/>
                                    </div>
                                </div>
                            </div> 
                        }

                        <br></br>
                        <div className="form-row">
                            <label htmlFor="packaging_notes" className="col-md-3 col-form-label">Packaging Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea onChange={(e) => setPackNotes(e.target.value)} rows="4" cols="50" className="form-control" id="packaging_notes" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_notes" className="col-md-3 col-form-label">Product Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea onChange={(e) => setProductNotes(e.target.value)} rows="4" cols="50" className="form-control" id="product_notes" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="product_status" className="col-md-3 col-form-label">Product Status</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => setProductStatus(e.target.value)} className="form-control" id="product_status">
                                    <option value="">Select Status</option>
                                    <option value="Current">Current</option>
                                    <option value="New">New</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <br></br>
                    <div className="submit">
                        <button type="submit" onClick={() => handleNavigate(nextNewProductId)} disabled={!submitting} id="add_product" className="btn btn-success">Submit</button>
                    </div>

                </form>
                <br></br>

                <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Home</button>
                <br></br>
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
};

export default Product;
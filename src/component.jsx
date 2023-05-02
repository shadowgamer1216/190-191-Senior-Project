import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";
import Select from "react-select";

const Component = ({ handleLogout }) => {
    const navigate = useNavigate();
    
    const[customer_id, setCustomerID] = useState(null);
    const[component_type, setComponent_Type] = useState(null);
    const[title, setTitle] = useState(null);
    const[oem_pn, setOEM_PN] = useState(null);
    const[component_description, setComponent_Description] = useState(null);
    const[size, setSize] = useState(null);
    const[supplier_brand_id, setSupplier_Brand_ID] = useState(null);
    const[color, setColor] = useState(null);
    const[notes, setNotes] = useState(null);
    const[uom, setUOM] = useState(null);
    const[component_status, setComponent_Status] = useState(null);
    const[owned_by, setOwned_By] = useState(0);
    const[packaging_component, setPackaging_Component] = useState(0);
    const[textBox, setTextBox] = useState(false);
    const routeChange = () => {
        let path = '/login';
        navigate(path);
    };
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (!authToken) {
            routeChange()
        }
    }, [])
    useEffect(() => {
        setSubmitting(customer_id && component_type && title);
    }, [customer_id, component_type, title]);

    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/insertComponent", 
        {
            customer_id: customer_id,
            component_type: component_type,
            title: title, 
            oem_pn: oem_pn, 
            component_description: component_description,  
            size: size, 
            supplier_brand_id: supplier_brand_id, 
            color: color, 
            notes: notes, 
            uom: uom, 
            component_status: component_status,
            owned_by: owned_by,  
            packaging_component: packaging_component 
            //item_location: item_location
        }).then(()=> {
            alert('Inserted new component');
        }).catch(err => {
            console.log(err);
        });
    }

    const handleNavigate = async (cId) => {
        const cIdPassed = cId.toString();
        await Sleep(2000);
        navigate(`/component/${cIdPassed}`);
    }

    const handleDropDown = (e) => {
        if (e.target.value === "Other") {
            setTextBox(true);
        } else {
            setTextBox(false);
        }
        setComponent_Type(e.target.value);
    }

    const [latestComponentId, setComponentId] = useState(null);
    const nextNewComponentId = latestComponentId + 1;
    useEffect(() => {
        Axios.get('http://localhost:3001/api/getLatestComponentId')
        .then(response => {
            setComponentId(response.data[0]['MAX(component_id)']);
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
                    <h2>ADD COMPONENT</h2>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="component-info pt-3">
                        <div className="section-headers">
                            <h5>Enter/Edit Components</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="component_id" className="col-3 col-form-label">Component ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input tabIndex="-1" readOnly type="text" className="form-control" id="component_id" value={nextNewComponentId}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer_id" className="col-3 col-form-label">Customer ID <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group mb-3 col-md-8">
                                <div className="form-control p-0">
                                    <Select onChange={(e) => setCustomerID(e.value)} className="react-select" styles={customStyle} value={customerOptions.filter(function(option) {
                                        return option.value === customer_id;
                                    })} id="customer_id" required options={customerOptions}/>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="component_type" className="col-3 col-form-label">Component Type <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select className="form-control" name="component_type" id="component_type" onChange={handleDropDown} required >
                                    <option value="">Select Type</option>
                                    <option value="Assembly"> Assembly</option>
                                    <option value="Bag"> Bag</option>
                                    <option value="Blu-ray"> Blu-ray</option>
                                    <option value="CD"> CD</option>
                                    <option value="Component"> Component</option>
                                    <option value="Document"> Document</option>
                                    <option value="DVD"> DVD</option>
                                    <option value="Enclosure"> Enclosure</option>
                                    <option value="Envelope"> Envelope</option>
                                    <option value="Insert"> Insert</option>
                                    <option value="Label"> Label</option>
                                    <option value="Promotional Item"> Promotional Item</option>
                                    <option value="USB"> USB</option>
                                    <option value="Other"> Other</option>
                                </select>
                            </div>
                                {textBox && (
                                    <div className="form-row">
                                        <label htmlFor="other_component_type" className="col-3 col-form-label">Please Specify: </label>
                                        <div className="input-group input-group-sm mb-3 col-md-8">
                                            <input type="text" className="form-control" id="other_component_type" onChange={(e) => {setComponent_Type(e.target.value)}} maxLength = "50"/>
                                        </div>
                                    </div>
                                )} 
                        </div>

                        <div className="form-row">
                            <label htmlFor="title" className="col-3 col-form-label">Title <span style={{ color: 'red' }}>*</span></label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" required className="form-control" name="title" id="custom-area" onChange={(e) => {
                                    setTitle(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="oem" className="col-3 col-form-label">OEM P/N</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="oem" onChange={(e) => {
                                    setOEM_PN(e.target.value)
                                }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="component_description" className="col-3 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" name="component_description" id="custom-area" onChange={(e) => {
                                    setComponent_Description(e.target.value)
                                 }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="size" className="col-3 col-form-label">Size</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="size" onChange={(e) => {
                                    setSize(e.target.value)
                                 }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="supplier/brand" className="col-3 col-form-label">Supplier/Brand</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="supplier/brand" onChange={(e) => {
                                    setSupplier_Brand_ID(e.target.value)
                                 }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="color" className="col-3 col-form-label">Color</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="color" onChange={(e) => {
                                    setColor(e.target.value)
                                 }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-3 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" onChange={(e) => {
                                    setNotes(e.target.value)
                                 }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="uom" className="col-3 col-form-label">Unit of Measure</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="uom" onChange={(e) => {
                                    setUOM(e.target.value)
                                 }} maxLength = "50"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="status" className="col-3 col-form-label">Status</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => {setComponent_Status(e.target.value)}} className="form-control" id="status" >
                                    <option value="">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Obsolete">Obsolete</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <label htmlFor="owned_by" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Owned by Individual Company?</label>
                            <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                <input onChange={(prev) => setOwned_By(prev => !prev)} checked={owned_by} type="checkbox" className="custom-control-input" id="owned_by" />
                                <label className="custom-control-label" htmlFor="owned_by"></label>
                            </div>

                            <label htmlFor="packaging_component" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Packaging Component?</label>
                            <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                <input onChange={(prev) => setPackaging_Component(prev => !prev)} checked={packaging_component} type="checkbox" className="custom-control-input" id="packaging_component" />
                                <label className="custom-control-label" htmlFor="packaging_component"></label>
                            </div> 
                        </div>
                    </div>

                    <div className="submit p-3">
                        <button  onClick={() => handleNavigate(nextNewComponentId)} disabled={!submitting} type="submit" id="add-contact" className="btn btn-success">Submit</button>
                    </div>
                    
                </form>

                <form>                       
                    <div className="component-info pt-3">
                        <div className="section-headers">
                            <h5>List of Inventory Locations</h5>
                        </div>

                        <div className="table-responsive-md">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Item ID</th>
                                        <th scope="col">Location ID</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Physical Location</th>
                                        <th scope="col">Qty on Loc</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>No records</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </form>

                {/* <div className="product-location m-3 p-3">
                    <label htmlFor="add_location" className="col-form-label-sm">Add Location for this Component</label>
                    <div className="input-group input-group-sm mb-3 col-md-4">
                        <select className="form-control form-control-sm" id="add_location">
                            <option value="">Select Location</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <button type="submit" id="add_location" className="btn btn-info btn-sm ml-3">Add Location</button>
                    </div>
                </div> */}

               
                <br></br>
                <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>Home</button>

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

export default Component;

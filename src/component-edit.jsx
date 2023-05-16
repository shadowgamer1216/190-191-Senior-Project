import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import { Link, useNavigate, useParams } from "react-router-dom"
import Axios from "axios";


const Component = ({ handleLogout }) => {
    const navigate = useNavigate();
    const Sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


    const [new_component_type, setComponent_Type] = useState(null);
    const [new_title, setTitle] = useState(null);
    const [new_oem_pn, setOEM_PN] = useState(null);
    const [new_component_description, setComponent_Description] = useState(null);
    const [new_size, setSize] = useState(null);
    const [new_supplier_brand_id, setSupplier_Brand_ID] = useState(null);
    const [new_color, setColor] = useState(null);
    const [new_notes, setNotes] = useState(null);
    const [new_uom, setUOM] = useState(null);
    const [new_component_status, setComponent_Status] = useState(null);
    const [new_owned_by, setOwned_By] = useState(0);
    const [new_packaging_component, setPackaging_Component] = useState(0);
    const[textBox, setTextBox] = useState(false);


    const { component_id } = useParams();
    const [componentData, setComponentData] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/componentEdit/${component_id}`)
            .then(response => {
                setComponentData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [component_id]);

    var customer_id = componentData?.customer_id ?? '';
    var component_type = componentData?.component_type ?? '';
    var title = componentData?.title ?? '';
    var oem_pn = componentData?.oem_pn ?? '';
    var component_description = componentData?.component_description ?? '';
    var size = componentData?.size ?? '';
    var supplier_brand_id = componentData?.supplier_brand_id ?? '';
    var color = componentData?.color ?? '';
    var notes = componentData?.notes ?? '';
    var uom = componentData?.uom ?? '';
    var component_status = componentData?.component_status ?? '';
    var owned_by = componentData?.owned_by ?? '';
    var packaging_component = componentData?.packaging_component ?? '';

    const handleNavigate = async (cId) => {
        await Sleep(2000);
        navigate(`/component/${component_id}`);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/editComponent", {
            component_id : component_id,
            component_type: new_component_type,
            title: new_title,
            oem_pn: new_oem_pn,
            component_description: new_component_description,
            size: new_size,
            supplier_brand_id: new_supplier_brand_id,
            color: new_color,
            notes: new_notes,
            uom: new_uom,
            component_status: new_component_status,
            owned_by: new_owned_by,
            packaging_component: new_packaging_component
        }).then(() => {
            alert('Edited component');
        }).catch(err => {
            console.log(err);
        });
    }

    const handleDropDown = (e) => {
        if (e.target.value === "Other") {
            setTextBox(true);
        } else {
            setTextBox(false);
        }
        setComponent_Type(e.target.value);
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
                    <h2>[EDIT] COMPONENT</h2>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="component-info pt-3">
                        <div className="section-headers">
                            <h5>Enter/Edit Components</h5>
                        </div>

                        <div className="form-row">
                            <label htmlFor="component_id" className="col-3 col-form-label">Component ID</label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input readOnly type="text" className="form-control" id="component_id" value={component_id} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="customer_id" className="col-3 col-form-label">Customer ID</label>
                            <div className="input-group input-group mb-3 col-md-8">
                                <div className="form-control p-0">
                                    <input type="text" readOnly className="form-control" id="customer_id" value={customer_id} />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="component_type" className="col-3 col-form-label">Component Type</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={handleDropDown} className="form-control" id="component_type" defaultValue={component_type}>
                                    <option value="{component_type}">{component_type}</option>
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
                                        <input type="text" className="form-control" id="other_component_type" onChange={(e) => { setComponent_Type(e.target.value) }} maxLength="50" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="form-row">
                            <label htmlFor="title" className="col-3 col-form-label">Title</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" required className="form-control" name="title" id="custom-area" defaultValue={title} onChange={(e) => {
                                    setTitle(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="oem" className="col-3 col-form-label">OEM P/N</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="oem" defaultValue={oem_pn} onChange={(e) => {
                                    setOEM_PN(e.target.value)
                                }} maxLength="50" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="component_description" className="col-3 col-form-label">Description</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" name="component_description" id="custom-area" defaultValue={component_description} onChange={(e) => {
                                    setComponent_Description(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="size" className="col-3 col-form-label">Size</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="size" defaultValue={size} onChange={(e) => {
                                    setSize(e.target.value)
                                }} maxLength="50" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="supplier/brand" className="col-3 col-form-label">Supplier/Brand</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="supplier/brand" defaultValue={supplier_brand_id} onChange={(e) => {
                                    setSupplier_Brand_ID(e.target.value)
                                }} maxLength="50" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="color" className="col-3 col-form-label">Color</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="color" defaultValue={color} onChange={(e) => {
                                    setColor(e.target.value)
                                }} maxLength="50" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="notes" className="col-3 col-form-label">Notes</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <textarea rows="4" cols="50" className="form-control" name="notes" id="custom-area" defaultValue={notes} onChange={(e) => {
                                    setNotes(e.target.value)
                                }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="uom" className="col-3 col-form-label">Unit of Measure</label>
                            <div className="input-group input-group-sm mb-3 col-md-8">
                                <input type="text" className="form-control" id="uom" defaultValue={uom} onChange={(e) => {
                                    setUOM(e.target.value)
                                }} maxLength="50" />
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="status" className="col-3 col-form-label">Status</label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <select onChange={(e) => { setComponent_Status(e.target.value) }} className="form-control" id="status">
                                    <option value="{component_status}">{component_status}</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Obsolete">Obsolete</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <label htmlFor="owned_by" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Owned by Individual Company?</label>
                            <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                <input defaultValue={owned_by} onChange={(prev) => setOwned_By(prev => !prev)} checked={owned_by} type="checkbox" className="custom-control-input" id="owned_by" />
                                <label className="custom-control-label" htmlFor="owned_by"></label>
                            </div>

                            <label htmlFor="packaging_component" className="col-form-label col-sm-3 float-sm-left pt-1 mb-2">Packaging Component?</label>
                            <div className="custom-control custom-checkbox col-sm-6 float-sm-left pt-1 mb-2 ml-2">
                                <input defaultValue={packaging_component} onChange={(prev) => setPackaging_Component(prev => !prev)} checked={packaging_component} type="checkbox" className="custom-control-input" id="packaging_component" />
                                <label className="custom-control-label" htmlFor="packaging_component"></label>
                            </div>
                        </div>
                    </div>

                    <div className="submit p-3">
                        <button onClick={() => handleNavigate(component_id)} id="edit-component" className="btn btn-outline-success">Update</button>
                    </div>

                </form>


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

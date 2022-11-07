import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"

const Components = () => {
    const navigate = useNavigate();
    return (
        <div className = "wrapper">
            <h1>
                Enter/Edit Components
            </h1>
            <form>
                <fieldset>
                    <label>
                        <p>
                            Customer ID 
                            &nbsp;
                            <input name = "ID" />
                        </p>

                        <p>
                            Component Type
                            <select name = "Component_Type" id = "Component_Type">
                            <option>Component Category</option>
                            <option value = "Blank Disc/Tape"> Blank Disc/Tape</option>
                            <option value = "Enclosure"> Enclosure</option>
                            <option value = "Insert"> Insert</option>
                            <option value = "Items"> Items</option>
                            </select>
                        </p>
                        
                        <p>
                            OEM P/N
                            &nbsp;
                            <input name = "OEM" />
                        </p>

                        <p>
                            Description 1
                            &nbsp;
                            <input name = "Description" />
                        </p>

                        <p>
                            Description 2
                            &nbsp;
                            <input name = "Description" />
                        </p>

                        <p>
                            Description 3
                            &nbsp;
                            <input name = "Description" />
                        </p>

                        <p>
                            Description 4
                            &nbsp;
                            <input name = "Description" />
                        </p>

                        <p>
                            Description 5
                            &nbsp;
                            <input name = "Description" />
                        </p>

                        <p>
                            Size 
                            &nbsp;
                            <input name = "Size" />
                        </p>

                        <p>
                            Supplier/Brand 
                            <select name = "Supplier" id = "Supplier">
                            <option>Select Value</option>
                            <option value = "TBD"> TBD</option>
                            <option value = "TBD"> TBD</option>
                            <option value = "TBD"> TBD</option>
                            </select>
                        </p>

                        <p>
                            Color 
                            &nbsp;
                            <input name = "Color" />
                        </p>

                        <p>
                            Notes
                            <textarea> 

                            </textarea>

                        </p>

                        <p> 
                            Owned by Individual company 
                            <input type = "checkbox"/>
                        </p>

                        <p> 
                            Packaging Component
                            <input type = "checkbox"/>
                        </p>

                        <p>
                            Unit of Measure 
                            <select name = "UOM" id = "UOM">
                            <option>Select Value</option>
                            <option value = "TBD"> TBD</option>
                            <option value = "TBD"> TBD</option>
                            <option value = "TBD"> TBD</option>
                            </select>
                        </p>
                        
                        <p>
                            Status 
                            <select name = "Status" id = "Status">
                            <option>New</option>
                            <option value = "TBD"> TBD</option>
                            </select>
                        </p>

                    </label>
                </fieldset>
                
            </form>

            <h1>
                List of Inventory Locations
            </h1>
            <form>
                <fieldset>
                    <label>
                    
                    </label>
                </fieldset>
            </form>

            <button onClick={() => navigate(-1)}>Home</button>    
        </div>
    );
};

export default Components;

import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"

const Location = () => {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <h1>
             Add Location
            </h1>
            <form>
                <fieldset>
                    <label>
                        <p>
                            Location ID 
                            <input lid = ""/>
                        </p>
                        <p>
                            Type 
                            <select name = "location_type" id = "location_type">
                            <option value = "TBD"> TBD</option>
                            <option value = "TBD"> TBD</option>
                            <option value = "TBD"> TBD</option>
                            </select>
                        </p>
                        <p>
                            Item ID 
                            <input iid = ""/>
                        </p>
                        <p>
                            Qty
                            <input quantity = ""/>
                        </p>
                        <p>
                            Owner 
                            <select name = "owner" id = "owner">
                            <option value = "TBD"> TBD</option>
                            <option value = "TBD"> TBD</option>
                            <option value = "TBD"> TBD</option>
                            </select>
                        </p>
                        <p>
                            Physical Location 
                            <select name = "physical_location" id = "physical_location">
                            <option value = "TBD"> TBD</option>
                            <option value = "TBD"> TBD</option>
                            <option value = "TBD"> TBD</option>
                            </select>
                        </p>
                        <p>
                            Notes
                            <input notes = ""/>
                        </p>
                    </label>
                </fieldset>
            </form>
            <button onClick={() => navigate(-1)}>Home</button>
            <button onClick={() => navigate(-1)}>Submit</button>
        </div>
    )
}
export default Location;

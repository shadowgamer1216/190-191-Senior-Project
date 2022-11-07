import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"

const ItemCheckIn = () => {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <h1>
             Add/Edit Item Check In 
            </h1>
            <form>
                <fieldset>
                    <label>
                        <p>
                            Customer ID 
                            <input cid = ""/>
                        </p>
                        <p>
                            Item ID 
                            <input iid = ""/>
                        </p>
                        <p>
                            MFR Pn
                            <input mfr = ""/>
                        </p>
                        <p>
                            Description
                            <input description = ""/>
                        </p>
                        <p>
                            Carrier
                            <input carrier = ""/>
                        </p>
                        <p>
                            Quantity
                            <input quantity = ""/>
                        </p>
                        <p>
                            Disposition
                            <select name = "disposition" id = "disposition">
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
                            <input in = ""/>
                        </p>
                        <p>
                            Signed For By
                            <input signedBy = ""/>
                        </p>
                        {/*Find a way to actually put dates in the below sections*/}
                        <p>
                            Date In
                            <input dateIn = ""/>
                        </p>
                        <p>
                            Date Completed (For Reps Only)
                            <input dateCompleted = ""/>
                        </p>
                    </label>
                </fieldset>
            </form>
            <button onClick={() => navigate(-1)}>Home</button>
            <button onClick={() => navigate(-1)}>Submit</button>
        </div>
    )
}
export default ItemCheckIn;
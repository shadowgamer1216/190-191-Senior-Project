import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"

const Order = () => {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <h1>
             Add Order
            </h1>
            <form>
                <fieldset>
                    <label>
                        <p>
                            Salesperson 
                            <input sPerson = ""/>
                        </p>
                        <p>
                            Requestor 
                            <input requestor = ""/>
                        </p>
                        <p>
                            Customer Contact
                            <input cContact = ""/>
                        </p>
                        <p>
                            Re-Order?
                            <input type = "checkbox"/>
                        </p>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                    <p>
                            <b>Custom Product</b>
                        </p>
                        <p>
                            Product Title:
                            <input pTitle = ""/>
                        </p>
                        <p>
                            Product ID: 
                            <input productID = ""/>
                        </p>
                        <p>
                            Factory Order Quantity:
                            <input oQuantity = ""/>
                        </p>
                        <p>
                            Invoice
                            Packing Slip
                            Quantity
                            Unit Price $
                            Total Price $
                        </p>
                        <p>
                            <input type = "checkbox"/>
                            <input type = "checkbox"/>
                            <input quantity = ""/>
                            <input uPrice = ""/>
                            <input tPrice = ""/>
                        </p>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                    <p>
                            <b>Non-Inventory Line Items</b>
                        </p>
                        <p>
                            1
                            <input firstItem = ""/>
                            <input type = "checkbox"/>
                            <input type = "checkbox"/>
                            <input quantity = ""/>
                            $
                            <input uPrice = ""/>
                            $
                            <input tPrice = ""/>
                        </p>
                        <p>
                            2
                            <input secondItem = ""/>
                            <input type = "checkbox"/>
                            <input type = "checkbox"/>
                            <input quantity = ""/>
                            $
                            <input uPrice = ""/>
                            $
                            <input tPrice = ""/>
                        </p>
                        <p>
                            3
                            <input thirdItem = ""/>
                            <input type = "checkbox"/>
                            <input type = "checkbox"/>
                            <input quantity = ""/>
                            $
                            <input uPrice = ""/>
                            $
                            <input tPrice = ""/>
                        </p>
                        <p>
                            4
                            <input fourthItem = ""/>
                            <input type = "checkbox"/>
                            <input type = "checkbox"/>
                            <input quantity = ""/>
                            $
                            <input uPrice = ""/>
                            $
                            <input tPrice = ""/>
                        </p>
                        <p>
                            5
                            <input fifthItem = ""/>
                            <input type = "checkbox"/>
                            <input type = "checkbox"/>
                            <input quantity = ""/>
                            $
                            <input uPrice = ""/>
                            $
                            <input tPrice = ""/>
                        </p>
                        <p>
                            6
                            <input sixthItem = ""/>
                            <input type = "checkbox"/>
                            <input type = "checkbox"/>
                            <input quantity = ""/>
                            $
                            <input uPrice = ""/>
                            $
                            <input tPrice = ""/>
                        </p>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                    <p>
                            <b>Inventory Items</b>
                        </p>
                        <p>
                            1
                            <select inventoryItem1 = "order_type" id = "order_type">
                            <option value = "Select Value"> TBD</option>
                            <option value = "Select Value"> TBD</option>
                            </select>
                        </p>
                        <p>
                            Item 1 Quantity and Pricing
                        </p>
                        <p>
                            Invoice
                            Packing Slip
                            Quantity
                            Unit Price $
                            Total Price $
                        </p>
                        <p>
                            <input type = "checkbox"/>
                            <input type = "checkbox"/>
                            <input quantity = ""/>
                            <input uPrice = ""/>
                            <input tPrice = ""/>
                        </p>
                        <p>
                            2
                            <select inventoryItem2 = "order_type" id = "order_type">
                            <option value = "Select Value"> TBD</option>
                            <option value = "Select Value"> TBD</option>
                            </select>
                        </p>
                        <p>
                            Item 2 Quantity and Pricing
                        </p>
                        <p>
                            Invoice
                            Packing Slip
                            Quantity
                            Unit Price $
                            Total Price $
                        </p>
                        <p>
                            <input type = "checkbox"/>
                            <input type = "checkbox"/>
                            <input quantity = ""/>
                            <input uPrice = ""/>
                            <input tPrice = ""/>
                        </p>
                        <p>
                            3
                            <select inventoryItem3 = "order_type" id = "order_type">
                            <option value = "Select Value"> Select Value</option>
                            <option value = "Select Value"> Select Value</option>
                            </select>
                        </p>
                        <p>
                            Item 3 Quantity and Pricing
                        </p>
                        <p>
                            Invoice
                            Packing Slip
                            Quantity
                            Unit Price $
                            Total Price $
                        </p>
                        <p>
                            <input type = "checkbox"/>
                            <input type = "checkbox"/>
                            <input quantity = ""/>
                            <input uPrice = ""/>
                            <input tPrice = ""/>
                        </p>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                    <p>
                            <b>Billing Information</b>
                        </p>
                        <p>
                            Assembly Charges
                        </p>
                        <p>
                            <input quantity = ""/>
                            <input uPrice = ""/>
                            <input tPrice = ""/>
                        </p>
                        <p>
                            Date Code Printing Charges
                        </p>
                        <p>
                            <input quantity = ""/>
                            <input uPrice = ""/>
                            <input tPrice = ""/>
                        </p>
                        <p>
                            Date Code Setup Charge $
                            <input tPrice = ""/>
                        </p>
                        <p>
                            Art Manipulation / Film Charges for Screens
                        </p>
                        <p>
                            Number of Screens
                            <input nScreens = ""/>
                            $
                            <input tPrice = ""/>
                        </p>
                        <p>
                            Sub Total $
                            <input sTotal = ""/>
                        </p>
                        <p>
                            Taxable?
                            <input type = "checkbox"/>
                            Tax Rate%
                            <input tRate = ""/>
                        </p>
                        <p>
                            Tax $
                            <input taxMoney = ""/>
                        </p>
                        <p>
                            Freight Charges $
                            <input fCharges = ""/>
                        </p>
                        <p>
                            Order Price Total $
                            <input pTotal = ""/>
                        </p>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                    <p>
                            <b>Invoice Information</b>
                        </p>
                        <p>
                            Invoice Date
                            <input iDate = ""/>
                        </p>
                        <p>
                            Invoice Date Paid
                            <input iDatePaid = ""/>
                        </p>
                        <p>
                            Invoice Notes
                            <input iNotes = ""/>
                        </p>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>
                            <b>Job Information</b>
                        </p>
                        <p>
                            ABS Sales Order Date
                            <input sOrderDate = ""/>
                        </p>
                        <p>
                            Customer Order Date
                            <input cOrderDate = ""/>
                        </p>
                        <p>
                            Customer PO Date
                            <input poDate = ""/>
                        </p>
                        <p>
                            Customer PO Number
                            <input poNumber = ""/>
                        </p>
                        <p>
                            Credit Checked?
                            <input type = "checkbox"/>
                        </p>
                        <p>
                            Days Turn
                            <input dTurn = ""/>
                        </p>
                        <p>
                            Date Code Printing (mmddyy)
                            <input cPrinting = ""/>
                        </p>
                        <p>
                            Assembly By
                            <select assemblyBy = "order_type" id = "order_type">
                            <option value = "Select Value"> Select Value</option>
                            <option value = "Select Value"> Select Value</option>
                            </select>
                        </p>
                        <p>
                            Disc Manufactured By
                            <select discManufactured = "order_type" id = "order_type">
                            <option value = "Select Value"> Select Value</option>
                            <option value = "Select Value"> Select Value</option>
                            </select>
                        </p>
                        <p>
                            CD-R / DVD-R Brand
                            <select brand = "order_type" id = "order_type">
                            <option value = "Select Value"> Select Value</option>
                            <option value = "Select Value"> Select Value</option>
                            </select>
                        </p>
                        <p>
                            Disc Provided By
                            <select discProvided = "order_type" id = "order_type">
                            <option value = "Select Value"> Select Value</option>
                            <option value = "Select Value"> Select Value</option>
                            </select>
                        </p>
                        <p>
                            Customer Provided Material
                            <input pMaterial = ""/>
                        </p>
                        <p>
                            Customer Material ETA
                            <input materialETA = ""/>
                        </p>
                        <p>
                            Customer Notes
                            <input cNotes = ""/>
                        </p>
                        <p>
                            Vendor Notes
                            <input vNotes = ""/>
                        </p>
                        <p>
                            Order Notes
                            <input oNotes = ""/>
                        </p>
                        <p>
                            Order Status
                            <select oStatu = "order_type" id = "order_type">
                            <option value = "Submitted "> Submitted</option>
                            <option value = "Submitted"> Submitted</option>
                            </select>
                        </p>
                    </label>
                </fieldset>
            </form>
            <button onClick={() => navigate(-1)}>Home</button>
            <button onClick={() => navigate(-1)}>Submit</button>
        </div>
    )
}
export default Order;
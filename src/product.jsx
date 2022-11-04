import React from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"


const Product = () => {
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            <h1>
                Product Page
            </h1>
            <form>
                <fieldset>
                    <label>
                        <p>
                            ABS Product P/N
                            <input name = "ABS"/>
                        </p>

                        <p> 
                            Old ABS Product P/N
                            <input name = "OldABS"/>
                        </p>

                        <p>
                            Customer Absolute Media, Inc.
                        </p>
                        <p>
                            Customer ID
                            <input name = "ID"/>
                        </p>
                        <p>
                            Category
                            
                        </p>


                    </label>
                </fieldset>
                
            </form>


            <button onClick={() => navigate(-1)}>Home</button>
        </div>
    );
};

export default Product;
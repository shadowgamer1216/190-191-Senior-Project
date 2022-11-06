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
                            <input name = "ID" />
                        </p>

                    </label>
                </fieldset>
                
            </form>

            <button onClick={() => navigate(-1)}>Home</button>    
        </div>
    );
};

export default Components;

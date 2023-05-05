import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


const SearchItemCheckIn = () => {
    const navigate = useNavigate();

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

    const [data, setData] = useState([]);
    const [customer_id, setCustomerID] = useState("");
    const [item_id, setItemID] = useState("");

    // search item check in function
    const search = (e) => {
        e.preventDefault();
        Axios.get(`http://localhost:3001/api/getSearchItemCheckIn?customer_id=${customer_id}&item_id=${item_id}`)
        .then((response) =>{
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const handleView = (e, id) => {
        e.preventDefault();
        const idPassed = id.toString();
        navigate(`/itemcheckin/${idPassed}`);
    }

    const handleRemove = (e, id) => {
        e.preventDefault();
        const idPassed = id.toString();
        Axios.delete(`http://localhost:3001/api/itemcheckin/${idPassed}`)
        .then((response) =>{
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className='page'>
            <div className='HomePageBar'>
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

                <button className="btn btn-outline-light">Logout</button>
            </nav>

            </div>

            <div className="container p-5">
                <div className="page-headers">
                    <h2>SEARCH ITEM</h2>
                </div>
                <form>
                    <div className="contact-info pt-3">
                        <div className="form-row">
                            <label htmlFor="id" className="col-md-0 col-form-label"><b>Customer ID</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-2">
                                <input type="text" className="form-control" id="customer-id" onChange={(e) =>{
                                setCustomerID(e.target.value)
                            }} maxLength = "4"/>
                            </div>

                            <label htmlFor="name" className="col-md-0 col-form-label"><b>Item ID</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-4">
                                <input type="text" className="form-control" id="item-id" onChange={(e) =>{
                                setItemID(e.target.value)
                            }} maxLength = "128"/>
                            </div>

                            <div className="input-group input-group mb-3 col-md-1">
                                <button onClick={(e) => search(e)} id="search-company" className="btn btn-outline-success">Search</button>
                            </div>
                        </div>
                    </div>
                    {data && (
                        <>
                        <div className="section-headers">
                            <h5>Search Results</h5>
                        </div>
                        <div className="table-responsive-md">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Customer ID</th>
                                        <th scope="col">Item ID</th>
                                        <th scope="col">MFR PN</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Carrier</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Disposition</th>
                                        <th scope="col">VIEW</th>
                                        <th scope="col">DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{row.customer_id}</td>
                                            <td>{row.item_id}</td>
                                            <td>{row.mfr_pn}</td>
                                            <td>{row.description}</td>
                                            <td>{row.carrier}</td>
                                            <td>{row.quantity}</td>
                                            <td>{row.disposition}</td>
                                            <td><button className="btn btn-sm btn-outline-info" onClick={(e) => handleView(e, row.customer_id)}>OPEN</button></td>
                                            <td><button className="btn btn-sm btn-danger" onClick={(e) => handleRemove(e, row.customer_id)}>DELETE</button></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        </>
                    )}
                        
                    <div>
                        <button className="btn btn-outline-dark" onClick={() => navigate("../Search")}>Back</button>
                        <button className="btn btn-outline-dark" onClick={() => navigate("/")}>Home</button>
                    </div>
                </form>
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

export default SearchItemCheckIn;
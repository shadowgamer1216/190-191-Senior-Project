import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


const SearchComponent = () => {
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
    const [component_id, setComponentID] = useState("");
    const [customer_id, setCustomerID] = useState("");
    const [component_type, setComponentType] = useState("");
    const [title, setTitle] = useState("");


    // search component function
    const search = (e) => {
        e.preventDefault();
        Axios.get(`http://localhost:3001/api/getSearchComponent?component_id=${component_id}&customer_id=${customer_id}&component_type=${component_type}&title=${title}`)
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
        navigate(`/component/${idPassed}`);
    }
    
    const handleRemove = (e, id) => {
        e.preventDefault();
        const idPassed = id.toString();
        Axios.delete(`http://localhost:3001/api/component/${idPassed}`)
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

            <div className="search-container p-5">
                <div className="page-headers">
                    <h2>SEARCH COMPONENT</h2>
                </div>
                <form autoComplete="off">
                    <div className="search-info p-4 col-md-6">
                        <div className="form-row">
                            <label htmlFor="customer-id" className="col-md-3 col-form-label"><b>Customer ID</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="customer-id" onChange={(e) =>{
                                setCustomerID(e.target.value)
                                }} maxLength = "128"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="component-id" className="col-md-3 col-form-label"><b>Component ID</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="component-id" onChange={(e) =>{
                                setComponentID(e.target.value)
                                }} maxLength = "4"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="title" className="col-md-3 col-form-label"><b>Component Title</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-6">
                                <input type="text" className="form-control" id="title" onChange={(e) =>{
                                setTitle(e.target.value)
                                }} maxLength = "128"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="component-type" className="col-md-3 col-form-label"><b>Component Type</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-6">
                                <input type="text" className="form-control" id="component-type" onChange={(e) =>{
                                setComponentType(e.target.value)
                                }} maxLength = "128"/>
                            </div>

                            <div className="input-group input-group mb-3 col-md-3 d-flex justify-content-end">
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
                                        <th scope="col">Component Type</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">OEM P/N</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">VIEW</th>
                                        <th scope="col">DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{row.customer_id}</td>
                                            <td>{row.component_type}</td>
                                            <td>{row.title}</td>
                                            <td>{row.oem_pn}</td>
                                            <td>{row.description}</td>
                                            <td><button className="btn btn-sm btn-outline-info" onClick={(e) => handleView(e, row.component_id)}>OPEN</button></td>
                                            <td><button className="btn btn-sm btn-danger" onClick={(e) => handleRemove(e, row.component_id)}>DELETE</button></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        </>
                    )}
                        
                    <div className="navButtons">
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

export default SearchComponent;
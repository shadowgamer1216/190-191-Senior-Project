import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


const SearchProduct = () => {
    const navigate = useNavigate();
    const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);


    const routeChange = () => {
        let path = '/login';
        navigate(path);
    };
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        if(sessionStorage.getItem('currentUser') === "absolutemediafirebase@gmail.com"){
			setDeleteButtonDisabled(false);
		}
        if (!authToken) {
            routeChange()
        }
    }, []);

    const [data, setData] = useState([]);
    const [product_id, setProductID] = useState("");
    const [customer_id, setCustomerID] = useState("");
    const [product_type, setProductType] = useState("");
    const [product_title, setProductTitle] = useState("");


    // search product function
    const search = (e) => {
        e.preventDefault();
        Axios.get(`http://localhost:3001/api/getSearchProduct?product_id=${product_id}&customer_id=${customer_id}&product_category=${product_type}&product_title=${product_title}`)
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
        navigate(`/product/${idPassed}`);
    }
    
    const handleRemove = (e, id) => {
        e.preventDefault();
        const idPassed = id.toString();
        Axios.delete(`http://localhost:3001/api/product/${idPassed}`)
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
                    <h2>SEARCH PRODUCT</h2>
                </div>
                <form autoComplete="off">
                    <div className="search-info p-4 col-md-6">
                        <div className="form-row">
                            <label htmlFor="product-id" className="col-md-3 col-form-label"><b>Product ID</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="product-id" onChange={(e) =>{
                                setProductID(e.target.value)
                                }} maxLength = "4"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="customer-id" className="col-md-3 col-form-label"><b>Customer ID</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="customer-id" onChange={(e) =>{
                                setCustomerID(e.target.value)
                                }} maxLength = "128"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="product-title" className="col-md-3 col-form-label"><b>Product Title</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-6">
                                <input type="text" className="form-control" id="product-title" onChange={(e) =>{
                                setProductTitle(e.target.value)
                                }} maxLength = "128"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="product-type" className="col-md-3 col-form-label"><b>Product Type</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-6">
                                <input type="text" className="form-control" id="product-type" onChange={(e) =>{
                                setProductType(e.target.value)
                                }} maxLength = "128"/>
                            </div>
                            <div className="input-group input-group mb-3 col-md-3 d-flex justify-content-end">
                                <button onClick={(e) => search(e)} id="search-product" className="btn btn-outline-success">Search</button>
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
                                        <th scope="col">Product Type</th>
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
                                            <td>{row.product_type}</td>
                                            <td>{row.title}</td>
                                            <td>{row.oem_pn}</td>
                                            <td>{row.description}</td>
                                            <td><button className="btn btn-sm btn-outline-info" onClick={(e) => handleView(e, row.product_id)}>OPEN</button></td>
                                            <td><button disabled={deleteButtonDisabled} className="btn btn-sm btn-danger" onClick={(e) => handleRemove(e, row.product_id)}>DELETE</button></td>
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

export default SearchProduct;
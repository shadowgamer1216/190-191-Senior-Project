import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


const SearchCompany = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [company_ID, setCompanyID] = useState(null);
    const [company_Name, setCompanyName] = useState(null);
    const routeChange = () => {
        let path = '/login';
        navigate(path);
    };
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (!authToken) {
            routeChange()
        }
    }, [])

    const submit = () => {
        Axios.post("http://localhost:3001/api/searchCompany", {company_ID:company_ID, company_Name:company_Name})
        .then(()=> {
            alert('searching for company');
        })
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getSearchCompany").then((response) =>{
            setData(response.data);
        });
    }, []);

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
                    <h2>SEARCH COMPANY</h2>
                </div>
                <form>
                    <div className="contact-info pt-3">
                        <div className="form-row">

                            <label htmlFor="id" className="col-sm-0 col-form-label">ID</label>
                                <div className="input-group input-group-sm mb-3 col-sm-2">
                                <input type="text" className="form-control" id="CID" onChange={(e) =>{
                                    setCompanyID(e.target.value)
                                }} maxLength = "8"/>
                                </div>

                                <label htmlFor="name" className="col-sm-0 col-form-label">Name</label>
                                <div className="input-group input-group-sm mb-3 col-sm-3">
                                <input type="text" className="form-control" id="CName" onChange={(e) =>{
                                    setCompanyName(e.target.value)
                                }} maxLength = "128"/>
                                </div>

                        </div>
                    </div>
                    <div className='mb-5'>
                        <button onClick = {submit} type="submit" id="search-contact" className="btn btn-outline-success">Search</button>
                    </div>
                    <table className="table mt-5">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope ="col">Search Results</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row) => (
                                            <tr key={data.customer_id}>
                                                <td>{row.customer_id}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                    </table>
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

export default SearchCompany;
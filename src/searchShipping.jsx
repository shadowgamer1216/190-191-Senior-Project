import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


const SearchShipping = ({ handleLogout }) => {
    const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);

    const navigate = useNavigate();

    const routeChange = () => {
        let path = '/login';
        navigate(path);
    };
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');
        
        if(sessionStorage.getItem('currentUser') === "absolutemediafirebase@gmail.com"){
			setDeleteButtonDisabled(false);
		}
		
        if (!authToken) {
            routeChange()
        }
    }, []);

    const [data, setData] = useState([]);
    const [order_id, setOrderID] = useState("");


    // search shipping function
    const search = (e) => {
        e.preventDefault();
        Axios.get(`http://localhost:3001/api/getSearchShipping?order_id=${order_id}`)
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
        navigate(`/shipping/${idPassed}`);
    }
    
    const handleRemove = (e, id) => {
        e.preventDefault();
        const idPassed = id.toString();
        Axios.delete(`http://localhost:3001/api/shipping/${idPassed}`)
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

                <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
            </nav>

            </div>

            <div className="search-container p-5">
                <div className="page-headers">
                    <h2>SEARCH SHIPPING</h2>
                </div>
                <form autoComplete="off">
                    <div className="search-info p-4 col-md-6">
                        <div className="form-row">
                            <label htmlFor="order-id" className="col-md-3 col-form-label"><b>Order ID</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="order-id" onChange={(e) =>{
                                setOrderID(e.target.value)
                                }} maxLength = "128"/>
                            </div>
                            <div className="input-group input-group mb-3 col-md-3 d-flex justify-content-end">
                                <button onClick={(e) => search(e)} id="search-order" className="btn btn-outline-success">Search</button>
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
                                        <th scope="col">Company Name</th>
                                        <th scope="col">Contact Name</th>
                                        <th scope="col">Address 1</th>
                                        <th scope="col">City</th>
                                        <th scope="col">State</th>
                                        <th scope="col">Zip</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">VIEW</th>
                                        <th scope="col">DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{row.company_name}</td>
                                            <td>{row.contact_name}</td>
                                            <td>{row.add1}</td>
                                            <td>{row.city}</td>
                                            <td>{row.state}</td>
                                            <td>{row.zip}</td>
                                            <td>{row.country}</td>
                                            <td>{row.phone}</td>
                                            <td>{row.email}</td>
                                            <td><button className="btn btn-sm btn-outline-info" onClick={(e) => handleView(e, row.shipping_id)}>OPEN</button></td>
                                            <td><button disabled={deleteButtonDisabled} className="btn btn-sm btn-danger" onClick={(e) => handleRemove(e, row.shipping_id)}>DELETE</button></td>
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

export default SearchShipping;
import React from "react";
import {useState, useEffect} from "react";
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import Axios from "axios";


const SearchLocation = () => {
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
    const [location_id, setLocationID] = useState("");
    const [location_type, setLocationType] = useState("");
    const [item_id, setItemID] = useState("");
    const [physical_location, setPhysicalLocation] = useState("");


    // search component function
    const search = (e) => {
        e.preventDefault();
        Axios.get(`http://localhost:3001/api/getSearchLocation?location_id=${location_id}&location_type=${location_type}&item_id=${item_id}&physical_location=${physical_location}`)
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
        navigate(`/location/${idPassed}`);
    }
    
    const handleRemove = (e, id) => {
        e.preventDefault();
        const idPassed = id.toString();
        Axios.delete(`http://localhost:3001/api/location/${idPassed}`)
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
                    <h2>SEARCH LOCATION</h2>
                </div>
                <form autoComplete="off">
                    <div className="search-info p-4 col-md-6">
                        <div className="form-row">
                            <label htmlFor="customer-id" className="col-md-3 col-form-label"><b>Location ID</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="location-id" onChange={(e) =>{
                                setLocationID(e.target.value)
                                }} maxLength = "128"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="component-id" className="col-md-3 col-form-label"><b>Location Type</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-3">
                                <input type="text" className="form-control" id="location-type" onChange={(e) =>{
                                setLocationType(e.target.value)
                                }} maxLength = "128"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="title" className="col-md-3 col-form-label"><b>Item ID</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-6">
                                <input type="text" className="form-control" id="title" onChange={(e) =>{
                                setItemID(e.target.value)
                                }} maxLength = "128"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <label htmlFor="component-type" className="col-md-3 col-form-label"><b>Physical Location</b></label>
                            <div className="input-group input-group-sm mb-3 col-md-6">
                                <input type="text" className="form-control" id="component-type" onChange={(e) =>{
                                setPhysicalLocation(e.target.value)
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
                                        <th scope="col">Location ID</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Item ID</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Item Owner</th>
                                        <th scope="col">Physical Location</th>
                                        <th scope="col">Notes</th>
                                        <th scope="col">VIEW</th>
                                        <th scope="col">DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, index) => (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{row.location_id}</td>
                                            <td>{row.component_type}</td>
                                            <td>{row.title}</td>
                                            <td>{row.oem_pn}</td>
                                            <td>{row.description}</td>
                                            <td><button className="btn btn-sm btn-outline-info" onClick={(e) => handleView(e, row.location_id)}>OPEN</button></td>
                                            <td><button disabled={setDeleteButtonDisabled} className="btn btn-sm btn-danger" onClick={(e) => handleRemove(e, row.location_id)}>DELETE</button></td>
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

export default SearchLocation;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Add Employee Data</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/display">Display Employee Data</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
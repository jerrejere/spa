import React from "react";
import "../styles/NavBar.css"
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function NavBar(){
    return(
        <div className="container-fluid">
            <div className="navbar">
                
                <NavLink to='/'>Home</NavLink>
                <NavLink to= '/form'>Booking Form</NavLink>
                <NavLink to= '/doctors'>Doctors</NavLink>
                <NavLink to= '/contactUs'>Contact Us</NavLink>
                <NavLink to= '/about'>About Us</NavLink>
            </div>
        </div>
    )
}

export default NavBar;
import React from "react";

import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function NavBar(){
    return(
        <div className="container-fluid">
            <div className="navbar">
                
                <NavLink to='/'>Home</NavLink>                
               <NavLink to= '/site'>Busy Centre</NavLink>
               <NavLink to= '/form'>Book here</NavLink>
               <NavLink to= '/about'>About Us</NavLink>
                <NavLink to= '/contactUs'>Contact Us</NavLink>
             
            </div>
        </div>
    )
}

export default NavBar;
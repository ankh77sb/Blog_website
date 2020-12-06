import React from 'react';
import { Link , NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav style={{backgroundColor:"#394867"}}>
         <div>
        
         <p>IITI BLOG</p>
         <ul>
             <li><NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/dashboard">DashboardS</NavLink></li>  
        </ul>
             
         </div> 
      </nav>  
    );
}

export default Navbar;
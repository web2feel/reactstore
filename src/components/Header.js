import React from "react";
import {Link} from "react-router-dom"
function Header({name}) {  
  return <div className="appHeader">
    <h1><Link to="/">{name}</Link></h1>  
    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      </ul>  
    </div>;
}

export default Header;

import React from 'react';
import { Link } from "react-router-dom";
import "./siderBar.css";

const SiderBar = () => {
  

  return (
    <div class="wrapper">
    <div class="sidebar">
    <Link class="active"  to="/admin/inicioPortal/IndexPortal">
        <div class="siderLogo">
        
        <img src="/logo.png" alt="Logo"/>
       
    </div>
    </Link>
    <div id="menuOpcion">
    <ul>
      <li>
      <Link class="active"  to="/admin/products/list">
          <span class="icon"><i class="fa fa-shopping-basket"></i></span>
          <span class="item">Productos</span>
      
      </Link>
      </li>
                
    </ul>
    </div>
    </div>
    </div>
  )
}

export default SiderBar
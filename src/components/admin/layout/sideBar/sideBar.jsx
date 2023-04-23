import React from 'react';
import { Link } from "react-router-dom";
import "./siderBar.css";

const SiderBar = () => {
  

  return (
    <div class="wrapper">
    <div class="sidebar">
        <div class="siderLogo">
        <img src="/logo.png" alt="Logo"/>
    </div>
    <div id="menuOpcion">
    <ul>
      <li>
      <Link class="active"  to="/">
          <span class="icon"><i class="fa fa-shopping-basket"></i></span>
          <span class="item">Productos</span>
      </Link>
        
      </li>
      <li>
        <Link class="active"  to="/">
              <span class="icon"><i class="fa fa-pencil-square-o"></i></span>
              <span class="item">My Dashboard</span>
        </Link>
      </li>
                
    </ul>
    </div>
    </div>
    </div>
  )
}

export default SiderBar
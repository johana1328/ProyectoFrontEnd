import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./header/Header"
import SiderBar from './sideBar/sideBar';

const LayoutAdmin = () => {
  return (
    <div class="container-fluid">
      <div class="row">
       <div class="col-12">
          <Header/> 
        </div>
      </div>
      <div class="container">
      <div class="row">
        <div class="col-2">
          <SiderBar />
        </div>
        <div class="col-10">
          <Outlet />
        </div> 
      </div> 
      </div>
    </div>
  )
}

export default LayoutAdmin;
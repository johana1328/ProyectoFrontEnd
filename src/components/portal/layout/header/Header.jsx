import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header class="header navbar-area">
        <div class="topbar">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="top-left">
                            <ul class="menu-top-link">
                                <li>
                                    <div class="col-lg-3 col-md-3 col-7">
                                        <a class="navbar-brand" href="index.html">
                                            <img src="/logo.png" alt="Logo"/>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-top-left4 col-md-4 col-12">
                       
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                        <div class="top-end">
                            <ul class="user-login">
                                <li>
                                <Link to="/">Inicio</Link>
                                </li>
                                <li>
                                <Link to="/products">Productos</Link>
                                </li>
                                <li>
                                    <div class="button">
                                        <Link class="btn" to="/login">Productos</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
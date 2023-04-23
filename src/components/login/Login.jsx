import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
   
      <div class="contenedor-formulario contenedor">
        <div class="imagen-formulario">
            
        </div>
        <div class="card">
        <form class="formulario">
        <div class="texto-formulario">
                <h2>Bienvenido</h2>
                <p>Inicia sesión con tu cuenta</p>
            </div>
            <div class="input">
                <label for="usuario">Usuario</label>
                <input placeholder="Usuario" type="text" id="usuario" />
            </div>
            <div class="input">
                <label for="contraseña">Contraseña</label>
                <input placeholder="Contraseña" type="password" id="contraseña" />
            </div>
            <div class="password-olvidada">
                <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <div class="button">
                <Link class="btn" to="/admin/products/create">Ingresar</Link>
            </div>
        </form>
        </div>
    </div>
   
  )
}

export default Login;
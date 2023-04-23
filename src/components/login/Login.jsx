import React from 'react';
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
            <div class="input">
                <input type="submit" value="Ingresar" />
            </div>
        </form>
        </div>
    </div>
   
  )
}

export default Login;
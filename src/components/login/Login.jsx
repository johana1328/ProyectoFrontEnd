import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
   
    <section class="ftco-section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10">
                <div class="wrap d-md-flex">
                    <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                        <div class="text w-100">
                            <h2>Bienvenido</h2>
                            <p>Inicia sesión con tu cuenta</p>
                        </div>
              </div>
                    <div class="login-wrap p-4 p-lg-5">
                    <div class="img-login">
                        <img src="imaLogo.jpg" alt=""/>
                  </div>
                  <div class="d-flex">
                  </div>
                 <form action="#">
                 <div class="col-md-12">
                    <label class="form-label">Usuario</label>
                    <input type="text" class="form-control" id="user" placeholder='Usuario' required/>
                 </div>
                 <div class="col-md-12">
                    <label class="form-label">Contraseña</label>
                    <input type="text" class="form-control" id="password" placeholder='Contraseña' required/>
                 </div>
                 <div class="button">
                   <Link class="btn" to="/admin/products/create">Ingresar</Link>
                 </div>
              </form>
            </div>
          </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Login;
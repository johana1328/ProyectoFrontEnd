import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css'

import CarrucelInicio from './components/portal/home/CarrucelInicio';
import Categoria from './components/portal/categorias/Categoria'
import Login from './components/login/Login'
import E404 from './components/errorPages/e404'
import Layout from './components/portal/layout/layaut';
import Producto from './components/portal/producto/producto';

import LayoutAdmin from './components/admin/layout/layautAdmin';
import ProductForm from './components/admin/producto/creacion producto/ProductForm';
import ListProduct from './components/admin/producto/creacion producto/ListProduct';
import IndexPortal from './components/admin/inicioPortal/IndexPortal';
import Detail from './components/portal/producto/detail/Detail';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CarrucelInicio />} />
            <Route path="products" element={<Categoria />} />
            <Route path="products/:id" element={<Producto />} />
            <Route path="products/:id/detail" element={<Detail />} />
            <Route path="*" element={<E404 />} />
          </Route> 
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="inicioPortal/IndexPortal" element={<IndexPortal />} />
            <Route path="products/create" element={<ProductForm />} />
            <Route path="products/list" element={<ListProduct />} />
          </Route> 
          <Route path="/login">
             <Route index element={<Login />} />
          </Route>
        </Routes> 
    </div>
  )
}

export default App

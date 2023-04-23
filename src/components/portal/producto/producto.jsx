import React, { useState, useEffect } from 'react'
import { useParams, Link} from "react-router-dom";

const Producto = () => {
    const [productos, setArticulos] = useState([])
    const {id} = useParams();
    useEffect(() => {
        fetch(`/data/${id}.json`)
          .then((response) => {
            return response.json()
          })
          .then((productos) => {
            setArticulos(productos)
          })
      }, [])
    
return(
     <section class="item-details section">
        <div class="single-block">
          <div class="col-lg-12 col-12">
            <div class="info-body custom-responsive-margin">
                <h2 class="section-title">Productos</h2> 
                <div class="container">
                  <div class="row">
                  {
                     productos.map(producto =>{
                         return(
                          <div class="col-3" >
                            <div class="card">
                              <img class="card-img-top" src={producto.image} alt="Card image cap"/>
                              <div class="card-body">
                                <div class="button cart-button">
                                    <Link class="btn" to="/login">{producto.name}</Link>
                                </div>
                              </div>
                           </div>
                          </div>
                         );
                     })
                  }
                  </div> 
                </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

export default Producto
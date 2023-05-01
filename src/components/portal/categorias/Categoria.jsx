import PropTypes from 'prop-types'
import React, { Component} from 'react'
import {useParams, Link} from "react-router-dom";
import './categoria.css'


export class Categoria extends Component {
 
  state = {
    isLoading: true,
    categorias: [],
    error: null
  };

  getcategorias() {
    this.setState({
        loading: true
    }, () => {
        fetch("http://localhost:3000/category")
          .then(res => res.json())
          .then(result => this.setState({
            loading: false,
            categorias: result
        })).catch(console.log);
    });
}  

componentDidMount() {
  this.getcategorias();
}

  render() {
    const { categorias, error} = this.state;
    function toBase64(arr) {
      return btoa(
         arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
   }
    return (
      <section class="item-details section">
        <div class="single-block">
          <div class="col-lg-12 col-12">
          <div class="info-body custom-responsive-margin">
               <h2 class="section-title">Categorias</h2> 
           
                  <div class="row">
                  {
                     categorias.map(categoria =>{
                       const {id, name, image } = categoria;
                       const data = image.data.data;
                       const img = toBase64(data);
                       let url = '/products/ss'
                         return(
                          <div class="col-3" >
                            <div class="card">
                              <img class=" img-fluid" src={`data:${image.contentType};base64,${img}`} alt="Card image cap"/>
                              <div class="card-body">
                                <div class="button cart-button">
                                <Link class="btn" to={url}>{name}</Link>
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
        
      </section>
    )
  }
}

export default Categoria
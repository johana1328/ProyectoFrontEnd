import React from 'react';
import "./detail.css";

const Detail = () => {
  return (
    <section class="item-details section">
    <div class="container">
        <div class="top-area">
            <div class="row ">
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="product-images">
                        <main id="gallery">
                            <div class="main-img">
                                <img src="arroz.png" id="current" alt="#"/>
                            </div>
                        </main>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-12">
                    <div class="product-info">
                        <h1 class="info-text" >Detalle de producto</h1>
                        <h2 class="title">Arroz Diana blanco 
                            <br/> x1000gr</h2>
                            <h4 class="info-text">Descripción</h4>
                        <h3 class="price">Proporciónale todo el amor a tu familia 
                           <br/> con el delicioso Arroz Diana</h3>
                        
                        <h5>Precio: <span>$ 3.200</span></h5>
                        <h5>Cantidad disponible: <span>500</span></h5>
                            <br/>
                            <div class="bottom-content">
                                <div class="row align-items-end">
                                    <div class="col-lg-4 col-md-4 col-12">
                                        <div class="button cart-button">
                                            <button class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                              </svg>  Más información </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
         
            </div>
        </div>
        <div class="product-details-info">
            <div class="single-block">
                    <div class="col-lg-12 col-12">
                        <div class="info-body custom-responsive-margin">
                            <h3>Productos Similares</h3> 
                            <br/>
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="card">
                                                <img class="card-img-top" src="lentejas.png" alt="Card image cap"/>
                                                <div class="card-body">
                                                  <h5 class="card-title">Lentejas Diana</h5>
                                                  <p class="info_detail">Lentejas diana x500gr</p>
                                                  <h6>Precio: <span>$ 3.200</span></h6>
                                                  <br/>
                                                  <div class="button cart-button">
                                                    <button class="btn">Detalle </button>
                                                </div>
                                                </div>
                                              </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <img class="card-img-top" src="frijol.png" alt="Card image cap"/>
                                                <div class="card-body">
                                                  <h5 class="card-title">Frijol Diana</h5>
                                                  <p class="info_detail">Frijol diana x500gr</p>
                                                  <h6>Precio: <span>$ 3.200</span></h6>
                                                  <br/>
                                                  <div class="button cart-button">
                                                    <button class="btn">Detalle </button>
                                                </div>
                                                </div>
                                              </div>
                                        </div>
                                        <div class="col">
                                            <div class="card">
                                                <img class="card-img-top" src="arveja.png" alt="Card image cap"/>
                                                <div class="card-body">
                                                  <h5 class="card-title">Arveja Diana </h5>
                                                  <p class="info_detail">Arveja diana x500gr</p>
                                                  <h6>Precio: <span>$ 3.200</span></h6>
                                                  <br/>
                                                  <div class="button cart-button">
                                                    <button class="btn">Detalle </button>
                                                </div>
                                                </div>
                                              </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Detail;
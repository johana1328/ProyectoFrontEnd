import React from "react";
//import cesta from '../inicioPortal/img/cesto_comida.avif'


const InicioPortal = () => {
  return (
    <div>
        <h1 style={{ display: 'flex', marginLeft: '20%' }}>Bienvenido</h1>

        <div style={{ width: '25%', border: '1px solid black', padding: '10px', marginLeft: '20%' }}>
          <h2 style={{ fontSize: '16px', margin: 0 }}>Stock total</h2>
          <div style={{ marginTop: '5px', width: '50%', backgroundColor: 'green', height: '10px' }}></div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <img src="../inicioPortal/img/cesto_comida.avif" alt="Imagen" style={{ marginLeft: '20px' }} />
        </div>
      </div>
  );
};

export default InicioPortal;
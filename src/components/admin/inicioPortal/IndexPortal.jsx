import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';


const InicioPortal = () => {
  return (
    <section style={{ padding: '2em 0'}}>
        <h1 class="section-title">Bienvenido</h1> 
        <Card>
      <Card.Body>
        <h3>Stock</h3>
      <ProgressBar variant="success" now={40} />
      </Card.Body>
    </Card>
    <div style={{width:'50%', float:'right'}}>
      <img src="/canastaInicio.png" alt="" />
    </div>
      </section>
  );
};

export default InicioPortal;
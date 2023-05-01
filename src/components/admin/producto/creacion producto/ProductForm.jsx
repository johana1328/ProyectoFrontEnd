import React from "react";
import "./productForm.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";

function ProductForm() {
  
  return (
 
    <section style={{ padding: '2em 0'}}>
   
     <h2 class="section-title">Crear producto</h2> 
      <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-12 col-lg-12">
        <div class="wrap"  style={{ padding: '52px' }}>
        <>
          {[
          'success',
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
            ))}
        </>
          <Form>
          <Row className="mb-12">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nombre de producto</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Valor de producto</Form.Label>
              <Form.Control  />
            
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="">
              <Form.Label>Cantidad</Form.Label>
                <Form.Control /></Form.Group>
          </Row>
          <br/>
          <Row className="mb-12">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Categoria</Form.Label>
              <Form.Select>
                <option>Selecciona categoria</option>
              </Form.Select>
            </Form.Group>
         
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Promocion</Form.Label>
              <Form.Select>
                <option>Selecciona promoción</option>
                <option>10%</option>
                <option>20%</option>
              </Form.Select>
            
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="">
              <Form.Label>Imagen</Form.Label>
                <Form.Control type="file"/>
            </Form.Group>
          </Row>
          <br/>
          <Form.Group>
          <Form.Label>Descripción</Form.Label>  
          <Form.Control
          as="textarea"
          placeholder=""
          style={{ height: '100px' }}
        />
         </Form.Group>
         <br/>
         <Row>
         
         <div class="col-2 button cart-button">
         <Link to="/admin/products/list">
               <button class="btncancel" type="submit">Cancelar </button>
          </Link>
          </div>
          
          <div class="col button cart-button">
               <button class="btn">Guardar </button>
          </div>
          </Row>
        </Form>
        </div>
        </div>
    </div>
    </div>
 
  </section>
  );
}

export default ProductForm;

import React, { Component } from "react";
import axios from 'axios';
import "./productForm.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

export class ProductForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isOkData : false,
        isLoading: false,
        categorias: [],
        form:{category:'', name:'', descripcion:'', value:'', stock:'', discount:'', file: null },
        error: null
      };
      this.sendData = this.sendData.bind(this);
      this.onFileChange = this.onFileChange.bind(this);
  }
 
  getcategorias() {
    this.setState(
      {
        loading: true,
      },
      () => {
        fetch("http://localhost:3000/category")
          .then((res) => res.json())
          .then((result) =>
            this.setState({
              loading: false,
              categorias: result,
            })
          )
          .catch(console.log);
      }
    );
  }

  componentDidMount() {
    this.getcategorias();
  }

  onFileChange(event){
    this.state.form.file = event.target.files[0];
  }

  sendData(){
    event.preventDefault();
 
    const formData = new FormData();
    formData.append(
      "image",
      this.state.form.file,
      this.state.form.file.name
    );
    formData.append("category",this.state.form.category)
    formData.append("name",this.state.form.name)
    formData.append("descripcion",this.state.form.descripcion)
    formData.append("value",this.state.form.value)
    formData.append("stock",this.state.form.stock)
    formData.append("discount",this.state.form.discount)
    axios.post("http://localhost:3000/product", formData).then(response=>{
        if(response.status == '204'){
            this.state.isOkData = true;
            this.state.form.category='';
            this.state.form.name='';
        }
    });
    
  }

  render() {
    const { categorias, error} = this.state;
    return (
      <section style={{ padding: "2em 0" }}>
        <h2 class="section-title">Crear producto</h2>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-12">
              <div class="wrap" style={{ padding: "52px" }}>
                <div className={this.state.isOkData? undefined : 'hidden'}   >
                  {["success"].map((variant) => (
                    <Alert key={variant} variant={variant}>
                      This is a {variant} alert—check it out!
                    </Alert>
                  ))}
                </div>
                <Form>
                  <Row className="mb-12">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label>Nombre de producto</Form.Label>
                      <Form.Control type="text" value={this.state.form.name}  
                       onChange={(e) => this.setState(Object.assign(this.state.form,{name:e.target.value}))} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Valor de producto</Form.Label>
                      <Form.Control value={this.state.form.value} 
                      onChange={(e) => this.setState(Object.assign(this.state.form,{value:e.target.value}))} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="">
                      <Form.Label>Cantidad</Form.Label>
                      <Form.Control value={this.state.form.stock} 
                      onChange={(e) => this.setState(Object.assign(this.state.form,{stock:e.target.value}))} />
                    </Form.Group>
                  </Row>
                  <br />
                  <Row className="mb-12">
                    <Form.Group  as={Col} md="4" controlId="validationCustom01">
                      <Form.Label>Categoria</Form.Label>
                      <Form.Select value={this.state.form.category} 
                      onChange={(e) => this.setState(Object.assign(this.state.form,{category:e.target.value}))}  >
                        {
                          categorias.map(categoria =>{
                            const {id, name, image } = categoria;
                            return(<option value={`${id}`} >{name}</option>)
                          })
                        }
                      </Form.Select>
                    </Form.Group>

                    <Form.Group  as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Promocion</Form.Label>
                      <Form.Select value={this.state.form.discount}
                      onChange={(e) => this.setState(Object.assign(this.state.form,{discount:e.target.value}))}  >
                        <option>Selecciona promoción</option>
                        <option value="10" >10%</option>
                        <option value="20" >20%</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="">
                      <Form.Label>Imagen</Form.Label>
                      <Form.Control type="file" onChange={this.onFileChange} />
                    </Form.Group>
                  </Row>
                  <br />
                  <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control value={this.state.form.descripcion}
                     onChange={(e) => this.setState(Object.assign(this.state.form,{descripcion:e.target.value}))}
                      as="textarea"
                      placeholder=""
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                  <br />
                  <Row>
                    <div class="col-2 button cart-button">
                      <Link to="/admin/products/list">
                        <button class="btncancel" type="submit">
                          Cancelar{" "}
                        </button>
                      </Link>
                    </div>

                    <div class="col button cart-button">
                      <button type="button" onClick={this.sendData} class="btn">Guardar </button>
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
}

export default ProductForm;

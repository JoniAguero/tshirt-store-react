import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import data from "../data/data.json";

import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';
import { Nosotros } from './Nosotros/Nosotros';
import { NotFound } from './404/404';
import { Productos } from './Productos/Productos';

import SingleProducto from "./SingleProducto/SingleProducto";
import { Contacto } from './Contacto/Contacto';

export class Router extends Component {

  state = {
    productos: []
  }

  componentWillMount() {
    this.setState({
      productos: data
    })
  }

  render() {
    return (
      //   Routing ( barra de navagación ) 
      <BrowserRouter>
        <div className="contenedor">
          <Header />
          <Navegacion />
          {/* Nos permite crear las rutas */}
          <Switch>
            <Route exact path="/" render={ () => (
              <Productos productos={this.state.productos}/>
            )} />
            <Route exact path="/productos" render={() => (
              <Productos productos={this.state.productos} />
            )} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/producto/:id" render={(props) => {
              let idProducto = props.location.pathname.replace('/producto/', '');
              return(
                <SingleProducto producto={this.state.productos[idProducto]} />
              )
            }} />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router;

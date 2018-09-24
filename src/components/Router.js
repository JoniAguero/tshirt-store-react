import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import data from "../data/data.json";

import { Inicio } from './Inicio/Inicio'
import { Nosotros } from './Nosotros/Nosotros';
import { NotFound } from './404/404';
import { Productos } from './Productos/Productos';

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
        {/* Nos permite crear las rutas */}
        <Switch>
          <Route exact path="/" render={ () => (
            <Productos productos={this.state.productos}/>
          )} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;

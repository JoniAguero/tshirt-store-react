import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Inicio } from './Inicio/Inicio'
import { Nosotros } from './Nosotros/Nosotros';
import { NotFound } from './404/404';

export class Router extends Component {

  state = {
    productos: []
  }

  componentWillMount() {
    this.setState({
      productos: this.props.data
    })
  }

  render() {
    return (
      //   Routing ( barra de navagación ) 
      <BrowserRouter>
        {/* Nos permite crear las rutas */}
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;

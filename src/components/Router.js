import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Inicio } from './Inicio/Inicio';

export class Router extends Component {
  render() {
    return (
      //   Routing ( barra de navagación ) 
      <BrowserRouter>
        {/* Nos permite crear las rutas */}
        <Switch>
            <Route path="" component={Inicio} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;

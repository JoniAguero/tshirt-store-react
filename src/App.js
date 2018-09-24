import React, { Component } from 'react';
import { Router } from './components/Router';

import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <Header />
        <Router />
      </div>
    );
  }
}

export default App;

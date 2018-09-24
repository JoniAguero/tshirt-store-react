import React, { Component } from 'react';
import { Router } from './components/Router';

import data from "./data/data.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router data={data} />
      </div>
    );
  }
}

export default App;

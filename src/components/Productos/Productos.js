import React, { Component } from 'react'
import Producto from '../Producto/Producto';

export class Productos extends Component {
  render() {
    return (
      <div className="productos">
        <h2>Nuestros Productos</h2>
        <ul className="lista-productos">
            {Object.keys(this.props.productos).map( producto => (
                    <Producto info={this.props.productos[producto]}
                              key={producto}  />
            ))}
        </ul>
      </div>
    )
  }
}

export default Productos

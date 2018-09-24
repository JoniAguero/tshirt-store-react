import React, { Component }  from 'react'

import './Buscador.css';

class Buscador extends Component {

    
    leerDatos = (e) => {
        // Leemos los datos que se escriben en el input
        const termino = e.target.value;

        // Enviamos búsqueda
        this.props.busqueda(termino);
    }

    render() {
        return (
            <form className="buscador">
                <input type="text" placeholder="Búsqueda.." onChange={this.leerDatos} />
            </form>
        )
    }
    
}

export default Buscador;

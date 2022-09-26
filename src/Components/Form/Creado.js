import React from 'react'
import './Creado.css'


const Creado = ({ clearError_creado }) => {
    return (
        <div className='creado' >
            <h1> Create  </h1>
            <button onClick={clearError_creado}  > x</button>

        </div>
    )
}

export default Creado
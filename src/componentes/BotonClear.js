import React from "react";
import '../hoja-de-estilo/BotonClear.css'

const BotonClear = (props) => (
    <div className='boton-clear'
         onClick={() => props.manejarClic(props.children)}>
        {props.children}
    </div>
);
export default BotonClear;
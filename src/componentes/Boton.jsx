import React from 'react'
import '../hojasDeEstilo/Boton.css'

function Boton(props){
  const esOperador = valor =>{
    return isNaN(valor) && (valor !=='.') && (valor !=='=');
  };
  return (
    <div 
      className={`botonContenedor ${esOperador(props.children) ? 'operador' : ''}`.trim()}
      onClick= {() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );                            
}

export default Boton;
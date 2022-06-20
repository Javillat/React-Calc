import './App.css';
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const agreagarInput = valor => {
    setInput(input + valor);
  }; 

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Por favor agregá valores para realizar los calculos.')
    }
  }

  const limpiarInput = () => {
    setInput('');
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp'/> 
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agreagarInput}>1</Boton>
          <Boton manejarClic={agreagarInput}>2</Boton>
          <Boton manejarClic={agreagarInput}>3</Boton>
          <Boton manejarClic={agreagarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agreagarInput}>4</Boton>
          <Boton manejarClic={agreagarInput}>5</Boton>
          <Boton manejarClic={agreagarInput}>6</Boton>
          <Boton manejarClic={agreagarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agreagarInput}>7</Boton>
          <Boton manejarClic={agreagarInput}>8</Boton>
          <Boton manejarClic={agreagarInput}>9</Boton>
          <Boton manejarClic={agreagarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agreagarInput}>0</Boton>
          <Boton manejarClic={agreagarInput}>.</Boton>
          <Boton manejarClic={agreagarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClic={limpiarInput}>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;

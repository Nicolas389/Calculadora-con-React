
import './App.css';
import imagen from "./imagenes/calculadora.png"
import Boton from "./componentes/Boton"
import BotonClear from './componentes/BotonClear';
import Pantalla from "./componentes/Pantalla";
import Titulo from "./componentes/Titulo"
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {
  
  const [input, setInput] = useState("");
  const filtro = ["+-","++","+/","+*","--","-+","-*","-/","/+","/-","//","/*","*+","*-","*/","**"]
  
  const agregarInput = valor => {
    for(let i = 0;i <= filtro.length; i++){
      if(input.includes(filtro[i])){  
        alert("Use solo un operador!");
        setInput(" ");
        break;
      }else{
        setInput(input + valor);
      }
    }      
  }

  const calcularResultado = () => {
    if(input){      
      const resultado = evaluate(input);
      setInput(String(resultado));   
      
    }else{
      alert("Ingrese valores para realizar la operacion.")
    }    
  } 

  return (
    <div className="App">
      <div className='contenedor-titulo'>
      <Titulo imagen={imagen}></Titulo>
      </div>
    <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className='fila'>
        <Boton manejarClic={agregarInput} >1</Boton>
        <Boton manejarClic={agregarInput} >2</Boton>
        <Boton manejarClic={agregarInput} >3</Boton>
        <Boton manejarClic={agregarInput} >+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput} >4</Boton>
        <Boton manejarClic={agregarInput} >5</Boton>
        <Boton manejarClic={agregarInput} >6</Boton>
        <Boton manejarClic={agregarInput} >-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput} >7</Boton>
        <Boton manejarClic={agregarInput} >8</Boton>
        <Boton manejarClic={agregarInput} >9</Boton>
        <Boton manejarClic={agregarInput} >*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput} >.</Boton>
        <Boton manejarClic={agregarInput} >0</Boton>
        <Boton manejarClic={calcularResultado} >=</Boton>
        <Boton manejarClic={agregarInput} >/</Boton>
      </div>
      <div className='fila'>
        <BotonClear manejarClear={ () => setInput("")} >
           Borrar 
           </BotonClear>
      </div>
     </div>
    </div>
  );
}

export default App;

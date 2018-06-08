import React, { Component } from 'react';
import logo from './logo.svg';
import example from './example.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
         El ejercicio consiste en recorrer un array en espiral de izquierda a derecha, se deben realizar test de lo que se crea necesario del código con jest.
         Para poder realizar el ejercicio es necesario:
        </p>
        <ul>
         <li>1.- Crear e imprimir el array original de dos dimensiones nxn</li>
         <li>2.- Imprimir el output requerido</li>
        </ul>
        <p>Ejemplo:</p>
        <img src={example}/>
      </div>
    );
  }
}

export default App;

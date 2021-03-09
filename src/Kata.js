import React, { Component } from 'react';
import './Kata.css';

class Kata extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  generateArray(rowNumber, colNumber){
    let printerArray=[];
    let count=1;

    for (let row=0; row < rowNumber; row++)
    {
      const initRow=[];
      for(let col=0; col < colNumber; col++)
      {
        initRow.push(count);
        count++;
      }
      printerArray.push(initRow);
    }

    this.setState({printerArray: printerArray})

  }

  render() {
    return (
      <div className="Kata">
        Trabajaremos el ejercicio aqui
      </div>
    );
  }
}

export default Kata;

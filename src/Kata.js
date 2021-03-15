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
      const initRow=Array.from({length: colNumber}, ()=> count++);
      printerArray.push(initRow);
    }

    this.setState({printerArray: printerArray})

  }

  loopArrayInSnail()
  {
    const loopArray = this.state.printerArray;
    let result=[];
    //console.log(loopArray)
    const colNumber = loopArray[0].length-1;
    const rowNumber = loopArray.length-1;

    for (let item=0; item<=colNumber;item++){
      result.push(loopArray[0][item]);
    }
    
    for (let item=1; item<=rowNumber;item++){
       //console.log(item, colNumber)
       result.push(loopArray[item][colNumber]);
       
    }
        
    for (let item=colNumber-1; item>=0;item--){
 
       result.push(loopArray[rowNumber][item]);
    }

    for (let item=rowNumber-1; item>0;item--){
 
       result.push(loopArray[item][0]);
    }

    for (let item=1; item<=colNumber-1;item++){
      result.push(loopArray[1][item]);
    }
    // result.push(loopArray[1][1]);

    this.setState({resultArray: result});
  
  }

  componentWillMount(){
    this.generateArray(4, 3);
  }

  render() {
    return (
      
      <div className="Kata">
        <p> Resultado </p>
        {this.state.printerArray.map((row, index) => {
          return (
            <p key={index}>{row.map((col, id) => {return <span key={id}> {col}</span>})}</p>
          )
        })
        }
      </div>
    );
  }
}

export default Kata;

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Square extends React.Component {
  render(){
    let theClass = ""
    if(this.props.light) {
      theClass = "square light"
    }
    else {
      theClass = "square dark"
    }
    return( 
      <button 
        className={theClass} 
        value={this.props.value} 
        onClick={(e) =>this.props.onClick(e, this.props.value)}></button> 
    )
  } 
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lightOn: Array(9).fill(true)
    }
  }

  changeLight = (event, indexValue) => {
    //create a copy of the array to fiddle with
    //do I need to do this?
    const lightsOn = this.state.lightOn.slice();
    //switch the value of this array
    lightsOn[indexValue] = lightsOn[indexValue] ? false : true;
    //make it refresh state
    this.setState({
      lightOn: lightsOn});
  }

  makeSquares(squareValue){
    return <Square 
            value={squareValue}
            //is the light on for this square?
            light = {this.state.lightOn[squareValue]} 
            onClick={this.changeLight} />;
  }
  render(){

    return (
      <div>
        <div className="board-row">
          {this.makeSquares(0)}
          {this.makeSquares(1)}
          {this.makeSquares(2)}
        </div>
        <div className="board-row">
          {this.makeSquares(3)}
          {this.makeSquares(4)}
          {this.makeSquares(5)}
        </div>
        <div className="board-row">
          {this.makeSquares(6)}
          {this.makeSquares(7)}
          {this.makeSquares(8)}
        </div>
      </div>
    );
  }
}

export default App;

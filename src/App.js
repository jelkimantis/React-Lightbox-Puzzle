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
        onClick={(e) =>this.props.onClick(e, this.props.xValue, this.props.yValue)}></button> 
    )
  } 
}

class App extends React.Component {
  constructor(props){
    super(props)
    let rowOne = [true, true, true];
    let rowTwo = [true, true, true];
    let rowThree = [true, true, true];
    let startingArray=[rowOne, rowTwo, rowThree];
    this.state = {
      lightOn: startingArray
    };
  }

  changeLight = (event, xValue, yValue) => {
    //create a copy of the array to fiddle with
    //do I need to do this?
    const lightsOn = this.state.lightOn.slice();
    //switch the value of this array
    lightsOn[xValue][yValue] = !lightsOn[xValue][yValue];
    //console.log(lightsOn[xValue][yValue]);
    //make it refresh state
    if (xValue>0) {lightsOn[xValue-1][yValue] = !lightsOn[xValue-1][yValue]; }
    if (xValue<2) {lightsOn[xValue+1][yValue] = !lightsOn[xValue+1][yValue]; }
    if (yValue>0) {lightsOn[xValue][yValue-1] = !lightsOn[xValue][yValue-1]; }
    if (yValue<2) {lightsOn[xValue][yValue+1] = !lightsOn[xValue][yValue+1]; }

    this.setState({
      lightOn: lightsOn});
  }
  checkWin(){
    //look in lightOn state to see if there are any false values
  }
  makeSquares(xValue, yValue){
    //console.log(this.state.lightOn);
    return (<Square 
            xValue={xValue}
            yValue={yValue}
            //is the light on for this square?
            light = {this.state.lightOn[xValue][yValue]} 
            onClick={this.changeLight} />
    );
  }
  render(){
  //console.log(this.state.lightOn);
    return (
      <div>
        <div className="board-row">
          {this.makeSquares(0,0)}
          {this.makeSquares(0,1)}
          {this.makeSquares(0,2)}
        </div>
        <div className="board-row">
          {this.makeSquares(1,0)}
          {this.makeSquares(1,1)}
          {this.makeSquares(1,2)}
        </div>
        <div className="board-row">
          {this.makeSquares(2,0)}
          {this.makeSquares(2,1)}
          {this.makeSquares(2,2)}
        </div>
      </div>
    );
  }
}

export default App;

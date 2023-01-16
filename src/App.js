import { Component } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;

function SelectColumn(props) {
  return (
    <button className="selectColumn-button" onClick={props.onClick}></button>
  );
}

function DisplayHoles(props) {
  return (
    <div className={props.className}>
      <h1>{props.value}</h1>
    </div>
  );
}

function DisplayColumnContainer(props) {
  return (
    <div className={props.className}>
      <h1>{props.value}</h1>
    </div>
  );
}

const NUM_ROWS = 6;
const NUM_COLUMNS = 7;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // columns: [[], [], [], [], [], [], []],
      board: [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ],
      counter: true,
      //  = yellow counter
      // r = red counter
    };
  }

  handleClickCol(index) {
    const columnCurrent = this.state.board[index].slice();
    const foundLast = columnCurrent.findLast((val) => val !== null);
const indexOfFoundLast=columnCurrent.lastIndexOf(foundLast);
console.log(`the foundLast value is ${foundLast}`);
console.log(`the indexOfFoundLast value is ${indexOfFoundLast}`);



    if (columnCurrent[indexOfFoundLast] === 6) {
      alert("column slot is full");
    } else {
      if (this.state.counter) {
        columnCurrent[indexOfFoundLast+1]='y';
  
      } else {
        columnCurrent[indexOfFoundLast+1]='r'
      }
    }
// new board to be updated
const updateBoard = [...this.state.board]
updateBoard[index]=columnCurrent

    console.log(`new column array is${columnCurrent}`);
// update a single array within an array.
    this.setState({
      board: updateBoard,
      counter: !this.state.counter,
    });
  }

  render() {
    console.log("rendered game");

    return (
      <div>
        <h2>Connect 4</h2>

        <div>
          {this.state.board.map((column, index) => (
            <SelectColumn
              key={index}
              onClick={() => this.handleClickCol(index)}
            />
          ))}
        </div>
       <div>
        
       </div>

      </div>
    );
  }
}

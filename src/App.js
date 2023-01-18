import { Component } from "react";
// import ReactDOM from "react-dom/client";
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

const NUM_ROWS = 6;
const NUM_COLUMNS = 7;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // columns: [[], [], [], [], [], [], []],
      board: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
      counter: true,
      //  = yellow counter
      // r = red counter
    };
  };

  renderDisplayHoles(rowIndex){
    
    const columnArray=[...Array(NUM_COLUMNS)];
    const boardDisplay = this.state.board.slice();

      
      
    return columnArray.map((col,colIndex)=>{
      const currentHole=boardDisplay[colIndex][rowIndex];
      const correctDisplayHolesContainer=
      currentHole==='y'
      ?'displayHolesContainerYellow'
      : currentHole ==='r'
      ?'displayHolesContainerRed'
      :'displayHolesContainer'

      console.log(`colIndex is ${colIndex}`)
      return(
        <div
        key={`${colIndex}${rowIndex}`}
        className={correctDisplayHolesContainer}>
          {boardDisplay[colIndex][rowIndex]}
        </div>
      )
    })
  }
   

  handleClickCol(colIndex) {
    const columnCurrent = this.state.board[colIndex].slice();
    const foundLast = columnCurrent.findLast((val) => val !== 0);
const indexOfFoundLast=columnCurrent.lastIndexOf(foundLast);

    if (columnCurrent.length > 6) {
      alert("column slot is full");
    } else {
      if (this.state.counter) {
        columnCurrent[indexOfFoundLast+1]='y';
  
      } else {
        columnCurrent[indexOfFoundLast+1]='r'
      };
    };
// new board to be updated
const updateBoard = [...this.state.board];
updateBoard[colIndex]=columnCurrent;

// update a single array within an array.
    this.setState({
      board: updateBoard,
      counter: !this.state.counter,
    });
  };

  render() {
    console.log("rendered game");

    return (
      <div>
        <div className="title-frame">
        <h2>Connect 4</h2>
        </div>

        <div className="select-frame">
          {this.state.board.map((col, colIndex) => (
            <SelectColumn
              key={colIndex}
              onClick={() => this.handleClickCol(colIndex)}
            />
          ))}
        </div>
        
       <div className="board-frame">
        {([...Array(NUM_ROWS)].map((row,rowIndex)=>{
          return(
            <div key={rowIndex} className="row-container">
             {this.renderDisplayHoles(rowIndex)}
              {console.log(`the Array rowIndex is ${rowIndex}`)}
             </div>
          )
        }
        )).reverse()}
       </div>

</div>
  
    
    );
  }
}

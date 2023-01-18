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

// function DisplayHoles(props) {
//   return (
//     <div className={props.className}>
//       <h1>{props.value}</h1>
//     </div>
//   );
// }

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
  };

  renderDisplayHoles(rowIndex){
    
    const columnArray=[...Array(NUM_COLUMNS)];
    const boardDisplay = this.state.board.slice();

    for(let colIndex=0;colIndex<NUM_COLUMNS;colIndex++){
      const currentHole=boardDisplay[colIndex][rowIndex];

      const correctDisplayHolesContainer=
      currentHole==='y'
      ?'displayHolesContainerYellow'
      : currentHole ==='r'
      ?'displayHolesContainerRed'
      :'displayHolesContainer';
      
      console.log(`the currentHole is ${currentHole} for colIndex ${colIndex}rowIndex${rowIndex}`);
      
      columnArray.map((col,colIndex)=>{
        return(
          <div
          key={`${colIndex}${rowIndex}`}
          className={correctDisplayHolesContainer}>
            {currentHole}
          </div>
        )
      })
    }
  }
   

  handleClickCol(colIndex) {
    const columnCurrent = this.state.board[colIndex].slice();
    const foundLast = columnCurrent.findLast((val) => val !== null);
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

    // console.log(`new column array is${columnCurrent}`);
    // console.log(`new board is (col0) ${updateBoard[0]}`)
    // console.log(`new board is (col1)${updateBoard[1]}`)
    // console.log(`new board is (col2)${updateBoard[2]}`)
    // console.log(`new board is (col3)${updateBoard[3]}`)
    // console.log(`new board is (col4)${updateBoard[4]}`)
    // console.log(`new board is (col5)${updateBoard[5]}`)
    // console.log(`new board is (col6)${updateBoard[6]}`)
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
        <h2>Connect 4</h2>

        <div>
          {this.state.board.map((col, colIndex) => (
            <SelectColumn
              key={colIndex}
              onClick={() => this.handleClickCol(colIndex)}
            />
          ))}
        </div>
       <div>
        {[...Array(NUM_ROWS)].map((row,rowIndex)=>{
          return(
            <div key={rowIndex} className="row-container">
             {this.renderDisplayHoles(rowIndex)}
              {console.log(`the Array rowIndex is ${rowIndex}`)}
              
             </div>
          );
        }
        )}
       </div>

      </div>
    );
  }
}

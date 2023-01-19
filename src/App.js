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
  }

  renderDisplayHoles(rowIndex) {
    const columnArray = [...Array(NUM_COLUMNS)];
    const boardDisplay = this.state.board.slice();

    return columnArray.map((col, colIndex) => {
      const currentHole = boardDisplay[colIndex][rowIndex];
      const correctDisplayHolesContainer =
        currentHole === "y"
          ? "displayHolesContainerYellow"
          : currentHole === "r"
          ? "displayHolesContainerRed"
          : "displayHolesContainer";

      // console.log(`colIndex is ${colIndex}`)
      return (
        <div
          key={`${colIndex}${rowIndex}`}
          className={correctDisplayHolesContainer}
        >
          {boardDisplay[colIndex][rowIndex]}
        </div>
      );
    });
  }

  handleClickCol(colIndex) {
    const columnCurrent = this.state.board[colIndex].slice();
    const foundLast = columnCurrent.findLast((val) => val !== 0);
    const indexOfFoundLast = columnCurrent.lastIndexOf(foundLast);

    if (columnCurrent.length > 6) {
      alert("column slot is full");
    } else {
      if (this.state.counter) {
        columnCurrent[indexOfFoundLast + 1] = "y";
      } else {
        columnCurrent[indexOfFoundLast + 1] = "r";
      }
    }
    // new board to be updated
    const updateBoard = [...this.state.board];
    updateBoard[colIndex] = columnCurrent;

    // update a single array within an array.
    this.setState({
      board: updateBoard,
      counter: !this.state.counter,
    });
  }

  resetGame(winner) {
    const cleanBoard = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    this.setState({
      board: cleanBoard,
    });
  }

  checkWinner(board, counter) {
    const boardCheck = board.slice();
    console.log("checking for winner");
    const currentPlayer = counter ? "y" : "r";
    console.log(currentPlayer);

    for (let rowIndex = 0; rowIndex < NUM_ROWS; rowIndex++) {
      // check for horz combinations
      const c0 = boardCheck[0][rowIndex];
      const c1 = boardCheck[1][rowIndex];
      const c2 = boardCheck[2][rowIndex];
      const c3 = boardCheck[3][rowIndex];
      const c4 = boardCheck[4][rowIndex];
      const c5 = boardCheck[5][rowIndex];
      const c6 = boardCheck[6][rowIndex];

      if (
        (c0 && c0 === c1 && c0 === c2 && c0 === c3) ||
        (c1 && c1 === c2 && c1 === c3 && c1 === c4) ||
        (c2 && c2 === c3 && c2 === c4 && c2 === c5) ||
        (c3 && c3 === c4 && c3 === c5 && c3 === c6)
      ) {
        console.log(`winner! won by horizontal line`);
        return c3;
      }
    }

    for (let colIndex = 0; colIndex < NUM_COLUMNS; colIndex++) {
      // check for vertLine
      const r0 = boardCheck[colIndex][0];
      const r1 = boardCheck[colIndex][1];
      const r2 = boardCheck[colIndex][2];
      const r3 = boardCheck[colIndex][3];
      const r4 = boardCheck[colIndex][4];
      const r5 = boardCheck[colIndex][5];

      if (
        (r0 && r0 === r1 && r0 === r2 && r0 === r3) ||
        (r1 && r1 === r2 && r1 === r3 && r1 === r4) ||
        (r2 && r2 === r3 && r3 === r4 && r4 === r5)
      ) {
        console.log(`winner! won by vert line`);
        return r3;
      }
    }

    // check for diagLineSWNE

    // for (let colIndex = 0; colIndex < NUM_COLUMNS; colIndex++) {
    //   // check for vertLine
    //   const d0 = boardCheck[colIndex][0];
    //   const d1 = boardCheck[colIndex + 1][1];
    //   const d2 = boardCheck[colIndex + 2][2];
    //   const d3 = boardCheck[colIndex + 3][3];
    //   const d4 = boardCheck[colIndex + 4][4];
    //   const d5 = boardCheck[colIndex + 5][5];

    //   if (
    //     (d0 && d0 === d1 && d0 === d2 && d0 === d3) ||
    //     (d1 && d1 === d2 && d1 === d3 && d1 === d4) ||
    //     (d2 && d2 === d3 && d3 === d4 && d4 === d5)
    //   ) {
    //     console.log(`winner! won by vert line`);
    //     return d3;
    //   }
    // }

    // check for diagLineNWSE
    // for (let colIndex = 0; colIndex < NUM_COLUMNS; colIndex++) {
    //   // check for vertLine
    //   const d0 = boardCheck[colIndex][0];
    //   const d1 = boardCheck[colIndex][1];
    //   const d2 = boardCheck[colIndex][2];
    //   const d3 = boardCheck[colIndex][3];
    //   const d4 = boardCheck[colIndex][4];
    //   const d5 = boardCheck[colIndex][5];

    //   if (
    //     (d0 && d0 === d1 && d0 === d2 && d0 === d3) ||
    //     (d1 && d1 === d2 && d1 === d3 && d1 === d4) ||
    //     (d2 && d2 === d3 && d3 === d4 && d4 === d5)
    //   ) {
    //     console.log(`winner! won by vert line`);
    //     return d3;
    //   }
    // }
  }

  render() {
    console.log("rendered game");
    let status;
    const winner = this.checkWinner(this.state.board, this.state.counter);
    if (winner) {
      status = "winner is " + winner + "! do you want to play a new game?";
      this.resetGame(winner);
    } else {
      status = "Next player is " + (this.state.counter ? "yellow" : "red");
    }
    return (
      <div>
        <div className="title-frame">
          <h2>Connect 4</h2>
          <p> {status}</p>
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
          {[...Array(NUM_ROWS)]
            .map((row, rowIndex) => {
              return (
                <div key={rowIndex} className="row-container">
                  {this.renderDisplayHoles(rowIndex)}
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
    );
  }
}

import { Component } from "react";
import { DEFAULT_BOARD, NUM_COLUMNS, NUM_ROWS } from "../../constants";
import ResetGame from "../ResetGame/ResetGame";
import CheckWinner from "../CheckWinner/CheckWinner";
// import BoardFrame from "../BoardFrame/BoardFrame";
// import SelectFrame from "../SelectFrame/SelectFrame";
// import SelectColumn from "../SelectColumn/SelectColumn";
import TitleFrame from "../TitleFrame/TitleFrame";
import Hole from "../Hole/Hole";
// import SelectColumn from "../SelectColumn/SelectColumn";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [...DEFAULT_BOARD],
      counter: true,
      playing: true,
    };
  }

  handleClickCol(colIndex) {
    console.log("action handleclickcol");
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
  renderHoles(rowIndex) {
    const columnArray = [...Array(NUM_COLUMNS)];
    const boardDisplay = [...this.state.board];

    return columnArray.map((col, colIndex) => {
      const currentHole = boardDisplay[colIndex][rowIndex];
      const correctDisplayHolesContainer =
        currentHole === "y"
          ? "displayHolesContainerYellow"
          : currentHole === "r"
          ? "displayHolesContainerRed"
          : "displayHolesContainer";

      return (
        <Hole
          key={`${colIndex}${rowIndex}`}
          className={correctDisplayHolesContainer}
          currentHole={currentHole}
        />
      );
    });
  }
  handleResetGame() {
    this.setState({
      board: [...DEFAULT_BOARD],
    });
  }

  handleQuit() {
    this.setState({
      playing: false,
    });
  }

  render() {
    console.log("rendered game");
    let status;
    const winner = CheckWinner(this.state.board, this.state.counter);

    if (this.state.playing === false) {
      return (
        <div>
          <h1>goodbye!</h1>
        </div>
      );
    }
    if (winner) {
      status = "winner is " + winner + "! do you want to play a new game?";
      return (
        <ResetGame
          handleClickYes={() => {
            this.handleResetGame();
          }}
          handleClickNo={() => {
            this.handleQuit();
          }}
        />
      );
    } else {
      status = "Next player is " + (this.state.counter ? "yellow" : "red");
    }
    return (
      <div>
        <TitleFrame status={status} />
        {/* <SelectFrame
          board={this.state.board}
          handleClickCol={() => {
            this.handleClickCol();
          }}
        /> */}

        <div className="select-frame">
          {this.state.board.map((col, colIndex) => (
            <button
              key={colIndex}
              className="selectColumn-button"
              onClick={() => {
                this.handleClickCol(colIndex);
              }}
            ></button>
          ))}
        </div>
        {/* <div>
          <SelectColumn
            board={this.state.board}
            handleClickCol={() => this.handleClickCol()}
          />
        </div> */}

        <div className="board-frame">
          {[...Array(NUM_ROWS)]
            .map((row, rowIndex) => {
              return (
                <div key={rowIndex} className="row-container">
                  {this.renderHoles(rowIndex)}
                </div>
              );
            })
            .reverse()}
        </div>

        {/* <div className="board-frame">
          {[...Array(NUM_ROWS)]
            .map((row, rowIndex) => {
              return (
                <BoardFrame
                  value={this.rowIndex}
                  key={this.rowIndex}
                  className="row-container"
                  renderHoles={() => {
                    this.renderHoles();
                  }}
                />
              );
            })
            .reverse()}
        </div> */}
      </div>
    );
  }
}

export default Game;

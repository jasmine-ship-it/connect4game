import { Component, useState } from "react";
import "./App.css";

function App() {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [newPlayers, setNewPlayers] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === "playerOneTextField") {
      setPlayerOneName(value);
    } else if (id === "playerTwoTextField") {
      setPlayerTwoName(value);
    }
  };

  const handleSubmit = () => {
    setNewPlayers(!newPlayers);
  };

  return (
    <div className="App">
      {!newPlayers ? (
        <div>
          <label htmlFor="name">Player 1 : </label>{" "}
          <input
            type="text"
            id="playerOneTextField"
            value={playerOneName}
            onChange={handleChange}
          />
          <p>You typed: {playerOneName}</p>
          <label htmlFor="name">Player 2: </label>
          <input
            type="text"
            id="playerTwoTextField"
            value={playerTwoName}
            onChange={handleChange}
          />
          <p>You typed: {playerTwoName}</p>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <Game playerOneName={playerOneName} playerTwoName={playerTwoName} />
      )}
    </div>
  );
}

export default App;

function SelectColumn(props) {
  return (
    <button className="selectColumn-button" onClick={props.onClick}></button>
  );
}

function YesResetGame(props) {
  return (
    <div>
      <div className="yesResetGame-container">
        <h1>{props.status}</h1>
      </div>
      <div>
        <button onClick={props.handleClickYes}>Yes</button>
      </div>
      <div>
        <button onClick={props.handleClickNo}>No</button>
      </div>
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
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ],
      counter: true,
      // y = yellow counter
      // r = red counter
      playing: true,
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

  handleResetGame() {
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

  handleClickNo() {
    console.log("clicking no");
    this.setState({
      playing: false,
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
        return this.state.counter ? "red" : "yellow";
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
        return this.state.counter ? "red" : "yellow";
      }
    }

    // check for diagLineSWNE

    for (let colIndex = 0; colIndex < 4; colIndex++) {
      const d0 = boardCheck[colIndex][0];
      const d1 = boardCheck[colIndex + 1][1];
      const d2 = boardCheck[colIndex + 2][2];
      const d3 = boardCheck[colIndex + 3][3];

      const e0 = boardCheck[colIndex][1];
      const e1 = boardCheck[colIndex + 1][2];
      const e2 = boardCheck[colIndex + 2][3];
      const e3 = boardCheck[colIndex + 3][4];

      const f0 = boardCheck[colIndex][2];
      const f1 = boardCheck[colIndex + 1][3];
      const f2 = boardCheck[colIndex + 2][4];
      const f3 = boardCheck[colIndex + 3][5];

      if (
        (d0 && d0 === d1 && d0 === d2 && d0 === d3) ||
        (e0 && e0 === e1 && e0 === e2 && e0 === e3) ||
        (f0 && f0 === f1 && f0 === f2 && f0 === f3)
      ) {
        console.log(`winner! won by diagonal line SWNE`);
        alert(`player ${d3 || e3 || f3} has won!`);
        return this.state.counter ? "red" : "yellow";
      }
    }

    // check for diagLineNWSE
    for (let colIndex = 6; colIndex > 2; colIndex--) {
      // check for vertLine
      const g0 = boardCheck[colIndex][0];
      const g1 = boardCheck[colIndex - 1][1];
      const g2 = boardCheck[colIndex - 2][2];
      const g3 = boardCheck[colIndex - 3][3];

      const h0 = boardCheck[colIndex][1];
      const h1 = boardCheck[colIndex - 1][2];
      const h2 = boardCheck[colIndex - 2][3];
      const h3 = boardCheck[colIndex - 3][4];

      const i0 = boardCheck[colIndex][2];
      const i1 = boardCheck[colIndex - 1][3];
      const i2 = boardCheck[colIndex - 2][4];
      const i3 = boardCheck[colIndex - 3][5];

      if (
        (g0 && g0 === g1 && g0 === g2 && g0 === g3) ||
        (h0 && h0 === h1 && h0 === h2 && h0 === h3) ||
        (i0 && i0 === i1 && i0 === i2 && i0 === i3)
      ) {
        console.log(`winner! won by diagonal line NWSE`);
        return this.state.counter ? "red" : "yellow";
      }
    }
  }

  render() {
    console.log("rendered game");
    const { playerOneName, playerTwoName } = this.props;
    let status;
    const winner = this.checkWinner(this.state.board, this.state.counter);

    if (this.state.playing === false) {
      return (
        <div>
          <h1>goodbye!</h1>
        </div>
      );
    }
    if (winner) {
      const winnerName = this.state.counter ? playerOneName : playerTwoName;
      status = "winner is " + winnerName + "! do you want to play a new game?";
      return (
        <YesResetGame
          handleClickYes={() => {
            this.handleResetGame();
          }}
          handleClickNo={() => {
            this.handleClickNo();
          }}
          status={status}
        />
      );
    } else {
      status =
        "Next player is " +
        (this.state.counter ? playerOneName : playerTwoName);
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

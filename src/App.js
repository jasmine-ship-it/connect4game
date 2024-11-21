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
      {newPlayers ? <h1>Connect 4</h1> : <h1>Welcome to connect 4</h1>}
      {!newPlayers ? (
        <div className="playerNameBox">
          <label htmlFor="playerOneTextField">Player 1 : </label>{" "}
          <input
            type="text"
            id="playerOneTextField"
            value={playerOneName}
            onChange={handleChange}
            className="playerNameTextField"
          />
          <p>{playerOneName}</p>
          <label htmlFor="playerTwoTextField">Player 2: </label>
          <input
            type="text"
            id="playerTwoTextField"
            value={playerTwoName}
            onChange={handleChange}
            className="playerNameTextField"
          />
          <p>{playerTwoName}</p>
          <button onClick={handleSubmit} className="submitButton">
            Submit
          </button>
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
        <h2>{props.status}</h2>
      </div>
      <div>
        <button onClick={props.handleClickYes} className="yesButton">
          Yes
        </button>
      </div>
      <div>
        <button onClick={props.handleClickNo} className="noButton">
          No
        </button>
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
      counter:true
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
    console.log(`checking for winner`)
    const currentPlayer = counter ? "y" : "r";
    console.log(`currentPlayer is ${currentPlayer}`);

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
        return r2;//Return 'y' or 'r'
      }
    }

    // check for diagLine NW->SE

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

      if (d0 && d0 === d1 && d0 === d2 && d0 === d3) {
        return d0;//Return 'y' or 'r'
      }
      else if(e0 && e0 === e1 && e0 === e2 && e0 === e3)
      {
          return e0;
      }
      else if(f0 && f0 === f1 && f0 === f2 && f0 === f3)
      {
          return f0;
        }
    }

    // check for diagLineNE -> SW
    for (let colIndex = 6; colIndex > 2; colIndex--) {
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

      if (g0 && g0 === g1 && g0 === g2 && g0 === g3) {
        return g0;//Return 'y' or 'r'
      }
      else if(h0 && h0 === h1 && h0 === h2 && h0 === h3)
      {
          return h0;
      }
      else if(i0 && i0 === i1 && i0 === i2 && i0 === i3)
      {
          return i0;
        }
    }
  }

  render() {
    console.log("rendered game");
    const { playerOneName, playerTwoName } = this.props;
    let status;
    const winner = this.checkWinner(this.state.board, this.state.counter);
    console.log(`returned value is ${winner}`)
    if (this.state.playing === false) {
      return (
        <div>
          <h3>goodbye</h3>
        </div>
      );
    }
    if (winner) {
      const winnerName = winner === 'y' ? playerOneName : playerTwoName;
      status = "Winner is " + winnerName + "! Play again?";
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
          {/* <h1>Connect 4</h1> */}
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

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

const NUM_ROWS = 6;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [[], [], [], [], [], [], []],
      // board: [
      //   [null, null, null, null, null, null, null],
      //   [null, null, null, null, null, null, null],
      //   [null, null, null, null, null, null, null],
      //   [null, null, null, null, null, null, null],
      //   [null, null, null, null, null, null, null],
      //   [null, null, null, null, null, null, null],
      // ],
      counter: true,
      //  = yellow counter
      // r = red counter
    };
  }

  handleClickCol(index) {
    const columnCopy = this.state.columns[index].slice();

    if (columnCopy.length === 7) {
      alert("column full");
    } else {
      if (this.state.counter) {
        columnCopy.push("y");
      } else {
        columnCopy.push("r");
      }
    }

    console.log(`new array is${columnCopy}`);

    this.setState({
      columns: this.state.columns.map((column, idx) => {
        // map through columns
        if (idx === index) {
          // where column === column[index] -> replace with columnCopy
          return columnCopy;
        } else {
          return column; // where current column !== column[index] - copy as is
        }
      }),
      counter: !this.state.counter,
    });
  }

  render() {
    console.log("rendered game");

    return (
      <div>
        <h2>Connect 4</h2>

        <div>
          {this.state.columns.map((column, index) => (
            <SelectColumn
              key={index}
              onClick={() => this.handleClickCol(index)}
            />
          ))}
        </div>

        {[...Array(NUM_ROWS)].map((row, rowIndex) => (
          <div key={rowIndex} className="counter-column-container">
            {this.state.columns.map((column, columnIndex) => {
              console.log({ row });

              const currentHole =
                this.state.columns[columnIndex][NUM_ROWS - (rowIndex + 1)];

              const correctDisplayHolesContainer =
                currentHole === "y"
                  ? "displayHolesContainerYellow"
                  : currentHole === "r"
                  ? "displayHolesContainerRed"
                  : "displayHolesContainer";

              return (
                <DisplayHoles
                  key={`${columnIndex}${rowIndex}`}
                  value={currentHole}
                  className={correctDisplayHolesContainer}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}

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
          {this.columns.map((column, index) => (
            <SelectColumn
              key={index}
              onClick={() => this.handleClickCol(index)}
            />
          ))}
        </div>

        <div className="counter-column-container">
          <DisplayHoles
            value={this.state.col1[5]}
            className={
              this.state.col1[5] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col2[5]}
            className={
              this.state.col2[5] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col3[5]}
            className={
              this.state.col3[5] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col4[5]}
            className={
              this.state.col4[5] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col5[5]}
            className={
              this.state.col5[5] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col6[5]}
            className={
              this.state.col6[5] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col7[5]}
            className={
              this.state.col7[5] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
        </div>
        <div className="counter-column-container">
          <DisplayHoles
            value={this.state.col1[4]}
            className={
              this.state.col1[4] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col2[4]}
            className={
              this.state.col2[4] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col3[4]}
            className={
              this.state.col3[4] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col4[4]}
            className={
              this.state.col4[4] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col5[4]}
            className={
              this.state.col5[4] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col6[4]}
            className={
              this.state.col6[4] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col7[4]}
            className={
              this.state.col7[4] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
        </div>
        <div className="counter-column-container">
          <DisplayHoles
            value={this.state.col1[3]}
            className={
              this.state.col1[3] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col2[3]}
            className={
              this.state.col2[3] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col3[3]}
            className={
              this.state.col3[3] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col4[3]}
            className={
              this.state.col4[3] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col5[3]}
            className={
              this.state.col5[3] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col6[3]}
            className={
              this.state.col6[3] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col7[3]}
            className={
              this.state.col7[3] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
        </div>
        <div className="counter-column-container">
          <DisplayHoles
            value={this.state.col1[2]}
            className={
              this.state.col1[2] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col2[2]}
            className={
              this.state.col2[2] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col3[2]}
            className={
              this.state.col3[2] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col4[2]}
            className={
              this.state.col4[2] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col5[2]}
            className={
              this.state.col5[2] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col6[2]}
            className={
              this.state.col6[2] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col7[2]}
            className={
              this.state.col7[2] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
        </div>
        <div className="counter-column-container">
          <DisplayHoles
            value={this.state.col1[1]}
            className={
              this.state.col1[1] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col2[1]}
            className={
              this.state.col2[1] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col3[1]}
            className={
              this.state.col3[1] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col4[1]}
            className={
              this.state.col4[1] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col5[1]}
            className={
              this.state.col5[1] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col6[1]}
            className={
              this.state.col6[1] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col7[1]}
            className={
              this.state.col7[1] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
        </div>
        <div className="counter-column-container">
          <DisplayHoles
            value={this.state.col1[0]}
            className={
              this.state.col1[0] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col2[0]}
            className={
              this.state.col2[0] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col3[0]}
            className={
              this.state.col3[0] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col4[0]}
            className={
              this.state.col4[0] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col5[0]}
            className={
              this.state.col5[0] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col6[0]}
            className={
              this.state.col6[0] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
          <DisplayHoles
            value={this.state.col7[0]}
            className={
              this.state.col7[0] === "y"
                ? "displayHolesContainerYellow"
                : "displayHolesContainerRed"
            }
          />
        </div>
      </div>
    );
  }
}

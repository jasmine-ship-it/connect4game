import { render } from '@testing-library/react';
import { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

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
    <button className="selectColumn-button" onClick={props.onClick}>
      click
    </button>
  )
}

function DisplayHoles(props) {
  return (
    <div className="displayHolesContainer">
      <h1>0</h1>
    </div>
  )
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col1: [],
      col2: [],
      col3: [],
      col4: [],
      col5: [],
      col6: [],
      col7: [],
      counter: true,
      // y = yellow counter
      // r = red counter
    }
  };

  handleClick(i) {
    const col1 = this.state.col1;
    const col2 = this.state.col2;
    const col3 = this.state.col3;
    const col4 = this.state.col4;
    const col5 = this.state.col5;
    const col6 = this.state.col6;
    const col7 = this.state.col7;

    const newcol1 = col1.slice()
    if (col1.length == 7) {
      alert('column full');
    } else {
      if (this.state.counter) {
        newcol1.push('y');
        console.log(`new array is${newcol1}`)

        this.setState({
          col1: newcol1,
          counter: !this.state.counter,
        })
      } else {
        newcol1.push('r');
        console.log(`new array is${newcol1}`)

        this.setState({
          col1: newcol1,
          counter: !this.state.counter,
        })
      }
    }
  }

  render() {
    console.log('rendered game')
    return (
      <div>
        <Board onClick={i => this.handleClick(i)} />
      </div>
    )
  }
}

class Board extends Component {

  displayHoles(i) {
    return (
      <DisplayHoles />
    );
  };

  selectColumns(i) {
    return (
      <SelectColumn onClick={() => this.props.onClick(i)} />
    );
  };

  render() {
    return (
      <div>
        <h2>Connect 4</h2>
        <div>
          {this.selectColumns(0)}
        </div>

        <div>
          {this.displayHoles(0)}
          {this.displayHoles(1)}
          {this.displayHoles(2)}
          {this.displayHoles(3)}
          {this.displayHoles(4)}
          {this.displayHoles(5)}
          {this.displayHoles(6)}
        </div>
        {/* <div>

          {this.displayHoles(7)}
          {this.displayHoles(8)}
          {this.displayHoles(9)}
          {this.displayHoles(10)}
          {this.displayHoles(11)}
          {this.displayHoles(12)}
          {this.displayHoles(13)}
        </div>
        <div>
          {this.displayHoles(14)}
          {this.displayHoles(15)}
          {this.displayHoles(16)}
          {this.displayHoles(17)}
          {this.displayHoles(18)}
          {this.displayHoles(19)}
          {this.displayHoles(20)}
        </div>
        <div>
          {this.displayHoles(21)}
          {this.displayHoles(22)}
          {this.displayHoles(23)}
          {this.displayHoles(24)}
          {this.displayHoles(25)}
          {this.displayHoles(26)}
          {this.displayHoles(27)}
        </div>
        <div>
          {this.displayHoles(21)}
          {this.displayHoles(22)}
          {this.displayHoles(23)}
          {this.displayHoles(24)}
          {this.displayHoles(25)}
          {this.displayHoles(26)}
          {this.displayHoles(27)}
        </div>
        <div>
          {this.displayHoles(21)}
          {this.displayHoles(22)}
          {this.displayHoles(23)}
          {this.displayHoles(24)}
          {this.displayHoles(25)}
          {this.displayHoles(26)}
          {this.displayHoles(27)}
        </div>
        <div>
          {this.displayHoles(28)}
          {this.displayHoles(29)}
          {this.displayHoles(30)}
          {this.displayHoles(31)}
          {this.displayHoles(32)}
          {this.displayHoles(33)}
          {this.displayHoles(34)}
      </div> */}
      </div >

    )
  }
}
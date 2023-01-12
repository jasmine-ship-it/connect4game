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

    </button >
  )
}

function DisplayHoles(props) {
  return (
    <div className={props.className}>
      <h1>{props.value}</h1>
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
      //  = yellow counter
      // r = red counter
    }
  };

  handleClickCol1(i) {
    const newcol1 = this.state.col1.slice();
    if (newcol1.length === 7) {
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

  handleClickCol2(i) {
    const newcol2 = this.state.col2.slice();
    if (newcol2.length === 7) {
      alert('column full');
    } else {
      if (this.state.counter) {
        newcol2.push('y');
        console.log(`new array is${newcol2}`)

        this.setState({
          col2: newcol2,
          counter: !this.state.counter,
        })
      } else {
        newcol2.push('r');
        console.log(`new array is${newcol2}`)

        this.setState({
          col2: newcol2,
          counter: !this.state.counter,
        })
      }
    }
  }

  handleClickCol3(i) {
    const newcol3 = this.state.col3.slice();
    if (newcol3.length === 7) {
      alert('column full');
    } else {
      if (this.state.counter) {
        newcol3.push('y');
        console.log(`new array is${newcol3}`)

        this.setState({
          col3: newcol3,
          counter: !this.state.counter,
        })
      } else {
        newcol3.push('r');
        console.log(`new array is${newcol3}`)

        this.setState({
          col3: newcol3,
          counter: !this.state.counter,
        })
      }
    }
  }

  handleClickCol4(i) {
    const newcol4 = this.state.col4.slice();
    if (newcol4.length === 7) {
      alert('column full');
    } else {
      if (this.state.counter) {
        newcol4.push('y');
        console.log(`new array is${newcol4}`)

        this.setState({
          col4: newcol4,
          counter: !this.state.counter,
        })
      } else {
        newcol4.push('r');
        console.log(`new array is${newcol4}`)

        this.setState({
          col4: newcol4,
          counter: !this.state.counter,
        })
      }
    }
  }

  handleClickCol5(i) {
    const newcol5 = this.state.col5.slice();
    if (newcol5.length === 7) {
      alert('column full');
    } else {
      if (this.state.counter) {
        newcol5.push('y');
        console.log(`new array is${newcol5}`)

        this.setState({
          col5: newcol5,
          counter: !this.state.counter,
        })
      } else {
        newcol5.push('r');
        console.log(`new array is${newcol5}`)

        this.setState({
          col5: newcol5,
          counter: !this.state.counter,
        })
      }
    }
  }

  handleClickCol6(i) {
    const newcol6 = this.state.col6.slice();
    if (newcol6.length === 7) {
      alert('column full');
    } else {
      if (this.state.counter) {
        newcol6.push('y');
        console.log(`new array is${newcol6}`)

        this.setState({
          col6: newcol6,
          counter: !this.state.counter,
        })
      } else {
        newcol6.push('r');
        console.log(`new array is${newcol6}`)

        this.setState({
          col6: newcol6,
          counter: !this.state.counter,
        })
      }
    }
  }

  handleClickCol7(i) {
    const newcol7 = this.state.col7.slice();
    if (newcol7.length === 7) {
      alert('column full');
    } else {
      if (this.state.counter) {
        newcol7.push('y');
        console.log(`new array is${newcol7}`)

        this.setState({
          col7: newcol7,
          counter: !this.state.counter,
        })
      } else {
        newcol7.push('r');
        console.log(`new array is${newcol7}`)

        this.setState({
          col7: newcol7,
          counter: !this.state.counter,
        })
      }
    }
  }

  render() {
    console.log('rendered game')

    return (
      <div>
        <h2>Connect 4</h2>

        <div>
          <SelectColumn onClick={i => this.handleClickCol1(i)} value={1} />
          <SelectColumn onClick={i => this.handleClickCol2(i)} value={2} />
          <SelectColumn onClick={i => this.handleClickCol3(i)} value={3} />
          <SelectColumn onClick={i => this.handleClickCol4(i)} value={4} />
          <SelectColumn onClick={i => this.handleClickCol5(i)} value={5} />
          <SelectColumn onClick={i => this.handleClickCol6(i)} value={6} />
          <SelectColumn onClick={i => this.handleClickCol7(i)} value={7} />
        </div>


        <div className="counter-column-container">
          <DisplayHoles value={this.state.col1[5]} className={this.state.col1[5] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col2[5]} className={this.state.col2[5] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col3[5]} className={this.state.col3[5] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col4[5]} className={this.state.col4[5] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col5[5]} className={this.state.col5[5] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col6[5]} className={this.state.col6[5] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col7[5]} className={this.state.col7[5] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
        </div>
        <div className="counter-column-container">
          <DisplayHoles value={this.state.col1[4]} className={this.state.col1[4] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col2[4]} className={this.state.col2[4] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col3[4]} className={this.state.col3[4] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col4[4]} className={this.state.col4[4] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col5[4]} className={this.state.col5[4] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col6[4]} className={this.state.col6[4] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col7[4]} className={this.state.col7[4] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
        </div>
        <div className="counter-column-container">
          <DisplayHoles value={this.state.col1[3]} className={this.state.col1[3] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col2[3]} className={this.state.col2[3] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col3[3]} className={this.state.col3[3] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col4[3]} className={this.state.col4[3] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col5[3]} className={this.state.col5[3] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col6[3]} className={this.state.col6[3] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col7[3]} className={this.state.col7[3] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
        </div>
        <div className="counter-column-container">
          <DisplayHoles value={this.state.col1[2]} className={this.state.col1[2] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col2[2]} className={this.state.col2[2] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col3[2]} className={this.state.col3[2] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col4[2]} className={this.state.col4[2] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col5[2]} className={this.state.col5[2] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col6[2]} className={this.state.col6[2] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col7[2]} className={this.state.col7[2] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
        </div>
        <div className="counter-column-container">
          <DisplayHoles value={this.state.col1[1]} className={this.state.col1[1] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col2[1]} className={this.state.col2[1] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col3[1]} className={this.state.col3[1] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col4[1]} className={this.state.col4[1] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col5[1]} className={this.state.col5[1] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col6[1]} className={this.state.col6[1] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col7[1]} className={this.state.col7[1] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
        </div>
        <div className="counter-column-container">
          <DisplayHoles value={this.state.col1[0]} className={this.state.col1[0] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col2[0]} className={this.state.col2[0] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col3[0]} className={this.state.col3[0] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col4[0]} className={this.state.col4[0] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col5[0]} className={this.state.col5[0] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col6[0]} className={this.state.col6[0] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
          <DisplayHoles value={this.state.col7[0]} className={this.state.col7[0] === 'y' ? "displayHolesContainerYellow" : "displayHolesContainerRed"} />
        </div>

      </div >
    )
  }
}
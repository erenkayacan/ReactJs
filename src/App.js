import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "App-header",
      className2: "link-button2",
      number: null,
      win: "Enter your guess",
      count : 0
    };
  }
  backgroundClick = () => {
    if (this.state.className === 'App-header') {
      this.setState({
        className: "App-header2",
        className2: "link-button",
        number: Math.floor(Math.random() * 10) + 1,
        win: "Enter your guess",
        count : 0
      });
    }
    else {
      this.setState({
        className: "App-header",
        className2: "link-button2",
        number: Math.floor(Math.random() * 10) + 1,
        count: 0,
        win: "Enter your guess",
        guess : null
      });
    }
  }
  setNumber = (event) => {
    this.setState({
      guess: event.target.value
    })
  }
  guessNumber = () => {
    if (!Number(this.state.guess)) {
      this.setState({
        win: "Enter your guess"
      })
    } else {
      if (Number(this.state.guess) === this.state.number) {
        alert("You guess correctly on the " + (this.state.count) + "th try")
        this.setState({
          win: "Your guess the random number",
        })
      } else if (this.state.guess < this.state.number) {
        this.setState({
          win: "Your guess lower than random number",
          count: this.state.count + 1
        })
      } else if (this.state.guess > this.state.number) {
        this.setState({
          win: "Your guess higher than random number",
          count: this.state.count + 1
        })
      }
    }
  }
  render() {
    return (
      <div className="App">
        <header className={this.state.className} >
          <button className={this.state.className2}
            onClick={this.backgroundClick}>
            Change Background Color
          </button>
          <div>Guess the Number</div>
          <input className="link-input" name="firstName" onChange={this.setNumber} />
          <button className={this.state.className2}
            onClick={this.guessNumber}>
            Check Your Guess
          </button>
          <div> {this.state.win} </div>
        </header>
      </div>
    );
  }
}
export default App;


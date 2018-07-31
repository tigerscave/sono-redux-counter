import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.countUp = () => {
      const { count } = this.state;
      this.setState({
        count: count + 1
      })
    }
    this.countDown = () => {
      const { count } = this.state;
      this.setState({
        count: count - 1
      })
    }

    this.countReset = () => {
      this.setState({
        count: 0
      })
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <p>{count}</p>
        <div className="button">
          <button onClick={this.countUp}>+</button>
          <button onClick={this.countDown}>-</button>
          <button onClick={this.countReset}>reset</button>
        </div>
      </div>
    );
  }
}

export default App;

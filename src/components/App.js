import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countUp, countDown, countReset } from '../actions/countAction';

class App extends Component {
/*  constructor(props) {
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
  }*/

  render() {
    const { count } = this.props;
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

const mapStateToProps = (state, ownProps) => {
  console.log(state);

  const { count } = state.count
  return {
    count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    countUp: () => dispatch(countUp()),
    countDown: () => dispatch(countDown()),
    countReset: () => dispatch(countReset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

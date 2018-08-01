import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countUp } from '../redux/modules/pageData';

const App = (props) => {
  const { count, countUp } = props;

  return (
    <div className="App">
      <p>{count}</p>
      <div className="button">
        <button onClick={countUp}>+</button>
        <button>-</button>
        <button>reset</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { count } = state.pageData
  return {
    count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    countUp: () => dispatch(countUp()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

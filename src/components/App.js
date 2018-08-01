import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countUp, countDown, countReset, countSubmit } from '../redux/modules/pageData';

const App = (props) => {
  const { count, countUp, countDown, countReset, countSubmit } = props;

  return (
    <div className="App">
      <p>{count}</p>
      <div className="button">
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
        <button onClick={countReset}>reset</button>
      </div>
      <form onSubmit={countSubmit}>
        <div className="submit">
          <input type="number"/>
          <input type="submit"/>
        </div>
      </form>
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
    countDown: () => dispatch(countDown()),
    countReset: () => dispatch(countReset()),
    countSubmit: () => dispatch(countSubmit()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

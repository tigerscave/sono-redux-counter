import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  countUp as _countUp,
  countDown as _countDown,
  countReset as _countReset,
  countSubmit as _countSubmit,
} from '../redux/modules/counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: 0,
    };

    this.handleChange = (e) => {
      this.setState({
        inputNumber: e.target.value,
      });
    };
  }

  render() {
    const {
      count, countUp, countDown, countReset, countSubmit,
    } = this.props;
    const { inputNumber } = this.state;
    return (
      <div className="App">
        <div>
          {count}
          {' '}
          {inputNumber}
        </div>
        <div className="button">
          <button onClick={countUp} type="button">
            +
          </button>
          <button onClick={countDown} type="button">
            -
          </button>
          <button onClick={countReset} type="button">
            reset
          </button>
        </div>
        <form onSubmit={countSubmit}>
          <div className="submit">
            <input type="number" value={inputNumber} onChange={e => this.handleChange(e)} />
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

App.propTypes = {
  count: PropTypes.number.isRequired,
  countUp: PropTypes.func.isRequired,
  countDown: PropTypes.func.isRequired,
  countReset: PropTypes.func.isRequired,
  countSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { count } = state.counter;
  return {
    count,
  };
};

const mapDispatchToProps = dispatch => ({
  countUp: () => dispatch(_countUp()),
  countDown: () => dispatch(_countDown()),
  countReset: () => dispatch(_countReset()),
  countSubmit: () => dispatch(_countSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  countUp as _countUp,
  countDown as _countDown,
  countReset as _countReset,
  countSubmit as _countSubmit,
  countUp1 as _countUp1,
  countUp2 as _countUp2,
  countUp3 as _countUp3,
  countUp4 as _countUp4,
  countUp5 as _countUp5,
  countUp6 as _countUp6,
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
      count, countUp, countDown, countReset, countSubmit, countUp1, countUp2, countUp3, countUp4, countUp5, countUp6,
    } = this.props;
    const { inputNumber } = this.state;
    return (
      <div className="App">
        <div>
          {count}
        </div>
        <div className="button">
          <button onClick={() => countUp()} type="button">
            +
          </button>
          <button onClick={countDown} type="button">
            -
          </button>
          <button onClick={countReset} type="button">
            reset
          </button>
        </div>
        <div className="submit">
            <input type="number" value={inputNumber} onChange={e => this.handleChange(e)} />
            <button onClick={() => countSubmit(inputNumber)}>click me </button>
        </div>
        <div>
          <button onClick={countUp1}>1</button>
          <button onClick={countUp2}>2</button>
          <button onClick={countUp3}>3</button>
          <button onClick={countUp4}>4</button>
          <button onClick={countUp5}>5</button>
          <button onClick={countUp6}>6</button>
        </div>
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
  countUp1: PropTypes.func.isRequired,
  countUp2: PropTypes.func.isRequired,
  countUp3: PropTypes.func.isRequired,
  countUp4: PropTypes.func.isRequired,
  countUp5: PropTypes.func.isRequired,
  countUp6: PropTypes.func.isRequired,
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
  countSubmit: (inputNumber) => dispatch(_countSubmit(inputNumber)),
  countUp1: () => dispatch(_countUp1()),
  countUp2: () => dispatch(_countUp2()),
  countUp3: () => dispatch(_countUp3()),
  countUp4: () => dispatch(_countUp4()),
  countUp5: () => dispatch(_countUp5()),
  countUp6: () => dispatch(_countUp6()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

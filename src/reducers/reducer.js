import { COUNT_UP } from '../actionTypes.js';
import { COUNT_DOWN } from '../actionTypes.js';
import { COUNT_RESET } from '../actionTypes.js';

const initialState = {
  count: 0,
}

export default function (state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case 'COUNT_UP': {
      const { count } = state;
      return {
        count: count + 1
      }
    }
    case 'COUNT_DOWN': {
      const { count } = state;
      return {
        count: count - 1
      }
    }
    case 'COUNT_RESET': {
      const { count } = state;
      return {
        count: 0
      }
    }
    default:
      return state
  }
}

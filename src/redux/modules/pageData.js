import { createAction } from 'redux-actions';

export const COUNT_UP = 'COUNT_UP';
export const countUp = createAction('COUNT_UP');
export const COUNT_DOWN = 'COUNT_DOWN';
export const countDown = createAction('COUNT_DOWN');
export const COUNT_RESET = 'COUNT_RESET';
export const countReset = createAction('COUNT_RESET');
export const COUNT_SUBMIT = 'COUNT_SUBMIT';
export const countSubmit = createAction('COUNT_SUBMIT');

const initialState = {
  count: 0
};

const pageDataReducer = (state = initialState, action) => {

  switch(action.type) {
    case COUNT_UP: {
      const { count } = state;
      return {
        count: count + 1,
      };
    }
    case COUNT_DOWN: {
      const { count } = state;
      return {
        count: count - 1,
      };
    }
    case COUNT_RESET: {
      return {
        count: 0,
      };
    }
    case COUNT_SUBMIT: {
      return {
        count: 100,
      };
    }
    default:
      return state;
  }
}


export default pageDataReducer;

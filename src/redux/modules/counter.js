import { createAction } from 'redux-actions';

export const COUNT_UP = 'COUNT_UP';
export const countUp = createAction('COUNT_UP');
export const COUNT_DOWN = 'COUNT_DOWN';
export const countDown = createAction('COUNT_DOWN');
export const COUNT_RESET = 'COUNT_RESET';
export const countReset = createAction('COUNT_RESET');
export const COUNT_SUBMIT = 'COUNT_SUBMIT';
export const countSubmit = createAction('COUNT_SUBMIT');
export const COUNT_UP1 = 'COUNT_UP1';
export const countUp1 = createAction('COUNT_UP1');
export const COUNT_UP2 = 'COUNT_UP2';
export const countUp2 = createAction('COUNT_UP2');
export const COUNT_UP3 = 'COUNT_UP3';
export const countUp3 = createAction('COUNT_UP3');
export const COUNT_UP4 = 'COUNT_UP4';
export const countUp4 = createAction('COUNT_UP4');
export const COUNT_UP5 = 'COUNT_UP5';
export const countUp5 = createAction('COUNT_UP5');
export const COUNT_UP6 = 'COUNT_UP6';
export const countUp6 = createAction('COUNT_UP6');

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
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
        count: action.payload,
      };
    }
    case COUNT_UP1: {
      return {
        count: 1,
      };
    }
    case COUNT_UP2: {
      return {
        count: 2,
      };
    }
    case COUNT_UP3: {
      return {
        count: 3,
      };
    }
    case COUNT_UP4: {
      return {
        count: 4,
      };
    }
    case COUNT_UP5: {
      return {
        count: 5,
      };
    }
    case COUNT_UP6: {
      return {
        count: 6,
      };
    }
    default:
      return state;
  }
};


export default counterReducer;

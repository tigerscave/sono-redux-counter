import { COUNT_UP } from '../actionTypes';
import { COUNT_DOWN } from '../actionTypes';
import { COUNT_RESET } from '../actionTypes';

export function countUp() {
  return dispatch => {
    type: COUNT_UP
  }
}

export function countDown() {
  return dispatch => {
    type: COUNT_DOWN
  }
}

export function countReset() {
  return dispatch => {
    type: COUNT_RESET
  }
}
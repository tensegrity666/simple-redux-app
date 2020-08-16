import types from './constants';

const { INCREMENT, DECREMENT } = types;

function increment() {
  return {
    type: INCREMENT
  }
}

function decrement() {
  return {
    type: DECREMENT
  }
}

export { increment, decrement };
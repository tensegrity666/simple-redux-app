import types from './constants';

function rootReducer(state, { type }) {
  const { INCREMENT, DECREMENT } = types;

  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default rootReducer;
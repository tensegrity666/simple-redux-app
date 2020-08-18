import types from './constants';
import { combineReducers } from 'redux';

function counterReducer(state = 0, { type }) {
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

const initialTheme = {
  value: 'light',
}

function themeReducer(state = initialTheme, { type, payload }) {
  const { THEME } = types;

  switch (type) {
    case THEME:
      return {
        ...state,
        value: payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export default rootReducer;
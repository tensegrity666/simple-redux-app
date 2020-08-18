import types from './constants';

const { INCREMENT, DECREMENT, INIT, THEME, ENABLE_BTN, DISABLE_BTN } = types;

function increment() {
  return {
    type: INCREMENT,
  }
}

function decrement() {
  return {
    type: DECREMENT,
  }
}

function init() {
  return {
    type: INIT,
  }
}

function theme(newTheme) {
  return {
    type: THEME,
    payload: newTheme,
  }
}

function async() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: INCREMENT,
      });
    }, 2000);
  }
}

function enable() {
  return {
    type: ENABLE_BTN,
  }
}

function disable() {
  return {
    type: DISABLE_BTN,
  }
}

export { increment, decrement, async, init, theme, enable, disable };
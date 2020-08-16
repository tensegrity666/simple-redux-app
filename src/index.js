import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';

import rootReducer from './root-reducer';
import { increment, decrement, async, init, theme } from './root-reducer/reducers';

const counter = document.querySelector('#counter');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeSwitch = document.querySelector('#theme');
const page = document.querySelector('.page');

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

addBtn.addEventListener('click', () => {
  store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
  store.dispatch(async());
});

themeSwitch.addEventListener('click', () => {
  const newTheme = page.classList.contains('light') ? 'dark' : 'light';

  store.dispatch(theme(newTheme));
});


store.subscribe(() => {
  const state = store.getState();

  counter.textContent = `Counter: ${state.counter}`;

  page.className = `page ${state.theme.value}`
});

store.dispatch(init());
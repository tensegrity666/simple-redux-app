import createStore from './store';

import './index.css';
import rootReducer from './redux';

const counter = document.querySelector('#counter');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeSwitch = document.querySelector('#theme');

const store = createStore(rootReducer, 0);

addBtn.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

subBtn.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});

asyncBtn.addEventListener('click', () => {

});

themeSwitch.addEventListener('click', () => {
  const page = document.querySelector('.page');
  const card = document.querySelector('#card');

  page.classList.toggle('dark');
  card.classList.toggle('card-dark');
});

store.subscribe(() => {
  counter.textContent = `Counter: ${store.getState()}`;
});

store.dispatch({ type: 'INITIAL_VALUE' });
import createStore from './store';

import './index.css';

const counter = document.querySelector('#counter');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeSwitch = document.querySelector('#theme');

const store = createStore();

function render() {
  counter.textContent = `Counter: ${state}`;
}

addBtn.addEventListener('click', () => {

});

subBtn.addEventListener('click', () => {

});

asyncBtn.addEventListener('click', () => {

});

themeSwitch.addEventListener('click', () => {
  const page = document.querySelector('.page');
  const card = document.querySelector('#card');

  page.classList.toggle('dark');
  card.classList.toggle('card-dark');
});


render();
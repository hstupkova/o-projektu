'use strict';

const showMenu = () => {
  const menuElm = document.querySelector('.menu__links');
  menuElm.classList.toggle('menu--opened');
};

const btnElm = document.querySelector('#menu__btn');
btnElm.addEventListener('click', showMenu);

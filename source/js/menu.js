let buttonMenu = document.querySelector('.main-navigation__button');
let navMenu = document.querySelector('.main-navigation');

navMenu.classList.remove('main-navigation--nojs');

buttonMenu.addEventListener('click', function () {
  navMenu.classList.toggle('main-navigation--closed');
  navMenu.classList.toggle('main-navigation--opened');
  }
);

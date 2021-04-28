let buttonMenu = document.querySelector('.main-navigation__button');
let navMenu = document.querySelector('.main-navigation');

navMenu.classList.remove('main-navigation--nojs');

buttonMenu.addEventListener('click', function () {
  navMenu.classList.toggle('main-navigation--closed');
  navMenu.classList.toggle('main-navigation--opened');
  if (navMenu.classList.contains('main-navigation--opened')) {
    buttonMenu.setAttribute('aria-label', 'Закрыть меню');
  } else {
    buttonMenu.setAttribute('aria-label', 'Открыть меню');
  }
  }
);

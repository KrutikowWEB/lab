$('input[name=phone]').mask("+7 (999) 999-99-99");


/* //Гамбургер и адаптивное меню

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__list'),
  menuItem = document.querySelectorAll('.menu__item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu__list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu__list_active');
      })
  })
}) */

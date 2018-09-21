init__header();

function init__header() {
  let menu_bar = document.querySelector('.header__menu_bar');
  let  menu = document.querySelector('.header__menu');
  menu_bar.addEventListener('click', function(event) {
    menu.classList.toggle('header__menu_closed');
  })
}
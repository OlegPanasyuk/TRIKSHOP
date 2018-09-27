init__header();

function init__header() {
  let  menu_bar = document.querySelector('.header__menu_bar');
  let  menu = document.querySelector('.header__menu');
  let  links = document.querySelectorAll('.header__menu a');
  menu_bar.addEventListener('click', function(event) {
    menu.classList.toggle('header__menu_closed');
    // if ( menu.classList.contains('header__menu_closed')) {
    //   menu_bar.innerHTML = ' <i class="fas fa-bars"></i>';
    // } else {
    //   menu_bar.innerHTML = '<i class="fas fa-times"></i>';
    // }
    
  })

  links.forEach(function(el) {
    el.addEventListener('click', function(event) {
      menu.classList.toggle('header__menu_closed');
      // if ( menu.classList.contains('header__menu_closed')) {
      //   menu_bar.innerHTML = ' <i class="fas fa-bars"></i>';
      // } else {
      //   menu_bar.innerHTML = '<i class="fas fa-times"></i>';
      // }
    });
  });
}
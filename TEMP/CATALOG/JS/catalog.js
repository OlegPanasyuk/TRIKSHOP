var obj = {
  bp: 0,
  ep: 2,
  left_side : 0,
  right_side : 8
}

init_slider();
buttons();

function buttons() {
  let left_but = document.querySelector('.catalog__arrow_left');
  let right_but = document.querySelector('.catalog__arrow_right');
  left_but.addEventListener('click', () => move_left());
  right_but.addEventListener('click', () => move_right());

}


function init_slider() {
  let circles = document.querySelectorAll('.catalog__circle');
  
  let items = document.querySelectorAll('.catalog__item');
  circles.forEach(function(el, i) {
    el.classList.remove('catalog__circle__selected');
    let z = Math.trunc(obj.ep/3);
    if (i === z) {
      el.classList.toggle('catalog__circle__selected');
    }
  });
  items.forEach(function(el, i) {
    if ((i<= obj.ep) && (i>=obj.bp)) {
      el.style.display = 'grid'
    } else {
      el.style.display = 'none';
    }
  });
}

function move_right() {
  if(obj.ep >= obj.right_side) {
    obj.bp = 0;
    obj.ep = 2;  
  } else {
    obj.bp += 3;
    obj.ep += 3;
  }
  init_slider();
}

function move_left() {
  if(obj.bp <= obj.left_side ) {
    obj.bp = 6;
    obj.ep = 8;  
  } else {
    obj.bp -= 3;
    obj.ep -= 3;
  }
  init_slider();
}
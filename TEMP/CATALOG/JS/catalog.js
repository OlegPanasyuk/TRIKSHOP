var obj = {
  bp: 0,
  ep: 2,
  left_side : 0,
  right_side : 8,
  step: 3
}
init_step_catalog();
buttons();
init_slider();

function init_step_catalog() {
  if ((device.mobile()) && (device.portrait())) {
    obj.step = 1;
  }
  if ((device.tablet()) && (device.portrait())) {
    obj.step = 1;
  }
}

function buttons() {
  let left_but = document.querySelector('.catalog__arrow_left');
  let right_but = document.querySelector('.catalog__arrow_right');
  left_but.addEventListener('click', () => move_left());
  right_but.addEventListener('click', () => move_right());
  obj.bp = obj.left_side;
  obj.ep = obj.left_side + obj.step - 1;
}


function init_slider() {
  let circles = document.querySelectorAll('.catalog__circle');
  
  let items = document.querySelectorAll('.catalog__item');
  circles.forEach(function(el, i) {
    el.classList.remove('catalog__circle__selected');
    let z = Math.trunc(obj.ep/obj.step);
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
    obj.bp = obj.left_side;
    obj.ep = obj.left_side+obj.step-1;  
  } else {
    obj.bp += obj.step;
    obj.ep += obj.step;
  }
  init_slider();
}

function move_left() {
  if(obj.bp <= obj.left_side ) {
    obj.bp = obj.right_side - obj.step + 1;
    obj.ep = obj.right_side;  
  } else {
    obj.bp -= obj.step;
    obj.ep -= obj.step;
  }
  init_slider();
}
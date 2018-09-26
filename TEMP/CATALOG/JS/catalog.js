var obj = {
  bp: 0,
  ep: 2,
  left_side : 0,
  right_side : 8,
  step: 3,
  init_step_catalog: function () {
    if (device.mobile()) {
      console.log('mobile');
      if(device.portrait()) {
       this.step = 1;
        console.log('portait');
      }
      if((device.landscape())) {
        this.step = 3;
        console.log('landscape');
      }
      
    }
    if (device.tablet()) {
      console.log('tablet');
      if(device.portrait()) {
       this.step = 1;
        console.log('portait');
      }
      if((device.landscape())) {
        this.step = 3;
        console.log('landscape');
      }
      
    }
  }
}

obj.init_step_catalog();
buttons();
init_slider();

// function init_step_catalog() {
//   if ((device.mobile()) && (device.portrait())) {
//     obj.step = 1;
//   }
//   if (device.tablet()) {
//     console.log('tablet');
//     if(device.portrait()) {
//       obj.step = 1;
//       console.log('portait');
//     }
//     if((device.landscape())) {
//       obj.step = 3;
//       console.log('landscape');
//     }
    
//   }
// }

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
  console.log('slider');
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
      console.log('grid');
    } else {
      el.style.display = 'none';
      console.log('grid none');
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


  window.addEventListener("orientationchange", function(event) {
    obj.init_step_catalog();
    var originalBodyStyle = getComputedStyle(document.body).getPropertyValue('display');
    
    setTimeout(function () {
      document.body.style.display='none';
      obj.bp = obj.left_side;
      obj.ep = obj.left_side + obj.step - 1;
      init_slider();
      document.body.style.display = originalBodyStyle;
    }, 20);
   
    console.log(obj.step);
  }, false);

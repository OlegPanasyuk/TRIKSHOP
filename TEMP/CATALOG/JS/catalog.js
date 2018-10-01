var obj = {
  bp: 0,
  ep: 2,
  left_side : 0,
  right_side : 8,
  step: 3,
  init_step_catalog: function () {
    if (device.mobile()) {
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
  },
  init_circles : function() {
    
    let catalog__circles__wrap = document.querySelector('.catalog__circles__wrap');
    let items = document.querySelectorAll('.catalog__item');
    catalog__circles__wrap.innerHTML = '';
    const size = Math.trunc(items.length / this.step);
    let arr = new Array(size);
    arr.fill(0);
    arr.forEach(function(el ,i) {
      let div = document.createElement('div');
      div.classList.add('catalog__circle');
      if (i === 0) {
        div.classList.add('catalog__circle__selected');
      }
      catalog__circles__wrap.appendChild(div);
    });
  }
}

obj.init_step_catalog();
obj.init_circles();
buttons();
init_pages();
init_slider();


function init_pages() {
  let items = document.querySelectorAll('.catalog__item__page');
  items.forEach(function(el, i) {
    if (el == el.parentNode.childNodes[1]) {
      el.firstChild.classList.add('catalog__item__page__control__hover');
      
    } 
    
    el.addEventListener('mouseover', function(event) {
      if (event.target === el) {
        event.target.firstChild.classList.add('catalog__item__page__control__hover'); 
      } else if(event.target.classList.contains('catalog__item__page__control')) {
        event.target.classList.add('catalog__item__page__control__hover'); 
      }
      //console.log(event.target.firstChild);
    });
    el.addEventListener('mouseout', function(event) {
      if (event.target === el) {
        event.target.firstChild.classList.remove('catalog__item__page__control__hover'); 
      } else if(event.target.classList.contains('catalog__item__page__control')) {
        event.target.classList.remove('catalog__item__page__control__hover'); 
      }
    });
  });
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
    obj.init_circles();
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

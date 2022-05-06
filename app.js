/**hamburguer menu appear */



const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
/**q&a answear appear */
const question = document.querySelectorAll('.qa-content');
const answear = document.querySelectorAll('.qa-answear');
  

if (document.body.className == 'qa-body') {
    question[1].style.background = '#0455e4'
    answear[1].style.background = '#0455e4'

    question[2].style.background = '#0560ed'
    answear[2].style.background = '#0560ed'

    question[3].style.background = '#0743df'
    answear[3].style.background = '#0743df'

    question[4].style.background = '#033ab1'
    answear[4].style.background = '#033ab1'

    question[5].style.background = '#03268e'
    answear[5].style.background = '#03268e'

    question[6].style.background = '#02136f'
    answear[6].style.background = '#02136f'

    question[7].style.background = '#000444'
    answear[7].style.background = '#000444'

    question[8].style.background = '#000040'
    answear[8].style.background = '#000040'


    question[0].addEventListener('click', function() {
        answear[0].classList.toggle('active');
    });

    question[1].addEventListener('click', function() {
        answear[1].classList.toggle('active');
    });

    question[2].addEventListener('click', function() {
        answear[2].classList.toggle('active');
    });

    question[3].addEventListener('click', function() {
        answear[3].classList.toggle('active');
    });

    question[4].addEventListener('click', function() {
        answear[4].classList.toggle('active');
    });

    question[5].addEventListener('click', function() {
        answear[5].classList.toggle('active');
    });

    question[6].addEventListener('click', function() {
        answear[6].classList.toggle('active');
    });

    question[7].addEventListener('click', function() {
        answear[7].classList.toggle('active');
    });

    question[8].addEventListener('click', function() {
        answear[8].classList.toggle('active');
    });
};

if (document.body.className == 'top-html') {


  let slider = document.querySelector('.slider');


    slider.addEventListener('mouseover', function() {
        slider.style.animationPlayState = 'paused';
    });

    slider.addEventListener('mouseout', function() {
        slider.style.animationPlayState = 'running';
    });

    slider.addEventListener('mouseover', function() {
        slider.style.animationPlayState = 'paused';
    });

    slider.addEventListener('mouseout', function() {
        slider.style.animationPlayState = 'running';
    });


    slider.addEventListener('touchstart', function() {
        slider.style.animationPlayState = 'paused';
    });

    slider.addEventListener('touchend', function() {
        slider.style.animationPlayState = 'running';
    });

let sliderWrap = document.querySelector('.slider-wrap');

let clonesWidth;
let sliderWidth;
let clones = [];
let scrollPos;
let items = [...document.querySelectorAll('.slider-item')];
let images = [...document.querySelectorAll('.img-div')];

images.forEach((image, idx) => {
  image.style.backgroundImage = `url(./images/mobile-${idx+1}.jpg)`
})

items.forEach(item => {
  let clone = item.cloneNode(true);
  clone.classList.add('clone');
  slider.appendChild(clone);
  clones.push(clone);

})


function getClonesWidth() {
  let width = 0;
  clones.forEach(clone => {
    width += clone.offsetWidth;
  })
  return width;
}

function getScrollPos() {


  return sliderWrap.scrollLeft
}

function scrollUpdate(){
  scrollPos = getScrollPos();
  if(clonesWidth + scrollPos >= sliderWidth) {
    sliderWrap.scrollTo({left: 3});

  }else if(scrollPos <= 0) {
    sliderWrap.scrollTo({left: sliderWidth - clonesWidth - 1})
  }


  slider.style.transform = `translateX(${-document.querySelector('.slider-wrap').scrollX}px)`

  requestAnimationFrame(scrollUpdate)
}


function onLoad(){
  calculateDimensions()
  sliderWrap.scrollTo({left: 3});
  scrollUpdate();
}

function calculateDimensions() {
  sliderWidth = slider.getBoundingClientRect().width;
  clonesWidth = getClonesWidth();
}

onLoad()

sliderWrap.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  sliderWrap.scrollLeft += evt.deltaY;
});

};
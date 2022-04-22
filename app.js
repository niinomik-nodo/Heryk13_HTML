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
    /**
    const liver_slide1  = document.querySelector('.animation');
    const liver_slide2  = document.querySelector('#animation-2');

    liver_slide1.addEventListener('mouseover', function() {
        liver_slide1.style.animationPlayState = 'paused';
        liver_slide2.style.animationPlayState = 'paused';
    });

    liver_slide1.addEventListener('mouseout', function() {
        liver_slide1.style.animationPlayState = 'running';
        liver_slide2.style.animationPlayState = 'running';
    });

    liver_slide2.addEventListener('mouseover', function() {
        liver_slide1.style.animationPlayState = 'paused';
        liver_slide2.style.animationPlayState = 'paused';
    });

    liver_slide2.addEventListener('mouseout', function() {
        liver_slide1.style.animationPlayState = 'running';
        liver_slide2.style.animationPlayState = 'running';
    });

    const liver_slide_mobile = document.querySelector('#fourth-img');

    liver_slide_mobile.addEventListener('touchstart', function() {
        liver_slide1.style.animationPlayState = 'paused';
        liver_slide2.style.animationPlayState = 'paused';
    });

    liver_slide_mobile.addEventListener('touchend', function() {
        liver_slide1.style.animationPlayState = 'running';
        liver_slide2.style.animationPlayState = 'running';
    });
 */







};


let slider = document.querySelector('#fourth-img');
let clonesWidth;
let sliderWidth;
let clones = [];
let scrollPos;
let disableScroll = false;

let items = [...document.querySelectorAll('.liver-img-anchor')];

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
    return slider.scrollLeft;
}

function scrollUpdate() {
    scrollPos = getScrollPos();
    if(scrollPos >= sliderWidth) {
        slider.scrollTo({left: 1});
    } else if(scrollPos <= 0) {
        slider.scrollTo({left: sliderWidth - 1})
    }


    requestAnimationFrame(scrollUpdate);

}

let fourth_content = document.getElementById('fourth-content')

function onLoad() {
    calculateDimensions()
    slider.scrollTo({left: 1});
    fourth_content.style.width = `${sliderWidth}px`
    scrollUpdate();
}

function calculateDimensions() {
    sliderWidth = slider.getBoundingClientRect().width;
    clonesWidth = getClonesWidth();
}


onLoad()
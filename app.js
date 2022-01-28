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

/**contact-appear */
const buttonL = document.querySelector('.normal-box');
const buttonR = document.querySelector('#btn-right');
const contact = document.querySelector('#contact-box-move');
const corpform = document.querySelector('.corporation-form');
const liverform = document.querySelector('.liver-form');
const closeContact = document.querySelector('#cross');

if (document.body.className == 'contact-body') {
    buttonL.addEventListener("click", function() {
        contact.classList.toggle('active-left');
        corpform.classList.toggle('active');
    });

    buttonR.addEventListener("click", function () {
        contact.classList.toggle('active-right');
        liverform.classList.toggle('active');
    }); 

    closeContact.addEventListener('click', function() {
        contact.classList.remove('active-left');
        corpform.classList.remove('active');
        /**not working for liver why? */
        contact.classList.remove('active-right');
        liverform.classList.remove('active');
    })

};

/**Test */


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const question = document.querySelectorAll('.qa-content');
const answear = document.querySelectorAll('.qa-answear');

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
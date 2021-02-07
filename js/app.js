'use strict';
var icono = document.querySelector('.header .fa-bars');
var nav = document.querySelector('.header .nav');
icono.addEventListener('click', function () {
    nav.classList.toggle('ver');
});

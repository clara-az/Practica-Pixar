'use strict'

const icono = (document.querySelector('.header .fa-bars') as HTMLElement)
const nav = (document.querySelector('.header .nav') as HTMLElement)

icono.addEventListener('click',() : void => {
    nav.classList.toggle('ver')
} )
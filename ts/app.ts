'use strict'


const bars = (document.querySelector('.fa-bars') as HTMLElement)
const nav  = (document.querySelector('.nav') as HTMLElement)

bars.addEventListener('click',() : void =>{
    nav.classList.toggle('ver')
})
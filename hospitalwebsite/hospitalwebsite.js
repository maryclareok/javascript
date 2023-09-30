const navTouch  = document.querySelector('.nav-touch')
const links = document.querySelector('.links')
const inputBar = document.querySelector('.inputbar')
const btn = document.querySelector('.btn')
navTouch.addEventListener('click',function(){
    links.classList.toggle('show-links')
})
btn.addEventListener('click',function(){
    inputBar.classList.toggle('active-inputbar')
})
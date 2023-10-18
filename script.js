const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});










const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header
ScrollReveal().reveal(".header__container h1",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header__container form",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header__container a",{
    ...scrollRevealOption,
    delay:1500,
});

const swiper = new Swiper(".swiper",{
    loop: true,
    pagination:{
        el:".swiper-pagination"
    },
});



let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let login = document.querySelector('login-form');

document.querySelector('#login-btn').onclick =() =>{
    login.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('menu-btn').onclick =() =>(
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
)

window.scroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
}

var swiper = new swiper(".review-slider", {
    spaceBetween:20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerview: 1,
        },
        768: {
            slidesPerview: 2,
        },
        991: {
            slidesPerview: 3,
        },
    }
})
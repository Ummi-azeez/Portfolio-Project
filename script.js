let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    login.classList.remove('active');
}

let login = document.querySelector('login-form');

document.querySelector('#login-btn').onclick =() =>{
    login.classList.toggle('active');
    cart.classList.remove('active');
}


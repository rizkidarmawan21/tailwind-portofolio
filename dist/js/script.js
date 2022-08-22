// navbar fixed on scroll

window.onscroll = function () {
    const navbar = document.querySelector('header');
    const fixedNav = navbar.offsetTop;
    if (window.pageYOffset > fixedNav) {
        navbar.classList.add('navbar-fixed');
    }
    else {
        navbar.classList.remove('navbar-fixed');
    }
    
}

// Humberger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');
humberger.addEventListener('click', function () {
    humberger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
} );
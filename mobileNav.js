let bars = document.querySelector(".fa-bars");
let times = document.querySelector(".fa-times");
let mobileNav = document.querySelector(".mobile-nav");
let navlink1 = document.querySelector(".link_a");
let navlink2 = document.querySelector(".link_b");
let navlink3 = document.querySelector(".link_c");
let navlink4 = document.querySelector(".link_d");


bars.addEventListener('click', function () {
    mobileNav.classList.add('open');
})
times.addEventListener('click', function () {
    
    mobileNav.classList.remove('open');
})
navlink1.addEventListener('click', function () {
    mobileNav.classList.remove('open');
} );
navlink2.addEventListener('click', function () {
    mobileNav.classList.remove('open');
} );
navlink3.addEventListener('click', function () {
    mobileNav.classList.remove('open');
} );
navlink4.addEventListener('click', function () {
    mobileNav.classList.remove('open');
} );
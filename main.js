const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconoMenMob = document.querySelector('.menu')
const menuMobile= document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toogledesktopMenu);
iconoMenMob.addEventListener('click', tooglemenuMobile);

function toogledesktopMenu() {
     desktopMenu.classList.toggle('inactive');
}

function tooglemenuMobile(){
    menuMobile.classList.toggle('inactive');
}
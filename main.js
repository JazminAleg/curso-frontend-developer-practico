const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconoMenMob = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')
const iconoShopCar = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toogledesktopMenu);
iconoMenMob.addEventListener('click', tooglemenuMobile);
iconoShopCar.addEventListener('click', toolgleproductDetail);

function toogledesktopMenu() {
    const isproducdetailClose= productDetail.classList.contains('inactive');
    if (!isproducdetailClose){
        productDetail.classList.add('inactive')
    }

     desktopMenu.classList.toggle('inactive');
}

function tooglemenuMobile(){
    const isproducdetailClose= productDetail.classList.contains('inactive');
    if (!isproducdetailClose){
        productDetail.classList.add('inactive')
    }

    menuMobile.classList.toggle('inactive');
}
function toolgleproductDetail(){
    const ismobileMenuClose = menuMobile.classList.contains('inactive');
    const isdesktopMenu = desktopMenu.classList.contains('inactive');
    if (!ismobileMenuClose){
        menuMobile.classList.add('inactive')
      }
    if (!isdesktopMenu){
        desktopMenu.classList.add('inactive')
      }

    productDetail.classList.toggle('inactive');

}
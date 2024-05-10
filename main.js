const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const mobile_menu_icon = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const navbar_shopping_cart = document.querySelector('.navbar-shopping-cart')
const aside_menu = document.querySelector('.product-detail');

navbar_email.addEventListener('click', toggle_desktop_menu);
mobile_menu_icon.addEventListener('click', toggle_mobile_menu);
navbar_shopping_cart.addEventListener('click', toggle_aside_menu);

function toggle_desktop_menu() {
    console.log('desktop-menu was clicked');
    const is_aside_menu_closed = aside_menu.classList.contains('inactive')
    if (!is_aside_menu_closed) {
        aside_menu.classList.add('inactive');
    }
    desktop_menu.classList.toggle('inactive');
}

function toggle_mobile_menu() {
    console.log('mobile-menu was clicked');
    const is_aside_menu_closed = aside_menu.classList.contains('inactive');
    if (!is_aside_menu_closed) {
        aside_menu.classList.add('inactive');
    }
    mobile_menu.classList.toggle('inactive');
}

function toggle_aside_menu() {

    const is_mobile_menu_closed = mobile_menu.classList.contains('inactive');
    const is_desktop_menu_closed = desktop_menu.classList.contains('inactive');

    if (!is_desktop_menu_closed) {
        desktop_menu.classList.add('inactive');
    }

    if (!is_mobile_menu_closed) {
        mobile_menu.classList.add('inactive');
    }

    aside_menu.classList.toggle('inactive');




}





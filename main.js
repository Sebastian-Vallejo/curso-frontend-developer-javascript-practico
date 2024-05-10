const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu_icon = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

navbar_email.addEventListener('click', toggle_desktop_menu);
mobile_menu_icon.addEventListener('click', toggle_mobile_menu);

function toggle_desktop_menu() {

    console.log('se hizo click');
    desktop_menu.classList.toggle('inactive');

}

function toggle_mobile_menu() {
    console.log('mobile-menu was clicked');
    mobile_menu.classList.toggle('inactive');
}


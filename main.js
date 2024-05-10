const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

navbar_email.addEventListener('click', toggle_desktop_menu);

function toggle_desktop_menu(){

    console.log('se hizo click');
    desktop_menu.classList.toggle('inactive');

}


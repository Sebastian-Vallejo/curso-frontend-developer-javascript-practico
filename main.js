const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const mobile_menu_icon = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const navbar_shopping_cart = document.querySelector('.navbar-shopping-cart')
const shopping_cart_container = document.querySelector('#shopping-cart');

const cards_container = document.querySelector('.cards-container');

const product_detail = document.querySelector('#product-detail');
const product_detail_close_button = document.querySelector('.product-detail-close');

navbar_email.addEventListener('click', toggle_desktop_menu);
mobile_menu_icon.addEventListener('click', toggle_mobile_menu);
navbar_shopping_cart.addEventListener('click', toggle_shopping_cart_container);
product_detail_close_button.addEventListener('click', close_product_detail);

function toggle_desktop_menu() {
    console.log('desktop-menu was clicked');
    const is_shopping_cart_container_closed = shopping_cart_container.classList.contains('inactive')
    const is_product_detail_closed = product_detail.classList.contains('active');

    if (!is_product_detail_closed) {
        product_detail.classList.add('inactive');
    }


    if (!is_shopping_cart_container_closed) {
        shopping_cart_container.classList.add('inactive');
    }
    desktop_menu.classList.toggle('inactive');
}

function toggle_mobile_menu() {
    console.log('mobile-menu was clicked');
    const is_shopping_cart_container = shopping_cart_container.classList.contains('inactive');
    const is_product_detail_closed = product_detail.classList.contains('active');

    if (!is_product_detail_closed) {

        product_detail.classList.add('inactive');
    }
    if (!is_shopping_cart_container) {
        shopping_cart_container.classList.add('inactive');
    }
    mobile_menu.classList.toggle('inactive');
}

function toggle_shopping_cart_container() {

    const is_mobile_menu_closed = mobile_menu.classList.contains('inactive');
    const is_desktop_menu_closed = desktop_menu.classList.contains('inactive');
    const is_product_detail_closed = product_detail.classList.contains('active');

    if (!is_product_detail_closed) {
        product_detail.classList.add('inactive');
    }

    if (!is_desktop_menu_closed) {
        desktop_menu.classList.add('inactive');
    }

    if (!is_mobile_menu_closed) {
        mobile_menu.classList.add('inactive');
    }

    shopping_cart_container.classList.toggle('inactive');
}

function open_product_detail() {
    console.log('product-detail was clicked');

    const is_mobile_menu_closed = mobile_menu.classList.contains('inactive');
    const is_desktop_menu_closed = desktop_menu.classList.contains('inactive');
    const is_product_detail_closed = product_detail.classList.contains('active');
    const is_shopping_cart_container = shopping_cart_container.classList.contains('inactive');

    if (!is_product_detail_closed) {
        product_detail.classList.add('inactive');
    }

    if (!is_desktop_menu_closed) {
        desktop_menu.classList.add('inactive');
    }

    if (!is_mobile_menu_closed) {
        mobile_menu.classList.add('inactive');
    }

    if (!is_shopping_cart_container) {
        shopping_cart_container.classList.add('inactive');
    }

    product_detail.classList.remove('inactive');

}

function close_product_detail() {
    product_detail.classList.add('inactive');
}



// maquetacion lista de productos html //

const product_list = [];
product_list.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"'
});

product_list.push({
    name: 'PC',
    price: 9420,
    img: 'https://gtech.systems/wp-content/uploads/2020/02/3a-Copiar.png'
});

product_list.push({
    name: 'Switch',
    price: 980,
    img: 'https://falabella.scene7.com/is/image/FalabellaCO/gsc_118315403_2051977_1?wid=800&hei=800&qlt=70'
});

function grab_products(product_list) {

    for (product of product_list) {

        const product_card = document.createElement('div');
        product_card.classList.add('product-card');

        const product_img = document.createElement('img');
        product_img.setAttribute('src', product.img);
        product_img.addEventListener('click', open_product_detail);

        const product_info = document.createElement('div');
        product_info.classList.add('product-info');

        const product_info_div = document.createElement('div');

        const product_price = document.createElement('p');
        product_price.innerText = '$' + product.price;

        const product_name = document.createElement('p');
        product_name.innerText = product.name;

        product_info_div.append(product_price, product_name);

        const product_info_figure = document.createElement('figure');
        const product_info_img = document.createElement('img');
        product_info_img.setAttribute('src', './icons/bt_add_to_cart.svg');

        product_info_figure.appendChild(product_info_img);
        product_info.append(product_info_div, product_info_figure);

        product_card.append(product_img, product_info);

        cards_container.appendChild(product_card);

    }
}

grab_products(product_list);




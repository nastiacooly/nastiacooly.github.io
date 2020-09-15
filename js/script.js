const MENU = document.querySelector('.sidemenu'),
    hamburger = document.querySelector('.hamburger'),
    closeElem = document.querySelector('.sidemenu__menu__close');

hamburger.addEventListener('click', () => {
    MENU.classList.add('active');
});

closeElem.addEventListener('click', () => {
    MENU.classList.remove('active');
});
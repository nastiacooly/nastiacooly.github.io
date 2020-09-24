const MENU = document.querySelector('.sidemenu'),
    hamburger = document.querySelector('.hamburger'),
    closeElem = document.querySelector('.sidemenu__menu__close'),
    sidePanel = document.querySelector('.sidepanel'),
    sidePanelDivider = document.querySelector('.sidepanel__divider'),
    sidePanelTitle = document.getElementById('sidepanelTitle');

const svgElements = document.querySelectorAll('a.sidepanel__link > svg > path'),
    sideMenuLinks = document.querySelectorAll('ul.sidemenu__menu__list > li > a');

//sidemenu animation

hamburger.addEventListener('click', () => {
    MENU.classList.add('active');
});

closeElem.addEventListener('click', () => {
    MENU.classList.remove('active');
});

for (link of sideMenuLinks) {
    link.addEventListener('click', () => {
        MENU.classList.remove('active');
    });
}

//sidepanel animation (color change)

document.addEventListener('scroll', () => {
    if(pageYOffset > 400) {
        sidePanelTitle.classList.remove('title_whc');
        sidePanelDivider.classList.add('sidepanel__divider_black');
        for (let elem of svgElements) {
            elem.style.fill = "black";
        }
    } else {
        sidePanelTitle.classList.add('title_whc');
        sidePanelDivider.classList.remove('sidepanel__divider_black');
        for (let elem of svgElements) {
            elem.style.fill = "white";
        }
    }
    
});
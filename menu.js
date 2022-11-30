const menu = document.querySelector('#menu');
const menuList = document.querySelector('.menu__list');
const menuItem = document.querySelector('.menu__item');
const helper = document.querySelector('.menu__helper');
menu.addEventListener('click', () => {
    menuList.classList.toggle('menu-open');
    // menuList.classList.toggle('notactive');
    menuItem.classList.toggle('menu-click');
    menuItem.classList.toggle('hide');
    helper.style.width = menu.offsetWidth + 'px';




})
window.addEventListener('resize', () => helper.style.width = menu.offsetWidth + 'px')
document.addEventListener('click', (e) => {
    if (e.path.includes(menu)) {
        menuList.classList.remove('menu-open');
        menuItem.classList.remove('menu-click');
        menuItem.classList.add('hide');
    };

})

const menuHeader = document.getElementById('menuHeader');
const responsiveMenu = document.getElementById('responsiveMenu');

responsiveMenu.addEventListener('click', ()=> {
    menuHeader.classList.toggle('responsive-active');
})
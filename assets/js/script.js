// Menu recolhido + animação de X

const collapseMenu = document.querySelector('.collapse-menu');
const navUl = document.querySelector('.nav-ul-wrapper');
const menuLines = document.querySelectorAll('.collapse-menu span');

collapseMenu.addEventListener('click', () => {
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
    menuLines.forEach(line => {
        line.classList.toggle('active');
    });
});
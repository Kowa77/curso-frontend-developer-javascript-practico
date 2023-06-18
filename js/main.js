const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const inactive = document.querySelector('.inactive');


navEmail.addEventListener('click', mostrar );

function mostrar(){
    desktopMenu.classList.toggle('inactive');
}
const navButton = document.getElementById('menu-btn');
const navMenu = document.getElementById('menu')
navButton.addEventListener('click', navToggle)

function navToggle(){
    navButton.classList.toggle('open')
    navMenu.classList.toggle('hidden')
    navMenu.classList.toggle('flex')
}
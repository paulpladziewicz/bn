// Mobile Navbar
const menuBtn = document.querySelector('#hamburger');
// const menuNav = document.querySelector('.nav-menu');

//Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.toggle('is-active');
        // menuNav.classList.toggle('close');

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.toggle('is-active');
        // menuNav.classList.toggle('close');

        // Set Menu State
        showMenu = false;
    }
}

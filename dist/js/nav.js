// Mobile Navbar
const menuBtn = document.querySelector('#hamburger');
const menuNav = document.querySelector('#mobile-menu');

//Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.toggle('is-active');
        menuNav.classList.toggle('hidden');

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.toggle('is-active');
        menuNav.classList.toggle('hidden');

        // Set Menu State
        showMenu = false;
    }
}

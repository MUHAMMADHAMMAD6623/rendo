document.addEventListener('DOMContentLoaded', () => {
    const menuicon = document.querySelector('.menu');
    const navmenu = document.querySelector('.right');
    const empty = document.querySelector('.empty')

    // Make sure the initial height is set in CSS, or set it here if needed
    // e.g., navmenu.style.height = '0px'; or use a CSS class for initial state

    menuicon.addEventListener('click', () => {
        menuicon.classList.toggle('clicked');

        // Check current height using getComputedStyle to ensure correct handling
        const currentHeight = window.getComputedStyle(navmenu).height;

        if (currentHeight === '0px' || currentHeight === '0') {
            navmenu.style.height = '100vh'; // Or the height you need
        } else {
            navmenu.style.height = '0px';
        }
    });
    const menuwidth = window.getComputedStyle(menuicon).width;
    empty.style.width = menuwidth
});

const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');
});

mainContent.addEventListener('transitionend', () => {
    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'none';
    }
});
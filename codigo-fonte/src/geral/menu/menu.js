const menuButton = document.querySelector('navbar-toggler');
const mainContent = document.getElementById('mainContent');
console.log(menuButton);
console.log(mainContent);
menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});

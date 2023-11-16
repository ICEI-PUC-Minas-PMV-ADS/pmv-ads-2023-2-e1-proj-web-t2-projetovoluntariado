const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});


function finalizar() {
    const botoes = document.querySelectorAll(".botao");

    botoes.forEach(botao => {
        botao.addEventListener('click', function () {

            this.innerHTML = "Finaliza-do";
            this.style.backgroundColor = "gray";

            botao.removeEventListener('click', handleClick);

        });
    });
}
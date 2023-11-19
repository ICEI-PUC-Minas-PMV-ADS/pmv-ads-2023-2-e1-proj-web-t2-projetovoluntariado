const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});

document.getElementById('cadastrarProjetoBtn').addEventListener('click', function() {
    window.location.href = "http://127.0.0.1:5500/codigo-fonte/src/cadastroProjeto/cadastroProjeto.html";
});

document.querySelectorAll('.btn-secondary').forEach((button) => {
    button.addEventListener('click', () => {
        const projetoCard = button.closest('.card-projetos');

        projetoCard.classList.add('d-none');

        updateTotalProjetos();
    });
});

function updateTotalProjetos() {
    const totalProjetosElement = document.getElementById('totalProjetos');

    let totalProjetos = parseInt(totalProjetosElement.textContent);

    totalProjetos--;

    totalProjetosElement.textContent = totalProjetos;

    console.log('Botão "Encerrar" clicado. Atualizando total de projetos.', totalProjetos);
}
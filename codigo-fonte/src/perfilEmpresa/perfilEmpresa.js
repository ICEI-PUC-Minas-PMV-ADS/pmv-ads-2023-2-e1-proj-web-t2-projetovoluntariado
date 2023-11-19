const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});

document.querySelectorAll('.btn-secondary').forEach((button) => {
    button.addEventListener('click', () => {
        const projetoCard = button.closest('.card-projetos');

        projetoCard.classList.add('d-none');

        // Atualiza o número total de projetos subtraindo 1
        updateTotalProjetos();
    });
});

function updateTotalProjetos() {
    // Obtém o elemento que exibe o número total de projetos
    const totalProjetosElement = document.getElementById('totalProjetos');

    // Obtém o número atual de projetos
    let totalProjetos = parseInt(totalProjetosElement.textContent);

    // Subtrai 1 do número total de projetos
    totalProjetos--;

    // Atualiza o texto com o novo número total de projetos
    totalProjetosElement.textContent = totalProjetos;

    // Adiciona um log para verificar se a função está sendo chamada e o novo valor
    console.log('Botão "Encerrar" clicado. Atualizando total de projetos.', totalProjetos);
}
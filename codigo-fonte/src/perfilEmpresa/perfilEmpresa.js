const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});

document.getElementById('cadastrarProjetoBtn').addEventListener('click', function() {
    window.location.href = "../cadastroProjeto/cadastroProjeto.html";
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
function listarProjetosEmpresa(){
    let users = getUsers();
    let userLogged = isLogged()
    let projects =[];
    users.forEach((user)=>{
        if(user.email === userLogged.email){
            projects = user.projects;

            //Continuar...
        }
    });

}
function createCards(project, id){
    let div = document.createElement("div");
    div.setAttribute("class", "card rounded-5 card-projetos border-0");
    let img = document.createElement("img");
    img.setAttribute("class", "mx-auto mb-4 img-fluid perfil rounded-5");
    img.setAttribute("src", project.imgLink);
    let h4 = document.createElement("h4");
    h4.textContent = project.projectName;
    let h5 = document.createElement("h5");
    h5.textContent = project.availability;
    let div2 = document.createElement("div");
    div2.setAttribute("class", "col text-center margin");
    let button = document.createElement("button");
    button.setAttribute("class","btn btn-secondary my-2");
    button.setAttribute("id", "encerrarBtn1");

    //continuar com appendChild
}
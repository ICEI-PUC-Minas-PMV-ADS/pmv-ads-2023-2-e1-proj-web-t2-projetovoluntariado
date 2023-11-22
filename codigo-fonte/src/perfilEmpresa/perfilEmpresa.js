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
            projects.forEach((project)=>{
                if(project.isActive == 1)
                {
                    createCards(project, project.id);
                }
            });
        }
    });

}
function createCards(project, id){
    let div0 = document.createElement("div");
    div0.setAttribute("class", "col-lg-3 col-md-12 col-sm-12 mx-3");

    let div1 = document.createElement("div");
    div1.setAttribute("class", "card rounded-5 card-projetos border-0");
    
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
    button.textContent = "Finalizar"
    button.addEventListener("click", ()=>{
        encerrarProjeto(id);
    });
    
    div2.appendChild(button);
    div1.appendChild(img);
    div1.appendChild(h4);
    div1.appendChild(h5);
    div1.appendChild(div2);
    div0.appendChild(div1);
    let container = document.querySelector(".container2");
    container.appendChild(div0);
}
function encerrarProjeto(id){
    let projects = [];
    let users = getUsers();
    let userLogged = isLogged();
    users.forEach((user)=>{
        if(user.email == userLogged.email){
            projects = user.projects;
            projects.forEach((project)=>{
                if(project.id == id){
                    project.isActive=0;                    
                }
            });
            user.projects = projects;
            localStorage.setItem("users", JSON.stringify(users));
            Swal.fire({
                position: "center",
                title: `Pronto`,
                text: "O projeto foi encerrado",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              listarProjetosEmpresa();
        }
    });

}
listarProjetosEmpresa();
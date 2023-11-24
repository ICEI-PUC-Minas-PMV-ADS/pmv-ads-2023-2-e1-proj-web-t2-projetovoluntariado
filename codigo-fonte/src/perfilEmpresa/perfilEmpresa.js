const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});

document.getElementById('cadastrarProjetoBtn').addEventListener('click', function() {
    
    let userLogged = isLogged();
    let users = getUsers();
    let contProjects=0;
        if(userLogged){
        users.forEach((user)=>{
            if(user.email === userLogged.email){
                tempProjects = user.projects;
                tempProjects.forEach((project)=>{
                    if(project.isActive == 1)
                        contProjects++;
                });

                if(contProjects >=3)
                {
                    Swal.fire({
                        position: "center",
                        title: `Erro`,
                        text: "Você só pode cadastrar até 3 projetos",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 2000,
                      });
                }
                else{
                    window.location.href = "../cadastroProjeto/cadastroProjeto.html";
                }
                
            }
        })
    }
    
    
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
    let countProjects = 0;
    users.forEach((user)=>{
        if(user.email === userLogged.email){
            projects = user.projects;  
            projects.forEach((project)=>{
                if(project.isActive == 1)
                {
                    countProjects++;
                    createCards(project, project.id);
                }
                });
                if(countProjects==0){
                    let container = document.getElementById("container2");
                    let tag = document.createElement("h5");
                    let div = document.createElement("div");
                    div.setAttribute("class", "cardVazio")
                    tag.innerHTML = "Não há projetos ativos";
                    div.appendChild(tag);
                    container.appendChild(div);
                }     
            }
            
        }
    );

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
    h5.textContent = project.availability + " horas";
    
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
            tempProjects = getProjects();
            tempProjects.forEach((project)=>{
                if(project.id == id){
                    project.isActive = 0;
                    localStorage.setItem("projects", JSON.stringify(tempProjects));
                }
            });
            Swal.fire({
                position: "center",
                title: `Pronto`,
                text: "O projeto foi encerrado",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              deleteAllNodes(".container2");
              listarProjetosEmpresa();
              countProjectsActive();
              atualizaNumProjetos();
              
        }
    });

}

function countProjectsActive(){
    let users = getUsers();
    let userLogged = isLogged()
    let projects =[];
    let countProjects = 0;
    users.forEach((user)=>{
        if(user.email === userLogged.email){
            projects = user.projects;  
            projects.forEach((project)=>{
                if(project.isActive === 1)
                    countProjects++;
                });
                   
            }
            
        }
       
    );
    return countProjects; 
}

function getNomeEmpresa(){
    let users = getUsers();
    let userLogged = isLogged()
    let userName="";
    users.forEach((user)=>{
        if(user.email === userLogged.email){
            userName = user.name;
                   
         }
        }   

    );
    return userName;
}


function atualizaNumProjetos(){
    let numProjetos = countProjectsActive();
    document.getElementById("nomeEmpresa").textContent = getNomeEmpresa();
    if (numProjetos>1)
    { document.getElementById("totalProjetos").textContent = numProjetos + " projetos";}
    else if(numProjetos==1)
        {document.getElementById("totalProjetos").textContent = numProjetos + " projeto";}
        else
        {document.getElementById("totalProjetos").textContent = numProjetos + " projetos";}
}

atualizaNumProjetos();
listarProjetosEmpresa();
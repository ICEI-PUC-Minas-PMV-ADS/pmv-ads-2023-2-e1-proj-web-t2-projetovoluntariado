function isLogged() //Retorna o objeto LoginUser caso esteja logado do contrário null
{
  let user = localStorage.getItem("loginUser");
  if (user == null || user == undefined || user == "")
    return null;
  else
    return JSON.parse(user);

}

function getHours() {
  usuarioLogado = isLogged();
  let horas = 0;
  if (usuarioLogado) {
    usuarios = getUsers();
    usuarios.forEach((usuario) => {
      if (usuario.email == usuarioLogado.email) {
        usuario.projects.forEach((projeto) => {
          if (projeto.userCompleted == 1) {
            horas = horas + projeto.availability;
          }
        });
      }
    });
    return horas;
  }
}


function checkisLoggedInMenu() {


  const listaNav = document.querySelector(".navbar-nav");
  const links = listaNav.querySelectorAll(".nav-link");
  const linkHome = links[0];
  const linkProjetos = links[1];
  const linkPerfil = links[2];
  const linkSair = links[3];

  let userLogged = isLogged();

  if (userLogged != null) {
    linkSair.textContent = "Sair";
    linkSair.setAttribute("href", "#");
    linkSair.addEventListener("click", () => {
      localStorage.setItem("loginUser", "");
      Swal.fire({
        position: "center",
        title: `Logout... `,
        text: "Logout feito com sucesso, você será redirecionado para a página principal",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        location.replace("../index.html");
      }, 1000);


    });
    if (userLogged.typeUser === "Empresa") {

      linkPerfil.setAttribute("href", "../perfilEmpresa/perfilEmpresa.html")
    }

  }
  else {
    const linkPerfil = links[2];
    linkPerfil.style.display = "none";
  }
}
function getUsers() {
  users = localStorage.getItem("users");
  if (users != null)
    return JSON.parse(users);
  else
    return null;
}

function getProjects() {
  let projects = JSON.parse(localStorage.getItem("projects"));
  if (projects != null)
    return projects;
  else
    return null;
}

function setProjectsToLocalStorage() { //Faz a primeira gravacao do localStorage caso nao existam projetos salvos no navegador
  let projects = localStorage.getItem("projects");
  if (projects == null || projects == undefined)
    localStorage.setItem("projects", JSON.stringify(listaProjetos));
}
function deleteAllNodes(parentNodeClass){ // Deleta todos os nós abaixo do nó passado como parametro
  let parent = document.querySelector(parentNodeClass);
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}
function deleteAllNodesById(parentNodeClass){ // Deleta todos os nós abaixo do nó passado como parametro
  let parent = document.getElementById(parentNodeClass);
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}
setProjectsToLocalStorage();
checkisLoggedInMenu();
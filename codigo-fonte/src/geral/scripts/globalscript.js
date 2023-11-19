function isLogged() //Retorna o objeto LoginUser caso esteja logado do contrário null
{
    user = JSON.parse(localStorage.getItem("loginUser"));
    if(user == null || user == undefined)
        return null;
    else
        return user;
}
function checkisLoggedInMenu(){
    let loggedNodeText = document.querySelector(".entrar-sair");
    if(isLogged() != null)
    {
        loggedNodeText.innerText = "Sair";
        loggedNodeText.setAttribute("href","#");
        loggedNodeText.addEventListener("click", ()=>{
            localStorage.setItem("loginUser", null);
            Swal.fire({
                position: "center",
                title: `Logout... `,
                text: "Logout feito com sucesso, você será redirecionado para a página principal",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              setInterval(()=>{
                location.replace("../index.html");
           },2800);
            
        });
    }
}
function getUsers()
{
    users = localStorage.getItem("users");
    if(users != null)
        return JSON.parse(users);
    else
        return null;
}

function getProjects(){
    let projects = JSON.parse(localStorage.getItem("projects"));
    if(projects != null)
        return projects;
    else
        return null;
}

function setProjectsToLocalStorage(){ //Faz a primeira gravacao do localStorage caso nao existam projetos salvos no navegador
    let projects = localStorage.getItem("projects");
    if (projects == null || projects == undefined)
      localStorage.setItem("projects", JSON.stringify(listaProjetos));
}
setProjectsToLocalStorage();
checkisLoggedInMenu();
 
 function expandNav(){
    element = document.getElementsByClassName('lista-categoria-1col');
    var iconeExpand = document.getElementById("icone-dropdown");
    if(element[0].classList.contains("expanded-menu-1col"))
    {
        element[0].classList.remove("expanded-menu-1col");
        iconeExpand.classList.remove("fa-caret-up");
        iconeExpand.classList.add("fa-caret-down");  
    }
    else
    {
        element[0].classList.add("expanded-menu-1col");
        iconeExpand.classList.add("fa-caret-up");
        iconeExpand.classList.remove("fa-caret-down");     
    }
}

 function expandMenu(){
    element = document.getElementsByClassName('flex-container-header');

    if(element[0].classList.contains("expanded-menu")){
        element[0].classList.remove("expanded-menu");
        element[0].classList.add("shrink-menu");
    }
    else
    {
        element[0].classList.add("expanded-menu");
        element[0].classList.remove("shrink-menu");
        
    }
}

function createCards(querySelector, project, index) // cria dinamicamente os cards e os anexa na classe passada como parametro
{
    let containerCard = document.createElement("div");
    containerCard.setAttribute("class", "container-card");
    
    let imageCards = document.createElement("img");
    imageCards.setAttribute("class", "image-cards");
    imageCards.setAttribute("src", project.imgLink);
    
    let article = document.createElement("article");
    
    let h2 = document.createElement("h2");
    h2.innerText = project.projectName;
    
    let p = document.createElement("p");
    p.setAttribute("class", "botao-vermais");
    p.innerText = "Ver detalhes";
    p.addEventListener("click",function(){
        modal(index);
    });

    containerCard.appendChild(imageCards);
    article.appendChild(h2);
    article.appendChild(p);
    containerCard.appendChild(article);


    var nodeLocal = document.querySelector(querySelector);
    nodeLocal.appendChild(containerCard);

}

function createMenuLateral(categories, classNode){ //Preenche o menu lateral com as categorias e seus links dinamicamente
    let node = document.querySelector(classNode);
    for(var category in categories){
        let li = document.createElement("li");
        li.setAttribute("class", "item-categoria");
        let a = document.createElement("a");
        a.setAttribute("class", "link-categoria");
        a.innerText = categories[category];
        a.setAttribute("href", "projetos.html?categoryName=" + encodeURI(categories[category]));
        li.appendChild(a);
        node.appendChild(li);
    }    
}

function deleteAllNodes(parentNodeClass){ // Deleta todos os nós abaixo do nó passado como parametro
    let parent = document.querySelector(parentNodeClass);
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function deleteAllCards(parentName){ // deleta todos os cards
    let parent = document.querySelector(parentName);
    let cards = document.querySelectorAll(".container-card");
    cards.forEach(function(card) {
        parent.removeChild(card);
      });
}
function categoryFilter(project, category){ //Funcao para filtrar os projetos por categoria, usados com filter
    if(project.categoryName==category)
    {
        return project;
    }
}

function isLogged() //Retorna o objeto LoginUser caso esteja logado do contrário null
{
    user = JSON.parse(localStorage.getItem("loginUser"));
    if(user == null || user == undefined)
        return null;
    else
        return user;
}

function getUsers()
{
    users = localStorage.getItem("users");
    if(users != null)
        return JSON.parse(users);
    else
        return null;
}

function subscribe(index){
    userLogged = isLogged();
    if(userLogged != null)
    {
        users = getUsers();
        for(user in users){
            if(users[user].email == userLogged.email)
            {
                let projects = getProjects();
                for(let project in projects)
                {
                    if(index == projects[project].id)
                    {   
                        if(!Array.isArray(users[user].projects))
                            users[user].projects =[];
                        if(users[user].projects.length < 3){
                            users[user].projects.push(projects[project]);
                            localStorage.setItem("users", JSON.stringify(users));
                            modal(-1);
                            Swal.fire({
                                position: "center",
                                title: `Parabéns!`,
                                text: "Sua inscrição foi efetuada com sucesso",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 4000,
                              });
                           setInterval(()=>{
                                window.location.replace("../perfilVoluntario/perfilVoluntarioo.html");
                           },2500);
                            
                        }                        
                        else
                            {
                                Swal.fire({
                                    position: "center",
                                    title: `Erro!`,
                                    text: "Só é possível se inscrever em até 3 projetos.",
                                    icon: "error",
                                    showConfirmButton: false,
                                    timer: 2000,
                                  });
                            }
                   
                    }
                }
            }
        }
    }
    else 
    {
        Swal.fire({
            position: "center",
            title: `Erro!`,
            text: "Você precisa estar logado para se inscrever nos projetos.",
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
          setInterval(()=>{
            window.location.replace("../loginCadastro/loginCadastro.html");
       },3700);
        
    }
}

function getProjects(){
    let projects = JSON.parse(localStorage.getItem("projects"));
    if(projects != null)
        return projects;
    else
        return null;
}

function setProjectsToLocalStorage(){
    let projects = localStorage.getItem("projects");
    if (projects == null || projects == undefined)
      localStorage.setItem("projects", JSON.stringify(listaProjetos));
}

function checkisLoggedInMenu(){
    let loggedNodeText = document.querySelector(".entrar-sair");
    userLogged = isLogged();
    if(userLogged != null)
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
           },3700);
            
        });
    }
}


//==============================================================================

var queryString = location.search; //Verifica se há na barra de navegacao alguma query de filtro de categoria
if(queryString){
    
    let categoryName=decodeURI(queryString.trim().split("=")[1]);
    var filtered = listaProjetos.filter(project =>categoryFilter(project, categoryName));
    for(project in filtered)
    {
      createCards(".grid-wrapper", filtered[project], filtered[project].id);
    }
}
else // sem query de pesquisa, carrega todos os cards
{
    for(const index in listaProjetos){
   
        createCards(".grid-wrapper", listaProjetos[index], listaProjetos[index].id);
    }
}
setProjectsToLocalStorage();

createMenuLateral(categorias, ".menu-ul"); // Cria o menu lateral
createMenuLateral(categorias, ".menu-ul2"); //Cria o menu lateral expansivo

console.log(isLogged());
checkisLoggedInMenu();


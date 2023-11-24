 
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
    // article.appendChild(p);
    containerCard.appendChild(article);
    containerCard.appendChild(p);


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

// function deleteAllCards(parentName){ // deleta todos os cards
//     let parent = document.querySelector(parentName);
//     let cards = document.querySelectorAll(".container-card");
//     cards.forEach(function(card) {
//         parent.removeChild(card);
//       });
// }
function categoryFilter(project, category){ //Funcao para filtrar os projetos por categoria, usados com filter
    if(project.categoryName==category && project.isActive ==1)
    {
        return project;
    }
}

function subscribe(index){
    userLogged = isLogged();
    let = numProjectsSubscribed = 0;
    if(userLogged != null)
    {
        users = getUsers();
        for(user in users){
            if(users[user].email == userLogged.email)
            {
                if(users[user].typeUser=="Empresa")
                {
                    Swal.fire({
                        position: "center",
                        title: `Erro!`,
                        text: "Empresas e(ou) organizações não podem se inscrever em projetos.",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 2000,
                      });
                }
                else{
                    let projects = getProjects();
                for(let project in projects)
                {
                    if(index == projects[project].id)
                    {   
                        if(!Array.isArray(users[user].projects))
                            users[user].projects =[];
                        users[user].projects.forEach(project => {
                            if(project.userCompleted === 0)
                                numProjectsSubscribed++;
                        });
                        if(numProjectsSubscribed < 3){
                            users[user].projects.push(projects[project]);
                            localStorage.setItem("users", JSON.stringify(users));
                            modal(-1);
                            Swal.fire({
                                position: "center",
                                title: `Parabéns!`,
                                text: "Sua inscrição foi efetuada com sucesso",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2000,
                              });
                           setInterval(()=>{
                                window.location.replace("../perfilVoluntario/perfilVoluntarioo.html");
                           },1000);
                            
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
       },2000);
        
    }
}


//==============================================================================
setProjectsToLocalStorage();
var queryString = location.search; //Verifica se há na barra de navegacao alguma query de filtro de categoria
if(queryString){
    let projects = getProjects();
    let categoryName=decodeURI(queryString.trim().split("=")[1]);
    var filtered = projects.filter(project =>categoryFilter(project, categoryName));
    for(project in filtered)
    {
        createCards(".grid-wrapper", filtered[project], filtered[project].id);
    }
}
else // sem query de pesquisa, carrega todos os cards
{
    let projects = JSON.parse(localStorage.getItem("projects"));
    if(projects){
        projects.forEach((project)=>{
            if(project.isActive===1) 
                {
                    createCards(".grid-wrapper", project, project.id);
                    console.log(project);
                }
                else{
                    console.log(project);
                }
        } );
        
    }
}

createMenuLateral(categorias, ".menu-ul"); // Cria o menu lateral
createMenuLateral(categorias, ".menu-ul2"); //Cria o menu lateral expansivo
checkisLoggedInMenu();


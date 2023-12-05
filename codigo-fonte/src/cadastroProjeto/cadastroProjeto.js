const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});

const radioLabels = document.querySelectorAll('[name="options-radio"]+label');

radioLabels.forEach(label=>{
    label.addEventListener("click", function(event){
        const radioButton = document.getElementById(event.target.getAttribute("for"));
        radioButton.checked = true;
        switch (radioButton.id){
            case "btnEscolherImagem" :
                escolherImagemGaleria()
            break;
            case "btnEscolherImagemApi":
                escolherImagemApi()
            break;
        }
    });
});

function escolherImagemGaleria(){

    deleteAllNodesById("galeria-imagens");
    deleteAllNodesById("campo-busca");
    
    const imagens = [
        "../projetos/images/imagem-voluntarios-01.jpeg",
        "../projetos/images/imagem-voluntarios-02.jpg",
        "../projetos/images/imagem-voluntarios-03.jpg",
        "../projetos/images/imagem-voluntarios-04.jpg",
        "../projetos/images/imagem-voluntarios-05.jpg",
        "../projetos/images/imagem-voluntarios-06.jpg",
        "../projetos/images/imagem-voluntarios-07.jpg",
        "../projetos/images/imagem-voluntarios-08.jpg",
        "../projetos/images/imagem-voluntarios-09.jpg",
        "../projetos/images/imagem-voluntarios-10.jpg",
        "../projetos/images/imagem-voluntarios-11.jpg",
        "../projetos/images/imagem-voluntarios-12.jpg",
        "../projetos/images/imagem-voluntarios-13.jpg",
        "../projetos/images/imagem-voluntarios-14.jpg",
        "../projetos/images/imagem-voluntarios-15.jpg",
        "../projetos/images/imagem-voluntarios-16.jpg",
    ];

    const galeriaImagens = document.getElementById('galeria-imagens');

    // Limpa a galeria de imagens
    galeriaImagens.innerHTML = '';

    // Adiciona cada imagem à galeria
    imagens.forEach((imagemURL) => {
       
        const linkElement = document.createElement('a');
        linkElement.href = '#'; // Pode ser um link vazio ou para alguma outra página

        const imagemElement = document.createElement('img');
        imagemElement.src = imagemURL;
        imagemElement.alt = 'Imagem de perfil do projeto';
        imagemElement.className = 'img-thumbnail img-fluid m-2'; // Adiciona as classes img-thumbnail e img-fluid
        imagemElement.style.maxWidth = '150px'; // Define a largura máxima da imagem
        imagemElement.style.maxHeight = '150px'; // Define a altura máxima da imagem
        imagemElement.style.cursor = 'pointer'; // Adiciona um cursor indicando que é clicável

        linkElement.appendChild(imagemElement); // Adiciona a imagem ao link
        galeriaImagens.appendChild(linkElement);

        linkElement.addEventListener('click', (event) => {
            event.preventDefault(); // Impede que o link siga para outra página
            // Define o valor do campo de arquivo para a imagem selecionada
            document.getElementById('imagem').value = imagemURL;

            // Oculta as outras imagens na galeria
            Array.from(galeriaImagens.children).forEach((child) => {
                if (child !== linkElement) {
                    child.style.display = 'none';
                }
            });
            // Exibe o botão de escolher arquivo
            document.getElementById('imagem').style.display = 'block';
        });
    });

    galeriaImagens.style.display = 'block'; // Exibe a galeria como bloco
    document.getElementById('imagem').style.display = 'none';
}

function escolherImagemApi(){
    
    deleteAllNodesById("galeria-imagens");
    deleteAllNodesById("campo-busca");

    const divGroup = document.createElement("div");
    divGroup.setAttribute("class", "input-group mb-3");

    const divButton = document.createElement("div");
    divButton.setAttribute("class", "input-group-append");
    
    const inputSearch = document.createElement("input");
    inputSearch.setAttribute("class", "form-control");
    inputSearch.setAttribute("type", "text");
    inputSearch.setAttribute("placeholder","Insira o texto");
    inputSearch.setAttribute("id", "searchInput")
    
    const searchButton = document.createElement("button");
    searchButton.setAttribute("class", "btn btn-secondary");
    searchButton.textContent = "Pesquisar"

    const elemImagemGaleria = document.getElementById("btnEscolherImagem");
    
    divGroup.appendChild(inputSearch);
    divButton.appendChild(searchButton);
    divGroup.appendChild(divButton);
    campoBusca.appendChild(divGroup);

 

    searchButton.addEventListener("click", (event)=>{
        event.preventDefault();
        const query = document.getElementById("searchInput").value;
        find(query);
    });
}


function createCategoryOption(){
    
    inputCategory = document.getElementById("categoria");
    Object.keys(categorias).forEach((categoriaItem)=>{
        const valor = categorias[categoriaItem];
        let option = document.createElement("option");
        option.setAttribute("value", valor);
        option.textContent = valor;
        inputCategory.appendChild(option);
    })
    
    
}
createCategoryOption()



document.addEventListener("DOMContentLoaded",function(){
    let formulario = document.getElementById("formulario");

    
    formulario.addEventListener('submit', function(event){ 
    event.preventDefault();
    
    const projectName = document.getElementById("nome-projeto").value;
    const institutionName = document.getElementById("nome-instituicao").value;
    const availability = parseInt(document.getElementById("horas").value);
    const categoryName = document.getElementById("categoria").value;
    const imageLink = document.getElementById("imagem").value;
    const description = document.getElementById("descricao").value;

    // Falta Validar os dados que estao no form

    let userLogged = isLogged();
    let users = getUsers();
    let projects = JSON.parse(localStorage.getItem("projects"));
    let newId = projects.length+1;
    let contProjects=0;
    if(userLogged){
        users.forEach((user)=>{
            if(user.email === userLogged.email && projects){
                tempProjects = user.projects;
                let project = {
                    id: newId,
                    projectName: projectName,
                    projectDescription: description,
                    instituitionName: institutionName,
                    availability: availability,
                    categoryName: categoryName,
                    imgLink: imageLink == "" || imageLink == null ? "../projetos/images/noimage.png" : imageLink,
                    isActive: 1,
                    userCompleted: 0
                }
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
                    projects.push(project);
                    localStorage.setItem("projects", JSON.stringify(projects));

                    tempProjects.push(project);
                    user.projects =[];
                    user.projects = tempProjects;
                    localStorage.setItem("users", JSON.stringify(users));
                    
                    console.log("Adicionado com sucesso")
                    Swal.fire({
                        position: "center",
                        title: `Pronto`,
                        text: "Projeto cadastrado com sucesso",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                    setInterval(()=>{
                        window.location.replace("../perfilEmpresa/perfilEmpresa.html");
                },2000);

                }
                
            }
        })
    }
    })


})

async function loadImages(search) { // Retorna o Json com a lista de imagens pesquisadas de search
    if (search.length > 1 && search != "") {
        const word = encodeURI(search);
        const urlApi = `https://api.pexels.com/v1/search?query=${word}&locale=pt-br&per_page=20&orientation=landscape`;
        const optionsApi = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "i4BXa69b1DXlvYGimv6a1NYDaHCkkfzyP3zcyY1UeYsJxhSWfQtvfMHb"
            }
        };
        const response = await fetch(urlApi, optionsApi);
        const dados = await response.json();
        console.log(dados);
        return dados;
    } else {
        return []; 
    }
}



const galeriaDiv = document.getElementById("galeria-imagens");
const galeriaBtn = document.getElementById("galeria-btn");
const campoBusca = document.getElementById("campo-busca");

async function find(searchQuery){
    const imageData = await loadImages(searchQuery);
    if(imageData && imageData.photos && imageData.photos.length >0){
        
        galeriaDiv.innerHTML = "";
        imageData.photos.forEach(photo =>{

            const linkElement = document.createElement("a");
            linkElement.setAttribute("href", "#");

            const img = document.createElement("img");
            img.src = photo.src.tiny;
            img.style.maxWidth= "150px";
            img.style.maxHeight="150px";
            img.setAttribute("class", "img-thumbnail img-fluid m-2");
            img.style.cursor = "pointer";
            linkElement.appendChild(img);
            
            galeriaDiv.appendChild(linkElement);
            
            linkElement.addEventListener("click", (event)=>{
                event.preventDefault();
                document.getElementById('imagem').value = photo.src.medium;
                document.getElementById('imagem').style.display = 'block';

                Array.from(galeriaDiv.children).forEach((child) => {
                    if (child !== linkElement) {
                        child.style.display = 'none';
                    }
                });

            })
        });
    }
    else{
        galeriaDiv.innerHTML = "<p>A busca não retornou nenhum resultado.</p>"
    }

}



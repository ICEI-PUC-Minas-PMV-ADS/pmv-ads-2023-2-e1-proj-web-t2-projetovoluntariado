const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});

document.getElementById('btnEscolherImagem').addEventListener('click', () => {
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
});


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
                    imgLink: imageLink,
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

async function loadImages(search) {
    if (search.length > 1 && search != "") {
        const word = encodeURI(search);
        const urlApi = `https://api.pexels.com/v1/search?query=${word}&locale=pt-br`;
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

document.getElementById("btnEscolherImagemApi").addEventListener("click", (event)=>{
    event.preventDefault();
    deleteAllNodesById("galeria-imagens");
    
    const nodeSearch = document.createElement("input");
    nodeSearch.setAttribute("class", "form-control mb-4");
    nodeSearch.setAttribute("type", "text");
    nodeSearch.setAttribute("placeholder","Insira seu texto de busca");
    nodeSearch.setAttribute("id", "searchInput")
    
    const searchButton = document.createElement("button");
    searchButton.setAttribute("class", "btn btn-secondary");
    searchButton.textContent = "Buscar na web"

    
    noRaiz.appendChild(nodeSearch);
    noRaiz.appendChild(searchButton);

    const imageButton = document.getElementById("btnEscolherImagem");
    const imageButtonApi = document.getElementById("btnEscolherImagemApi");
    imageButton.style.display = "none";
    imageButtonApi.style.display = "none";

  


    imageButton.addEventListener("click", ()=>{

    });

    imageButtonApi.addEventListener("click", (event)=>{
        event.preventDefault();
        imageButtonApi.style.display = "none";

    });

    searchButton.addEventListener("click", (event)=>{
        event.preventDefault();
        const query = document.getElementById("searchInput").value;
        find(query);
        imageButtonApi.style.display = "block";
    });
});

const noRaiz = document.getElementById("galeria-imagens");

async function find(searchQuery){
    const imageData = await loadImages(searchQuery);
    if(imageData && imageData.photos && imageData.photos.length >0){
        
       

        noRaiz.innerHTML = "";
        console.log(imageData);
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
            
            noRaiz.appendChild(linkElement);
            
            linkElement.addEventListener("click", (event)=>{
                event.preventDefault();
                document.getElementById('imagem').value = photo.src.tiny;
                document.getElementById('imagem').style.display = 'block';

                Array.from(noRaiz.children).forEach((child) => {
                    if (child !== linkElement) {
                        child.style.display = 'none';
                    }
                });
                const backButton = document.createElement("button");
                backButton.setAttribute("class", "btn btn-secondary");
                backButton.textContent = "Escolher imagem da galeria X";

                noRaiz.appendChild(backButton);
                backButton.addEventListener("click", (event)=>{
                    event.preventDefault();

                    deleteAllNodesById("galeria-imagens");
                    document.getElementById('imagem').value = "";
                    document.getElementById('imagem').style.display = "none";
                    document.getElementById('btnEscolherImagem').style.display = "block"
                    
                });

            })
        });
    }
    else{
        noRaiz.innerHTML = "<p>A busca não retornou nenhum resultado.</p>"
    }

}



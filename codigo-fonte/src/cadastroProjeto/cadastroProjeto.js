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
        "../projetos/images/imagem-voluntarios-01.jpg",
        "../projetos/images/imagem-voluntarios-02.jpg",
        "../projetos/images/imagem-voluntarios-03.jpg",
        "../projetos/images/imagem-voluntarios-04.jpg",
        "../projetos/images/imagem-voluntarios-05.jpg",
        "../projetos/images/imagem-voluntarios-06.jpg",
        "../projetos/images/imagem-voluntarios-07.jpg",
        "../projetos/images/imagem-voluntarios-08.jpg",
        "../projetos/images/imagem-voluntarios-09.jpg",
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
            console.log("arquivo imagem " + imagemURL);
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
    const availability = document.getElementById("horas").value;
    const categoryName = document.getElementById("categoria").value;
    const imageLink = document.getElementById("imagem").value;
    const description = document.getElementById("descricao").value;

    let userLogged = isLogged();
    let users = getUsers();
    let projects = JSON.parse(localStorage.getItem("projects"));
    if(userLogged){
        users.forEach((user)=>{
            if(user.email === userLogged.email && projects){
                tempProjects = user.projects;
                let project = {
                    id: projects.length-1,
                    projectName: projectName,
                    projectDescription: description,
                    instituitionName: institutionName,
                    availability: availability,
                    categoryName: categoryName,
                    imgLink: imageLink,
                    isActive: 1,
                    userCompleted: 0
                }
                if(tempProjects.length>=3)
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





// Tratar os campos antes de postar no localStorage




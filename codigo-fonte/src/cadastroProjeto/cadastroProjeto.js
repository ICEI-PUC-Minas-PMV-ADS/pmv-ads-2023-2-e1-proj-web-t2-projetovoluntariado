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
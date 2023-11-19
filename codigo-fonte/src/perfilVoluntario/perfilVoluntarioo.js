const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});


function finalizar() {
    const botoes = document.querySelectorAll(".botao");

    botoes.forEach(botao => {
        botao.addEventListener('click', function () {

            this.innerHTML = "Finaliza-do";
            this.style.backgroundColor = "gray";

            botao.removeEventListener('click', handleClick);

        });
    });
}


// imagem perfil botao next e back
const imageButton = document.querySelector('.btn-imagem-perfil');
const backButton = document.querySelector('.btn-back');
const nextButton = document.querySelector('.btn-next');
const perfilImagem = document.querySelector('.perfil');

const images = [
    '../homePage/images/perfil-1.jpeg',
    './perfilVoluntario/imagens/perfil/h1.jpg',
    './perfilVoluntario/imagens/perfil/j1.jpg',
    './perfilVoluntario/imagens/perfil/j2.jpg',
    './perfilVoluntario/imagens/perfil/j3.jpg',
    './perfilVoluntario/imagens/perfil/m1.jpg',
    './perfilVoluntario/imagens/perfil/m2.jpg',
    './perfilVoluntario/imagens/perfil/v1.jpg',
    './perfilVoluntario/imagens/perfil/v2.jpg',
];


let atualIndex = 0;

imageButton.addEventListener('click', () => {
    backButton.style.display = 'inline-block';
    nextButton.style.display = 'inline-block';
    perfilImagem.src = images[atualIndex];
});



backButton.addEventListener('click', () => {
    atualIndex = (atualIndex - 1 + images.length) % images.length;
    perfilImagem.src = images[atualIndex];
});

nextButton.addEventListener('click', () => {
    atualIndex = (atualIndex + 1) % images.length;
    perfilImagem.src = images[atualIndex];
});

// link certificado
document.getElementById("emitirCertificadoBtn").addEventListener('click', function () {
    window.open('../certificacao/certificacao.html', '_blank')
})


// local storage

const nomeUsuario = JSON.stringify(localStorage.getItem('loginUsers'));
if(nomeUsuario){
    document.getElementById('nomeUsuario').textContent = nomeUsuario.name;
} else {
    console.log('Nome de usuario não encontrado.');
}
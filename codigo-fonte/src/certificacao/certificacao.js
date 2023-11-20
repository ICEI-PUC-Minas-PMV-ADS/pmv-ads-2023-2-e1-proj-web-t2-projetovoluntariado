const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});



function modificarCertificado() {
    let usuarioLogado = isLogged();

    const cores = {
        'Safira': 'azul',
        'Ametista': 'roxo',
        'Esmeralda': 'verde',
        'Rubi': 'vermelho',
        'Vazio': 'cinza'
    };

    const imagens = {
        'Safira': '..perfilVoluntario/imagens/safira.png',
        'Ametista': '..perfilVoluntario/imagens/ametista.png',
        'Esmeralda': '..perfilVoluntario/imagens/esmeralda.png',
        'Rubi': '..perfilVoluntario/imagens/rubi.png',
        'Vazio': '..perfilVoluntario/imagens/vazio.png'
    };

    if (usuarioLogado) {
        let horas = getHours();
        let nivel = getNivel(horas);

        document.getElementById("mainContent").innerHTML = document.getElementById("mainContent").innerHTML.replace('<span>Jonas</span>', `<span>${usuarioLogado.name}</span>`);
        document.getElementById("mainContent").innerHTML = document.getElementById("mainContent").innerHTML.replace('<span>Rubi</span>', `<span style="color: ${cores[nivel]}">${nivel}</span>`);
        document.getElementById("mainContent").innerHTML = document.getElementById("mainContent").innerHTML.replace('./perfilVoluntario/imagens/rubi.png', imagens[nivel]);
        document.getElementById("mainContent").innerHTML = document.getElementById("mainContent").innerHTML.replace('<span class="cor-texto">46</span>', `<span class="cor-texto">${horas}</span>`);

        document.getElementById("imprimirButton").addEventListener('click', function () {
            window.print();
        });
    } else {
        console.log('Usuário não logado.');
    }

    function getNivel(horas) {
        if (horas > 2 && horas < 10) {
            return 'Safira';
        } else if (horas >= 10 && horas < 30) {
            return 'Ametista';
        } else if (horas >= 30 && horas < 60) {
            return 'Esmeralda';
        } else if (horas <= 60) {
            return 'Vazio';
        } else {
            return 'Rubi';
        }
    }
}

modificarCertificado();











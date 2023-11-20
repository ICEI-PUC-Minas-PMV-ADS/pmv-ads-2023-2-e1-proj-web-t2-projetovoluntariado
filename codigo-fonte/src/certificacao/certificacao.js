const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});



function getHours() {
    usuarioLogado = isLogged()
    let horas = 0
    if (usuarioLogado) {
        usuarios = getUsers()
        usuarios.forEach(usuario => {
            if (usuario.email == usuarioLogado.email) {
                usuario.projects.forEach(projeto => {
                    if (projeto.userCompleted == 1) {
                        horas = horas + projeto.availability
                    }

                })

            }
        })
        return horas
    }
} 



    let usernameCertificado = getUsers();
    let horasCertificado = getHours();
    



















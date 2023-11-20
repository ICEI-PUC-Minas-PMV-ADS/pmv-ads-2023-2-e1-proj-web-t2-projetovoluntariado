const menuButton = document.querySelector('.navbar-toggler');
const mainContent = document.getElementById('mainContent');

menuButton.addEventListener('click', () => {
    mainContent.classList.toggle('margin-adjust');

    if (!mainContent.classList.contains('margin-adjust')) {
        mainContent.style.transition = 'margin 0.5s ease-out';
    }
});




function certificadoVar() {
    let usernameCertificado = isLogged();
    let horasCertificado = getHours();

    console.log(usernameCertificado)
    console.log(horasCertificado)
    


    document.getElementById("username").textContent = usernameCertificado.name
    document.getElementById("horasCertificado").textContent = horasCertificado

}





















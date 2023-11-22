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
    document.getElementById("username2").textContent = usernameCertificado.name
    document.getElementById("horasCertificado").textContent = horasCertificado
    document.getElementById("nivelName").textContent = getNivel(horasCertificado)
    document.getElementById("nivelName2").textContent = getNivel(horasCertificado)

}


function getNivel(horas) {
    if (horas > 2 && horas < 10) {
        return "Safira";
    } else if (horas >= 10 && horas < 30) {
        return "Ametista";
    } else if (horas >= 30 && horas < 60) {
        return "Esmeralda";
    } else if (horas <= 60) {
        return "Vazio";
    } else {
        return "Rubi";
    }
}


function iconeCertificado() {

    let horas = getHours()
    
    if (horas > 2 && horas < 10) {
        document.getElementById("imagemNivel").src ="../perfilVoluntario/imagens/safira.png";
    } else if (horas >= 10 && horas < 30) {
        document.getElementById("imagemNivel").src ="../perfilVoluntario/imagens/ametista.png";
    } else if (horas >= 30 && horas < 60) {
        document.getElementById("imagemNivel").src ="../perfilVoluntario/imagens/esmeralda.png";
    } else if(horas <= 60){
        document.getElementById("imagemNivel").src ="../perfilVoluntario/imagens/vazio.png";
    } else {
        document.getElementById("imagemNivel").src ="../perfilVoluntario/imagens/rubi.png";

    }


}

document.getElementById("imprimirButton").addEventListener("click", ()=>{
    console.log("imprimir")
    window.print();
})

iconeCertificado()





















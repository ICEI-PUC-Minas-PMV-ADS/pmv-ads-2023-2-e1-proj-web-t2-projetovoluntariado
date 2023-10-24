function Modal(){
    console.log("entrou");
    let modal = document.getElementsByClassName("modal-container");
    if (modal[0].classList.contains("fechar-modal")){
        modal[0].classList.remove("fechar-modal");        
    }
    else{
        modal[0].classList.add("fechar-modal");
    }
}
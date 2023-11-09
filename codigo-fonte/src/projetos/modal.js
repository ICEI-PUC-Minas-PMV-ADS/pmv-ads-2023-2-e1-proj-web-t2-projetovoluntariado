function modal(indice){
    if(indice === -1)
    {
        let modal = document.getElementsByClassName("modal-container");
        if (modal[0].classList.contains("fechar-modal")){
            modal[0].classList.remove("fechar-modal");        
            }
        else{
            modal[0].classList.add("fechar-modal");
        }
    }
    else
    {
        let modal = document.getElementsByClassName("modal-container");
        if (modal[0].classList.contains("fechar-modal")){
            modal[0].classList.remove("fechar-modal");        
            }
        else{
            modal[0].classList.add("fechar-modal");
        }
        let modal_titulo = document.querySelector(".modal-titulo");
        let modal_descricao = document.querySelector(".modal-descricao");
        let modal_disponibilidade = document.querySelector(".disponibilidade");
        let modal_instituicao = document.querySelector(".nomeEmpresa");
        let modal_image_container = document.getElementById("modalImg");
        let modal_link = document.querySelector(".btn-participar");
        

        for(projeto in listaProjetos)
        {
            if(listaProjetos[projeto].id == indice)
            {   
                modal_titulo.innerText = listaProjetos[parseInt(projeto)].projectName;
                modal_descricao.innerText = listaProjetos[parseInt(projeto)].projectDescription;
                modal_disponibilidade.innerText = listaProjetos[parseInt(projeto)].availability + " horas";
                modal_instituicao.innerText = listaProjetos[parseInt(projeto)].instituitionName;
                let novaImagem = "url("+ listaProjetos[parseInt(projeto)].imgLink + ")";
                modal_image_container.style.backgroundImage =  novaImagem;
                modal_link.setAttribute("onclick", "subscribe(" + indice + ")");
            }
        }
        
       
    }
}
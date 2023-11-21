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
        
        let projects = getProjects();
        for(projeto in projects)
        {
            if(projects[projeto].id == indice)
            {   
                modal_titulo.innerText = projects[parseInt(projeto)].projectName;
                modal_descricao.innerText = projects[parseInt(projeto)].projectDescription;
                modal_disponibilidade.innerText = projects[parseInt(projeto)].availability + " horas";
                modal_instituicao.innerText = projects[parseInt(projeto)].instituitionName;
                let novaImagem = "url("+ projects[parseInt(projeto)].imgLink + ")";
                modal_image_container.style.backgroundImage =  novaImagem;
                modal_link.setAttribute("onclick", "subscribe(" + indice + ")");
            }
        }
        
       
    }
}


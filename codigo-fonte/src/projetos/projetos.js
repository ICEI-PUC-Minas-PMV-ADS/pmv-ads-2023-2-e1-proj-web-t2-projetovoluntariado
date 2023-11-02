 
 function expandNav(){
    element = document.getElementsByClassName('lista-categoria-1col');
    var iconeExpand = document.getElementById("icone-dropdown");
    if(element[0].classList.contains("expanded-menu-1col"))
    {
        element[0].classList.remove("expanded-menu-1col");
        iconeExpand.classList.remove("fa-caret-up");
        iconeExpand.classList.add("fa-caret-down");  
    }
    else
    {
        element[0].classList.add("expanded-menu-1col");
        iconeExpand.classList.add("fa-caret-up");
        iconeExpand.classList.remove("fa-caret-down");     
    }
}

 function expandMenu(){
    element = document.getElementsByClassName('flex-container-header');

    if(element[0].classList.contains("expanded-menu")){
        element[0].classList.remove("expanded-menu");
        element[0].classList.add("shrink-menu");
    }
    else
    {
        element[0].classList.add("expanded-menu");
        element[0].classList.remove("shrink-menu");
        
    }
}

function createCards(querySelector, projeto, indice)
{
    let containerCard = document.createElement("div");
    containerCard.setAttribute("class", "container-card");
    
    let imageCards = document.createElement("img");
    imageCards.setAttribute("class", "image-cards");
    imageCards.setAttribute("src", projeto.imgLink);
    
    let article = document.createElement("article");
    
    let h2 = document.createElement("h2");
    h2.innerText = projeto.projectName;
    
    let p = document.createElement("p");
    p.setAttribute("class", "botao-vermais");
    p.innerText = "ver detalhes";
    p.addEventListener("click",function(){
        modal(indice);
    });

    containerCard.appendChild(imageCards);
    article.appendChild(h2);
    article.appendChild(p);
    containerCard.appendChild(article);


    var nodeLocal = document.querySelector(querySelector);
    nodeLocal.appendChild(containerCard);

}

function createMenuLateral(categorias, classNode){
    let node = document.querySelector(classNode);
    for(var categoria in categorias){
        let li = document.createElement("li");
        li.setAttribute("class", "item-categoria");
        let a = document.createElement("a");
        a.setAttribute("class", "link-categoria");
        a.innerText = categorias[categoria];
        a.setAttribute("href", "projetos.html?categoryName=" + encodeURI(categorias[categoria]));
        li.appendChild(a);
        node.appendChild(li);
    }    
}




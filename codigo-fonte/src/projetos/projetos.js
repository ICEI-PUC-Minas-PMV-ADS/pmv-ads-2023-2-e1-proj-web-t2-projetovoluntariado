function expandNav(){
    element = document.getElementsByClassName('lista-categoria-1col');
    var iconeExpand = document.getElementById("icone-dropdown");
    console.log(iconeExpand);
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
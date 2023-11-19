function isLogged() //Retorna o objeto LoginUser caso esteja logado do contrário null
{
    user = JSON.parse(localStorage.getItem("loginUser"));
    if(user == null || user == undefined)
        return null;
    else
        return user;
}
function checkisLoggedInMenu(){
    let loggedNodeText = document.querySelector(".entrar-sair");
    if(isLogged() != null)
    {
        loggedNodeText.innerText = "Sair";
        loggedNodeText.setAttribute("href","#");
        loggedNodeText.addEventListener("click", ()=>{
            localStorage.setItem("loginUser", null);
            Swal.fire({
                position: "center",
                title: `Logout... `,
                text: "Logout feito com sucesso, você será redirecionado para a página principal",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
              });
              setInterval(()=>{
                location.replace("../index.html");
           },2800);
            
        });
    }
}
checkisLoggedInMenu();
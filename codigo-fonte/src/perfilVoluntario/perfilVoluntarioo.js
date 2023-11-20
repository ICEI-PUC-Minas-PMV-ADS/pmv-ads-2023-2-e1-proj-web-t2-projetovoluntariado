const menuButton = document.querySelector(".navbar-toggler");
const mainContent = document.getElementById("mainContent");

menuButton.addEventListener("click", () => {
  mainContent.classList.toggle("margin-adjust");

  if (!mainContent.classList.contains("margin-adjust")) {
    mainContent.style.transition = "margin 0.5s ease-out";
  }
});

function finalizar() {
  const botoes = document.querySelectorAll(".botao");

  botoes.forEach((botao) => {
    botao.addEventListener("click", function () {
      this.innerHTML = "Finalizado";
      this.style.backgroundColor = "gray";

      botao.removeEventListener("click", handleClick);
    });
  });
}

function listarProjetos() {
  let usuarios = getUsers();
  let usuarioLogado = isLogged();
  let projectNumber = 0;

  usuarios.forEach((usuario) => {
    if (usuario.email == usuarioLogado.email) {
      usuario.projects.forEach((projeto) => {
        if (projeto.userCompleted === 0) {
          document.getElementById("containerCards").innerHTML =
            document.getElementById("containerCards").innerHTML +
            `
                <div class="col-lg-4 col-md-4 col-sm-12 mt-3">
                    <div class="card rounded-5 card-projetos">
                  <img src="${
                    "../projetos/" + projeto.imgLink
                  }" class="rounded-5 pb-2" alt="...">
                  <h5 class="tittle">${projeto.projectName}</h5>
                  <h3>${projeto.availability}</h3>
                  <div class="col text-center">
                      <button class="btn btn-secondary my-2 botao" id="botao" 
                      onclick="finalizarProjeto(${projectNumber++})">Finalizar</button>
                  </div>
                </div>
              </div>`;
        } else {
          projectNumber++;
        }
      });
    }
  });
}

function finalizarProjeto(projectNumber) {
  usuarioLogado = isLogged();
  let contador = 0;

  if (usuarioLogado) {
    usuarios = getUsers();
    usuarios.forEach((usuario) => {
      if (usuario.email == usuarioLogado.email) {
        usuario.projects.forEach((projeto) => {
          if (contador === projectNumber) {
            projeto.userCompleted = 1;
            contador++;
            Swal.fire({
              position: "center",
              title: `Pronto!`,
              text: "Projeto finalizado com sucesso!!",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            contador++;
          }
        });
      }
    });
    localStorage.setItem("users", JSON.stringify(usuarios));
    setInterval(() => {
      window.location.reload();
    }, 3000);
  }
}

// imagem perfil botao next e back
const imageButton = document.querySelector(".btn-imagem-perfil");
const backButton = document.querySelector(".btn-back");
const nextButton = document.querySelector(".btn-next");
const perfilImagem = document.querySelector(".perfil");

const images = [
  "../homePage/images/perfil-1.jpeg",
  "./perfilVoluntario/imagens/perfil/h1.jpg",
  "./perfilVoluntario/imagens/perfil/j1.jpg",
  "./perfilVoluntario/imagens/perfil/j2.jpg",
  "./perfilVoluntario/imagens/perfil/j3.jpg",
  "./perfilVoluntario/imagens/perfil/m1.jpg",
  "./perfilVoluntario/imagens/perfil/m2.jpg",
  "./perfilVoluntario/imagens/perfil/v1.jpg",
  "./perfilVoluntario/imagens/perfil/v2.jpg",
];

let atualIndex = 0;

imageButton.addEventListener("click", () => {
  backButton.style.display = "inline-block";
  nextButton.style.display = "inline-block";
  perfilImagem.src = images[atualIndex];
});

backButton.addEventListener("click", () => {
  atualIndex = (atualIndex - 1 + images.length) % images.length;
  perfilImagem.src = images[atualIndex];
});

nextButton.addEventListener("click", () => {
  atualIndex = (atualIndex + 1) % images.length;
  perfilImagem.src = images[atualIndex];
});

// link certificado
document
  .getElementById("emitirCertificadoBtn")
  .addEventListener("click", function () {
    window.open("../certificacao/certificacao.html", "_blank");
  });

// local storage

const nomeUsuario = JSON.parse(localStorage.getItem("loginUser"));
if (nomeUsuario) {
  console.log(nomeUsuario);
  document.getElementById("nomeUsuario").textContent = nomeUsuario.name;
} else {
  console.log("Nome de usuario não encontrado.");
}

function getHours() {
  usuarioLogado = isLogged();
  let horas = 0;
  if (usuarioLogado) {
    usuarios = getUsers();
    usuarios.forEach((usuario) => {
      if (usuario.email == usuarioLogado.email) {
        usuario.projects.forEach((projeto) => {
          if (projeto.userCompleted == 1) {
            horas = horas + projeto.availability;
          }
        });
      }
    });
    return horas;
  }
}

document.getElementById("hours").textContent = getHours() + " horas";

listarProjetos();

function icone() {
  let horas = getHours();
  iconePerfil = document.getElementById("icone");

  if (horas > 2 && horas < 10) {
    console.log(horas);
    iconePerfil.src = "./imagens/safira.png";
  } else if (horas >= 10 && horas < 30) {
    console.log(horas);
    iconePerfil.src = "./imagens/ametista.png";
  } else if (horas >= 30 && horas < 60) {
    console.log(horas);
    iconePerfil.src = "./imagens/esmeralda.png";
  } else if (horas <= 60) {
    console.log(horas);
    iconePerfil.src = "./imagens/vazio.png";
  } else {
    console.log(horas);
    iconePerfil.src = "./imagens/rubi.png";
  }
}
icone();

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

// ---- Seção de código global ----

const errorMessage = document.getElementsByClassName("error-message");

function checkEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// ---- Seção de código do switch ----

const switchCheckbox = document.querySelector(".switch-checkbox");
const switchTextLogin = document.querySelector(".switch-text-login");
const switchTextRegister = document.querySelector(".switch-text-register");

const flipCard = document.querySelector(".flip-card-inner");

function toggleCard() {
  if (flipCard.style.transform === "rotateY(180deg)") {
    switchTextLogin.style.opacity = "1";
    switchTextRegister.style.opacity = "0.5";
    flipCard.style.transform = "rotateY(0deg)";
    switchCheckbox.checked = false;
    switchCheckbox.focus = false;
    return;
  }
  switchTextLogin.style.opacity = "0.5";
  switchTextRegister.style.opacity = "1";
  flipCard.style.transform = "rotateY(180deg)";
  switchCheckbox.checked = true;
  switchCheckbox.focus = true;
}

switchTextRegister.addEventListener("click", toggleCard);
switchTextLogin.addEventListener("click", toggleCard);
switchCheckbox.addEventListener("click", toggleCard);

// ---- Seção de código do login ----

const labelLogins = document.querySelectorAll(".label-login");
const inputPassword = document.getElementById("password");
const buttonLogin = document.getElementById("btn-login");
const inputEmail = document.getElementById("email");

function login() {
  if (!checkEmail(inputEmail.value)) {
    errorMessage[0].textContent = "Digite um e-mail válido!";
    labelLogins[0].style.color = "red";
    inputEmail.style.borderBottom = "0.15rem solid red";
    setTimeout(() => {
      errorMessage[0].textContent = "";
      labelLogins[0].style.color = "#3c615c";
      inputEmail.style.borderBottom = "0.15rem solid #3c615c";
    }, 3000);
    return;
  }
  if (inputPassword.value === "") {
    errorMessage[0].textContent = "Digite sua senha!";
    labelLogins[1].style.color = "red";
    inputPassword.style.borderBottom = "0.15rem solid red";
    setTimeout(() => {
      errorMessage[0].textContent = "";
      labelLogins[1].style.color = "#3c615c";
      inputPassword.style.borderBottom = "0.15rem solid #3c615c";
    }, 3000);
    return;
  }

  alert(`Email: ${inputEmail.value}, Senha: ${inputPassword.value}`);
}

buttonLogin.addEventListener("click", login);

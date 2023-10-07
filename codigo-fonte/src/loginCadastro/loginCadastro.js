// ---- Seção de código global ----

const errorMessage = document.getElementsByClassName("error-message");

const colorLogin = "#3c615c";
const colorRegister = "#4eaaff";

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
const passwordLogin = document.getElementById("password");
const buttonLogin = document.getElementById("btn-login");
const emailLogin = document.getElementById("email");

function login() {
  if (!checkEmail(emailLogin.value)) {
    errorMessage[0].textContent = "Digite um e-mail válido!";
    labelLogins[0].style.color = "red";
    emailLogin.style.borderBottom = "0.15rem solid red";
    setTimeout(() => {
      errorMessage[0].textContent = "";
      labelLogins[0].style.color = colorLogin;
      emailLogin.style.borderBottom = `0.15rem solid ${colorLogin}`;
    }, 3000);
    return;
  }
  if (passwordLogin.value === "") {
    errorMessage[0].textContent = "Digite sua senha!";
    labelLogins[1].style.color = "red";
    passwordLogin.style.borderBottom = "0.15rem solid red";
    setTimeout(() => {
      errorMessage[0].textContent = "";
      labelLogins[1].style.color = colorLogin;
      passwordLogin.style.borderBottom = `0.15rem solid ${colorLogin}`;
    }, 3000);
    return;
  }

  alert(`Email: ${emailLogin.value}, Senha: ${passwordLogin.value}`);
}

buttonLogin.addEventListener("click", login);

// --- Seção de código de registro ---

const passwordRegister = document.getElementById("passwordRegister");
const labelregisters = document.querySelectorAll(".label-register");
const emailRegister = document.getElementById("emailRegister");
const nameRegister = document.getElementById("nameRegister");
const btnRegister = document.getElementById("btn-register");
const checkbox1 = document.getElementById("voluntario");
const checkbox2 = document.getElementById("empresa");

function toggleCheckboxes(clickedCheckbox) {
  if (clickedCheckbox === checkbox1) {
    checkbox2.checked = false;
  } else {
    checkbox1.checked = false;
  }
}

function clearInputsList() {
  nameRegister.value = "";
  emailRegister.value = "";
  passwordRegister.value = "";
  checkbox1.checked = false;
  checkbox2.checked = false;
}

function register() {
  if (nameRegister.value === "") {
    errorMessage[1].textContent = "Digite seu nome!";
    labelregisters[0].style.color = "red";
    nameRegister.style.borderBottom = "0.15rem solid red";
    setTimeout(() => {
      errorMessage[1].textContent = "";
      labelregisters[0].style.color = colorRegister;
      nameRegister.style.borderBottom = `0.15rem solid ${colorRegister}`;
    }, 3000);
    return;
  }
  if (!checkEmail(emailRegister.value)) {
    errorMessage[1].textContent = "Digite um e-mail válido!";
    labelregisters[1].style.color = "red";
    emailRegister.style.borderBottom = "0.15rem solid red";
    setTimeout(() => {
      errorMessage[1].textContent = "";
      labelregisters[1].style.color = colorRegister;
      emailRegister.style.borderBottom = `0.15rem solid ${colorRegister}`;
    }, 3000);
    return;
  }
  if (passwordRegister.value === "") {
    errorMessage[1].textContent = "Digite sua senha!";
    labelregisters[2].style.color = "red";
    passwordRegister.style.borderBottom = "0.15rem solid red";
    setTimeout(() => {
      errorMessage[1].textContent = "";
      labelregisters[2].style.color = colorRegister;
      passwordRegister.style.borderBottom = `0.15rem solid ${colorRegister}`;
    }, 3000);
    return;
  }

  if (!checkbox1.checked && !checkbox2.checked) {
    errorMessage[1].textContent = "Selecione o tipo de usuário!";
    labelregisters[3].style.color = "red";
    labelregisters[4].style.color = "red";
    setTimeout(() => {
      errorMessage[1].textContent = "";
      labelregisters[3].style.color = colorRegister;
      labelregisters[4].style.color = colorRegister;
    }, 3000);
    return;
  }

  Swal.fire({
    position: "center",
    title: `Bem-vindo, ${nameRegister.value}`,
    text: "Faça login para continuar",
    icon: "success",
    showConfirmButton: false,
    timer: 2000,
  });

  clearInputsList();
  toggleCard();
  switchCheckbox.checked = false;
  switchCheckbox.focus = false;
}

btnRegister.addEventListener("click", register);

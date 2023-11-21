// ---- Seção de código global ----

const errorMessage = document.getElementsByClassName("error-message");

const colorLogin = "#7f66a7";
const colorRegister = "#d83f87";

function checkEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Código menu mobile //

const menuButton = document.querySelector(".navbar-toggler");
const mainContent = document.querySelector(".section-switch-card");

menuButton.addEventListener("click", () => {
  console.log("alou");
  console.log(mainContent);
  mainContent.classList.toggle("margin-adjust");

  if (!mainContent.classList.contains("margin-adjust")) {
    mainContent.style.transition = "margin 0.5s ease-out";
  }
});

// ---- Seção de código do switch ----

const switchTextRegister = document.querySelector(".switch-text-register");
const switchTextLogin = document.querySelector(".switch-text-login");
const switchCheckbox = document.querySelector(".switch-checkbox");
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

const slashEyeLoginIcon = document.getElementById("slash-eye-login");
const labelLogins = document.querySelectorAll(".label-login");
const eyeLoginIcon = document.getElementById("eye-login");
const passwordLogin = document.getElementById("password");
const buttonLogin = document.getElementById("btn-login");
const emailLogin = document.getElementById("email");

function showLoginPassword() {
  if (passwordLogin.type === "password") {
    passwordLogin.type = "text";
    slashEyeLoginIcon.style.visibility = "hidden";
    eyeLoginIcon.style.visibility = "visible";
  } else {
    passwordLogin.type = "password";
    slashEyeLoginIcon.style.visibility = "visible";
    eyeLoginIcon.style.visibility = "hidden";
  }
}

eyeLoginIcon.addEventListener("click", showLoginPassword);
slashEyeLoginIcon.addEventListener("click", showLoginPassword);

function authLogin(users, email, password) {
  const findUser = users.find((user) => user.email === email);

  if (findUser && findUser.password === password) {
    localStorage.setItem(
      "loginUser",
      JSON.stringify({
        email,
        name: findUser.name,
        typeUser: findUser.typeUser,
        perfilImage: findUser.perfilImage,
      })
    );
    if (findUser.typeUser === "Voluntário") {
      console.log("alou");
      window.location.href = "../perfilVoluntario/perfilVoluntarioo.html";
      return;
    } else {
      window.location.href = "../perfilEmpresa/perfilEmpresa.html";
      return;
    }
  }

  errorMessage[0].textContent = "E-mail ou senha incorretos";
  setTimeout(() => {
    errorMessage[0].textContent = "";
  }, 3000);
}

function login() {
  const email = emailLogin.value;
  const password = passwordLogin.value;

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

  const getUsers = JSON.parse(localStorage.getItem("users"));

  if (!getUsers) {
    errorMessage[0].textContent = "E-mail ou senha incorretos";
    setTimeout(() => {
      errorMessage[0].textContent = "";
    }, 3000);
    return;
  }

  authLogin(getUsers, email, password);
}

buttonLogin.addEventListener("click", login);

// --- Seção de código de registro ---

const slashEyeRegisterIcon = document.getElementById("slash-eye-register");
const passwordRegister = document.getElementById("passwordRegister");
const labelregisters = document.querySelectorAll(".label-register");
const eyeRegisterIcon = document.getElementById("eye-register");
const emailRegister = document.getElementById("emailRegister");
const nameRegister = document.getElementById("nameRegister");
const btnRegister = document.getElementById("btn-register");
const checkbox1 = document.getElementById("voluntario");
const checkbox2 = document.getElementById("empresa");

function showRegisterPassword() {
  if (passwordRegister.type === "password") {
    passwordRegister.type = "text";
    slashEyeRegisterIcon.style.visibility = "hidden";
    eyeRegisterIcon.style.visibility = "visible";
  } else {
    passwordRegister.type = "password";
    slashEyeRegisterIcon.style.visibility = "visible";
    eyeRegisterIcon.style.visibility = "hidden";
  }
}

eyeRegisterIcon.addEventListener("click", showRegisterPassword);
slashEyeRegisterIcon.addEventListener("click", showRegisterPassword);

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

function checkAccountExists(email) {
  const users = JSON.parse(localStorage.getItem("users"));

  console.log("users", users, email);

  if (users) {
    const accountExist = users.some(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    return accountExist;
  }
  return false;
}

function register() {
  const name = nameRegister.value;
  const email = emailRegister.value;
  const password = passwordRegister.value;
  const typeUser = checkbox1.checked ? "Voluntário" : "Empresa";

  if (name === "") {
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
  if (!checkEmail(email)) {
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
  if (password === "") {
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

  const registerObject = {
    name,
    email,
    password,
    typeUser,
    projects: [],
    perfilImage: "../perfilVoluntario/imagens/perfil/golden-dog.webp",
  };

  let registers = [registerObject];

  const getUsers = JSON.parse(localStorage.getItem("users"));

  if (checkAccountExists(email)) {
    errorMessage[1].textContent = "Conta já existe, faça login!";
    setTimeout(() => {
      errorMessage[1].textContent = "";
    }, 3000);
    return;
  }

  if (getUsers) {
    registers = [...getUsers, registerObject];
  }

  localStorage.setItem("users", JSON.stringify(registers));

  Swal.fire({
    position: "center",
    title: `Bem-vindo, ${name}`,
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

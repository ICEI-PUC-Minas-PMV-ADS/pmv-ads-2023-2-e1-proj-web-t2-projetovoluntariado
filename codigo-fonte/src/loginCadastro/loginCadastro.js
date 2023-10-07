// ---- Switch code section ----

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

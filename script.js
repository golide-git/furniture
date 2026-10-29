const navMenu = document.querySelector(".nabar-menu");
const menuToggle = document.getElementById("menuToggle");
const menuPages = document.getElementById("pages");
const menuIcon = menuToggle.querySelector("i");

function setMenuOpen(isOpen) {
  navMenu.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
  menuIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

menuPages.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

const login = document.getElementById("loginform");
const Nav = document.getElementById("nav-log");
Nav.addEventListener("click", () => {
  login.classList.toggle("show");
});

const signUp = document.getElementById("SignUp");
const New = document.getElementById("create-account");
signUp.addEventListener("click", () => {
  New.classList.toggle("show");
  login.classList.remove("show");
});

const NewAcc = document.getElementById("create-account");
const LOGIN = document.getElementById("loginform");
const Already = document.getElementById("ready");
Already.addEventListener("click", function () {
  LOGIN.classList.toggle("show");
  NewAcc.classList.remove("show");
});

const Iforgot = document.getElementById("u");
const FogortPassword = document.getElementById("forgotPassword");
const LoginForm = document.getElementById("loginform");
Iforgot.addEventListener("click", function () {
  FogortPassword.classList.toggle("show");
  LoginForm.classList.remove("show");
});

const LoginFORM = document.getElementById("loginform");
const FORGOT = document.getElementById("forgotPassword");
const Logback = document.getElementById("Logback");
Logback.addEventListener("click", () => {
  LoginFORM.classList.toggle("show");
  FORGOT.classList.remove("show");
});

const exploreCollection = document.getElementById("exploreCollection");

exploreCollection.addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".details-button").forEach((button) => {
  button.addEventListener("click", () => {
    const description = button
      .closest(".product-card")
      .querySelector(".product-description");
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    button.textContent = isOpen ? "View Details" : "Hide Details";
    description.hidden = isOpen;
  });
});

const Form1 = document.getElementById("create-account");
const FirstInpunt = document.getElementById("NameInput");
const Input2 = document.getElementById("email");
const Input3 = document.getElementById("number");
const FirstButton = document.getElementById("createBtn");
const firstPassword = Form1.querySelector('input[type="password"]');

FirstButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    FirstInpunt.value.trim() === "" &&
    Input2.value.trim() === "" &&
    Input3.value.trim() === "" &&
    firstPassword.value === ""
  ) {
    alert("Please fill in all fields");
  } else if (FirstInpunt.value.trim() === "") {
    alert("Please enter your name");
  } else if (Input2.value.trim() === "") {
    alert("Please enter your email");
  } else if (Input3.value.trim() === "") {
    alert("Please enter your number");
  } else if (firstPassword.value === "") {
    alert("Please enter your password");
  } else {
    alert("Account created successfully! Enjoy our daily special.");
    document.getElementById("create-account").reset();
  }
});

const loginform = document.getElementById("post");
const loginInput1 = document.getElementById("emailLogin");
const loginInput2 = document.getElementById("PasswordLogin");
const LoginBtn1 = document.getElementById("LoginBtn1");
LoginBtn1.addEventListener("click", (event)=>{
  event.preventDefault();

  if(loginInput1.value.trim() === "" && 
  loginInput2.value.trim() === ""){
    alert("Please fill both shield");

  }else if(loginInput1.value === ""){
    alert("Please Enter Your Email")

  }else if(loginInput2.value === ""){
    alert("Please Enter Your Password")

  }else{
    alert("Your login attempt was successfuly")
    loginform.reset();
  }
})

const forgotform = document.querySelector("#go");
const form = document.querySelector(".forgotPassword");
const forgotInput1 = document.querySelector("#emaila");
const forgotbtn1 = document.querySelector("#form-verify");
const forgotlabel = document.querySelector(".otp");
const OTP = document.querySelectorAll('.opt input[maxlength="1"]');
const forgotLabel2 = document.querySelector(".confirm");
const forgotInput2 = document.querySelector(
  '.forgotPassword input#Create-password'
);
const forgotLabel3 = document.querySelector("#IsTrue");
const forgotbtn2 = document.querySelector("#Otp-confirm");
const forgetInput3 = document.querySelector("#forgotCreate-password");
const atagBtn = document.querySelector("#Logback");
const resetButton = document.querySelector("#psd-submit");

let generatedOTP = null;
let verifiedOTP = false;

forgotbtn1.addEventListener("click", function (event) {
  event.preventDefault();

  const email = forgotInput1.value.trim();

  if (email === "") {
    alert("Please enter your email.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email address.");
  } else {
    generatedOTP = String(
      Math.floor(1000 + Math.random() * 9000)
    );

    verifiedOTP = false;

    alert("Your OTP is: " + generatedOTP);
  }
});

OTP.forEach(function (input, index) {
  input.addEventListener("input", function () {
    input.value = input.value.replace(/\D/g, "").slice(0, 1);

    if (input.value !== "" && OTP[index + 1]) {
      OTP[index + 1].focus();
    }
  });

  input.addEventListener("keydown", function (event) {
    if (
      event.key === "Backspace" &&
      input.value === "" &&
      OTP[index - 1]
    ) {
      OTP[index - 1].focus();
    }
  });
});

forgotbtn2.addEventListener("click", function (event) {
  event.preventDefault();

  let enteredOTP = "";

  OTP.forEach(function (input) {
    enteredOTP += input.value.trim();
  });

  if (generatedOTP === null) {
    alert("Please request an OTP first.");
  } else if (enteredOTP.length !== 4) {
    alert("Please enter all four OTP digits.");
  } else if (enteredOTP !== generatedOTP) {
    alert("Incorrect OTP.");
  } else {
    verifiedOTP = true;
    alert("OTP verified successfully.");
    forgotInput2.focus();
  }
});

resetButton.addEventListener("click", function (event) {
  event.preventDefault();

  const newPassword = forgotInput2.value;
  const confirmPassword = forgetInput3.value;

  if (verifiedOTP !== true) {
    alert("Please verify your OTP first.");
  } else if (newPassword === "" || confirmPassword === "") {
    alert("Please fill in both password fields.");
  } else if (newPassword.length < 6) {
    alert("Password must contain at least six characters.");
  } else if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
  } else {
    alert("Password was completely created next time do not forget your password i wont be here to your login back again");

    forgotform.reset();

    generatedOTP = null;
    verifiedOTP = false;
  }
});

atagBtn.addEventListener("click", function () {
  window.location.hash = "loginform";
});

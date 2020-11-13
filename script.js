const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Functions
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  formControl.querySelector("small").innerText = message;
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Eventlisteners
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (username.value === "") {
    showError(username, "Please enter a username");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Please enter an E-mail");
  } else if (!validateEmail(email.value)) {
    showError(email, "Please enter a valid E-mail");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Please enter a password");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Please reenter the password");
  } else if (password.value !== password2.value) {
    showError(password2, "The passwords do not match");
  } else {
    showSuccess(password2);
  }
});

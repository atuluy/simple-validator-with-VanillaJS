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

function checkEmailValidation(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email.value.trim()).toLowerCase())) {
    showSuccess(email);
  } else {
    showError(email, "Please enter a valid E-mail");
    return;
  }
}

function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getInputFieldName(input)} is required`);
      return;
    } else {
      showSuccess(input);
    }
  });
}

function checkInputLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getInputFieldName(input)} must be at least ${min} characters.`
    );
    return;
  } else if (input.value.length > max) {
    showError(
      input,
      `${getInputFieldName(input)} can be maximum ${max} characters`
    );
    return;
  } else {
    showSuccess(input);
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(password2, "The passwords do not match");
  }
}

function getInputFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Eventlisteners
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  checkRequired([username, email, password, password2]);
  checkInputLength(username, 3, 15);
  checkInputLength(password, 6, 20);
  checkInputLength(password2, 6, 20);
  checkEmailValidation(email);
  checkPasswordsMatch(password, password2);
});

const formEl = document.getElementById("register-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  let formData = event.target.elements;

  validate(formData);
});

function validate(formData) {
  let username = formData["username"];
  let email = formData["email"];
  let password = formData["password"];
  let confirm_p = formData["confirm_p"];

  // validate username
  is_blank(username);

  // validate email
  VEmail(email);

  // validate password
  is_blank(password);

  // validate confirm_p
  is_blank(confirm_p);
}

//
//
//
//
//
function VEmail(email) {
  is_blank(email);
  validateEmail(email);
}

//
//
//
//
//

// validate functions

function validateEmail(el) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = re.test(String(el.value).toLowerCase());

  if (!valid) {
    showError(el, `${el.id} is Not Valid`);
  } else {
    showSuccess(el);
  }
}

function is_blank(el) {
  if (el.value === "") {
    showError(el, `${el.id} is required`);
  } else {
    showSuccess(el);
  }
}

//
//
//
//
//

// css functions
function showError(el, message) {
  // reset success
  resetSuccessEl(el);

  // show error
  let errorEl = getErrorEl(el);

  errorEl.innerText = message;
  errorEl.classList.add("d-block");
}

function showSuccess(el) {
  // reset input error
  let errorEl = getErrorEl(el);
  resetErrorEl(errorEl);

  // show success
  // let parentEl = el.parentElement;
  el.classList.add("border-success");
}

function getErrorEl(el) {
  let parentEl = el.parentElement;
  return parentEl.querySelector(".invalid-feedback");
}

function resetErrorEl(el) {
  el.innerText = "";
  el.classList.remove("d-block");
}

function resetSuccessEl(el) {
  el.classList.remove("border-success");
}

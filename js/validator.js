// validate functions

function matchString(p1, p2) {
  if (p1.value !== p2.value) {
    showError(
      p2,
      `${p2.id.toUpperCase()} does not match with ${p1.id.toUpperCase()}`
    );
  }
}

function checkLength(el, min, max = 0) {
  if (el.value.length < min) {
    showError(
      el,
      `${el.id.toUpperCase()} cannot be less than ${min} characters`
    );
  } else if (el.value.length > max) {
    showError(
      el,
      `${el.id.toUpperCase()} cannot be more than ${max} characters`
    );
  } else {
    showSuccess(el);
  }
}

function validateEmail(el) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = re.test(String(el.value).toLowerCase());

  if (!valid) {
    showError(el, `${el.id.toUpperCase()} is Not Valid`);
  } else {
    showSuccess(el);
  }
}

function isBlankAll(elArr) {
  elArr.forEach(function (el) {
    isBlank(el);
  });
}

function isBlank(el) {
  if (el.value === "") {
    showError(el, `${el.id.toUpperCase()} is required`);
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

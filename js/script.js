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

  // validate empty all
  isBlankAll([username, email, password, confirm_p]);

  // validate username
  checkLength(username, 3, 12);

  // validate email
  validateEmail(email);

  // validate password
  checkLength(password, 3, 25);

  // validate confirm_p
  checkLength(confirm_p, 3, 25);
  matchString(password, confirm_p);
}

export function finishForm() {
  const logForm = document.querySelector(".login-form");

  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("name", "login");
  logForm.prepend(inputName);

  document.querySelector("[name=password]").setAttribute("type", "password");
}
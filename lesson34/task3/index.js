const baseUrl= 'https://6145d36c38339400175fc71d.mockapi.io/api/v1/formUsers';
// DOM elements
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector(".submit-button");
const formElement = document.querySelector(".login-form");
const errorElement = document.querySelector(".error-text");

// input: object
// output: promise
const sendData = (formData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(formData),
  });

const isValidForm = () => {
  // eslint-disable-next-line no-unused-expressions
  if (
    emailInput.reportValidity() &&
    nameInput.reportValidity()&&
    passwordInput.reportValidity() 
    )
    {
    submitBtn.disabled = false;
  }
  errorElement.textContent = ""
};

const submitData = (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formElement));
  console.log(formData);
  sendData(formData)
    .then((response) => response.json())
    .then((userData) => {
      alert(JSON.stringify(userData));
      formElement.reset();
      submitBtn.disabled = true;
    })
    .catch(() => {
      errorElement.textContent = "Failed to create user";
    });
};

formElement.addEventListener("submit", submitData);
formElement.addEventListener("input", isValidForm);
export const finishForm = ()=>{
    const form = document.querySelector(".login-form");
    document.querySelector("input").setAttribute('type',"password");
    const login = document.createElement("input");
    login.setAttribute('name',"login");
    login.setAttribute('type',"text");
    form.prepend(login)
}
finishForm();
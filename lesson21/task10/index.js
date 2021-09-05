export const finishForm = ()=>{
    const form = document.querySelector('.login-form');
    const password = document.querySelector('input');
    password.setAttribute('type',"password")
    const login = document.createElement('input');
    login.setAttribute('name',"login");
    login.setAttribute('type',"text");
    form.prepend(login)
}
finishForm()
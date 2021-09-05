export const createButton = (buttonText)=>{
const body = document.querySelector('body');
const button = document.createElement('button');
body.append(button);
button.textContent=buttonText;
}
createButton('test');
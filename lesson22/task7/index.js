const buttons = document.querySelectorAll('.btn');
function handleClick(event){
    console.log(event.target.textContent)
}
buttons.forEach(button=>{button.addEventListener('click',handleClick)})
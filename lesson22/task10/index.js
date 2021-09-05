const buttons = document.querySelectorAll('.pagination__page');
function handleClick(event){
console.log(event.target.getAttribute('data-page-number'))
}
buttons.forEach(button=>{
    button.addEventListener('click',handleClick)
})
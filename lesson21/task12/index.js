const squaredNumbers=()=>{
  const numbers = document.querySelectorAll('.number');
  numbers.forEach(number=>{
    const dataNumber=number.getAttribute('data-number')
    return number.setAttribute('data-squared-number',`${dataNumber*dataNumber}`);
})
  
}

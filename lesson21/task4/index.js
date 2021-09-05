export const getTitle = ()=>{
const title = document.querySelector('.title');
console.log(title.textContent)
return title.textContent;
}
export const getDescription = ()=>{
   const about = document.querySelector('.about');
   return about.innerText
}
export const getPlans= ()=>{
   const about = document.querySelector('.plans');
   return about.innerHTML
}
export const getGoals= ()=>{
   const about = document.querySelector('.goal');
   return about.outerHTML
}
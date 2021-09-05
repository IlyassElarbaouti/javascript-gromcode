export const getItemsList = ()=>{
   const technoItem= document.querySelectorAll('.technology');
   console.dir(technoItem);
   return technoItem
}
export const getItemsArray = ()=>{
   const technoItem= document.querySelectorAll('.tool');
   const elementsArray = [...technoItem]
   console.dir(elementsArray);
   console.log(elementsArray);
   return elementsArray;
}

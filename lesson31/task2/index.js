export const asyncCalculator =(number)=> new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(number)
  },500)
})
.then(value=>{
  console.log(`Initial value: ${value}`)
  return value
})
.then(value=>{
  const result = value**2;
  console.log(`Squared value: ${result}`);
  return result;
})
.then(value=>{
  const result = value*2;
  console.log(`Doubled value: ${result}`);
  return result;
})
asyncCalculator(5);


 const getValueWithDelay = (value,delay)=>
    new Promise((resolve)=>{
    setTimeout(()=>{
        console.log(value)
        resolve(value)
    },delay)})

const asyncFunc1 = getValueWithDelay(1,1000);
const asyncFunc2 = getValueWithDelay(2,2000);
const asyncFunc3 = getValueWithDelay('hi',3000);
const asyncFunc4 = getValueWithDelay(4,4000);
const asyncFunc5 = getValueWithDelay(5,5000);

const getSum = (arr)=>
   arr.filter(number=>!isNaN(number)).reduce((acc,num)=>acc+Number(num),0);


export const asyncSum = (...asyncFuncs)=>
  Promise.all(asyncFuncs).then(numbers=>getSum(numbers)).catch(Promise.reject(new Error('can\'t calculate' )));

  // testing
asyncSum(asyncFunc1,asyncFunc2,asyncFunc3,asyncFunc4,asyncFunc5).then(result=>console.log(result));
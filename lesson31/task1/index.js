/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  // put your code here
  
  const promise = new Promise((resolve,reject)=>{
    if(userId==='broken'){
      reject(new Error('User not Found'))
    }
    else{
    setTimeout(()=>{
      resolve({
        name: 'John',
        age:17,
        userId,
        email: `${userId}@example.com`

      })
    },1000)}
  })
  return promise;
};
requestUserData('broken').then(data=>
  console.log(data)
).catch(error=>console.log(error))
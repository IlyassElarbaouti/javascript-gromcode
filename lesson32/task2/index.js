const servers = [
  'https://server.com/us',
  'https://server.com/eu',
  'https://server.com/au'
]
const getRandomNum = (from,to)=>
  from + Math.random() * (to-from)

const request = url => new Promise(resolve=>{
  const randomDelay = getRandomNum(1000,3000);
  setTimeout(()=>{
    resolve({
      userData:{
        name:'Tom',
        age:17,
      },
      source:url
    })
  },randomDelay)
});
export const getUserAsap = (userID)=>{
  const userUrls = servers.map(serverUrl=>`${serverUrl}/${userID}`)
  const requests = userUrls.map(userUrl=>request(userUrl));
  return Promise.race(requests)
}
getUserAsap('user1').then(value=>console.log(value));
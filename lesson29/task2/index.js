export const pinger = (num,period)=>{
    let i = num;
 const interval =setInterval(()=>{
     // eslint-disable-next-line no-plusplus
     if(--i > 0){
         console.log('Ping')
     }
     else{
          clearInterval(interval)
     }
     
    },period)

}



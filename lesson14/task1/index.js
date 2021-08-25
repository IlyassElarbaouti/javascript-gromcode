
let text = 'Just learn it'
const sendMessage = (name)=>{
    console.log(`${name}, ${text}! Your Gromcode`)
}
const setMessage=(txt)=>{
    text = txt;
}
sendMessage('Ann');
setMessage('Good job');
sendMessage('Ann');



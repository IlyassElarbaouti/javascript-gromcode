const createMessenger=()=>{
    const sendMessage = name=>console.log(`${name}, Just learn it! Your Gromcode`);
    const setMessage = message=>console.log(`Bob, ${message}! Your Gromcode`);
    const setSender = sender=>console.log(`Bob, Just learn it! Your ${sender}`);

}
export default createMessenger
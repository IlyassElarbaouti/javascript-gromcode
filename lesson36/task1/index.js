// put your code here
export const fetchUser = async userId=>{
    try{
        const result = await fetch(`https://api.github.com/users/${userId}`);
if(!result.ok){
    return null;
}
const userData = await result.json();
return userData;
    }
    catch(err){
       throw new Error('Failed to fetch user');
    }

}
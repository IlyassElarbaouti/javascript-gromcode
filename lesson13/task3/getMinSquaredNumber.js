export default (arr)=>{
    if(!Array.isArray(arr)){
        return null;
    }
     return Math.min.apply(null,arr.map(num=>num*num));
}
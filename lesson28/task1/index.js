const calc = initialvalue =>{
    let result = initialvalue;
   const calculator={
       add(value){
           result+= value;
           return this
       },
       substract(value){
           result-= value;
           return this
       },
       div(value){
           result/= value;
           return this
       },
       mutl(value){
           result*= value;
           return this
       },
       result(){
           
           return result
       }
   }
   return calculator

}
console.log(calc(3).add(5).result());
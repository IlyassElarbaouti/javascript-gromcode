export const calc = initialvalue =>{
    let result = initialvalue;
   const calculator={
       add(number){
           result+= number;
           return this
       },
       substract(number){
           result-= number;
           return this
       },
       div(number){
           result/= number;
           return this
       },
       mutl(number){
           result*= number;
           return this
       },
       result(){
           
           return result
       }
   }
   return calculator

}

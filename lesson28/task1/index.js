export const calc = initialvalue =>{
    let result = initialvalue;
   const calculator={
       add(number){
           result+= number;
           return calculator
       },
       substract(number){
           result-= number;
           return calculator
       },
       div(number){
           result/= number;
           return calculator
       },
       mutl(number){
           result*= number;
           return calculator
       },
       result(){
           
           return result
       }
   }
   return calculator

}

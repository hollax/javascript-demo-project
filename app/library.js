'use strict'

module.exports = {
 
 computeAverage: function(num1,num2,num3) {
   var average = (num1 + num2 + num3) / 3;
   return average;
 },
 
 computeFactorial: function(num) {

    if(num === 0){
        return 1;
      }
      return num * this.computeFactorial(--num);
 },

 convertTempCtoF: function(cTemp) {
   return (cTemp  * (9/5)) + 32;
 },

//T(°C) = (T(°F) - 32) / 1.8
 convertTempFtoC: function(fTemp) {
   return  (fTemp - 32) * 5/9 ;
 }

}
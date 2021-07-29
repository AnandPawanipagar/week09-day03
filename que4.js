"use strict";
for (let i = 0; i < 5; i++) {
  let num1 = i;
  let num2 = i + 1;
  let sum = num1 + num2;
  console.log("The sum of " + num1 + " and " + num2 + " is " + sum);
}
// console.log('The sum of '+num1+' and '+num2+' is '+sum);
//Line no 7 statement will not work since num1, num2 and sum have block scope.

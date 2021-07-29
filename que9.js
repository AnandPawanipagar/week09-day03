"use strict";
let r = 5;
function areaOfCircle(r) {
  let area = 3.14 * r;
  return area;
}
let fixed = areaOfCircle(r).toFixed(2);
console.log(fixed);

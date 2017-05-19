/*
let sum = function(a,b){
   return a+b;
}
let sumA = sum.bind(null,1);
console.log(sumA(2));
let sumB = sumA.bind(null,4);
console.log(sumB(102));

*/

let sum = function(c,d){
  return this.a+this.b+c+d;
}
//bind的时候 this指针只有第一次生效
// 参数会累加
let sumA = sum.bind({a:2,b:3},4);
//console.log(sumA(5));
let sumB = sumA.bind({a:4,b:5});
console.log(sumB(6));// 15


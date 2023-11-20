let num1 = 5;
let num2 = 2;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

let age = 10;
let right = age>= 18;
if(right)
    console.log("can vote");
else
console.log("cannot vote");

for(let a=0;a<=10;a++){
    console.log(a)
}
 
a = 1
while(a<=10){
    console.log(a)
    a++;
}

let arr=["apple","cherry","grapes","bannana","orange"]
for(let fruit of arr){
    console.log(fruit)
}

let calculatearea=function(length,width){
    console.log(length,width)
    return area=length*width
}
console.log(calculatearea(5,10))

let obj={
    names :"dhathri",
    age :"20",
    occupation:"student",
}
for(let key in obj)
console.log(`${key}:${obj[key]}`)

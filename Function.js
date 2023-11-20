// function greet()
// // greet() is function defnition
// {
//     console.log("hello..");
// }
// greet();
// // calling function
// greet();
// greet();
// console.log("1111")
// greet();

function greet(u)
// accepting the user(parameter)
{
    console.log(user)
    return `hello ${u}`
    // it will be resolved to get the value of the user
}
let user='dhathri'
let str = greet(user)
// passing the user
console.log(str)

user='dhathri'
// global variable
function greet(u)
// local variable
// accepting the user(parameter)
{
    // let num=5
    // local variable
    console.log(user)
    return `hello ${u}`
    // it will be resolved to get the value of the user
}
// console.log(num)[will not give op as num is local variable]
str = greet(user)
// passing the user
console.log(str)



// FUNCTION EXPRESSION
// let add = function(num1,num2,num3)
// // num1 & num2 are parameters
// {
//     console.log(num1,num2,num3)
//     return(num1+num2+num3)
// }
// let result = add(5,6)
// // 5,6 are arguments
// console.log(result)

// // ARROW FUNCTION
// let greet = () =>{
//     console.log("hello")
//     return 1
// }
// console.log(greet())

// let add = (num1,num2,num3)=>{
//    console.log(num1,num2,num3);
//    return (num1+num2+num3)
// }
// let result = add(5,8,9)
// console.log(result)

// TO ADD A VAALUE IN A ARRAY
// let name = ['d','s','h']
// name[3]='aa'
// console.log(name)

// DIFFERENT TYPE OF DATA IN AN ARRAY
// let data = [5,"heyy","hffh",{ram:123},function(){console.log("hello world")}]
// console.log(data)
// to print the function coz fuction cannot be called when it is in a array
// data[4]();

// PUSH,POP,SHIFT,UNSHIFT
// let num =[1,2,3,4,5,6,7]
// console.log(num.push(8))
// // 5 is the length of the array and push will add the element at the end of the array
// console.log(num.pop())
// // POP will remove the last element from the array as its data is stored in STACK. In STACK the last added element will be removed 1st
// console.log(num.shift())
// // SHIFT will remove the 1st element from the array
// console.log(num.unshift(6))
// // UNSHIFT will add the element at the start of the array
// console.log(num.splice(3))
// console.log(num.splice(1,1))
// console.log(num)
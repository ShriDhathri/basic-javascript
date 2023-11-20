// function greet(u)
// // accepting the user(parameter)
// {
//     console.log(user)
//     return `hello ${u}`
//     // it will be resolved to get the value of the user
// }
// let user='dhathri'
// let str = greet(user)
// // passing the user
// console.log(str)

user='dhathri'
// global variable
function greet(u)
// local variable
// accepting the user(parameter)
{
    // let num=5
    // local variable
    console.log(u)
    return `hello ${u}`
    // it will be resolved to get the value of the user
}
// console.log(num)[will not give op as num is local variable]
str = greet(user)
// passing the user
console.log(str)
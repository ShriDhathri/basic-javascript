 let num = 5
console.log(num)
// another let will not be used as it is declared already once for num if used error will be displayed
num = 4
 console.log(num)
  let user = "dhathri"
  console.log(user)
 
//   here integers are taken as string and they will be cocatenated
  let add = "5" +"5" 
  console.log(add * 5)

// same data types will get added
  add = 5*5
  console.log(add * 5)

// will give output as Nan(Not a number) 
  let multi = 5 * 'aa'
  console.log(multi)
// will give output as Nan(Not a number) 
  multi="a"*"aa"
  console.log(multi * 2)


//user_name >>> snake casing
// userName >>> Camel casing

 
// let radius = 5
// let pi = 3.14
// let area
// area = pi * radius * radius
// console.log(area)
// here we taken pi as a variable hence it is declared with let keyword and we can change its value in further

let area 
let radius = 5
const pi = 3.14
area = pi * radius * radius
console.info(area)
// here we declared pi as const hence its value cannot be changed in further

let num1 = 56
console.log(typeof num1)  
// typeof will show which type of data type is used
num1= 5/0
console.log(num1)
// will ge op as infinity

let num2= 5/0
console.log(Number.MAX_VALUE)
// will give the max value

// CONCATENATION
let firstName = "Shri"
let secondName = "Dhathri"
let Name = firstName + " " + secondName
console.log(Name)

let aa = 'Shri Dhathri "PM" '
console.log(aa)
// if we have to use double quotes at the start we can use \ to avoid errors
let aaa = "Shri Dhathri\"  PM\""
console.log(aaa)
// tabs and newline character are used \b will give a backspace
aaa = "Shri\tDhathri\nPM\vAlv\bas"
console.log(aaa)

// Boolean types
aa = 5>6
console.log(typeof aa)
// if it 8 is given in string it will give op type as string,if it is given as int type it will give u as number
let b 
b = 8
b = 8 + b
console.log( b, typeof b)

// NUMBER + STRING = STRING
// NUMBER - STRING = NUMBER
// let z
// z = 8+"a"
// console.log(z)

// z  = 8 - "a"
// console.log(z)

let nam=parseInt("123Dhathri")
console.log(nam)
// parseInt converts the number into a string only when u have variables starting from numbers


// ARITHMETIC OPERATORS
let num4=false
let num3=false
let result
result = num4 + num3
console.log(result) 
// TRUE + TRUE = 2
// TRUE + FALSE = 1
// FALSE + FALSE = 0  

// PRE & POST INCREMENT & DECREMENT FUN
// PRE INCREMENT - they increment the value 1st and then they assign the value into the variable
let y = 5
let r = ++y
console.log(y,r)
// POST INCREMENT - 1st they assign the original value into the variable and then the increment it
let p = 5
let q = p++
console.log(p,q)
// ROOT OPERATIONS (2.3) 1st value will be actual value & the second value will be the power 
let c = 2
let res = Math.pow(2,3)
console.log(res)
// RELATIONAL OPERATOR
// here it compares based on their ASCII Values
let d = "book"
let j = "pen"
console.log(d>j)
// here it converts the string into number
let n1 = "4"
let n2 = 3
console.log(n1>n2)
// in java always use === for comparing 
// here it gives false as it has 2 diff data types and if we use == it will give you true which is a bug
n1 = "5"
n2 = 4
console.log(n1===n2)

// LOGICAL OPERATOR
// AND &&
// OR  ||
// NOT !
let x=5 , w=9 , z=10
let ans = x>w&&x>z
let n = !ans
console.log(ans,n)

console.log("hello world")

let numb1 = 4;
let numb2 = 5;
let op = numb1>numb2;
if(op)
  console.log("num1 is lesser");
else
  console.log("num2 is lesser");
// We can use multiple statements for a condition only by using {} brackets

numb1 = 5;
numb2 = 6;
numb3 = 7;
if(numb1<numb2 && numb1>numb3)
    console.log("numb1 is smaller");
else if(numb2>numb1 && numb2>numb3)
    console.log("numb2 is greater than numb1");
else 
    console.log("numb3 is greater");
console.log("-----OK bye..-----")


// HW IF - ELSE 
let dayy
let alram 
if (dayy === "Mon")
    console.log(alram = 7)
else if (dayy === "tue" || dayy === "thur")
    console.log(alram=4)
else if (dayy==="fri")
    console.log(alram=8)
else
    console.log(alram=9)



// TERNARY OPERATOR
// Condition? Statement1(TRUE BLOCK):Statement2(FALSE BLOCK)
num
let answ 
answ = num%2 === 0 ? "Even": "Odd";
console.log(answ);
//*****SWITCH CASE*****:
let day = "Saturday"
switch(day){
  case "Monday":
    console.log('7am')
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log('8am')
    break;
  case "Friday":
    console.log('4am')
    break;
  case "Saturday":
  case "Sunday":
    console.log('9am')
    break;
  default:
    console.log('Good night')
}

// ***TEMPLATE LITERAL***
 let number1 = 5
 let number2 = 3
 let Result
 Result = number1 + number2;
//  console.log("the result of" + " "+ number1 +" "+ "and" +" " + number2 +" "+ "is" +" "+ Result);
// instead of using "" we use `` called TEMPLATE LATERAL
console.log(`The addition of ${number1} and ${number2} is ${Result}`)
// if we want to print on new line we don't have to use \n we can directly print it on new line by by using template lateral(``) 
console.log(`addition of ${number1} and ${number2} is
${Result}`)

// ****LOOPS****
// Loops has 3 parts INITIALIZATION, CONDITION TEST , INCREMENT


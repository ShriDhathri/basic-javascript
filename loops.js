// WHILE LOOP
let a = 2
//  if we give 4 it print hi 2 times as it takes values for 4 and its increment 5
// if we give 2 it will print 4 times for value 2,3,4,5
while(a <= 5)
{
    console.log(`Hiii`,a)
    a++
}
a = 5
while(a<=5)
{
    console.log(`hiii`,a)
    a++
}
console.log(a)
// here it prints a value as 6 coz after a become equal to 5 it increments it value 6 hence it display 6 and doesn't print hi as it is not equal to 5
a = 2
while(a>=1)
{
    console.log(`hiii`,a)
    --a
}
console.log(a)
// DO WHILE
a = 1
do{
    console.log(`loop`,a)
    a++
}
while(a<=5)
{
    console.log(`okk`,a)
    // here it print the incremented value of a
}
// Even if the condition is false it atleast print the op once
// **** WHILE - CHECK THE CONDITION AND THEN EXECUTES THE BLOCK
// **** DO WHILE - EXECUTES THE BLOCK 1ST & THEN CHECK THE CONDITION

// FOR LOOP
// In for loop it is not mandatory to initilalise,condiltion,increment in the same line we can write it in different liines
for(let b=5;b<=10;b++)
{
    console.log(`hello`,b)
} 
// we can also run this code by not following the proper syntax but we have to use (;) properly
b = 5
for(;b<=10;b++)
{
    console.log(`aaa`,b)
}

b = 8
for(;b<=10;)
{
    console.log(`bbb`,b)
    b++
}
// NESTED LOOPS (its not required to use LET)
for( b=1;b<=7;b++)
{
    console.log(`hello`,b)

    for( c=1;c<=5;c++)
        console.log(`ccc`,c)
}


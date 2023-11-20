let input = 'name'
// user defined input
let abc = {}
console.log(typeof abc);
abc ={
    name:'Dhathri',
    college:'aiet',
    'academic year':2023
}
// To fetch the properties
console.log(abc.name)
// When you have two words in key value then use []
console.log(abc['academic year'])
// also we can use console.log(abc[college])
console.log(abc[input])
// here we use []for user defined input
console.log(abc)

// OBJECT inside an OBJECT
abc ={
    name:'Dhathri',
    college:'aiet',
    'academic year':2023,
    laptop :{
        brand:'lenovo',
        model:'ideapad',
        ram:528
    }
}
console.log(abc.laptop)
console.log(abc.laptop.brand)
// To fetch the object inside the obejct

console.log(abc.laptop.brand.length)
// to get the length of the property

abc ={
    name:'Dhathri',
    college:'aiet',
    'academic year':2023,
    laptop1 :{
        brand1:'lenovo',
        model:'ideapad',
        ram:528
    }
}
console.log(abc.laptop?.brand?.length)
// '?' is used toavoid error when we use a property which is not defined in the program imstead of showing the error it shows undefined

abc ={
    name:'Dhathri',
    college:'aiet',
    'academic year':2023,
    laptop :{
        brand:'lenovo',
        model:'ideapad',
        ram:528
    }
}
delete abc.name
// by using 'delete' keyword we can dlt the required property
console.log(abc)

abc ={
    name:'Dhathri',
    college:'aiet',
    'academic year':2023,
    laptop :{
        brand:'lenovo',
        model:'ideapad',
        ram:528
    }
}
for(let key in abc.laptop)
{
    console.log(key,abc.laptop[key])
}




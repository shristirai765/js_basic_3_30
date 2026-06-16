// ES -> ECMA Script

//ES6-2015

//! let, const, block scope(update)

//! template literal -> ``(string interpolation and dynamic)

//! arrow function

//! es module -> to work in js func before 2015 need to use require(import/export)

//! promise

//! callback hell

//!async/await

//! enhanced object syntax
let name = "John";

let key = "email"

let obj = {
    // name: name,// value ref before
    name,//(now we can only use a single name if we have same name)
    [key]:'',//email: "value"
    // getName : function(){
        
    // }// method before
    getName(){},//method after
}

//! class

//! destructuring
let john= {
    name: " john",
    email: "j@gmail.com"
};
// let{name, email}= john;

//!spread ... - merge and copy

//! rest operator ...

//!default parameter

//! rest parameter ...
// function add(a=0, b=0){
//     return a+b;
// }

//no fixed amt of num jatini pass garna payo
//as an array return hunxa
function add(...numbers){
    console.log(numbers);
    let total=0;
    for(let i= 0; i<numbers.length; i++){
        
        total += numbers[i];
        

    }
    console.log(total)
    // return a+b;
}
add(12, 23,45, 67)
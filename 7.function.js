//* for of->gives value(element)
//iterable (array and strings)ma loop garnu paryo vane
let numbers= [4,3,5,6];
// for(let i = 0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }
// for(x of numbers){
//     console.log(x);
// }
// // can also loop in string
// for(value of "hello"){
//     console.log(value);
// }

//* for in->gives keys
//* object (dierct loop in object)
// let user= {
//     name: "Shristi",
//     email: "abc@gmail.com",
//     password: "pass"
// };
// for(key in user){
//     console.log(key, user[key]);
// }
// //key ->index in array 
// for(x in numbers){
//     console.log(x);
// }

//object ma for of garna mildeina bcz objts are not iterable
// for(x of user){
//     console.log(x);
// }


//!function
// ->block of code that is reusable(logic reuse)
//definitive- function name should explain code
//specific task matra garne not multiple

// {}

//to define function
//* function declaration
// doesnot run until called
// function function_name(){
//     //body
//     console.log("Hello");
// }

//function invokation/ call
// function_name();

// function greet(){
//     console.log("Hello World.");
// }

// greet();
// greet();

//function with input
//parameter(placeholder define for input) and argument(function call garda actual value pass )
// function greet(user, age){
//     console.log("Hello" , user, age);
// }

// greet("Ram", 20);
//jun order ma input xa tyai order ma pass huneho
// greet(2,"Shristi");

//default parameter
function greet(user = "Guest"){
    console.log("Hello" , user);
}

// greet("Ram");//if given input then replaces default
// greet();

// function add(x= 0, y=0){
//     console.log('the sum id:',x+y);
// }

// add(2,3)
// add()

//with return type 
//return is used at the end of the body cause after return keyword it gives the control to the one that calls the function
// function add(x= 0, y=0){
//     return x + y;
// }

// let result = add(2,3);
// console.log(result)
// let res = add(4, 5);
// console.log(res)

// function multiply(x = 1, y= 1){
//     return x * y;
// }
// let product = multiply(2,4);
// console.log(product)
// let multiple = multiply()
// console.log(multiple)
// let prac= multiply(2)
// console.log(prac)


// function divide(x,y){
//     return x/y;
// }
// let div= divide(1,0)
// console.log(div)

//function expression
//variable ma function assign
//can be called anonymous function
// const multiply = function(a = 1, b = 2){
//     return a * b;
// }

// console.log(multiply(12,4))
//multiply(variable) as a function use garnupauxa

//function declaration and function expression(3,3)
// function square(x= 1){
//     return x*x;
// }
// let sq= square(4);
// console.log(sq);

// function cube(x=3){
//     return x*x*x;
// }
// let cb= cube(7);
// console.log(cb);

// function power(x=2, y=3){
//     return x ** y;
// }
// let pw =power(6,2);
// console.log(pw);

// //function expressions
// const modulo = function(a=2, b=2){
//     return a%b;
// }
// console.log(modulo(4,2));

// const discount = function(amount = 1000){
//     return amount-(amount*10)/100;
// }
// console.log(discount(2000));

// const subtract = function(a=5, b=2){
//     return a-b;
// }
// console.log(subtract());


//todo: arrow function, callback funtion, higher order function

//!arrow function
//one liner 

// const multiply = (a,b) => {
    // let res = a*b;
//     return res;
// };

const multiply = (a,b) => a * b; // one liner

console.log(multiply(2,3));

const fn = (obj)=>(obj.name);
console.log(fn({name: "John"}));

//! callback function
//use case liyera leko function
//function is also datatype
//everything is obj in js
//can take everything as a input (obj, func, string)
//kunai func parent ko body bata callback vaye matra
//function ko ref pass garnu parxa

// const parent = (callback)=>{
//     console.log("parent");
//     callback(12);//call vako thau bata pass garne
// }
//callback ->as an arg pass and call back vairaxa
// const child = (a)=>{
//     console.log("child", a);
// }

// let x = child();//undefined nothing to return
// parent(child());//undefined 
// parent((a)=>{
//     console.log("child 1", a);
// })//anonymous ekchoti create, call hunca ani destroy hunxa

const calculate = (a, b, operation)=>{
    console.log("The result is:", operation(a,b));
    
}

const add = (x, y)=>{
    return x + y;
}
const multiple = (x,y)=>{
    return x*y;
}

calculate(22,32,add)
calculate(2,3,multiple)

//higher order function
//if a function takes function as an input or returns a function or both

const outer= ()=>{
    console.log("outer");
    const inner = ()=>{
        console.log("inner");
    }

    return inner;
}

const y = outer();
// outer;
outer();
// console.log(outer)
// y();
y;

// IIFE (Immediately Invoked function expression)
//jun time ma define tyai time ma call hunxa
//ekchoti call garne
(() => {
    console.log("IIFE");
})();

(()=>{

})();

//todo: array methods 

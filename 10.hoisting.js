//hoisting
//variable, func declaration scope ko top ma move garxa but not initialization(logically not physically)
var x;
// console.log(x);

// var x = 10; //var hoist hunxa but undefined initialize vayera hoist hunxa
x = 10;
// console.log(x);

//function declaration->hoist hunxa but completely, doesnot give any error
// hoist()
function hoist(){
    console.log("hoist")
}

//function expression
//undefined()
//! fn()//fn search garxa tya j hunxa tyo call hunxa undefined()
var fn = function(){
    console.log("var function")
}

//typeerror -call gareko var is not funct

//let 
//hoist hunxa but tdz ma hunxa
//TDZ ->temporal dead zone(declare vako dekhi initialize vako range samma) 
//cant use in tdz
// console.log(a)
let a = 10;

//const
//same as let
// b()
const b = function(){
    console.log("hello")
};

//phases of js working mech
//memory creation phase
/*
memory allocation
{x: undefined, hoist:(){}}
script : {y : <not avail(empty)>}->for let and const hoist chai hunxa but empty so cannot use before initialization

*/

//execution phase
/*
{x = 10,  hoist:(){}, y : 10}
memory intialization
execute
*/
console.log(x)
var x =10; //mem allocation
console.log(x)

hoist()//function body nai dinxa
function hoist(){
    console.log(y)
    var y =11;
    console.log(y)
    console.log("hoist")
}
hoist()

let y = 10;

//todo: execution context-(ec pushed) create before run , inside the ec phase run
//file lai function ma execute garxa
//callstack - data structure, manage function execution order

//file converted into gec and 
//GEC-cmplt navayesamma exist garirakhxa
//gec pushed into callstack

function hoist(){
    console.log(y)
    var y =11;
    console.log(y)
    console.log("hoist")
}
hoist();
hoist()
//cmplt vayesi scope compltly destroy


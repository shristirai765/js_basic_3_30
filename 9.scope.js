//scope->global, local thyo paila then local divided into block and function scope
//visibility or accessibilty of variable

//global scope
//block scope->if
//cannot redeclare in scope
//let , const ->block scope
//var->global scope(global memory ma create hunxa var variable)

let z = 12;

if(true){
    let x =10;
    const y = 20;
    var z = 30;
}

//function scope 
const scope = ()=>[
    // let x = 10;
    // const y = 20;
    // var z = 30;
    //function vitra function scope (var) other wise global scope
]

//let , const ->redeclaration garna mildeina(within same scope), reassign garna mildeina, blocked scope
//declaration, scope, hoisting

//todo
//lexical scope->nested scope(block vitra block)
//lexical scope le afno ra parent ko scope bata access garna pauxa but kassari pauxa is defined by scalar chain
//nearest scope ma declare jaja use vako xa
const outer= ()=>{
    let x =10;
    const y = 34;
    var z = 45;
    const inner = ()=>{
        let a = "a";
        x = "x"
        console.log(x)
    }
    inner();
    console.log(a)
}
outer()

if(true){
    let x = 23;
    if(true){
        console.log(x);
        x = 56;
        console.log(x)
    }
    console.log(x)
}

//scope chain(own scope->parent scope->global scope)how different search works
//error dinxa teti bela jada search garda global mani vetayena vane error dinxa
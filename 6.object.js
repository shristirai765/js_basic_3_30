// // object
// /*
// data structure 
// key value pair
// key->string and unique

// object instialization->obj constructor
// */
// // const obj = new Object();

// // object literals-> {}
// // let user = {
// //    "full name":"Shristi" , //obj property
// //     email : "acd@gmail.com",
// // };

// // let u = [
// //     {
// //         name : "John",
// //         email: "john12@gmail.com"
// //     },
// //     {
// //         name: "john",
// //         email: "john@gmail.com"
// //     }
// // ];
    

// // console.log(obj, user);
// // array works in index and obj withproperties(key name)

// // reading properties
// // dot notation
// // const name = user.name;

// // bracket notation []
// /*

// */
// // console.log(name);
// // console.log(user["email"]);//value direct pass
// // console.log(user["full name"]);
// // // undefined if the key does not exist
// // //
// // let key = "email";
// // key = "name";//re assign 
// // console.log(user.key);//undefined
// // console.log(user[key]);
// // dynamic key pass (users bracket notation)
// // console.log(user[abc]);//reference pass user['email']

// //where dot notation can not be used-> euta space huda ->arko dynamic key pass garda

// // adding new properties
// let user = {
//    name: "Shristi",
//     email : "acd@gmail.com",
//     address:{
//         city: "Ktm",
//         country: "npl"
//     },
//     hobby: [],


// };
// console.log(user.address.city);
// console.log(user['address']["city"]);

// user.password= "12345";
// user["age"] = 27;

// modify properties
// user.password = "password";

// console.log(user);
// delete properties
// delete user.age;

// console.log(user);

// pass by value main mem
// let x = 12;
// // let y= x;actual value nai janxa
// x= 23;
// console.log(x,y);
// object non primitive(heap memory) for complex storage
// main mem->obj ko location in pass by ref
// let user2 = user;
// user.name = "abc";

// console.log(user,user2);

let a= {
    a:1,
    b:2
};
let c={
    d:3,
    a: 20
};

// spread operator ...
// new obj b initialize
let b = {...a,...c};//unpack(spread)
// let b =[...a,...c];
let d = [...[12, 3],...[23,4]];//merging array using spread
console.log(d);
a.c = 3;

console.log(a,b);

// destructuring
let john = {
   name: "John",
    email : "acd@gmail.com",
    password : "pass"


};
// unpacking an object without making individual variables
//key should be same when unpacking


let john1= {
   name: "John",
    email : "acd@gmail.com",
    password : "pass"


};
// let and const cannot be re declared but let can be re assigned
// let {name, email, password} = john;
// // rename 
// let {name:user_name, email:user_email, password:user_password}= john1;
// console.log(name, email, password);

// rest operator-symbol(...)
// new obj banayera choose nagareko jati new obj ma rakhthyo(if array ko vane array nai banauthyo)
// let {name, ...rest}= john;
// console.log(rest);

// object methods
// object lai array ma convert garxa
console.log(Object.keys(john));
console.log(Object.values(john));//to read values
console.log(Object.entries(john));// for both key and value 

let entries= [
  [ 'name', 'John' ],
  [ 'email', 'acd@gmail.com' ],
  [ 'password', 'pass' ]
];

console.log(Object.fromEntries(entries));//from arr to obj
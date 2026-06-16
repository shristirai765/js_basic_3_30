//! this-> object (function ko)
//file->module
//ec->functionko exec ko lagi
//kunchai le function lai kunchai context ma call vako

// console.log(this); //empty obj {}
function a(){
    console.log(this)
}
// a(); //global obj

// let user = {
//     name: "john",
//     email: "j@gmil.com",
//     getName: function(){
//         console.log(this) //sabai obj auxa
        // console.log(this.name)
        // console.log(user.name)
//     }
// }
// user.getName();

// let user = {
//     name: "john",
//     email: "j@gmil.com",
//     getName: function(){
//         console.log(this) //sabai obj auxa
        // console.log(this.name)
        // console.log(user.name)
//     }
// }
// user.getName();
//func ka bata call vaxa tesle define garxa this lai

// const fn = user.getName;
// fn()


//cant use arrow func when using this
//doesnt have own this
//inherits parents this

// let user = {
//     name: "john",
//     email: "j@gmil.com",
//     getName: ()=>{
//         console.log(this) 
//     }
// }
// user.getName();

// let user = {
//     name: "john",
//     email: "j@gmil.com",
//     getName: function(){
//         const a = ()=>{
//         console.log(this.name) 
//     }
//     a()
//     }
// }
// user.getName();

// class User{
//     name;
//     email;
//     constructor(name,email){
//         this.name= name;
//         this.email= email;
//     }
//     getName(){
//         return this.name;
//     }
// }
// const u = new User("John", "j@gmail.com");
//{} <= this

// console.log(u.getName())

// cant use arrow func in constructor cuz arrow doesnt have this

//!function object
//all are inhrited from obj

//func as an obj use
// function introduce(){
//     console.log("Hello", this.name)
// }
// console.log(introduce.name)
// introduce()

//!call, apply, bind
//instantly call gardinxa(call, apply)
//arg pass diff only in call and apply but same in other factors
//manually set this of a function\

let user = {
    name: "John",
    email: "j@gmail.com"
}
let user1 = {
    name: "John 1",
    email: "j@gmail.com"
}

function introduce(age, email){
    console.log("Hello", this.name,age, email)
}
// introduce.call(user, 12, "j@gmail.com")
// introduce.call(user1)

// introduce.apply(user)
// introduce.apply(user1, [23, "g@gmail.com"])
// apply ma as an array while in call comma separator

//new func return only binds
const fn = introduce.bind(user, 23, "g@gmail.com")
// fn()

console.log(this)
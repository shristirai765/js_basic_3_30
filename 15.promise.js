//!promise
//*
//object
//represent future completion and failure
//work in async
// empty obj
//*state - ek patak ma euta matra hunx
//?  pending-default
//? fulfilled
//? rejected- error

//!promise handling
//*.then
//*.catch
//*finally->it will run on both case
//only one auxa then and catch ma


// console.log("start");

const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Success"); //resolve or reject ya j call gareko thesma depend garxa where to go fulfilled or rejected
        // reject("error");
    }, 2000);
});

// promise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("finally");
// })

// console.log("end");

//solve callback hell using promise

const getUser = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
        console.log("User Fetched.");
        resolve({
            _id: 2,
            name: "John Doe",
            email: "j@gmail.com"
        });
    }, 3000);
    })
}

const getPosts= (userId)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Posts fetched.");

            resolve([
                {
                    _id: 1,
                    userId: userId,
                    title: "Post 1"
                },
                {
                    _id: 2,
                    userId: userId,
                    title: "Post 12"
                }
            ]);
        },3000);
    })
}
const getComments = (postId)=>{
    return  new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Getiing comments that matched the user id");
            resolve([{
                _id: 1,
                postId: postId,
                comment: "Good"
            },
            {
                _id: 2,
                postId: postId,
                comment: "Excellent"
            }])
        
        }, 2000);
    })

}
//! promise chaining
//* single catch le automatically error handle garxa
// then is needed for success but single catch can be used
// getUser().then(user=>{
//     console.log(user);
//     return getPosts(user._id);
// })
// .then(posts=>{
//     console.log(posts);
//     return getComments(posts[0]._id);
// })
// .then(comment=>{
//     console.log(comment);

// })
// .catch(err=>{
//     console.log(err);
// });

//! fetch()- req send 

// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then(response=>{
//     console.log(response);
//     return response.json();
// })
// .then(user=>{
//     console.log(user);
// })
// .catch(err=>{
//     console.log(err);
// })
//* return handle: promise chaining, async/await
//!async/ await- syntatic sugar of promise
//sync syntax use garera async kam garna
//promise return

//wait garnu parnexa when func is giving the promise 
//async le chai just call garda wait garnu parne xaina vane tyo func 
console.log("start")
const a = async ()=>{
    try{
        const user = await getUser();
        console.log(user);
        const posts = await getPosts(user._id);
        console.log(posts);
        const cmts = await getComments(posts[0]._id);
        console.log(cmts);
    }catch(error){
        console.log(error)
    }finally{
        console.log("finally")
    }
}

// a();

console.log("end")

//!try/ catch
//to use await must use async function
const b = async ()=>{
    try
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const post = await response.json();
        console.log(post)
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post[3].id}`)
        const cmt = await res.json();
        console.log(cmt)
        
    
    }catch(error){
        console.log(error)
    }
}
b()

//! event loop
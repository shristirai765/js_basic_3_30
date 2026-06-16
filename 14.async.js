//sync->blocking
//!async-non blocking
//queue, eventloop, APIs, callstack ->execute
//*setTimeout
//? setTimeout(callback, timer_out(in millisec),....args)
// certain time paxi execute garnuxa ani ekpatak
//returns timer id
//to cancel setTimeout before it is executed

// console.log("start")

// const timer_id = setTimeout((a,b) => {
//     console.log("processing", a, b)
// }, 2000, 12,23);

// console.log(timer_id._onTimeout())
// console.log(timer_id)

// clearTimeout(timer_id);

//!setInterval->every 1 sec ma func call
// const id = setInterval(()=>{
//     console.log("processing")
// },1000)
// clearInterval(id)
// console.log("end")


//todo : hh:mm:ss->countdown timer
//1:12:09
//double digit

const timer ={
        hr: 0,
        min: 0,
        sec: 10,
        check: (num)=>{
            if(num<10){
                return (`0${num}`);
            }
            else
                return (`${num}`);
           
        }
    };
// const countdown= setInterval(()=>{
//     if(timer.sec > 0 ){
//         timer.sec-=1;
//     }
//     //for sec
//     else if(timer.sec===0 && timer.min> 0){
//         timer.sec=59;
//         timer.min-=1;
//     }
//     else if(timer.sec===0 && timer.min===0 && timer.hr>0 ){
//         timer.sec= 59;
//         timer.min = 59;
//         timer.hr -=1;
        
//     }
//     // else if(timer.sec===0 & timer.min>0 &timer.hr>0 ){
//     //     timer.sec= 59;
//     //     timer.min -= 1;
        
//     // }
//     //for min
//     // else if(timer.min===0 & timer.hr>0){
//     //     timer.min=59;
//     //     timer.hr -= 1;
//     // }
//     else if(timer.hr===0 && timer.min===0 && timer.sec===0){
//         clearInterval(countdown)
//         console.log("Countdown end");
//         return;
//     }
//     //   if(timer.hr<10 || timer.min<10 || timer.sec<10){
//     //     console.log(`Countdown : 0${timer.hr}:0${timer.min}:0${timer.sec}`)
//     // }
//     console.log(`Countdown : ${timer.check(timer.hr)}:${timer.check(timer.min)}:${timer.check(timer.sec)}`)
    
    
    
// },1000)

//todo: callback function

function a(callback){
    console.log("a")
    callback(12);
}

// a((x)=>{
//     console.log("callback", x)
// })

console.log("start")

const getUser = (callback)=>{
    setTimeout(() => {
        console.log("User Fetched.");
        callback(null,{
            _id: 2,
            name: "John Doe",
            email: "j@gmail.com"
        });
    }, 3000);
};

const getPosts = (callback,userId)=>{
    setTimeout(()=>{
        console.log("Posts fetched.")
    //     console.log([
    //     {
    //         _id: 1,
    //         userId: userId,
    //         title: "Post 1"
    //     },
    //     {
    //         _id: 2,
    //         userId: userId,
    //         title: "Post 12"
    //     }
    // ])
    callback(null,[
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

    },2000);
};

const getComments = (postId,callback)=>{
    setTimeout(() => {
        console.log("Getiing comments that matched the user id");
        // console.log([
    
        callback(null,[{
            _id: 1,
            postId: postId,
            comment: "Good"
        },
        {
            _id: 2,
            postId: postId,
            comment: "Excellent"
        }])
        // ]);
        // console.log(userId[id][comment])
    }, 2000);
}

getUser((error, user)=>{
    if(error){
        console.log("error", error);
        return;
    }else{
        console.log(user)
    }
    getPosts((error,posts)=>{
        if(error){
            console.log("error", error);
        return;
        }
        else{
            console.log(posts)
        }
        getComments(posts[0]._id,(error,comments)=>{
            if(error){
                console.log("error")
                return
            }
                console.log(comments)
        })
    },user._id);
});

console.log("end")

//!callback hell- callback nested 
//to solve callback hell->promise
// manage, maintain, debug(complex) garna garo hunxa
//* pyramid of doom (shape)
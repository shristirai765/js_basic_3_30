// array methods
//built in functions
//push,pop, splice, indexOf, shift, includes(bool)..

//higher order method

let numbers = [2,8,5,6,7]
// let double = []
//forEach
//no return simple loop
//arr.forEach(callback)
//loops 
//each element ma call garxa
//value, index, arr
//org arr modify
// const callback = (value, index, arr)=>{
//     console.log(value, index, arr);
//     double[index] = numbers[index]
//     //even if the function return smth the foreach method returns ntg
// }
// numbers.forEach(callback);
// numbers.forEach((v,i)=>{
//     console.log(i)
// });

//returns nothing
// const res = numbers.forEach(callback);
// console.log(res)//undefined
// console.log(double)

//map method->transform (same length arr)
//returns new arr and doesnot modify org arr
//arr.map(callback)
//same length arr return
// const double = numbers.map((num)=>{
//     return num*2;
//     // return "x"; gives x in a new array
// })
// modify the arr(map)
// const double = numbers.map((num)=> num*2);

// console.log(numbers)
// console.log(double)

const users = [
    {
        name: "Ram",
        email: "ram@gmail.com"
    },
    {
        name: "John",
        email: "John@gmail.com"
    }
];

// const name = users.map((nm)=>nm.name)
// const name = users.map((nm)=>nm)

// console.log(name)

const user_with_username = users.map((user)=>{
    user.username = user.name + user.email;
    return user;
});
// const user_with_username = users.map((user)=>{
//    return{
//     ...user,
//     username =user.name + '-' +  user.email,
//    };
// });

// console.log(user_with_username);

//filter
//arr.filter(callback)
//returns current value
//compares true or false

// const even = numbers.filter((num)=>{
//     if(num % 2 ===0){
//         return true;//return current value by checking
//     }
// });
// const even = numbers.filter((num)=>num % 2 ===0);
// const odd = numbers.filter((num)=>num % 2 !== 0);
// console.log(numbers);
// console.log(even);
// console.log(odd);

// filter returns array

//reduce
//single value return
//previous value->previous loop garera jun logic use vako output xa tyaai hunxa

const sum = numbers.reduce((acc, value)=>{
    return acc+=value;
},10);//takes reduce(fn, initialvalue)
// console.log(sum);

//find, findIndex, every, some, sort

//todo: cart vitra arr tyo arr lai reduce
let cart = {
  user: 1,
  items: [
    {
      product: {
        id: 1,
        price: 1000,
      },
      quantity: 10,
    },
    {
      product: {
        id: 2,
        price: 500,
      },
      quantity: 4,
    },
    {
      product: {
        id: 3,
        price: 1500,
      },
      quantity: 6,
    },
  ],
};

const total = cart.items.reduce((acc, item)=>{//item is an obj
  return acc+=item.product.price * item.quantity;
},0);


// console.log(total);

//find->returns the first element that matches the condition->value, undef
// const result = numbers.find(num => num < 24);
// console.log(result);

//findIndex->returns the index of first matching condition->index, -1
// const resultIndex = numbers.findIndex(num => num < 24);
// console.log(resultIndex);

//every()->checks whether all elements satisfy cond->bool
// const result1 = numbers.every(num => num < 24);
// console.log(result1);

//some->checks whether at least one element satisfies a condition->bool
// const result2 = numbers.some(num => num < 24);
// console.log(result2);

//sort->sorts elements in an arr
//as a string sort
// const sorting = numbers.sort();
// console.log(sorting);
// console.log(numbers)

// const fruits = ["banana"]
//start dekhi end samma no swap ayo vane iteration balla stop
// const arr = [10, 101, 20 , 4 ,6 ];
// console.log(arr)
// arr.sort((a,b)=>{
//   return a-b;
  //a.localCompare(b)->for string
// })
//+ve->swap
//-ve->no swap
//0->no swap

// console.log(arr)

//
const students = [
  {
    name: "Ram",
    marks: [43,65,76,78,89],
  },
  {
    name: "Hari",
    marks: [34,56,78,76,89],
  },
  {
    name: "Sita",
    marks: [44,32,76,78,8],
  }
];
// const avgMarks = students.map((stds)=>{
//   console.log(stds)
//   const avgM= stds.marks.reduce((acc,mark)=>{
//      return acc += mark;
     
//   },0)
//  return{
//   ...stds,
//   avgMarks: avgM/stds.marks.length,
//  }
 
// })
// console.log(avgMarks)
// const passedStds = avgMarks.filter((std)=>{
//   if(std.avgMarks>=50){
//     return std.name;
//   }
// }
// )
// console.log(passedStds)

// const result = passedStds.map((stds)=>{
//   return stds.name;
// })
// console.log(result)

const calculateAvg = (arr)=>{
  return(
    arr.reduce((acc, mark)=>{
      return (acc+=mark);
    })/arr.length
  );
};

const result = students.map((student)=>{
  return{
    ...student,
    avg_mark: calculateAvg(student.marks),
  };
})
.filter((std)=>std.avg_mark>=50)
.map((std)=>std.name);

console.log(result)
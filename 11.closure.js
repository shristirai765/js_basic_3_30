//synchronous func
//automatically gc
//garbage collector le ref xa vane rakhxa nava dlt automatically

//func normal flow 
//execution vayesi destroy hnxa
const a = ()=>{
    console.log('a')
    const b = ()=>{
        console.log('b')
        const c = ()=>{
            console.log('c')
        }
        c()
    }
    b()
}
// a()
//callstack le kun chai func execute vairkheko xa tyo track garxa

//closure
//private var(class use nagari variable lai private banauna closure use)
//due to lexical scope
//use:
//global scope pollute nagari
//caching
//function factory

// const parent = ()=>{
//     let x = 'parent'
//     const child = ()=>{
//         console.log(x)
//     }
//     return child
// }

// const inner = parent()

// inner()
//only inner has access to x so (private)

//new call new phase start
//parent le child return carda ref ni liyera akohunxa
// const Counter = ()=>{
//     let count = 0;

//     const inner = ()=>{
//         count++;
//         console.log(count);
//     }

//     return inner;
// }
// const counter = Counter();
// const counter1 = Counter();

// counter();
// counter()
// counter1();


const Counter = (initialCount = 0)=>{
    let count = 0;

    const increment = ()=>{
        count++;
    }

    const decrement = ()=>{
        count--;
    
    }
    const show = ()=>{
        console.log(count);
        return count;
    }
return {//same name xa vane key name dinu pardeina can just use func name when calling
    inc : increment,
    dec : decrement,
    getCount: show,
};

}

// const counter = Counter(5);
// const counter1 = Counter();
// const res = counter.inc();
// console.log(res())
// counter.inc()
// counter.inc()
// counter.inc()
// counter.inc()
// counter1.inc()
// counter1.inc()
// counter1.dec()
// counter.getCount()

//function factory

// const add = (factor)=>{
//     return(num)=>{
//         return factor + num;
//     }
// }

// const add = (factor)=>(num)=>factor + num;
// const add5 = add(5);
// console.log(add5(10))
// console.log(add5(13))

//*caching(use)

const sum = ()=>{
    let cache = {}

    return (num)=>{
        if(cache[num]){
            return cache[num]
        }else{
            let res = 0;
            console.log("Calculating")
            for(let i =0; i<900000; i++){
                res = num * 1000;
            }
            cache[num]= res;
            return res
        }        
    }
}
// const x = sum()
// console.log(x(2))
// console.log(x(2))
// console.log(x(2))

// deposit, withdraw, blc_inquiry
const account = ( acc_name, initial_amt= 0)=>{
    let name = acc_name;
    let balance = initial_amt;
    const deposit = (amount)=>{
        if(amount > 0){
            balance+= amount;
        }
        else{
            console.log("Invalid amount: The amount should be greater than 0.")
        }
    }
    const withdraw = (amt)=>{
        if(amt < balance & amt > 0){
            balance -= amt;
        }
        else{
            console.log("Error")
        }
    }
    const blc_inquiry = ()=>{
        console.log("The current balance is :" , balance, " in ", name);
    }
    return {
        deposit,
        withdraw,
        blc_inquiry,
    }

}
const res = account("John Doe");
res.deposit(1000);
res.blc_inquiry();
res.withdraw(1000)
res.blc_inquiry()

//! Account(acc_name,initial_amt)
//* deposit , withdraw , blc_inq
const Account = (acc_name, initial_amt = 1000) => {
  let name = acc_name;
  let balance = initial_amt;
  //

  // const deposit = () =>{}
  return {
    deposit: (amt) => {
      if (amt < 0) {
        console.log("Invalid amount. Deposit amount must be positive.");
        return;
      }

      balance += amt;
      console.log(`Total balance is: ${balance}`);
    },
    withdraw: (amt) => {
      if (amt < 0) {
        console.log("Invalid amount.Withdraw amount must be positive.");
        return;
      }

      if (balance - amt < 500) {
        console.log("Insufficient balance.");
        return;
      }
      balance -= amt;
      console.log(`Total balance is: ${balance}`);
    },
    balance_inq: () => {
      console.log(`Total balance is: ${balance}`);
    },
    details: () => {
      console.log({
        name,
        balance,
      });
    },
  };
};

//! using closure
const john = Account("John Doe", 1000);

john.deposit(500);
john.withdraw(1200)


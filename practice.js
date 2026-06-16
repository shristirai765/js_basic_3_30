//!VAR-01
//*Convert and display a total number of seconds in standard digital clock format

const conversion = (totalNumOfSec)=>{
    let hr= Math.floor(totalNumOfSec/3600);
    let rem =  totalNumOfSec%3600;
    let min= Math.floor(rem/60);
    let sec= rem%60;

    console.log("Converting seconds into digital clock format");
    console.log(`${String(hr).padStart(2,"0")}:`+
        `${String(min).padStart(2,"0")}:`+
        `${String(sec).padStart(2,"0")}`)

};


// conversion(5800);



//*Calculate a customer's total electricity bill based on an tiered unit consumption slab.

const bill = (unit)=>{
    let firstSlab = Math.min(unit, 100);
    let total = firstSlab * 1;
    unit-=firstSlab;
    if(unit>0){
        let secondSlab = Math.min(unit, 100);
        total = total + secondSlab*2;
        unit -=secondSlab;
        if(unit>0){
            let remSlab = unit * 5;
            total += remSlab;   
        }
    }

    console.log("Calculation: $", total);
    
}
// bill(120)

//*Split a total amount evenly among N friends and display the individual share along with
//*the remaining leftover change.

const split = (amt, frnds)=>{
    let division = Math.floor( amt/frnds);
    let remainder = amt%frnds;

    console.log(`Each pays $${division}, Remainder = $${remainder}`);
}
// split(100,3)

//*Calculate a person's exact current age dynamically given their complete Date of Birth(DOB) string

const age = (dob)=>{
    const currentDate = new Date();
    const date = new Date(dob)
    let age = currentDate.getFullYear()-date.getFullYear();

    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const birthMonth = date.getMonth();
    const birthDay = date.getDate();

    if(currentMonth < birthMonth || (currentMonth === birthMonth && currentDate <birthDay)){
        age--;
    }

    console.log(age)
    // console.log(date)
    // console.log(currentDate);

}
// age("1995-05-15") 

//*Compute the final total checkout amount given the base price of an item and its active
//* discount percentage

const totalAmt = (price, discount)=>{
    let calculate = (price -(price * discount)/100).toFixed(2);
    console.log(`Discount = ${discount}% -> Output: $${calculate}`);
}
// totalAmt(125.50,15)

//*var-06

// const totalHrs = 45;
// let standardRate = 20;
// let calculation ;
// if(totalHrs>40){
//     let newRate = standardRate*1.5;
//     calculation = (40*20)+ ((totalHrs-40)*newRate);
//     console.log(`Hours worked = ${totalHrs}, Rate = $${standardRate}/hr-> Calculation:$${calculation}`);
// }
// else {
//     calculation = totalHrs * standardRate;
//     console.log(`Hours worked = ${totalHrs}, Rate = $${standardRate}/hr-> Calculation:$${calculation}`);
// }

//*var-07


const convert = (days)=>{
    let year = Math.floor(days/365);
    let rem = days%365;
    let month = Math.floor(rem/30);
    let remDays= rem%30;
    console.log(`Input: ${days}-> Output: ${year} Year, ${month} Month, and ${remDays} Days`);
}
// convert(400);

//*var -08

// const add = (num)=>{
    //5
    // let lastNum = num % 10;
    // let plus = lastNum ;
    // let remNum = Math.floor(num/10);
    //4
    // lastNum = remNum % 10;
    // plus += lastNum ;
    //3
    // let remNum1 = Math.floor(remNum/10);
    // lastNum = remNum1 % 10;
    // plus += lastNum ;
    
    //2
    // let remNum2 = Math.floor(remNum1/10);
    // lastNum = remNum2 % 10;
    // plus += lastNum;
    
    // 1
    // let remNum3 = Math.floor(remNum2/10);
    // lastNum = remNum3 % 10;
    // plus += lastNum;
    

    // console.log(plus);
// }
// add(44444)

const add = (num)=>{
    let sum =0;

    while(num > 0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    console.log(sum);
}
// add(54321)
//* var-09

const reverse = (num)=>{
    //4
    let lastNum = num % 10;
    let rev = lastNum * 1000;
    let remNum = Math.floor(num/10);
    //3
    lastNum = remNum % 10;
    rev += lastNum * 100;
    //2
    remNum1 = Math.floor(remNum/10);
    lastNum = remNum1 % 10;
    rev += lastNum * 10;
    //1
    remNum2 = Math.floor(remNum1/10);
    lastNum = remNum2 % 10;
    rev += lastNum;

    console.log(rev);
}
// reverse(1234)

//*var-10

const Emi= (principal, rate, months)=>{
    const r = rate/ 12/100;
    let emi = (principal * r * Math.pow(1+r,months))/(Math.pow(1+r,months)-1);
    console.log(`Principal = $${principal}, Annual Rate = ${rate}%, Months = ${months} -> Output: $${emi.toFixed(2)}`);
}
// Emi(100000,12,12)
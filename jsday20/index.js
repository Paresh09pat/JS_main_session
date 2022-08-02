console.log("Working");

//setTimeout and setInterval

// setTimeout(function  (itemOne,itemTwo,itemThree) {
//    console.log(`hello your order is ${itemOne} and ${itemTwo} and ${itemThree}` );
// }, 1000 ,"pao","chao","Array");


// setInterval(function (itemOne,itemTwo) {
//     console.log(`hello your order is ${itemOne} and ${itemTwo}`);
//  }, 1000,"pao","chao");



//  let array = ["Paresh","Patil","Raj","Jain"]

// console.log(array);

// setTimeout(function  (itemOne,itemTwo,itemThree,itemFour) {
//     console.log(`hello your order is ${itemOne} and ${itemTwo} and ${itemThree} or ${itemFour}` );
//  }, 2000 ,...array);


//  setInterval(function  (itemOne,itemTwo,itemThree,itemFour) {
//     console.log(`hello your order is ${itemOne} and ${itemTwo} and ${itemThree} or ${itemFour}` );
//  }, 1000 ,...array);


let hello = ["parth","jay","ram","sham"]

let hi = setInterval( (a,b,c,d) =>
{
    console.log(`hello your order is ${a} and ${b} and ${c} or ${d}`);
 }, 1000,...hello);

 if(hello.includes("jay")){
    clearInterval(hi);
 }

//--------------------------------------------------------------------------------


 const boardPassengers = (n,wait) => {
    const peoplePerGroup = n/3; // 60

    setTimeout(()=>{
        console.log(`We are boarding all ${n} passengers`);
        console.log(`There are 3 groups with ${peoplePerGroup} passenger in each group`);

    }, wait*1000); // 3 sec
    console.log(`Starting onboarding of the passengers in ${wait} hrs`);
 }
 boardPassengers(180,3);



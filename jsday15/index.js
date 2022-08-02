console.log("Working");

// function

// fn. declaration or defination or statement
function hello() {     // general function.
    console.log("Hello");
}


const hi = () =>{     // fat arrow fn.
console.log("Hi");
}

//const sayHi = function(a,b){  // function expression  // a,b is the parameters 
 //   console.log("saying hi");
//}
// sayHi(3,4)  // arguments


// Fat arrow fn. and fn. expression doesn't support hoisting irrespective of the var keyword assigned.

hello();  //    This will be hoisted only
hi();     // they aren't hoisted
//sayHi();  // they aren't hoisted

// Anonymous function - A function which doesn't have a name associated with it. It's generally used in function Expression.

// Named function expression - A function expression which has a name associated with the function.


var sayHi =  function heyHi(a){
    console.log("saying hi");
    a();
}
sayHi(function okayHi(){console.log("okay")}); // will work


//heyHi(); // heyHi wont work

// First class function - A function can be passed as values / arguments into another functions or can returned for the function .
//  This dual capability of the functions make the call as First class Function. They are also called as First class citizens.

const letsGo = function(){
    return function(){
        console.log("I am being returned as a function");
    }
}

let ff = letsGo()
console.log(ff);

ff();   // function call


// Higher Order Function - A function which accepts another function as an argument or returns a function are  called as Highre order functions. 
// The functions accepting first class function as an argument are called as Higher order function.

// So here in the above two examples - sayHi and LetsGo are Higher Order Function and OkayHi and 
// function(){} are First Class Function.


// Callback Function - These are those kind of functions which are called back after a certain period of time or are
// passed as values which can be called back as and when required.

setTimeout(() => {
    console.log("I am being called after 2 sec");
}, 2000);   // 2000 is in milliseconds


function catchCallBack(param){
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");

    param();
}

catchCallBack(function setAsArgument(){
    console.log("I the one who will be call back as and when required");
})

//---------------------------------------

const syHi = (friend) => {
    console.log("Hey Hi",friend + " thanks for the amazing Night Yesterday. Once thanks " + friend + ".");
}

const greetHi = (nameOfFriend,callbackFunc) => {
    console.log("I will be calling the callback function named sayHi. Watch it out!!");
    callbackFunc(nameOfFriend);
}

greetHi("harsh",syHi);   // calling the function
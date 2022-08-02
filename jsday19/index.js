console.log("working");

//----------- Closures ---------------------------

// Closures Its not something that we create manually or explicitly. It happens automatically in certain situations which we need to analyze/ realize ourselves.

// Closure makes a function remember all the variables that exited in the function birth place initially.

// Any function always have access to the variable environment of the execution context in which the function was created.

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        // so even though the execution context is destroyed the variable environment some how keeps living somewhere in the engine.
        // let passengerCount = 0; // only for once and then this will 
        passengerCount++;
        console.log(`The count of the passengers are ${passengerCount}`);
    }
}

const bookie = ticketBooking();
console.log(bookie); // function defination
console.dir(bookie);
bookie();
bookie();
bookie();


// let f;
// const g = function(){
//     const a = 23;
//     f = function(){
//         console.log(a * 2);
//     }
// }

// g();
// f();
// console.dir(f);



let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

const h = function(){
    const b = 25;
    f = function(){
        console.log(b * 2);
    }
}

g();
f();
//console.dir(f);
h();
f();
console.dir(f);
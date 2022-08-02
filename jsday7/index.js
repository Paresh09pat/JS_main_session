console.log("working");

//  while loop -------

let c = 1;
while(c <= 10){
console.log(`The value of c is ${c*3}`); // table of 3
c++; 
};


// do while

let d = 1
do {
    console.log(`The value of d is ${d}`);
d++;
} 
while (d <= 10);


// table of 2 using while loop

let e = 1;
while(e <= 10){
console.log(`2 * ${e} = ${2*e}`);
e++; 
}



let f = 1
do {
    console.log(`2 * ${f} = ${2*f}`);
f++;
} while (f <= 10);


//-----------------------------

// scope 

// let is block scope

let a = 20;
{
    let a = 10;
    console.log(a);  //10
}

console.log(a);  // 20


const n = 20;
{
    const n = 10;
    console.log(n);  //10
}

console.log(n);  // 20


var m = 20;
{
    var m = 10;
    console.log(m);  //10
}

console.log(m);  // 10


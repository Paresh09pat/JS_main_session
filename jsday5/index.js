console.log("working");

// (++) increment and (--) decrement operators ---------------------------------------

let c = 2, d = 3;
console.log(c++);  // 2
console.log(++d);  // 4

// prefix operators/ postfix operators

// prefix operator (++variable) - they increase the value of the variable by 1 and then prints the value of the variable

// postfix operator (variable++)  - they don't increase the value at the instant itself, instead they first print the original/ previous value of the variable and then increase it by 1 .

let a = 2, b = 3;

console.log(a++); //2 // [a++ // a+1 // 2+1 // a=3]
console.log(a); // 3

console.log(++b); // [++b // b+1 // 3+1 //b= 4]
console.log(b);  // 4

let e = 4;
console.log(e++); // 4 // [e++ // e+1// 4+1 // e=5]
console.log(e++); // 5 // [e++ // e+1 // 5+1 // e=6]
console.log(++e); // [e++ // e+1 // 6+1 // e=7]
console.log(++e); // [e++ // e+1 // 7+1 // e=8]

let f = 3, g = 4;

console.log(f++ + ++g);  // f = 3// [f++ // f+1 // 3+1 // f=4] + [g++ // g+1 // 4+1 // g=5] // 3+5 // 8

console.log(f + g); // [ 4 + 5 // 9 ]

//------------------------------------------------------------------------

 let y = 9, z = 7

console.log(y++ - ++z); // y=9 [y++ // y+1 // 9+1 // y=10] - [z++ // z+1 // 7+1 // z=8] // 9-8 // 1

console.log(y-z);  // [10 - 8 // 2]

//--------------------------------------------------------------

 let h = 4, i=5;

  console.log(--h - i--);  // [--h // h-1 // 4-1 // h=3] - i = 5 // [ i--// i-1 // 5-1 // i=4] ( occur after output) // (3-5) //-2

  console.log(h - i);  // [3 - 4 // -1]

//--------------------------------------------

// logical operators : && (logical AND), || (logical OR), ! (logical NOT)
d = 5;
console.log(1 && 4);  // 4 // if first value is non zero then it gives the answer always second value.

console.log(true && false); // false // if both true then gives value true.

console.log((d<5) || 10);  // 10

console.log(!0); //true   // always gives output in true or false only // if the operand is true then the output is false and vice-versa.

//ternary operators---------------

let xx = 4, yy = 3 ;

// condition? expression1 : expression2;

xx > 10 ? console.log('true'): console.log('false'); // if condition true expression 1 is executed, if condition false expression 2 is executed.

yy>10 ? console.log(yy++): console.log(--xx); 

console.log(yy++ + --xx);  // yy=3 [yy++ = 3+1 = 4] + [--xx = 3-1 = 2] // 3+2  // 5
console.log(yy + xx); // [4+2 = 6]


//------------------------

let x = 5;

x = (x++, ++x); // flow moves left to right //always the right value are assigned
console.log(x); // 7

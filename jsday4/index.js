console.log("working");

console.log(2+3);  //5
console.log(2-3);  //-1
console.log(2*3);  //6
console.log(2/3);  //0.666
console.log(2%3);  //2  (% called modulus- remainder left of '/' is divided and right of '/' is divisor)


// comparison operators - it always give the output in boolean values (like true or false)
// comparison operator compare two values and give back a boolean values. comparison operator are used in decision making and loops.

//    == (double equal to),  === (triple equal to),  != (not equal to), !== (strict not equal to),
// > (greater than),  < (less than),  >= (greater than or equal to), <= (less than or equal to)


console.log(2<3);  // true
console.log(2>3);  // false
console.log(2<=3); // true
console.log(2>=3); // false


//  IMP for interview
// double equal check only values not data type
// triple equal check both values and data type 
// data type ex. number, string and boolean type

console.log(3=='3');  // true  ( 3 is number  '3'  is string ) // true if the operand are equal.
console.log(3 == 5);  // false
console.log('5' == '5');  // true

console.log(3==="3");  //false  //  true if the operands are eqaul and of the same type.
console.log(5 === 5);  // true
console.log("true" === "true"); // true


// == or !=  and === or !==

console.log(3!='3');  //false  // true if the operands are not equal. type not matters.
console.log('5' != '4');  // true

console.log("parth" !== "parth");  // false  // typically it based on the type, same type and same value gives false.
console.log('33' !== 33); // true  // true if the operands are equal but of different type.


// Bitwise 

console.log(2&3);  // 0 0 1 0  , 0 0 1 1   (2)   //  AND
console.log(2/3);  // 0.6666        //  OR
console.log(2^4);  // 1    //  XOR
console.log(!2);  // false
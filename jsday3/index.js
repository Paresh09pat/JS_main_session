console.log("hello day3");

let age;    //declared
age = 24;   //initialized



let myName = "paresh"; 

console.log(age, myName);

age = 27;
myName = "parth"

console.log(age, myName);
//-----------------------------------------------

const myHobby = "cooking";
const mySecondHobby = "cricket";

console.log(myHobby, mySecondHobby);

//---------------------------------------------

var myState;
myState = "maharashtra"

var myState = "maharashtra"
console.log(myState);

var myState = "UP"
console.log(myState);

//--------------------------------------------------

// Hoisting- it brings the declaration of the variable in the top of the code.

console.log(myCompany);   // undefined

var myCompany;
myCompany = "Prepbytes";
console.log(myCompany);

//---------------------------------

let myCompanyOne;
myCompanyOne = "TCS";
console.log(myCompanyOne);

//---------------------------------

const myCompanyTwo = "TATA";
console.log(myCompanyTwo);

//--------------------------------

// function are hoisted; because of that we can acces the function even before declaring them

addition();
console.log(addition);  // function defination

function addition() {
    let result = 2+3;
    console.log(result); //5
}

console.log(addition);  // function defination

//---------------------------------------------------------

// undefined - when we try to access a variable that is declared but not initialized.

console.log(hotel);          // fn undefiend
var hotel;
hotel ="parth";              // initialize - in this we can assign the value to the variable
console.log(hotel); 

// null- it a value that we initialize to a variable  which will later to replaced with some other value.

let myCountry = null;
console.log(myCountry);
myCountry = "India";
console.log(myCountry);

// not defined - when we try to access a variable that is not declare.


//-----------------------------------------------------------------------------------------------------------


console.log("Working");

//  Methods of creating functions

//--- Method 1 --------------------

function functionOne() {
    console.log("My name is Hari");
}
functionOne();

//----Method 2 : fat arrow function--------------------

const functionTwo = () => {
    console.log('This is function two');
}
console.log(functionTwo);
functionTwo();

//-----Method 3 : Anonymous function-----------------------------------

const functionThree = function(){
    console.log('I am function three and i am anonymous function');
}
console.log(functionThree);
functionThree();

// calling function with passing arguments and accepting with parameters.

const add  = (x,y) =>{    // parameters (params)
    let result = 0;
    result = x + y;
    console.log(result);
}

add(3,4); // arguments

//-----Pure functions -
// This is a function which gives you same output for same input passed.
// it dosen't give you different output for the same input every time we call the function. It dosent depend on some variables 
// whose value might change in the future, and therefore always gives u same values. Examples a function which
//  only uses constants in their body.

function area(r) {            // pure function
    let pi = 3.14;
    let area = pi * r * r;
    console.log(area);
}
area(3);



function additionOne(a,b) {   //  impure function
    let res = 5;              // function is depends on variable (res)
    res = res + a + b;
    console.log(res);
}
additionOne(3,4);
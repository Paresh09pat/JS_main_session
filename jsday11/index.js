console.log("Working");

// fat arrow function never supports hoisting

//----------------- OBJECTS --------------------
// Objects are collection of properties and methods

// Methods of creating object - It has two methods
// Objects converts the keys data types into string even if it isn't of string type. Basically all keys are of string type only.


// method 1
// The order of entry of properties and methods aren't preserved in objects.

const mobile = {
    brand : "Oneplus",
    camera : '32px',
    weight : 200,
    11 : "Android Version 12",
    displayInfo : function() {
        return (`The mobile using is of brand ${this.brand} which has a camera of ${this.camera} and has a weight of ${this.weight} which supports ${this[11]}`);
    }
} 

console.log(mobile);

//  Methods to access the property of an object

console.log(mobile.brand);  // objectName.propertyName 

console.log(mobile["brand"]);  // objectName["propertyName"]

// Methods to access the functions/ property of an object

console.log(mobile.displayInfo());

// Method to add property to an object outside the object.
mobile.ram = "8gb"
console.log(mobile);

// Method to delete an object

delete mobile.weight;
console.log(mobile);

// Method to check any property is present or not

console.log(mobile.hasOwnProperty("weight"));  // gives output as boolean value


const rao = Object.keys(mobile);
console.log(rao);


const values = Object.values(mobile);  // O is always capital
console.log(values);

for(const [key,values] of Object.entries(mobile)){
    console.log(key,values);
}

// Method 2 : Object Constructor

function Mobile(brand, camera, ram){
    this.brand = brand;
    this.camera = camera;
    this.ram = ram;
}

const onePlus = new Mobile ("onePlus","48px","8gb");
const motorola = new Mobile ("motorola","16px","16gb");

console.log(onePlus);
console.log(motorola);


//------------------------------Extra Practice----------------------------------

const laptop = {
    Name : "hp",
    weight : '1.8kg',
    battery : 5000,
    processor : "i5",
    model : "windows11",
    displayInfo : function(){
          return (`My laptop name is ${laptop.Name} has weight in kg is ${laptop.weight} with the long life battery of ${laptop.battery} MAH with ${laptop.processor} processor` );
    }
}
console.log(laptop);

//------------------

console.log(laptop.battery); // 5000

console.log(laptop['model']);   // windows11

//-----------------------

console.log(laptop.displayInfo());  // it relate with line 81

//----------------------

laptop.price = "550$";
console.log(laptop);

//------------------------

delete laptop.battery;
console.log(laptop);

//-----------------------

console.log(laptop.hasOwnProperty("weight")); // true

console.log(laptop.hasOwnProperty("battery")); // false because it already removes from the array.

//---------------------------

const key = Object.keys(laptop);
console.log(key);


const value = Object.values(laptop);  // O is always capital
console.log(value);

for(const [key,value] of Object.entries(laptop)){
    console.log(key,value);
}


//---Object constructor-------------

function Laptop(brand,battery, processor, model){
    this.brand = brand;
    this.battery = battery;
    this.processor = processor;
    this.model = model;
}
const hp = new Laptop ("hp","4000","i5","yu45")
const dell = new Laptop ("dell","3500","i3","yr745")
const lenovo = new Laptop ("lenovo","4500","i7","pp75")

console.log(hp);
console.log(dell);
console.log(lenovo);

//------------------------ this keyword ------------------------------

// In an object this refers to the name of the object
// Alone (global space) this refers to the Global Object (Window Object) 
// In regular function, this also points to the Global Object (Windows)
// Strict Mode - ( use strict), this refers to undefined

age = 23;
console.log(age);

console.log(this);


function add(){
//   "use strict";
console.log(this);      // if strict mode is use then they shows the output undefined.
}
add();


//-------------- Spread Operators ------------------------------

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr5 = [61,17,28,19,50];

console.log(arr1.concat(arr2));

console.log(arr1.concat(arr2,arr5));

let arr3 = [...arr1,...arr2];
let arr4 = [...arr1,...arr2,...arr5];

console.log(arr3);
console.log(arr4);




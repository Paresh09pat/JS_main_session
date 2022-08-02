function Person(fName,lName,birthYear){
    this.fName = fName;
    this.lName = lName;
    this.birthYear = birthYear;
}

const harry = new Person('harry','singh', 1997)
const parth = new Person ('parth','piyush', 2000)

console.log(harry);
console.log(parth);


const firstObject = {
    fname : "Ram",
    lName: "Patil",
    bYear: 1997,
}


const secondObject = {
    fName : "Hetal"
}

secondObject.__proto__= firstObject;  //  this is bad practice
console.log(secondObject.fName, secondObject.lName, secondObject.bYear);



const PersonProto = {
    calculateAge (){            // this is pointing to the object that is calling this method..........
        console.log(`My current age is ${2022 - this.bYear}`);
    }
    initialise(fName,lName, bYear){
        this.fName = fName;
        this.lName = lName;
        this.bYear = bYear;
    }
}

const jarvis = Object.create(PersonProto);
console.log(jarvis);

jarvis.fName = "Jarvis";
jarvis.lName = "Stewart"
jarvis.bName = 1994;

jarvis.calcAge();

const hary = Object.create(PersonProto);
console.log(harry);
hary.initialise("Harry","Potter", 1980);

console.log(hary);


// Classes - Classes in JS dosen't work exactly similar to that of classes in Java/C++
// They are just syntactic sugar to Object Prototype, instances that we have learnt. 
// Classes are special kind of Functions.


// Syntax :-
// 1. Classes are not hoisted.
// 2. Classes are called as First Class Citizens.
// 3. Classes are used in strict mode.


const PersonClass = class {
    constructor(fName,lName, bYear){
        this.fName = fName;
        this.lName = lName;
        this.bYear = bYear;
    }
    calcAge (){            // this is pointing to the object that is calling this method..........
        console.log(`My current age is ${2022 - this.bYear}`);
    }
}

const steve = new PersonClass("Steve","Smith", 1980)
console.log(steve);

steve.calculateAge();

steve.prototype.greet = function(){
    console.log(`Hi Steve! How are you?`);
}

steve.greet();
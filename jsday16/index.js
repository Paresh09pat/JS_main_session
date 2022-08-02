console.log("Working");

let myObject = {
    name : "Bharat",
    gender : "Male",
    age : 25,
    showInfo : function(){
        console.log(`Name of the person is ${this.name} whose gender is ${this.gender} and age is ${this.age}`);
       }
    }

    console.log(myObject);
    myObject.showInfo();

    let secondObj = {
        name : "Kavya"
    }

    secondObj.__proto__= myObject;
    console.log(secondObj.name, secondObj.gender, secondObj.age);

    let array = [1,2,3,4,5];

    function add(){
        console.log("hi");
    }

    console.log(array.__proto__);
    console.log(array.__proto__.__proto__);
    console.log(array.__proto__.__proto__.__proto__);


    console.log(array.__proto__== Array.prototype);
    console.log(array.__proto__.__proto__== Object.prototype);
    console.log(array.__proto__.__proto__.__proto__== null);

    console.log(add.__proto__);
    console.log(add.__proto__.__proto__);
    console.log(add.__proto__.__proto__.__proto__);

    console.log(add.__proto__== Array.prototype);
    console.log(add.__proto__.__proto__== Object.prototype);
    console.log(add.__proto__.__proto__.__proto__== null);

    console.log(secondObj.__proto__);
    console.log(secondObj.__proto__.__proto__);
    console.log(secondObj.__proto__.__proto__.__proto__);

    console.log(secondObj.__proto__== Array.prototype);
    console.log(secondObj.__proto__.__proto__== Object.prototype);
    console.log(secondObj.__proto__.__proto__.__proto__== null);

    console.log(myObject.__proto__);
    console.log(myObject.__proto__.__proto__);
    console.log(myObject.__proto__.__proto__);
    console.log(myObject.__proto__== Array.prototype);
    console.log(myObject.__proto__.__proto__== Object.prototype);
    console.log(myObject.__proto__.__proto__== null);


    //  Call , Apply & Bind . They are used for function borrowing.
// let employeeOne = {
//     name : "Ravi",
//     employeeCode : 1,
//     domain : "Technical",
//     displayInfo : function(){
//         console.log(this.name, this.employeeCode, this.domain);
//     }
// }

// employee1.displayInfo();

// let employeeTwo = {
//     name : "Arya",
//     employeeCode : 2,
//     domain : "Developer",
// }

// let employeeThree = {
//     name : "Jaanvi",
//     employeeCode : 3,
//     domain : "HR",
// }

// employee1.displayInfo.call(employeeTwo);
// employee1.displayInfo.call(employeeThree);


let employeeOne = {
    name : "Ravi",
    employeeCode : 1,
    domain : "Technical",
}

let displayInfo = function(gender,age){
    console.log(this.name, this.employeeCode, this.domain);
}

let employeeTwo = {
    name : "Arya",
    employeeCode : 2,
    domain : "Developer",
}

let employeeThree = {
    name : "Jaanvi",
    employeeCode : 3,
    domain : "HR",
}

displayInfo.call(employeeOne,"Male",25);
displayInfo.call(employeeTwo,"Male",24);
displayInfo.call(employeeThree,"Female",23);

displayInfo.apply(employeeOne,["Male",25]);
displayInfo.apply(employeeTwo,["Male",24]);
displayInfo.apply(employeeThree,["Female",23]);

let resultOne = displayInfo.bind(employeeOne);
//console.log(resultOne);
resultOne("Male",25)

let resultTwo = displayInfo.bind(employeeTwo);
//console.log(resultTwo);
resultTwo("Male",24)

let resultThree = displayInfo.bind(employeeThree);
//console.log(resultThree);
resultThree("Female",23)
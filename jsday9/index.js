console.log("working");

// Array - 

const names = ['Siddhant','Ravi', 'Sharat','Harshita', true, null, 8007988089, 'pune', 23];
console.log(names);

console.log(names[4]); // true  // n-1 = 5-1 = 4 is index value 

// 3 methods of creating and array

// 1)

const week1 = [];
week1[0] = 'parth'
week1[1] = 'raj'
week1[2] = 'lakhan'
week1[3] = 'sandip'

console.log(week1);


// 2)  Array constructor   -------------------------

const array2 = new Array ('harsh', 'Ramu','jayesh');
console.log(array2);

// push method   -------------------------------

const newName = ['harshu','ramu','krupa','rajesh'];

newName.push('rani','rakhi');
console.log(newName);

// pop  ----------------------------------------

newName.pop();  // it removing last value from array
console.log(newName);

//-----------------------------------------------

console.log(typeof(newName));  //  object //IMP

//----------------------------------------------

week1.shift();   // removes 1st place object from array
console.log(week1);


week1.unshift();  // add object on 1st place in array
console.log(week1);

//---------------------------------------------------

const aNames = ['pune','delhi','chopda','shimla','mumbai','chopda','shirpur','chopda']

console.log(aNames.length);

console.log(aNames[aNames.length-1]); // aNames[4]  // it gives the values from the end

console.log(aNames.indexOf('chopda'));  // to find index number


console.log(aNames.lastIndexOf('chopda'));  // find last object if array have same duplicate object in that and provide the index value of the last object.


// splice and slice

const students = ['Sanjay','Anil','Jeevesh','jay','Pallavi','Ankita','Reshma','Gayatri']

// slice

const girls = students.slice(4)
console.log(girls);
console.log(students);

const boys = students.slice(0,4)
console.log(boys);

// splice 

students.splice(3,1,'Aditya','ravi')
console.log(students);

students.splice(4,1,'Paresh','Dhiraj')  //  it removes only object from array not added anything
console.log(students);

console.log(students.indexOf('Paresh'));


console.log(students.includes('Paresh'));  // to find anyone is present or not


// sort - This method manipulates (Arrange) original array 

students.sort();    // array in ascending alphabetical order
console.log(students); // this arrange the array students in the alphabetical order.

// ['Aditya', 'Anil', 'Ankita', 'Dhiraj', 'Gayatri', 'Jeevesh', 'Pallavi', 'Paresh', 'Reshma', 'Sanjay']
// new array after sorting

console.log(students[4]);   // Gayatri

(students.reverse());  // It reverse the array
console.log(students);

//-- to sort our array in descending order we use the methods sort followed by reverse

const numberArray = [1,2,4,3,5,6,8,7,9]  //  for number sort method functions differently.
// it converts them into string and then sort them giving us absurd sorted array
numberArray.sort();
console.log(numberArray);

//------------------------------------------

const ages = [23,34,12,15,21,36,42];

// for of loop
for(const values of ages){
    console.log(values);
}

// for in loop
for (const index in ages){
    console.log(index);
}

// map 

let multiplyOfAges = ages.map((item)=>item*2)
console.log(multiplyOfAges);

// filter

function hi(age){
    return age >= 18;
}

let filteredAges = ages.filter(hi)
console.log(filteredAges);

// Reduce

let reducedArray = ages.reduce((a,b) => a+b,0);
console.log(reducedArray);

let Y = students.reduce((acc,curr) => acc+curr);
console.log(Y);
console.log("Working");

// Strings --------------------------------------------
// Mostly use double course .

const anyString = "Paresh Patil ";
const myAddress = "1 anjai niwas, machala - 425107";
//const myFriendsRelation = " Father's Brother";

let myName = "Jayesh Rao";
let myProfession = "Standup Comedian";
let mySalary = 100000;
let mySentence = `My favorite hobby is to watch ${myName} throwing some ${myProfession} and is they earn ${mySalary}`;
console.log(mySentence);

let string = "Hello People! Hope you have lovely weekend";

// charAt ----

console.log(string.charAt(4));  // o

// concat ----

console.log(anyString.concat(myAddress));

// endsWith and startsWith

console.log(mySentence.startsWith('M')); // true // it gives output in boolean value

console.log(mySentence.endsWith(0)); // true //  

//----------

console.log(mySentence.includes('hobby'));  // true

console.log(mySentence.indexOf('w'));  // 25 

console.log(mySentence.lastIndexOf('w'));  // 45

console.log(mySentence.length);  //  95 // index value is n-1// 96 - 1 = 95

console.log(mySentence.replace('watch', "see that the"));

console.log(mySentence.replaceAll('is', "hi")); // it replace all 'is' to 'hi' in the sentence

console.log(mySentence.search('watch'));  // It gives the output as index value of word 

console.log(mySentence.substr(5,9));

console.log(mySentence.substring(0,9));  // last index value is exclusive and therefore not included. so uptill index 8 only.

console.log(mySentence.substring(9,0));  // this will print same output like (0 , 9). if the end index is greater then the starting index , then it will reverse the indexes and find the value.

console.log(mySentence.slice(0 , 5)); // end index value is exclusive .

//---------------------------

let names = "Raju,Totlaseth, Shyam, Babubhaiya             "  // it gives an output in the form of array

console.log(names.split(','));

console.log(names.split(',')[3]);

//------------------------------------------

console.log(names.trim());   // it removes extra space from the string start and end.

console.log(names.trim().split(','));



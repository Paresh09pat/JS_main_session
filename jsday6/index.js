console.log("working");

//---------- Dicision making  ----------

// It is used to decide wheather a certain statement or block of statement will be executed or not.


// if is used to handle one case only and if else are handle two cases.

let age = 25;
if(age >= 18){
console.log("Eligible for voting!!");        // if handle only one condition
}
else{
console.log("not eligible for voting!!!");
}

// ternary operator are an alternate to the if and else condition.

age >= 18 ? console.log("Eligible for voting!!"): console.log("not eligible for voting!!!");

// if, else if, else blocks are used to handle three conditions

if(age >= 18 && age < 60){
    console.log("i am Adult!!");
}

else if(age >= 60){
console.log("i am senior citizen");
}

else{
    console.log("i am still a kiddo!!");
}

//--------------------------------------

// student scores >=90 grade A
// student scores 80-90 => grade B
// student scores 70-80 => grade c
// student scores marks < 70 grade D

var score = 90;
if(score>90){
    console.log("grade a");
}
else if(score>80 , score<=90){
    console.log("grade b")
}
else if(score>70 , score<=80){
    console.log("grade c")
}
else{
    console.log('grade d')
}


// switch - its used to handle more than 4 cases

let value = 2;
switch (value) {
    case 1:
        console.log("I am case 1");
        break;
    case 2:
        console.log("I am case 2");
        break;
    case 3:
        console.log("I am case 3");
        break;
    case 4:
        console.log("I am case 4");
        break;
    case 5:
        console.log("I am case 5");
        break;

    default:
        console.log("I am case 6");
        break;
}

//  for loop   // i is initializer

for(let i = 1; i <= 10; i++ ){
 console.log("I am ", i);
}

// write the table for 2

for(let i = 1;i<=10; i++ ){
    console.log("2 *", i, " = ", 2*i);  // table of 2
}

for(let i = 1;i<=10; i++ ){
    console.log("3 *", i, " = ", 3*i);  // table of 3
}

for(let i = 1;i<=10; i++ ){
    console.log(`4 * ${i} = ${4*i}`);  // table of 4
}

for(let i = 1;i<=10; i++ ){
    console.log(`${i} ** 2 = ${i**2}`);  // squares
}

// (i=1) // Statement 1 sets a variable before the loop starts (let i = 1).

// (i<=10) // Statement 2 defines the condition for the loop to run (i must be less than or equal to 10).

// (i++) // Statement 3 increases a value (i++) each time the code block in the loop has been executed.
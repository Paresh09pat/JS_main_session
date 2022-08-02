console.log("Working");

//-------- Sets --------------
// Sets are collection of UNIQUE values.
// All the values can occur only once. they don't allow duplicate values.
// It can hold values of any data type.
// we cant access indexes in sets

// Methods to create set

// Two methods 

// 1.

const setOne = new Set(["Apples","Oranges","Kiwi","Mangoes"])
console.log(setOne);

// 2.

const setTwo = new Set();
setTwo.add("Redmi")
setTwo.add("Oppo")
setTwo.add("Motorola")
setTwo.add("Lenovo")

console.log(setTwo);

setTwo.delete("Lenovo");
console.log(setTwo);

// setTwo.clear();
console.log(setTwo);


for(const keys of setTwo.keys()){
    console.log(keys);
}

for(const values of setTwo.values()){
    console.log(values);
}

for(const [keys,values] of setTwo.entries()){
    console.log(keys,values);
}


setTwo.forEach(function(value,key){//if two params then first is always value and then key
    console.log(key,value);
})

setTwo.forEach(function(value){//if only one param then it is always value
    console.log(value);
})

setTwo.forEach(function(key){//if only one param then it is always value
    console.log(key);
})

//--------------------------------------------


console.log("Working");

//----- Maps---------------------

// Maps are collection of key, value pairs.
// It preserve the order of insertion of properties.
// It also preserve the data type of properties/keys, i.e. can have properties of any data type.


// How to create Map?
// There are two methods

// 1. Inserting arrays as key value pairs to Map

const mapOne = new Map([
    ['fName' , "Paresh"],
    ['mName' , "Patil"],
    ['lName' , "Parth"],
    ['age' , "25"],
    ['hobby' , "Cricket"],
]);
console.log(mapOne);

// 2. 

const mapTwo = new Map();
mapTwo.set("mobile","Iphone");
mapTwo.set("Bike","MT15");
mapTwo.set("Car","McLaren GT");

console.log(mapTwo);

console.log(mapTwo.get("Car")); // to get value (McLaren GT) for key (Car) // get help us to access the values for the map properties.

console.log(mapTwo.has("Car"));  // it check the property or value is present or not // gives output in boolean values 

 // mapTwo.delete();
console.log(mapTwo.size);

console.log(typeof(mapTwo));

for(const keys of mapTwo.keys()){
    console.log(keys);
}

for(const values of mapTwo.values()){
    console.log(values);
}

for(const [keys,values] of mapTwo.entries()){
    console.log(keys,values);
}
console.log("------------------------------");

mapTwo.forEach(function(value,key){    //if two params then first is always value and then key
    console.log(key,value);
})

mapTwo.forEach(function(value){//if only one param then it is always value
    console.log(value);
})

mapTwo.forEach(function(key){//if only one param then it is always value
    console.log(key);
})


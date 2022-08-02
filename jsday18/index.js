console.log("Working");


//const PersonProto = {
//    calculateAge (){            
 //       console.log(`My current age is ${this.bYear} and my name is ${this.fName}`);
 //   },

//    initialise(fName,lName, bYear){
//        this.fName = fName;
//        this.lName = lName;
//        this.bYear = bYear;
 //   }
//}

//const ram = Object.create(PersonProto);
//console.log(ram);

//ram.fName = "ram";
//ram.lName = "shah";
//ram.bName = 1991;

//ram.calculateAge();



//const rob = Object.create(PersonProto);
//console.log(rob);
//rob.initialise("robbert","rao", 1990);

//console.log(rob);


//  Inheritance in Object.create()


const PersonProto = {
    calculateAge (){            // this is pointing to the object that is calling this method..........
        console.log(`My current age is ${2022 - this.bYear}`);
    },
    initialise(fName,lName, bYear){
        this.fName = fName;
        this.lName = lName;
        this.bYear = bYear;
    },
};


const steven = Object.create(PersonProto);
console.log(steven);
steven.initialise("Steven","Richard",1980);
steven.calculateAge();

const StudentProto = Object.create(PersonProto);

StudentProto.initial = function (fName, lName, bYear, course){
    PersonProto.initialise.call(StudentProto,fName,lName,bYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`Student's name is ${this.fName} and is pursuing course as ${this.course}`);
}

const sejhal = Object.create(StudentProto);
sejhal.initial("Sejal","Kaushal",1994,"CSE");
sejhal.introduce();
sejhal.calculateAge();


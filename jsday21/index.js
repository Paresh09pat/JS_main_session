console.log("Working");

// Event loop

// Whenever an asynchronous function is called, it is sent to a web API.
// After an web API they send to the waiting queue for execution. 
// The Event loop check it in waiting queue if there is an any function is there then they execute that.


//-------------------------------------------------------------------------------------------------------

//---------Jquery---------------

// Jquery - It is a javascript library, which provides us an effective method for doing some changes in our front-end and gives us essential features 
// like DOM Manipulation and AJAX interaction.


// $(".aa1").click(function(){
//    $(".rao").hide();    //  hide text only
 
   // $("p").toggle();   // hide first and show after second time
  
//})

// $(".aa2").click(function(){
//     $(".rao").show();  
// })


// Ajax - Ajax allows us to server calls and display a data without reloading the entire page.
// It allows us to communicate with the remote web servers in an asynchronous way. 
// With Ajax calls we can request data from web servers dynamically. It helps us to create CRUD (Create,Read,Update,Delete) Applications.
//Ajax - Asynchronous Javascript and XML


$('.aa1').click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/122",
        type: "GET",
        success: function(data){
            console.log(data);
            document.getElementsByTagName("p")[1].innerText = data.title;
        }
    })
})

//----------------------------------------------------------------------------------

// Callback Hell - Callback are just the name/convention for using javascript. It instead of immediately returning results like other functions,
// takes time to produce the result. So, if we stuck in some particular call which prevent us for making further calls ends us into callback hell.

// The structure of callback hell looks like pyramid/arrow shape.
// This makes our code look haphazard and makes it hard to understand.
// We should always try to avoid using multiple Callbacks to end up falling into callback hell.

const getEmpId = () => {
    setTimeout(() => {
        console.log("Fetching the Id's");
        let id = [1,2,3,4,5];
        console.log(id);

        setTimeout(() => {
            let empDetails = {
                fName : "Harsh",
                lName : "Bajaj",
                age :28,
            }
            console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`);

            setTimeout(() => {
                empDetails.gender = "Male",
                console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}
                and the gender is ${empDetails.gender}`);
            }, 2000)

        }, 2000)

    }, 2000)
}

//getEmpId();


// Promises - Promises are used to handle asynchronous operations in javascript.
// They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
// It also allows us to make API calls or fetch data from web server successfully. If not able to do so fetches us with error message



// It have three stages.
// 1. Pending       2. Resolved (fulfilled)        3. Rejected.


// const getId = new Promise((resolve, reject) => {        // Producer // resolve and reject are executor function.
//     setTimeout(() => {
//         let id = [1,2,3,4,5,];
//         resolve(id);
//         //reject("Error in fetching the details");
//     }, 2000);
// });

// getId                       // Consumer
//      .then((data) => {
//         console.log("The data is",data);
//      })
//      .catch((error) => {
//         console.log(error);
//      });



//------------- Promise Chaining ---------------------


     const getId = new Promise((resolve, reject) => {        // Producer 
        setTimeout(() => {
            let id = [1,2,3,4,5,];
            resolve(id);
            //reject("Error in fetching the details");
        }, 2000);
    });

    const getEmpDetails = (data) => {
        return new Promise ((resolve,reject) => {
            setTimeout(() => {
                let empDetails = {
                    fName : "Harsh",
                    lName : "Bajaj",
                    age :28,  
                }
                resolve (`The id of employee is ${data} and the name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`)
            }, 2000, data);
        })
    };
    const getData = async () => {
        const id = await getId;
        console.log(id);
    
        const empDetails = await getEmpDetails(id[2]);
        console.log(empDetails);
    }
    getData();
    
    

    

    getId
    .then ((id) => {
        console.log("The id is", id);
        getEmpDetails(id[1]).then((data) => {
            console.log('the data is', data);
        })
    })

    .catch((err)=> {
        console.log(err);
    });

    // .finally(() => {
    //     console.log("End of promise chaining");
    // })



let promise = new Promise ((resolve,reject) => {
    resolve();
})

promise
	.then(() => {
		console.log('first');
	})
	.then(() => {
		console.log('second');
	})
	.then(() => {
		console.log('third');
	});


    promise
	.then(() => {
		console.log("first");
	})
	.then(() => {
		return new Promise ((resolve,reject) => {
            setTimeout(() => {
                console.log("second");
                resolve();
                reject();
            }, 3000);
        })
        })
	
	.then(() => {
        console.log("third");
	});

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Async / Await - They are used to handle promises more efficiently. The word async before a function always means that the function always returns a promise. 
    //So, we therefore use async before the function name to return a promise instead of a value.

    // Await is used to wait for the result that is to be returned from the promise. So, we use await when we are calling a function which returns a promise.
    // Also, we can use them (Async/Await) for making API calls.

    // Await is always used with the keyword async

    // async function tryingPromises(){
    //     console.log("I am inside the function using async/await");
    //     const response = await fetch ("https://api.github.com/users");
    //     console.log("before the response is fetched");
    //     const users = await response.json();
    //     console.log("Users resolved");

    //     return users;
    // }

    // console.log("Before calling the function");
    // let data = tryingPromises();
    // console.log("After calling the function");
    // console.log("data received", data);
    // data.then((res) => {
    //     console.log(res);
    // })
    // console.log("End of code");


//----------------------------------------

// const functionOne = () => {
//     return"I am function One";
// }

// const functionTwo = () => {
//     return new Promise ((res,rej) =>{
// setTimeout(() => {
// return "I am function Two"
// }, 3000)
// })
// }

// const functionThree = () => {
// return " I am function Three"
// }

// const callAllFunction = async () =>{
//     let responseOne = functionOne();
//     console.log(responseOne);

//     let responseTwo = await functionTwo();
//     console.log(responseTwo);

//     let responseThree = functionThree();
//     console.log(responseThree);
// } 

// callAllFunction();

//----------------------------------------------------------------------------------------------

// 

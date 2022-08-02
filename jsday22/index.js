// console.log("Working");

// const latest = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let id = ['one','two','three','four','five'];
//        // resolve(id); 
//         reject (`error hai yaha please check`)
//     }, 1000)
// });

// latest
// .then((data) => {
//     console.log(data);
// })

// .catch((error) => {
//     console.log(error);
// })

// .finally(() => {
//     console.log("This is the text");
// });

//-----------------------------------------------------

//localStorage and sessionStorage

const handleSubmit = () => {
    const response = document.getElementById("text").value;
    console.log(response);
    localStorage.setItem("username", response)
    sessionStorage.setItem("username", response)
}

const showDetails = () => {
    const data = localStorage.getItem("username");
    console.log(data);
}

  

const btn1 = () =>{
    const response = document.getElementById("aa").value;
    console.log(response);
    localStorage.setItem("username", response)
    sessionStorage.setItem("username", response)

    const email = document.getElementById("bb").value;
    console.log(email);
    localStorage.setItem("email", email)
    sessionStorage.setItem("email", email)

    const number = document.getElementById("cc").value;
    console.log(number);
    localStorage.setItem("number", number)
    sessionStorage.setItem("number", number)
}

const btn2 = () => {

    const dataOne = localStorage.getItem("username")
    console.log(dataOne);

    const dataTwo = localStorage.getItem("email")
    console.log(dataTwo);

    const dataThree = localStorage.getItem("number")
    console.log(dataThree);
}


//------------------------

TypeError, ReferenceError, SyntaxError



// Symbol , iife (iife md)
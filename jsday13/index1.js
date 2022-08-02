console.log("----------------------------------");
console.log("Working");

//-------------- DOM MANIPULATION ------------------------

const elementOne = document.getElementById("description");
console.log(elementOne.innerHTML);
console.log(elementOne.innerText);
elementOne.innerText = "Okay good for now";
elementOne.innerHTML = `<div> Hope u are fine now !!! <div/>`


const elementTwo = document.getElementsByClassName("text")
console.log(elementTwo);
console.log(elementTwo[0]);
console.log(elementTwo[1]);
console.log(elementTwo[0].innerHTML);
console.log(elementTwo[0].innerText);
console.log(elementTwo[1].innerHTML);
console.log(elementTwo[1].innerText);



const elementThree = document.getElementsByTagName("h1"); // to call any
console.log(elementThree);

console.log(elementThree);
console.log(elementThree[0]);
console.log(elementThree[1]);
console.log(elementThree[0].innerHTML);
console.log(elementThree[0].innerText);
console.log(elementThree[1].innerHTML);
console.log(elementThree[1].innerText);


elementOne.style.color = "purple";

// onclick function
function changeText(){
    const elementFour = document.getElementById("description");
    const elementFive = document.getElementsByTagName("button");
     
    elementFive[0].style.backgroundColor = "blue";
    elementFour.style.color = 'red';
    elementFour.style.fontSize = '40px';
    
    document.getElementsByTagName("button")[0].style.backgroundColor = 'red';
    document.getElementsByTagName("h1")[0].style.backgroundColor = 'red';
    document.getElementsByTagName("h1")[0].style.color = 'white';
    document.getElementsByTagName("body")[0].style.backgroundColor = 'yellow';
}

// new element creation

const elementEight = document.createElement('div');
elementEight.className = "newDiv";
elementEight.id = "newDiv1";
elementEight.setAttribute("for","newDivCreated");
elementEight.innerHTML = `<b>I am Created the new Div </b>`;

console.log(elementEight);

document.querySelector("div#description").appendChild(elementEight);

const imgChange = document.createElement('img');  // image add
imgChange.setAttribute("src","image1.jpg");
document.querySelector("div#description").appendChild(imgChange); // link created element to the element to be change.


function image() {
    imgChange.setAttribute("src","image2.jpg");  // onclick image will change
    
    //elementOne.removeChild(elementEight);

   const elementTwo = document.createElement('div')
   elementTwo.style.border = "1px"
   

    const random = document.getElementById("pin")
    random.innerText ="pic"
}



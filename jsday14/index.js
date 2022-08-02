console.log("Working"); 

const elementOne = document.getElementById("cards");

function changeText(){

    const elementTwo = document.getElementById("cards");
    elementTwo.style.flexDirection = "column";

    const elementThree = document.getElementsByClassName("cardOne");
    elementThree[0].style.backgroundColor= "aqua";

    const elementFour = document.getElementsByClassName("cardTwo");
    elementFour[0].style.backgroundColor = "red"

    const elementFive = document.getElementsByClassName("cardThree");
    elementFive[0].style.backgroundColor= "pink";
    
    const elementSix = document.getElementsByTagName("button")
    elementSix[0].style.backgroundColor = 'yellowgreen'; 
}  

function out() {
    const elementOne = document.getElementsByTagName("h1")
    elementOne[0].innerHTML = `<div> Welcome to prepbytes !!! <div/>`
    elementOne[0].style.color = "yellowgreen"; 
     
    const elementTwo = document.getElementById("out")
    elementTwo.innerText ="sign out"
}

//----------------------------------------------------------------


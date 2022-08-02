console.log("working");

// Scope ----------------------------------------------

const a = 10;
{
    const a = 20;
    {
        const a = 30;
        console.log(a);  // 30
    }
    console.log(a);   // 20
}
console.log(a);  // 10

//-------------------------------------------------------

var b = 10;
{
    var b = 20;
    console.log(b);  // 20
}
console.log(b);  //  20  

//---------------------------------------------------------------

let f = 10;
function one() {                  // scope 1
    // console.log(f);           // 10
    
    two();
    function two() {             // scope 2
        let g = 20;
        console.log(f,g);       // 10,20

        three();
        function three() {      // scope 3
            let h = 30;
            console.log(f,g,h);
        }
        console.log(f,g);      // 10,20
    }

    console.log(f);  // 10
    
    four();
    function four() {          // sibling of scope 2 means it is in level of scope 2
        let i = 40;
        console.log("four",f,i);  // "four",10,40  // this is sibling of scope 2
    }

    five();
    function five() {            // sibling of scope 2 
        let j = 24;
        console.log("four",f,j);  // "four",10,24
    }
}
one();


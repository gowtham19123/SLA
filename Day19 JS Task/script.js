// Function
 
function add(){
    let a = 10;
    let b = 15;
    let sum = a + b;
    return sum;
}
let print=add();
console.log(print);

//expression

let expression =function mul(){
    let a = 5;
    let b = 6;
    let mul = a * b;
    return mul;
}
let print = expression();
console.log(print);

// arrow Funtion

    let result = (a,b) =>{ return a * b};
    let output = result(5,4);
    console.log(output);

    
   // Parameter
function parameter( a ,b)
{
    let div = a / b;
    return div;
}
let print = parameter( 50,10);
console.log(print);

// global
let x = 10;
function goble(){
    let x = 11;
    return x;
}
 let print = goble();
console.log(print);

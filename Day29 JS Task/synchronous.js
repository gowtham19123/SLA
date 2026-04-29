function shop(){
    return new Promise((resolve,reject) => {
        let manpower = true;
        if(manpower){
        resolve("Choose in Menu");
        }
        else{
            reject("wait for some time");
        }
    } );
}

    function order(){
         return new Promise((resolve,reject) => {
        let order = true;
        if(order){
        resolve("Recived All the Food");
        }
        else{
            reject("wait for some time");
        }
    });

    }
     function feedback(){
         return new Promise((resolve,reject) => {
        let food = true;
        if(food){
        resolve("Excellent ");
        }
        else{
            reject("Poor");
        }
    });

    }
shop().then((result) => {
    console.log(result);
    return order();
}).then((result) => {
    console.log(result);
    return feedback();
}).then((result) => {
    console.log(result);
});


// function sum(a,b){
//     return new Promise((resolve) =>{
//       let  result= a+b
//         resolve(result);
//     });   
// }
// function multi(val){
//     return val *5;
// }
// function sub(val){
//     return val - 3;
// }
// sum(5,5)
//     .then((item) => {
//     console.log(item);
//     return multi(item);
// }).then((item) => {
//     console.log(item);
//     return sub(item);
// }).then((item) => {
//     console.log(item);
// });
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
      setTimeout( ()=>{
        let food = true;
        if(food){
        resolve(" Excellent ");
        }
        else{
            reject("Poor");
        }
      },2000);
    });
}

async function print(){
    let p1 = await shop();
    console.log(p1);
    let p2 = await order();
    console.log(p2);
    let p3 = await feedback();
    console.log(p3);

}
print();

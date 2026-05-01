function process(){
    return new Promise((resolve,reject) =>{
         let data = true;
         if(data){
            resolve("Data Received...");
         }
         else{
            reject("Data not received");
         }
        
    });
}
function result(){
    let data_pause = false;
    return new Promise((resolve,reject) =>{
    if(data_pause){
            resolve("Data loading...");
         }
         else{
            reject("Data Error");
         }
         });

}
async function print(){
    try{
    let p1 = await process();
    console.log(p1);
    let p2 = await result();
    console.log(p2);
    }
    catch(error){
       console.log(error);
    }
}
print();
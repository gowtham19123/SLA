let cart = [];
function addtocart(product,callback){
    cart.push(product);
    let length = cart.length;
    callback(product,length);
}
function result(item,count){
    console.log(`Name :${item.name}`);
    console.log(`Count: ${count}`);
}
addtocart({id:1,name:"HTML",price:10000},result);
addtocart({id:1,name:"CSS",price:10000},result);
addtocart({id:1,name:"Javascript",price:10000},result);
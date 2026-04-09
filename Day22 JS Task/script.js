let obj = {id:1,name:"JS",mark:90,
sayhello: function (){
   console.log(this.mark);
}
};
console.log(obj.mark);
obj.mark=85;
obj.sayhello();


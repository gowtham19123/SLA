
const  rewrite=( name1='name1', name2='name2') => {
   const  fword= "I'm const can't change";
   let sword = "I'm let";
    return `${fword},${name1},${name2}`;
}
console.log(rewrite());
console.log(rewrite("Welcome1" ,"welcome2"));


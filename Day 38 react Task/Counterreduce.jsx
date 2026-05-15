import { useEffect, useReducer } from "react";


const initialvalue = { count:0 };

function reducer(total,action){

switch(action.type){
    case 'add':
        return { count : total.count+1};

    case 'sub':
        return { count : total.count-1};
    
    case 'reset':
        return{ count : 0};
    
    default:
        throw new Error ( `pls check action ${action.type}`);

}
    
}
export default function Counterreduce(){
    const [total,changevalue] = useReducer(reducer,initialvalue);

    useEffect( () => { 
        localStorage.setItem("Counter_Key",total.count.toString());

    },[total.count]);
    return(
        <div>
            <h1>Count: {total.count}</h1>
        <button onClick={ () => changevalue( { type:"add"})}> Increment </button>
        <button onClick={ () => changevalue( { type:"sub"})}> Decrement </button>
        <button onClick={ () => changevalue( { type:"reset"})}> Reset</button>
        </div>
    );
}
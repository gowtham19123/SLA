import { useState } from "react";

export default function List_product(){
    const [value,getvalue] = useState('');
    const arr = ["TV","AC","washing machine","phone","tablet"];
    const [mouseHovered,setmouseHovered] = useState(null);
    const filter_value = arr.filter((item) =>{
        return item.toLowerCase().includes(value.toLowerCase())
    } );


    return(
        <div>
         <input type="text" onChange={
            (e) =>getvalue( e.target.value) }/>
       
        {filter_value.length > 0 ?  (     
        <ul>
            {filter_value.map( (list,index) => (
                 <li 
                 onMouseEnter={() =>setmouseHovered(list)}
                 onMouseLeave={() =>setmouseHovered(null)}

                 className={ mouseHovered === list ? "product-item-highlighted":"product-item"}
                 
                 key={list} > {list}
                 
                 
                 
                 
                 </li>)
            )}
        </ul> ) : <li >No products available </li> 
            }
        
        </div>

    );
}
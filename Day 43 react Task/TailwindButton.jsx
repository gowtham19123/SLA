import { useState } from "react";

export default function TailwindButton(){
    const [activeButton,setactiveButton] = useState('left');
    const Buttons = ["left" ,"center","right"];
    const blue = "bg-blue-600";
    const gray ="bg-gray-600";
    return(
        <div>
        {Buttons.map((name) => {
         const isActive = activeButton === name;
        
    return(

        <button  key={name} onClick={ () => setactiveButton(name)}
        className={` ${isActive ? blue:gray} px-4 py-2 text-white rounded-lg m-5
         
        hover:bg-green-400
        active:bg-gray-600
        focus:ring-2 focus:ring-green-400"

       `} >{name}</button>
    );
        })}
        </div>
    );

}
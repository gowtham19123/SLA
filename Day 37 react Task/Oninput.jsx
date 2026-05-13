
import { useState } from "react";


export default function Oninput(){
    const [name,setShowtext] = useState('While Typing you can see the text ');
    const [darkmode ,setDarkmode] = useState(false);
    const backgroundcolor = darkmode ? "black":"white";
    const textcolor = darkmode ? "white":"black "
    return (
        <div style={{backgroundColor:backgroundcolor, color:textcolor, height:'100vh'}}>          
        <input type="text" placeholder="enter a text" onChange={( (e) => setShowtext(e.target.value))} />
          <h1>{name}</h1>
          <h1>{darkmode ? "Dark Mode":"LightMode" }</h1>
          <button onClick={() => setDarkmode(!darkmode)}> Change Theme </button>
          </div>

    );
}


import { useRef } from "react";

export default function Focusinput(){
    const inputref = useRef(null);
    const handleFocus= () =>{ inputref.current.focus()};
    return(
        <div style={{margin:"25px 0"}}>
            <input ref={inputref}  type="text" placeholder="Click button to focus me "/>
            <button onClick={ handleFocus}> Focus input </button>
        </div>
    );
}
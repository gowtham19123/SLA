function Button( {onClick,label}){
    return(
        <>
           <button onClick={onClick} style ={{ padding:'8px 16px' , cursor:'pointer'}}>{label} </button>
           
        </>
    );
}
export default Button;
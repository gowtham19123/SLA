import { Button, TextField } from "@mui/material";

export default function MuiLogin(){

    return(
        <div style={{ width:'100vw',height:'100vh',display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column' }}>
            
            <div style={{width:'240px',border:'2px solid green',padding:'20px' ,borderRadius:"30px"}}>
            <TextField  type="text" label="Username" variant="standard" /><br/>
            <TextField  type="password" label="password" variant="standard"/><br/>

            <div style={{ display:'flex' ,justifyContent:'space-between',marginTop:'20px'}} >
            <Button type="submit" variant="contained" > Submit </Button>
            <Button type="submit" variant="contained" sx={{backgroundColor:"red"}}> Cancel</Button>
            </div>

            </div>
        </div>
    );
}
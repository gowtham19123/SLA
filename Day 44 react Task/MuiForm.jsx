import { Button, Grid, TextField, Typography } from "@mui/material";
import MuiButton from "./Components/MuiButton";



export default function MuiForm(){
    return(
        <div style={{ width:'100vw',height:'100vh',display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
        <div style={{width:'50%'}}>
            <Typography>
                <h2> Create a Account </h2>
            </Typography>
            <Grid container spacing={2}>
        <Grid size={{xs:12,sm:6}}>
             <TextField  label="Fristname" type="text" variant="standard" />
        </Grid>
         <Grid size="xs:12,sm:6">
             <TextField  label="Lastname" type="text" variant="standard"/>
        </Grid>
        </Grid>
        <TextField label="Email" type="email" variant="standard"/><br/>
        <TextField label="Password" type="password" variant="standard"/><br/>
        <MuiButton text="Create Account" type="submit" variant="contained" sx={{mt:4}}/>
        </div>
        </div>
        
    );
}
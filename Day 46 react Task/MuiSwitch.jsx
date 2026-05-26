import { Box,FormControlLabel, Switch, Typography } from "@mui/material";
import { useState } from "react";

export default function MuiSwitch(){

    const [darkmode,setdarkmode] = useState(false);
    const  bcolor = darkmode ? 'black' :'white';

    const tcolor = darkmode ? 'white':'black';

    const  handlemode = (e) =>{ setdarkmode(e.target.checked);

    };

    

    return (
        <div>
            <Box sx={{backgroundColor:bcolor,p:5,border:'2px solid black',color:tcolor}}> This is a text </Box>
            <FormControlLabel
            control={<Switch
                 checked={darkmode}
                 onChange={handlemode}/>}
            label="Dark Mode">   
            </FormControlLabel>
            <Typography>
                 
                {darkmode ? "on":"off"}
            </Typography>

        </div>
    );
}
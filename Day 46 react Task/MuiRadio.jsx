import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react";


export default function MuiRadio(){
    const [gender,setGender] = useState('');
    function handelGender(e){
    setGender(e.target.value);
}
    return(
        <div>
        <FormControl>
            <FormLabel>
                Select Label
            </FormLabel>
        </FormControl>
        <RadioGroup onChange={handelGender}>
        <FormControlLabel
            value="Male"
            control={<Radio/>}
            label="Male">
        </FormControlLabel>
        <FormControlLabel
            value="Female"
            control={<Radio/>}
            label="Female">
        </FormControlLabel>
        </RadioGroup>
        <Typography>
            Seleced Gender :{gender}
        </Typography>
        </div>
    );
}
import { Button as MuiBaseButton } from "@mui/material";

export default function MuiButton({text,variant,type,sx}){
    return(
       <MuiBaseButton  variant={variant} type={type} sx={sx}>
        {text}
       </MuiBaseButton>
    );
}
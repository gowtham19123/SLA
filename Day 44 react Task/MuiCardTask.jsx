import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";

export default function MuiCardTask(){
    return(
        <div style={{width:'100vw',height:'100vh'}}> 
        <Card sx={{ml:4, width:'300px'}}>
            <CardHeader
                 title="Framework"
                 subheader="react"
            />
            <CardContent>
                 <Typography variant="body1">
                     React is Javascripte library than Frontend Framework
                 </Typography>
                 <Typography variant="p" color='secondary'>
                    💲9999
                 </Typography>
            </CardContent>
            <CardActions>
              <Button type="button" variant="contained" sx={{margin:'20px'}}> Buy </Button>
              <Button type="button" variant="outlined" sx={{margin:'20px'}}> view Detail </Button>
            </CardActions>
        </Card>
        </div>
    );
}
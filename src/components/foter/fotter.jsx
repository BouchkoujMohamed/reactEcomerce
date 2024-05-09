import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Fotter() {
    return (

    <div>
        <Box
        sx={{bgcolor:"#2b3445",
            py:1.3,
            borderTopLeftRadius:8,
            borderTopRightRadius:8}}
        >
            <Typography display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"HighlightText"}
                variant="h6"
                sx={{fontSize:18}}
                >
                disigned and devloped by
                    <Button sx={{fontSize:'18px',mx:0.5,textTransform:"capitalize",color:"#ff7790"}} variant="text" color="primary">mohamed bouchkouj</Button>

                @2024
            </Typography>
        </Box>

    </div>
    )
}

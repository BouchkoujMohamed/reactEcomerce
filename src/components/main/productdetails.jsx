import { Button, Stack, Typography } from "@mui/material";
import { Box} from "@mui/system";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Productdetails() {
    return (
    <Box  sx={{display:"flex",alignItems:"center",gap:2.5,flexDirection:{xs:"column" ,sm:"row"}}}>
        <Box display={"flex"} >
            <img width={"270px"} src="src\images\4\final.jpg" alt=""/>
        </Box>
        <Box flexGrow={1} sx={{textAlign:{xs:"center",sm:"left"}}}>
            <Typography variant="h5" textTransform={"uppercase"}>
                womn's fashion
            </Typography>
            <Typography variant="h4" sx={{fontSize:"22px" ,my:0.4,color:"crimson"}}>
                $19.00
            </Typography>
            <Typography variant="body1">
            
                Nos soldes de fin de saison sont là!! Découvrez-Les grace à nos prix doux, des vrais coup de cœur en stock LIMITÉ !!
            </Typography>
            <Stack direction={"row"} gap={1} my={1} sx={{display:"flex",justifyContent:{xs:"center" ,sm:"left"}}}>
                {['src/images/4/final.jpg',"src/images/4/4.jpg","src/images/4/3.jpg"].map((imag)=>{
                    return(
                        <img width={"90px"} height={"100px"} key={imag} src={imag} alt=""/>
                    )
                })}
            </Stack>
            <Button variant="contained" sx={{textTransform:"capitalize",mb:{xs:3 ,sm:0}}}>
                <AddShoppingCartIcon sx={{mr:1}} fontSize="small"/>
                buy now

            </Button>
        </Box>
    </Box>
  )
}

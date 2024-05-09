import {  IconButton, Rating, Stack, Typography, useTheme } from '@mui/material'
import { Box, Container } from '@mui/system'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useState } from 'react';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

import Dialog from '@mui/material/Dialog';
import { Close } from '@mui/icons-material';
import Productdetails from './productdetails';
import { useGetproductByNameQuery } from '../../redux/product';

export default function Main() {
    const themes=useTheme()

    const handleAlignment = (event,newValue) => {
        setMyData(newValue)
    };

    const [open, setOpen] =useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const AllProductsApi ='/products?populate=*';
    const menCategoryApi="products?populate=*&filters[category][$eq]=men"
    const womenCategoryApi="products?populate=*&filters[category][$eq]=women";

    const [myData,setMyData]=useState(AllProductsApi)





    const { data, error, isLoading }=useGetproductByNameQuery(myData)
    console.log(data)
    if(isLoading){
        return(
            <Typography variant='h5'>Loding.........</Typography>
        )
    }
    if(error){
        return(
            <Typography variant='h5'>{error.
// @ts-ignore
            message}</Typography>
        )
    }
    if(data){
        return (
            <Container  
                sx={{width:"80%" ,py:9}}>
                <Stack direction={"row"} sx={{display:'flex',alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"32px"}}>
                    <Box>
                        <Typography variant='h6'>Selected Products</Typography>
                        <Typography variant='body1' sx={{fontWeight:300}}> All our new arrivals in a exclusive brand selection </Typography>
                    </Box>
                    <ToggleButtonGroup
                        color='error'
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{".Mui-selected":{border:"1px solid rgba(233,69,96,0.5) !important",bgcolor:"initial"}}}
                        >
                        <ToggleButton sx={{color:themes.palette.text.primary}} className='myButton' value={AllProductsApi} aria-label="left aligned">
                            All Products
                        </ToggleButton>
                        <ToggleButton sx={{mx:"16px !important",color:themes.palette.text.primary }} className='myButton' value={menCategoryApi} aria-label="centered">
                            Men Category
                        </ToggleButton>
                        <ToggleButton sx={{color:themes.palette.text.primary}} className='myButton' value={womenCategoryApi} aria-label="right aligned">
                            woMen Category
                        </ToggleButton>
                        
                    </ToggleButtonGroup>
    
                </Stack>
                <Stack direction={"row"} sx={{display:"flex",flexWrap:"wrap" ,justifyContent:"space-between"}}>
                    {data.data.map((item)=>{
                        return(
                            <Card sx={{ maxWidth: 333,mt:6,":hover .MuiCardMedia-root":{rotate:"1deg",scale:'1.1',transition:"0.35s"} }}>
                            <CardMedia
                                sx={{ height: 277 }}
                                image={`${item.attributes.productimg.data[0].attributes.url}`}
                                title="green iguana"
                            />
                            
                            <CardContent>
                                <Stack direction={"row"} sx={{
                                    justifyContent:"space-between",
                                    alignItems:"center"}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.attributes.productTitle}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1" component="p">
                                    ${item.attributes.productPrice}
                                    
                                    </Typography>
                                </Stack>
                                <Typography variant="body2" color="text.secondary">
                                    {item.attributes.productDes}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:"space-between"}}>
                                <Button onClick={handleClickOpen} sx={{textTransform:"capitalize"}} size='large'>
                                    <AddShoppingCartOutlinedIcon sx={{mr:1}} fontSize='small'/>
                                    Add to card
                                </Button>
                                <Button size="small"><Rating name="read-only" precision={0.5} value={item.attributes.productRating} readOnly /> </Button>
                            </CardActions>
                        </Card>
                        )
                    })}
                </Stack>
                <Dialog 
                    sx={{".MuiPaper-root":{
                        maxWidth:{xs:"100%",md:800},overflow: "hidden"
                    }}}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <IconButton onClick={handleClose}
                        sx={{ ":hover":{
                        rotate:"180deg",transition:"0.3s",color:"red"
                        },position:"absolute" ,right:5,top:0,marginBottom:20}}
                        >
                        <Close/>
                    </IconButton>
                    <Productdetails/>
                </Dialog>
                
            </Container>
        )

    }
   
}

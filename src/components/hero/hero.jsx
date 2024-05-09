import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography, useTheme } from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

const myslider=[{text:"MEN",imge:"src/images/banner-15.jpg"},{text:"WOMEN",imge:"src/images/banner-25.jpg"}]

export default function Hero() {
    const theme=useTheme()
return (
    <Container sx={{
                width:'80%',
                mt:3,
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                pt:3
                }}>
            <Swiper 
                loop={true}
                flexGrow={1} 
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
            {myslider.map((itemes)=>{
                return(
                    
                <SwiperSlide key={itemes.text} >                
                    <img src={itemes.imge} alt="" />

                    <Box 
                    //  sx={{}}
                    sx={{ [theme.breakpoints.up('sm')]: {
                        position:"absolute",left:"10%", textAlign:"left"
                    }
                    ,[theme.breakpoints.down('sm')]: {pt:4,pb:6}}}
                    
                    >
                        <Typography variant="h5" sx={{color:"#222" }}>
                            LIFESTYLE COLLECTION
                        </Typography>
                        <Typography variant="h3" sx={{color:"#222" ,fontWeight:400,my:1}}>
                            {itemes.text}
                        </Typography>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            
                        >
                            <Typography variant="h5" sx={{color:"#222"}} >
                                SAL UP TO 
                            </Typography>
                            <Typography variant="h5" ml={1} sx={{color:"#d23f57" ,fontWeight:400,my:1}}>
                                20% OFF
                            </Typography>
                        </Stack>
                        <Typography variant="body1" ml={1} sx={{
                                color:"#000" ,fontWeight:300}}>
                                get free shopping on orders over $999.00
                        </Typography>
                        <Button sx={{
                                px:5,
                                py:1,
                                mt:2,
                                backgroundColor:"#222",
                                boxShadow:"0px 4px 16px rgba(43 ,52 ,69 ,0.1)",
                                color:"#fff" ,
                                borderRadius:"1px",
                                "&:hover":{
                                    backgroundColor:"#444",
                                    boxShadow:"0px 4px 16px rgba(43 ,52 ,69 ,0.1)",
                                }
                                }} variant="contained">
                                SHOP NOW
                        </Button>
                    </Box>
                </SwiperSlide>
                )
            })}
             </Swiper>
                <Box sx={{display:{md:"block", 
                        xs:"none",
                        width:"26.6%", 
                        gap:"10px",   
                        height:"320px"}}}>
                    <Box  position={"relative"} 
                        sx={{height:"150px" ,
                        mb:"5px"}} >
                    <img src="src/images/banner-17.jpg" alt="" width={"100%"} height={"150px" }/>
                    <Stack sx={{ position:"absolute",
                            left:30 ,
                            top:"50%",
                            transform:"translateY(-50%)"}} >
                        <Typography variant="caption" sx={{color:"#2b3445" ,fontSize:18}}>
                            NEW ARRIVALS
                        </Typography>
                        <Typography variant="h6" sx={{color:"#2b3445" ,fontSize:'16px'}}>
                            SUMMER
                        </Typography>
                        <Typography variant="h6" sx={{color:"#2b3445",fontSize:"16px"}}>
                            SALE 20% OFF
                        </Typography>
                        <Link sx={{
                            color:"#2b3445",
                            display:"flex",
                            alignItems:"center",
                            gap:"5px",
                            transition:"0.2s",
                            "&:hover":{
                                color:"#d23f57"
                            }
                            }}
                            href="#"
                            underline="none"
                            >
                                shop now
                            <ArrowForward sx={{fontSize:"13px"  }}/>
                        </Link>
                    </Stack>
                    
                    </Box>
                    <Box  sx={{position:"relative" ,height:"150px",mt:"20px"}}>
                    <img src="src/images/banner-16.jpg" alt="" width={"100%"} height={"150px" } />
                    <Stack sx={{ 
                            position:"absolute",left:30 ,
                            top:"50%",
                            transform:"translateY(-50%)"}} >
                        <Typography variant="caption" 
                            sx={{color:"#2b3445" ,
                            fontSize:'18px'
                            }}>
                            GAMING 4K
                        </Typography>
                        <Typography variant="h6" sx={{color:"#2b3445" ,fontSize:'16px'}}>
                            DESKDOP & 
                        </Typography>
                        <Typography variant="h6" sx={{
                            color:"#2b3445",fontSize:'16px',lineHeight:"16px"}}>
                            LAPTOPS
                        </Typography>
                        <Link sx={{
                            color:"#2b3445",
                            display:"flex",
                            alignItems:"center",
                            gap:"5px",
                            transition:"0.2s",
                            "&:hover":{
                                color:"#d23f57"
                            }
                            }}
                            href="#"
                            underline="none"
                            >
                                shop now
                            <ArrowForward sx={{fontSize:"13px"  }}/>
                        </Link>
                    </Stack>
                </Box>
        </Box>
    </Container>
    )
}

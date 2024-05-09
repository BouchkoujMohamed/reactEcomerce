import { Box, Container, Drawer, IconButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";


import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { Close } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import Links from "./links";

export default function Header3() {
  const [anchorEl, setAnchorEl] =useState(null);
  const open = (anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const mytheme=useTheme()
  const [opene, setOpen] =useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const linksheader=["Home","mega menu","full scren menu","pages","user acount","vender acount"];
    return (
      <Container sx={{display:"flex" ,justifyContent:"space-between",marginTop:5,width:"80%"}}>
        <Stack display={"flex"}>
          <Button
          sx={{display:"flex",
              width:222,
                // @ts-ignore
                background:mytheme.palette.myColor.main, alignItems:"center",
                color:mytheme.palette.text.secondary
              
              }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <WindowIcon/>
            <Typography
            sx={{padding:"0" , textTransform:"capitalize",mx:1 }}>
            catigories
            </Typography>
            <Box flexGrow={1}/>
            <KeyboardArrowRightIcon/>
          </Button>
          
          <Menu 
            sx={{".MuiPaper-root":{width:"220px",
            // @ts-ignore
            background:mytheme.palette.myColor.main, alignItems:"center",
            color:mytheme.palette.text.secondary}}}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ElectricBikeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>bikes</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LaptopChromebookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Electronics</ListItemText>
            </MenuItem>
            
            <MenuItem onClick={handleClose}> 
              <ListItemIcon>
                <AutoStoriesIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Boxs</ListItemText>
            </MenuItem>
            
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SportsEsportsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Games</ListItemText>
            </MenuItem>
          </Menu>
        </Stack>
        { useMediaQuery('(min-width:1150px)') && (
          <Stack direction={"row"} alignItems={"center"} gap={4}>
            {linksheader.map((links)=>{
              return(
                <Links tittle={links}/>
              )
            })}
            {/* <Links tittle="home"/>
            <Links tittle="mega menu"/>
            <Links tittle="full scren menu"/>
            <Links tittle="pages"/>
            <Links tittle="user acount"/>
            <Links tittle="vender acount"/> */}
        </Stack>
        )}
        { useMediaQuery('(max-width:1150px)') && (
          <IconButton  onClick={toggleDrawer('top',
          // @ts-ignore
                  true)}>
                    <MenuIcon/>
                  </IconButton>
        )
        }
        <Drawer
            sx={{".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper":{height:"100%"}}}
            // @ts-ignore
            open={opene}
            anchor={"top"}
            // @ts-ignore
            onClose={toggleDrawer('top',false)}>

            <Box 
                sx={{border:"2px solid white" , 
                width:444,mx:"auto", 
                position:"relative",
                padding:4,marginBottom:10}}>
              <IconButton onClick={toggleDrawer(
              // @ts-ignore
                false)}
                sx={{ ":hover":{
                  rotate:"180deg",transition:"0.3s",color:"red"
                },position:"absolute" ,right:40,top:0,marginBottom:20}}
                >
                <Close/>
              </IconButton>
              {[
                {mainLink:"home",subLink:["link1","link2","link3"]},
                {mainLink:"moga menu",subLink:["link4","link5","link6"]},
                {mainLink:"full screen menu",subLink:["link7","link8","link9"]},
                {mainLink:"pages",subLink:["link7","link8","link9"]},
                {mainLink:"user acount",subLink:["link7","link8","link9"]},
                {mainLink:"vender acount",subLink:["link7","link8","link9"]},
              ].map((item)=>{
                return(
                  <Accordion key={item.mainLink} elevation={0} sx={{background:"initial"}}>
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon sx={{color:"red"}}  />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    {item.mainLink}
                  </AccordionSummary>
                  <List sx={{my:0,py:0,color:"red"}}>
                  {item.subLink.map((subl)=>{
                    return(
                      <ListItem sx={{my:0,py:0}} >
                        <ListItemButton>
                          <ListItemText primary={subl} />
                        </ListItemButton>
                      </ListItem>
                    )
                  })}
                  </List>
                </Accordion>
                )
              })}
            </Box>
        </Drawer>
    </Container>
    )
}
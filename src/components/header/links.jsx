import { Box, Paper, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//list 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { KeyboardArrowRightOutlined} from '@mui/icons-material';



export default function Links({tittle}) {
  return (
    <Box sx={{display:"flex",
                alignItems:"center",
                position:"relative",
                zIndex:3,
                ":hover .show-paper": {
                    display:"block"},
                ":hover": {
                    cursor:"pointer"}
            }}>
        <Typography variant="body1">
            {tittle}
        </Typography>
        <ExpandMoreIcon sx={{
            fontSize:"16px", ml:1,color:"red"}}/>
        <Box className='show-paper' sx={{position:"absolute" ,
                            top:"100%",
                            left:"50%",
                            transform:"translateX(-50%)",
                            minWidth:170,
                            display:"none"
                        }}>
            <Paper  sx={{mt:3
                        }}>
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                                    <ListItemButton sx={{
                                        display:"flex",
                                        p:0,
                                        px:1.5}}>
                                    <ListItemText 
                                    sx={{".MuiTypography-root":{
                                            fontSize:"14px",
                                            fontWeight:300
                                        }}} 
                                        primary="dashbord"/>
                                    </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{position:"relative",":hover .show-products":{display:"block"}}}>
                        <ListItemButton sx={{
                            display:"flex",
                            p:0,
                            px:1.5}}>
                            <ListItemText sx={{".MuiTypography-root":{fontSize:"14px",fontWeight:300}}} primary="Products" />
                            <KeyboardArrowRightOutlined sx={{
                                fontSize:"20px", ml:1,}}/>
                        </ListItemButton>
                        <Box className='show-products'  sx={{position:"absolute",top:0, left:"100%",display:"none",}}>
                            <Paper  sx={{minWidth:120,ml:1}}>
                                <nav aria-label="secondary mailbox folders">
                                    <List>
                                    <ListItem disablePadding>
                                        <ListItemButton 
                                        sx={{
                                                display:"flex",
                                                p:0,
                                                px:1.5
                                            }}>
                                        <ListItemText
                                            sx={{".MuiTypography-root":{
                                                fontSize:"14px",
                                                fontWeight:300
                                            }}} 
                                            primary="Add Product " />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton 
                                            sx={{
                                                display:"flex",
                                                p:0,
                                                px:1.5
                                            }}
                                            component="a" href="#simple-list">
                                        <ListItemText
                                            sx={{".MuiTypography-root":{
                                                fontSize:"14px",
                                                fontWeight:300
                                            }}} 
                                            primary="Edit Product" />
                                        </ListItemButton>
                                    </ListItem>
                                    </List>
                                </nav>
                            </Paper>
                        </Box>
                    </ListItem>


                    <ListItem disablePadding>
                        <ListItemButton sx={{
                            display:"flex",
                            p:0,
                            px:1.5}}>
                        <ListItemText sx={{".MuiTypography-root":{fontSize:"14px",fontWeight:300}}} primary="Orders" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton sx={{
                            display:"flex",
                            p:0,
                            px:1.5}}>
                        <ListItemText sx={{".MuiTypography-root":{fontSize:"14px",fontWeight:300}}} primary="Profill" />
                        </ListItemButton>
                        
                    </ListItem>
                    
                    </List>
                </nav>
            </Paper>

        </Box>
        
        
    </Box>
  )
}

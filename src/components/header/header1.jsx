import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import {  Box, IconButton, ListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ColorModeContext } from '../../theme.jsx';
import  './headers1.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";

const options = [
  'AR',
  'EN',
  'FR',
];


export default function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] =useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuItemClick = (event,index
    ) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
      <div className="boxing flex">
        <div className="right-haeder1 flex">
          <div className="hote">Hote</div>
          <div className="free-shoping">free expres shoping</div>
        </div>
        <div className="icons flex">
          <div className="mode">
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined />
              </IconButton>
              )}
          </div>
          <div className="social flex">
            <List id="list"
                component="nav"
                aria-label="Device settings"
              >
                <ListItem 
                  
                  id="lock-button"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu"
                  aria-label="when device is locked"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClickListItem}
                >
                  <ListItemText 
                    sx={{".MuiTypography-root":{fontSize:"12px", color:"white" , }}}
                    id="ListItemText"
                    secondary={options[selectedIndex]}
                  />
                  <ExpandMore sx={{fontSize:"20px" , color:"red"}}/>
                </ListItem>
              </List>
              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'lock-button',
                  role: 'listbox',
                }}
              >
                {options.map((option, index) => (
                  <MenuItem id="MenuItem"
                    key={option}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            <TwitterIcon  className="media"/>
            <InstagramIcon className="media"/>
            <FacebookIcon className="media"/>
          </div>
      </div>
    </div>
  )
}

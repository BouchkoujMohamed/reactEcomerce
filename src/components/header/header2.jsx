import { ExpandMore, ShoppingCartOutlined } from "@mui/icons-material";
import { Container, IconButton, ListItem, Stack, Typography, useTheme } from "@mui/material";
import  './headers2.css';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";

const options = [
  'All catigory',
  'Juniper',
  'Plain',
];



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border:"1px solid #777",
  flexGrow:"0.4",
  '&:hover': {
    border:"1px solid #333",
  
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  Width: '277px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '330px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:"#777"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',

  },
}));

export default function Header2() {
  const [anchorEl, setAnchorEl] =useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event,
    index,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const themcolor=useTheme()
  

    return (
      <Container sx={{my:3 ,display:"flex" ,justifyContent:"space-between",width:"80%"}}>
        <Stack alignItems={"center"}>
          <ShoppingCartOutlined />
          <Typography>OUDADEN ART</Typography>
        </Stack>

        <Search sx={{borderRadius:"22px",
        display:"flex" ,
        justifyContent:"space-between"}}>
            <SearchIconWrapper >
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
              <List
                component="nav"
                aria-label="Device settings"
                sx={{
                  // @ts-ignore
                  background:themcolor.palette.myColor.main, borderTopRightRadius:'20px',
                  borderBottomRightRadius:'20px',
                  padding:"0",
                  paddingTop:"8px",
                  textAlign:"center"
                }}
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
                    sx={{width:"90px" ,textAlign:"center" ,"&:hover":{cursor:"pointer"}}}
                    secondary={options[selectedIndex]}

                  />
                  <ExpandMore sx={{fontSize:"16px" ,color:"red"}}/>
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
                  <MenuItem
                    id="#MenuItem"
                    key={option}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                    sx={{fontSize:"12px" ,color:"red" ,fontWeight:"bold"}}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            
        </Search>

        <Stack direction={"row"} alignItems={"center"} gap={"13px"}>
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <IconButton >
            <PersonIcon/>
          </IconButton>
        </Stack>
      </Container>
    )
  }
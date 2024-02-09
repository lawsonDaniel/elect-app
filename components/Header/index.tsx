"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { 
    Box,
     Typography,Button,Drawer,
     Divider,List,ListItem,IconButton,Hidden
 } from '@mui/material'
 import MenuIcon from '@mui/icons-material/Menu';
 import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [state, setState] = React.useState(false)
  const toggleDrawer = (open:boolean) => (event:  any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };
  const style = {
    py: 0,
    width: '100%',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
    
  };
  return (
    <Box className="w-screen flex items-center justify-between  p-2 absolute top-0  z-20">
        <img onClick={()=>{
        window.location.href = `/`
    }} className="w-[184px]  md:block h-[33px] object-contain " src="/logo.png" alt="logo" />
        <Box className="p-2  flex md:justify-center justify-between items-center gap-3">
        <Hidden mdUp>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon className="text-dark hamburger-menu"/>
        </IconButton>
      </Hidden>
        
        <Box className="md:flex hidden  gap-5 text-thin justify-center items-center mt-1  text-[#a9953c] h-[45px]">
         <a  className="" href="/">Home</a>
         <a href="/about">About</a>
        <a href="/contact">Contact</a>
        {/* <a href="#">Social</a> */}
        <a href="/auth/login">Login</a>
    </Box>
        </Box>
      
          <Drawer
            anchor='right'
            open={state}
            onClose={toggleDrawer(false)}
            className=" w-screen flex flex-col gap-5 hover:text-[#444] text-thin justify-center items-center p-6 ">
              <Box className="w-[80vw] flex flex-col bg-[#fff] p-2 items-center gap-4 h-screen text-[#000]">
                <Box className="flex w-full justify-between items-center mb-3">
                <CloseIcon onClick={toggleDrawer(false)}/>
                <a href="/auth/login" className='border rounded-[15px] w-[80px] items-center flex justify-center text-center p-1 '>Login</a>
                </Box>
              <List sx={style}>
              <ListItem className="mb-2">
              <a  className="font-bold" href="/">Home</a>
              </ListItem>
              <ListItem className="mb-2">
              <a  className="font-bold" href="/about">About</a>
              </ListItem>
              <ListItem className="mb-2">
              <a  className="font-bold" href="/contact">Contact</a>
              </ListItem>
              <ListItem className="mb-2">
              {/* <a  className="font-bold" href="#">Social</a> */}
              </ListItem>
            </List>
            
              </Box>
              
          </Drawer>
    </Box>
    
   
  )
}

export default Header

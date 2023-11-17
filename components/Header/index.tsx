/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { 
    Box,
     Typography
 } from '@mui/material'
 import LocationOnIcon from '@mui/icons-material/LocationOn';
 import PhoneIcon from '@mui/icons-material/Phone';
 import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
 import DragHandleIcon from '@mui/icons-material/DragHandle';
function Header() {
  return (
    // <Box >
    //      <Box className="flex p-4 justify-between items-center">
    //     <img className="w-[184px] h-[33px] object-contain" src="/logo.png" alt="logo" />
    //     <Box className="flex gap-4">
    //         <Box className="flex gap-1">
    //             <LocationOnIcon/>
    //             <Typography>University of Jos</Typography>
    //         </Box>
    //         <Box className="flex gap-1">
    //             <PhoneIcon/>
    //             <Typography>University of Jos</Typography>
    //         </Box>
    //         <Box className="flex gap-1">
    //             <CalendarTodayIcon/>
    //             <Typography>University of Jos</Typography>
    //         </Box>
    //     </Box>
    // </Box>
    //
    // </Box>
    <Box className="w-full  flex items-center justify-between p-2 absolute top-0 text-white z-20">
        <img className="w-[184px] h-[33px] object-contain " src="/logo.png" alt="logo" />
        <Box className="p-2  flex justify-center items-center gap-3">
        <Box className="flex gap-5 hover:text-[#eee] text-thin justify-center items-center mt-1  text-white h-[45px]">
         <a  className="text-[#fff] text-[]" href="/">Home</a>
         <a href="/about">About</a>
        <a href="#">Contact</a>
        <a href="#">Social</a>
        <a href="/auth/login">Login</a>
    </Box>
        </Box>
        
    </Box>
   
  )
}

export default Header
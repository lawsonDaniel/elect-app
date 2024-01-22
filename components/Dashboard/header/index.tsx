"use client"
/* eslint-disable @next/next/no-img-element */
import { Box, Typography,MenuItem,Menu,Button,Paper } from '@mui/material'
import Image from 'next/image'
import React,{useState} from 'react'
import Link from 'next/link'

function Header({users}:any) {
  let user = users.value
  user = JSON.parse(user)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
   console.log(user,'user stored')
  return (
    <Box className="flex bg-[#f0f2f5] text-[#546570] md:rounded-[44px]  h-[64px] items-center px-[30px] py-[11px] justify-between">
       <Typography>header</Typography>
       <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <img className="rounded-[100%] object-cover w-[38px] h-[38px]" width={38} height={38}  src={user?.profileImg} alt={' profile image'} />
      </Button>
     
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
      >
      <Typography>Email@Email.com</Typography>
      
        <img className="rounded-[100%] object-cover w-[38px] h-[38px]" width={38} height={38}  src={user?.profileImg} alt={' profile image'} />

        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    
    </div>
     
    </Box>
  )
}

export default Header
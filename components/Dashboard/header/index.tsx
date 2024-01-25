"use client"
/* eslint-disable @next/next/no-img-element */
import { Box, Typography,MenuItem,Menu,Button,Badge,Avatar} from '@mui/material'
import Image from 'next/image'
import React,{useState,useEffect, useLayoutEffect} from 'react'
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import UploadImageModel from '@/app/dashboard/Profile'
import Chip from '@mui/material/Chip';
import { UserClass } from '@/app/api/user.class'
import { logOut } from '@/util/auth'

function Header({users}:any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const [profileOpen,setProfileOpen] = React.useState<boolean>(false)
  const [user, setUser] = useState<any>(null);
  const handleProfileOpen = () => setProfileOpen(true);
  const handleProfileClose = () => setProfileOpen(false);
  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await UserClass.getSelf();
        setUser(userData?.data?.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
   console.log(user,'user stored')
  return (
    <Box className="flex bg-[#f0f2f5] text-[#546570] md:rounded-[44px]  h-[64px] items-center px-[30px] py-[11px] justify-between">
       <Typography>IEEE Project</Typography>
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
        <Box  className="md:w-[400px] w-full h-full p-3 flex flex-col gap-4  items-center">
          <Box className="flex  w-full">
            <Typography className="text-center w-full" >{user?.email}</Typography>
            <CloseIcon onClick={handleClose}/>
          </Box>
       <Box className="mt-3">
       <Badge
       onClick={()=>{
        handleProfileOpen();
        setAnchorEl(null);
       }}
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <EditIcon className="text-white text-[12px] bg-black rounded-[100%] p-1 w-[30px] h-[30px]"/>
        }
      >
        <Avatar className="w-[70px] h-[70px]" alt="Travis Howard"  src={user?.profileImg} />
      </Badge>
      
       </Box>
       <Chip label={user?.userType} />
       
       <Box className="flex gap-2 mt-1 cursor-pointer hover:bg-gray-100 w-full p-2 justify-center rounded-2xl" onClick={()=>{
          window.location.href = "./auth/login"
          logOut()
          setAnchorEl(null);
        }}>
       <LogoutIcon/>
        <Typography>Sign out of account</Typography>
       </Box>
    
        </Box>
    
      </Menu>
      <Menu 
       id="basic-menu"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
          <Typography>11</Typography>
        <UploadImageModel/>
      </Menu>
      <UploadImageModel
       user={user} open={profileOpen} handleClose={handleProfileClose}/>

    </div>
     
    </Box>
  )
}

export default Header
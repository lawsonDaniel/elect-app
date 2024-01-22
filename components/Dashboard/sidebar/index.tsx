"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import {
    LuLayoutDashboard,
  } from "react-icons/lu"
import { useRouter,usePathname } from 'next/navigation'
import ChatIcon from '@mui/icons-material/Chat';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';

function SideBar() {
    const router = useRouter()
    let pathName:string = usePathname()
   
    console.log(pathName)
  return (
  
    <Box className="lg:w-[190px]  md:w-[70px] absolute md:static bottom-0 cursor-pointer w-full md:justify-normal md:gap-[28px] justify-center py-[27px] px-[5px] items-center  bg-white md:rounded-[16px] md:h-[700px] h-[50px] md:my-[16px] flex md:flex-col">
        <Box 
        className="flex hover:md:bg-[#cfcfcf3d] lg:p-[20px] rounded-[10px]  flex-col md:flex-row items-center justify-center gap-1 lg:justify-start w-full lg:gap-[12px] h-[26px]" onClick={() => router.push('/dashboard')}>
            {
             <DashboardIcon className={`text-[24px] ${ pathName === '/dashboard' ? 'text-[#008069]': 'text-[#ADAFBB]'}`}/>
            }
        <Typography className={`font-GilroyBold text-[12px] lg:text-[17px] sm:hidden  lg:block ${ pathName === '/dashboard' ? 'text-[#008069]': 'text-[#ADAFBB]'}`}>Home</Typography>
        </Box>
        <Box className="flex hover:md:bg-[#cfcfcf3d] lg:p-[20px] rounded-[10px]  flex-col md:flex-row items-center justify-center gap-1 lg:justify-start w-full lg:gap-[12px] h-[26px]" onClick={() => router.push('/dashboard/chat')}>
            {
             <ChatIcon className={`text-[24px] ${ pathName === '/dashboard/chat' ? 'text-[#008069]': 'text-[#ADAFBB]'}`}/>
            }
        <Typography className={`font-GilroyBold text-[12px] lg:text-[17px] sm:hidden  lg:block ${ pathName === '/dashboard/chat' ? 'text-[#008069]': 'text-[#ADAFBB]'}`}>Chat</Typography>
        </Box>
        <Box className="flex hover:md:bg-[#cfcfcf3d] lg:p-[20px] rounded-[10px]  flex-col md:flex-row items-center justify-center gap-1 lg:justify-start w-full lg:gap-[12px] h-[26px]" onClick={() => router.push('/dashboard/message')}>
            {
             <AnnouncementIcon  className={`text-[24px] ${ pathName === '/dashboard/message' ? 'text-[#008069]': 'text-[#ADAFBB]'}`}/>
            }
        <Typography className={`font-GilroyBold text-[12px] lg:text-[17px] sm:hidden  lg:block ${ pathName === '/dashboard/message' ? 'text-[#008069]': 'text-[#ADAFBB]'}`}>BroadCast</Typography>
        </Box>
        <Box className="flex hover:md:bg-[#cfcfcf3d] lg:p-[20px] rounded-[10px]  flex-col md:flex-row items-center justify-center gap-1 lg:justify-start w-full lg:gap-[12px] h-[26px]" onClick={() => router.push('/dashboard/article')}>
            {
             <PostAddIcon className={`text-[24px] ${ pathName === '/dashboard/article' ? 'text-[#008069]': 'text-[#ADAFBB]'}`}/>
            }
        <Typography className={`font-GilroyBold text-[12px] lg:text-[17px] sm:hidden  lg:block ${ pathName === '/dashboard/article' ? 'text-[#008069]': 'text-[#ADAFBB]'}`}>Post</Typography>
        </Box>

       
      
    </Box>
  )
}

export default SideBar
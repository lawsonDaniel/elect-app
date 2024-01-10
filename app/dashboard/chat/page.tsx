"use client"
import { Box } from '@mui/material'
import React,{useEffect, useState} from 'react'
import Sidebar from './sidebar'
import Main from './main'
import { Socket } from '@/app/api/socket'


function Chat() {
    const [messageBarOpen,setMessageBarOpen] = useState<boolean>(true)
    const [activeUser,setActiveUser] =  useState(null)
    const [userInfo,setUserInfo] = useState<[]>([])

   useEffect(()=>{
    Socket.on('user',(data)=>{
      setUserInfo(data)
    })
   },[userInfo])
   if(userInfo && userInfo.length <1){
    Socket.emit('getUser')
   }
   console.log(userInfo,'user info')
  return (
    <Box className="flex w-full">
        <Sidebar setUserInfo={setUserInfo}  userInfo={userInfo} isOpen={messageBarOpen} open={setMessageBarOpen} activeUser={activeUser} setActiveUser={setActiveUser}/>
        <Box className="flex flex-col w-full">
        {/* <Header  sideBarOpen={messageBarOpen} setMessageBarOpen={setMessageBarOpen}/> */}
        <Main userInfo={userInfo}  sideBarOpen={messageBarOpen} activeUser={activeUser} />
        </Box>
   </Box>
  )
}

export default Chat
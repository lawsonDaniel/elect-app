"use client"
import { Box ,Dialog} from '@mui/material'
import React,{useEffect, useLayoutEffect, useState} from 'react'
import Sidebar from './sidebar'
import Main from './main'
import { Socket } from '@/app/api/socket'
import ChatDialog from './chatDialog'


function Chat() {
    const [messageBarOpen,setMessageBarOpen] = useState<boolean>(true)
    const [activeUser,setActiveUser] =  useState(null)
    const [userInfo,setUserInfo] = useState<[]>([])
    const [open, setOpen] = React.useState(false);

   useLayoutEffect(()=>{
    Socket.on('user',(data)=>{
      setUserInfo(data)
    })
   },[])
   if(userInfo && userInfo.length <1){
    Socket.emit('getUser')
   }
   console.log(userInfo,'user info')
   
   const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box className="w-full">
        <Sidebar handleClickOpen={handleClickOpen} setUserInfo={setUserInfo}  userInfo={userInfo} isOpen={messageBarOpen} open={setMessageBarOpen} activeUser={activeUser} setActiveUser={setActiveUser}/> 
        <ChatDialog setOpen={setOpen} open={open} handleClose={handleClose} activeUser={activeUser} userInfo={userInfo} />
   </Box>
  )
}

export default Chat
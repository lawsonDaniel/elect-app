"use client"
import { Box ,Dialog} from '@mui/material'
import React,{useEffect, useLayoutEffect, useState} from 'react'
import Sidebar from './sidebar'
import Main from './main'
import { Socket } from '@/app/api/socket'
import ChatDialog from './chatDialog'


function Chat() {
  const [messageBarOpen, setMessageBarOpen] = useState<boolean>(true);
  const [activeUser, setActiveUser] = useState<any>(null); // Change type accordingly
  const [userInfo, setUserInfo] = useState<any[]>([]); // Change type accordingly
  const [userData, setUserData] = useState<any[]>([]); // Change type accordingly
  const [open, setOpen] = React.useState<boolean>(false);
  
  useEffect(() => {
    const preUser: any = localStorage.getItem("users");
    if (preUser) {
      const parsedData = JSON.parse(preUser);
      setUserInfo(parsedData);
      setUserData(parsedData);
    }
  }, []);
  
  useLayoutEffect(() => {
    Socket.emit('getUser');
    Socket.on('user', (data) => {
      setUserInfo(data);
      setUserData(data);
      localStorage.setItem('users', JSON.stringify(data));
    });
  }, []);
  

   
   console.log(userInfo,'user info')
   
   const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box className="w-full">
        <Sidebar userData={userData} setUserInfo={setUserInfo} handleClickOpen={handleClickOpen}   userInfo={userInfo} isOpen={messageBarOpen} open={setMessageBarOpen} activeUser={activeUser} setActiveUser={setActiveUser}/> 
        <ChatDialog setUserInfo={setUserInfo} setOpen={setOpen} open={open} handleClose={handleClose} activeUser={activeUser} userInfo={userInfo} />
   </Box>
  )
}

export default Chat
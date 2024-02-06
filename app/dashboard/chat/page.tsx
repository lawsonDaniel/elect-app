"use client"
import { Box, Dialog, CircularProgress, Backdrop } from '@mui/material'
import React, { useEffect, useLayoutEffect, useState } from 'react'
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
  const [lowNetwork, setLowNetwork] = React.useState(true);

  useEffect(() => {
    const preUser: any = localStorage.getItem("users");
    if (preUser) {
      const parsedData = JSON.parse(preUser);
      setUserInfo(parsedData);
      setUserData(parsedData);
    }

  }, []);

  useEffect(() => {
    Socket.emit('connection')
    Socket.on('connection_status', (data: boolean) => {
      setLowNetwork(!data)
      console.log('connection status: ', data)
    })
    // Listen for the 'connect_error' event to check for errors
    Socket.on('connect_error', (error: any) => {
      if (error) {
        setLowNetwork(true)
      }

      console.error('Socket connection error:', error);
    });
  })
  useLayoutEffect(() => {
    Socket.emit('getUser');
    Socket.on('user', (data) => {
      setUserInfo(data);
      setUserData(data);
      localStorage.setItem('users', JSON.stringify(data));
    });
  }, []);



  console.log(userInfo, 'user info')

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box className="w-full overflow-hidden">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={lowNetwork}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Sidebar userData={userData} setUserInfo={setUserInfo} handleClickOpen={handleClickOpen} userInfo={userInfo} isOpen={messageBarOpen} open={setMessageBarOpen} activeUser={activeUser} setActiveUser={setActiveUser} />
      <ChatDialog setUserInfo={setUserInfo} setOpen={setOpen} open={open} handleClose={handleClose} activeUser={activeUser} userInfo={userInfo} />
    </Box>
  )
}

export default Chat
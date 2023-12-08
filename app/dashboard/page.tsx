"use client"
import React, { useState, useEffect } from 'react';
import Main from './main';
import Header from './header';
import Sidebar from './sidebar';
import { Box } from '@mui/material';
import { UserClass } from '../api/user.class';
import{ Socket } from '../api/socket';

function Page() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  const [activePage, setActivePage] = useState('overview');
  const [user, setUser] = useState<any>(null);
// Socket.emit('send_private_message',{
//       receiverId:"b7a48b82-d590-4023-9ad5-9722a70b3921",
//       type:"message",
//       message:"this is a text from react"
//     })
// useEffect(()=>{
//   Socket.on("receive_private_message",(data)=>{
//     console.log(data,'recevied message')
//     })
// },[Socket])
  useEffect(() => {
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

  const userType = user?.userType || 'student';
console.log(user)
  return (
    <Box className="flex w-full">
      <Sidebar userType={userType} isOpen={sideBarOpen} open={setSideBarOpen} activePage={activePage} setActivePage={setActivePage} />
      <Box className="flex flex-col w-full h-full">
        <Header user={user} sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
        <Main user={user} sideBarOpen={sideBarOpen} activePage={activePage} />
      </Box>
    </Box>
  );
}

export default Page;

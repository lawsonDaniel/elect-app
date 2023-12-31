import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { messagesData } from "@/util/testData";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Socket as socket } from "@/app/api/socket";

import Menu from "./menu";
import { Box, Typography } from "@mui/material";

type SidebarProps = {
  open: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  activeUser: null | number;
  setActiveUser: React.Dispatch<React.SetStateAction<any>>;
  userInfo: Array<any>; // Specify the type of userInfo array
  setUserInfo:any
};

function Sidebar({ open, isOpen, activeUser, setActiveUser, userInfo,setUserInfo }: SidebarProps) {
  const [nav, setNav] = useState(false);
  const [userType, setUserType] = useState("staff");
 
  useEffect(() => {
    const handlePrivateMessage = (data: any) => {
      setUserInfo((prevUsers: any) =>
        [...prevUsers].sort((a: any, b: any) => {
          if (a.id === data.receiverId) return -1; // a comes first
          if (b.id === data.receiverId) return 1; // b comes first
          return a.id - b.id; // otherwise, sort based on id
        })
      );
    };
    

    socket.on('privateMessage', handlePrivateMessage);

    return () => {
      socket.off('privateMessage', handlePrivateMessage);
    };
  }, [socket]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{
        minWidth: "300px",
        transition: 'margin-left 0.3s ease,width 0.3s ease',
      }}
      className="h-[100vh] w-[500px]  border-r text-black items-center overflow-none"
    >
      <Box className="w-full h-[120px] border-b p-4 relative bg-[#eee]  ">
        <Typography
          style={{
            fontFamily: "'Libre Baskerville', 'serif'",
          }}
          className="text-[24px]"
        >
          {' '}
          All Messages
        </Typography>
        <Box className="w-full">
          <Box className="flex w-full justify-between items-center gap-2">
            <Box className="border rounded-[10px] p-2 h-[50px] w-full flex bg-white items-center">
              <SearchIcon />
              <input
                className="outline-none w-full"
                placeholder="Search or start a new chat"
                type="search"
              />
            </Box>
            <FilterListIcon />
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          height: "calc(100vh - 120px)",
        }}
        className="flex flex-col overflow-auto"
      >
        {userInfo && userInfo.map((user: any, index) => (
          <Menu
            key={index}
            image={user?.profileImage}
            isOpen={isOpen}
            name={user?.fullName}
            message = {user?.active ? 'active' : `${(new Date() - new Date(user?.lastseen)) / 60000 < 1 ? 'just now' : (new Date() - new Date(user?.lastseen)) / 60000 < 60 ? Math.floor((new Date() - new Date(user?.lastseen)) / 60000) + ' minutes ago' : (new Date() - new Date(user?.lastseen)) / 3600000 < 24 ? Math.floor((new Date() - new Date(user?.lastseen)) / 3600000) + ' hours ago' : (new Date() - new Date(user?.lastseen)) / 86400000 < 30 ? Math.floor((new Date() - new Date(user?.lastseen)) / 86400000) + ' days ago' : new Date(user?.lastseen).toLocaleDateString()}`}
            top={0}
            sideBarOpen={activeUser === index && true}
            onClick={() => setActiveUser(user.id)}
            bottom={10}
          />
        ))}
      </Box>
    </div>
  );
}

export default Sidebar;

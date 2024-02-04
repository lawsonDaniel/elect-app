import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { messagesData } from "@/util/testData";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Socket as socket } from "@/app/api/socket";
import { getAuthUser } from "@/util/auth";

import Menu from "./menu";
import { Box, Typography } from "@mui/material";
import { arrangeUser } from "@/util/arrangeUsers";

type SidebarProps = {
  open: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  activeUser: null | number;
  setActiveUser: React.Dispatch<React.SetStateAction<any>>;
  userInfo: Array<any>; // Specify the type of userInfo array
  setUserInfo:any;
  handleClickOpen:() => void;
  userData: any
};

function Sidebar({ open, isOpen, activeUser,userData, setActiveUser, userInfo,setUserInfo,handleClickOpen }: SidebarProps) {
  const [nav, setNav] = useState(false);
  const [userType, setUserType] = useState("staff");
  const [searchValue,setSearchValue] = useState("")
  const userRecevier:any = getAuthUser();
  
  const handleSearch = (e: any) => {
    const inputValue = e.target.value.toLowerCase(); // Convert input value to lowercase
    setSearchValue(inputValue);
    // Assuming userInfo is an array of objects with a 'fullName' property
    const filteredUserInfo = userData.filter((user:any) => user.fullName.toLowerCase().includes(inputValue));
    // Now, you can use the filteredUserInfo array as needed, such as updating state with it
    setUserInfo(filteredUserInfo);
  };
  useEffect(()=>{
    if(searchValue.length <1){
      setUserInfo(userData)
    }
  },[searchValue])

 
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{
        minWidth: "300px",
        transition: 'margin-left 0.3s ease,width 0.3s ease',
      }}
      className="h-[100vh] w-full border-r text-black items-center overflow-y-auto"
    >
      <Box className="w-full h-min-content border-b p-4 relative bg-[#eee]  ">
        {/* <Typography
          style={{
            fontFamily: "'Libre Baskerville', 'serif'",
          }}
          className="text-[24px]"
        >
          {' '}
          All Messages
        </Typography> */}
        <Box className="w-full">
          <Box className="flex w-full justify-between items-center gap-2">
            <Box className="border rounded-[10px] p-2 h-[50px] w-full flex bg-white items-center">
              <SearchIcon />
              <input
                className="outline-none w-full"
                placeholder="Search or start a new chat"
                type="search"
                onChange={(event:any) => handleSearch(event)}
                value={searchValue}
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
            you={userRecevier?.id === user?.id }
            message = {
              user?.active
                ? 'active'
                : `${
                    (Number(new Date()) - Number(new Date(user?.lastseen))) / 60000 < 1
                      ? 'just now'
                      : (Number(new Date()) - Number(new Date(user?.lastseen))) / 60000 < 60
                      ? Math.floor((Number(new Date()) - Number(new Date(user?.lastseen))) / 60000) + ' minutes ago'
                      : (Number(new Date()) - Number(new Date(user?.lastseen))) / 3600000 < 24
                      ? Math.floor((Number(new Date()) - Number(new Date(user?.lastseen))) / 3600000) + ' hours ago'
                      : (Number(new Date()) - Number(new Date(user?.lastseen))) / 86400000 < 30
                      ? Math.floor((Number(new Date()) - Number(new Date(user?.lastseen))) / 86400000) + ' days ago'
                      : Number(new Date(user?.lastseen))
                  }`
            }
            top={0}
            sideBarOpen={activeUser === index && true}
            onClick={() => {
              handleClickOpen()
              console.log( `clicked`)
              socket.emit('openChat',{
                recevier:userRecevier?.id,
                sender:user.id
              })
              setActiveUser(user.id)
             
            }}
            bottom={10}
          />
        ))}
      </Box>
    </div>
  );
}

export default Sidebar;

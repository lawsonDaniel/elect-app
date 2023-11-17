import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { messagesData } from "@/util/testData";
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

import Menu from "./menu";
import { Box, Typography } from "@mui/material";
type SidebarProps = {
  open: React.Dispatch<React.SetStateAction<boolean>>; 
  isOpen: boolean; 
  activeUser:null | number; 
  setActiveUser: React.Dispatch<React.SetStateAction<any>>;
};
function Sidebar({ open, isOpen,activeUser, setActiveUser}:SidebarProps) {
  const [nav, setNav] = useState(false);
  const [userType,setUserType] = useState("staff")
  console.log(activeUser,'userType')
  const handleNav = () => {
    setNav(!nav);
  };
  
  
  return (
    <div style={{
      minWidth:"300px",
      transition: 'margin-left 0.3s ease,width 0.3s ease',
    }} className="h-[100vh] w-[500px]  border-r text-black items-center overflow-none">
       <Box className="w-full h-[120px] border-b p-4 relative bg-[#eee]  ">
            <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className="text-[24px]"> All Messages</Typography>
           <Box className="w-full">
                <Box className="flex w-full justify-between items-center gap-2">
                    <Box className="border rounded-[10px] p-2 h-[50px] w-full flex bg-white items-center">
                    <SearchIcon/>
                    <input className="outline-none w-full" placeholder="Search or start a new chat" type="search"/>
                    </Box>
                    <FilterListIcon/>
                </Box>
           </Box>
       </Box>
        <Box style={{
          height:"calc(100vh - 120px)"
        }} className="flex flex-col overflow-auto">
        {messagesData.map((message, index) => (
        <Menu
          key={index}
          Icon={message.icon}
          isOpen={isOpen}
          name={message.name}
          message={message.message}
          date={message.date}
          messageNumber={message.messageNumber}
          top={0}
          sideBarOpen={activeUser === index && true}
          onClick={() => setActiveUser(index)}
          bottom={10}
        />
      ))}
        </Box>


    </div>
  );
}

export default Sidebar;

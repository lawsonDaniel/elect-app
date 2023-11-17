import { Box, Typography } from "@mui/material";
import React from "react";


function Menu({ Icon, isOpen, name,message, top, bottom,onClick,sideBarOpen,date,messageNumber }:any) {
 // const { logOut } = useAuth();
 console.log(sideBarOpen,'sidebar')
  return (
    <div
      style={{
        transition: 'margin-left 0.3s ease,width 0.3s ease',
      }}
      onClick={onClick}
      className={!sideBarOpen?`flex items-center gap-2 justify-between w-full border-b  h-[70px] cursor-pointer hover:bg-[#eee] hover:text-black  p-3 `:`flex items-center gap-2 justify-between w-full border-b  h-[70px] cursor-pointer bg-[#eee] text-black  p-3 ` }
    >
        <Box className="flex gap-2 items-center">
        <Icon
        className={
          isOpen ? "w-[30px] h-[30px] stroke-1" : "w-[40px] h-[40px] stroke-1"
        }
      />
    <Box  className="flex flex-col gap-1">
    {isOpen && <p className=" text-[12px] font-bold tracking-wide capitalize">{name}</p>}
    {isOpen && <p className="text-[9px] tracking-wide capitalize">{message}</p>}
    </Box>
        </Box>
     
        <Box className="flex flex-col gap-1 items-end">
        {isOpen && <Typography className=" text-[12px] font-bold tracking-wide capitalize">{date}</Typography>}
           { messageNumber>0 && <Box className={isOpen? "flex w-[15px] h-[15px] bg-black text-white justify-center items-center rounded-[100%] text-[10px] p-2":"flex w-[20px] h-[20px] bg-black text-white justify-center items-center rounded-[100%] text-[10px] p-2" }>{messageNumber}</Box>}
        </Box>
    </div>
  );
}

export default Menu;

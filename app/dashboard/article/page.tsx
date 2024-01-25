"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import GridViewIcon from '@mui/icons-material/GridView';
import EditIcon from '@mui/icons-material/Edit';

function page() {
  return (
    <Box className="p-4 bg-gray-200 h-screen">
    <Box className="max-w-3xl mx-auto rounded-lg p-6">
    <Box className="flex flex-col md:flex-row items-center justify-evenly gap-4 w-full">
       <Box title="create a new post" onClick={
        ()=>{
          window.location.href = "article/newpost"
        }
       } className="bg-[#64b0ff] text-white min-w-[150px] w-full h-full min-h-[150px] flex items-center justify-center flex-col border  rounded-[15px] cursor-pointer hover:scale-110">
        <AddIcon className="w-[30px] h-[30px] rounded-[5px]"/>
       <Typography>New Post</Typography>
       </Box>
       <Box title="View all created Posts" className="bg-[#6486ff] text-white min-w-[150px] w-full h-full min-h-[150px] flex items-center justify-center flex-col border  rounded-[15px] cursor-pointer hover:scale-110">
       <GridViewIcon/>
       <Typography>View Post</Typography>
       </Box>
       <Box title="Edit All Created Post" className="bg-[#9264ff] text-white min-w-[150px] w-full h-full min-h-[150px] flex items-center justify-center flex-col border  rounded-[15px] cursor-pointer hover:scale-110">
       <EditIcon/>
       <Typography>Edit Post</Typography>
       </Box>
        </Box>
      </Box>
      </Box>
  )
}

export default page
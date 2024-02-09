import { Box, Typography } from '@mui/material'
import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function EventCard({name,location,date,color}:any) {
  return (
   <Box className="flex w-[350px] rounded-[10px] p-2 border border-[#c5c5c5] items-center  gap-4">
    <Box style={{
        background:color
    }} className={`w-[90px] h-[90px] flex items-center justify-center text-white  rounded-[10px]`} >
       {date}
    </Box>
    <Box className="flex-col items-center gap-4">
        <Typography className="text-[15px]">{name}</Typography>
        <Box className="flex items-center text-[12px] text-[#636363]">
            <FmdGoodIcon/>
        <Typography>{location}</Typography>
        </Box>
       
    </Box>
   </Box>
  )
}

export default EventCard
import React from 'react'
import { Box, Typography,Chip } from '@mui/material'

interface FUNCARG {
    title:string;
    color:string;
    approved:boolean;
    id:string
}
function Article({title,color,approved,id}:FUNCARG) {
  return (
    <Box onClick={()=>{
        window.location.href = `viewpost/${id}`
    }} className="flex cursor-pointer  hover:scale-110 flex-col w-full min-h-[200px] md:w-[400px] h-[400px]">
    <Box style={{
         background: color
    }} className={`w-full h-[300px] flex items-center justify-center text-white text-[24px]`}>
       
        <Typography style={{
        fontFamily: "'Libre Baskerville', 'serif'",
        transform: "skewX(15deg)",
        textTransform: "uppercase",
        fontSize: "30px",
        padding:"10px"
       
    }}>{title}</Typography>
    </Box>
    <Box className="flex justify-between items-center py-2">
    <Box>
   <Typography className='text-[24px] mt-3' style={{
        fontFamily: "'Libre Baskerville', 'serif'",
        textTransform: "capitalize",
    }}>{title}</Typography>
    <Typography className="text-[12px] font-thin">By Me</Typography>
   </Box>
    <Chip className={approved ? "bg-[#417c05]  text-white" : "bg-[#a09eff]  text-white"} label={approved ? "live" : "under review"} />
    </Box>
  
</Box>
  )
}

export default Article
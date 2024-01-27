import { Box, Typography,Chip, Button } from '@mui/material'
import React from 'react'

interface FUNCARG {
    title:string;
    approved:boolean;
    id:string
}
function Article({title,approved,id}:FUNCARG) {
  return (
   <Box className="flex items-center p-2 justify-evenly">
    <Typography className="w-[150px] self-center justify-items-center capitalize text-[11px] md:text-[15px] text-center">{title}</Typography>
    <Chip className="w-[100px] self-center justify-items-center text-[11px] md:text-[15px] text-center" label={approved? "live": "in-review"} variant="outlined" />
    <Typography  className="w-[100px] self-center justify-items-center text-[11px] md:text-[15px] text-center">12/12/20</Typography>
    <Button className="w-[100px] self-center justify-items-center text-[11px] md:text-[15px] text-center">Edit</Button>
   </Box>
  )
}

export default Article
import { Typography,Box } from '@mui/material'
import React from 'react'

function Recipients({name,level}:any) {
  return (
    <div className="flex flex-col bg-black text-white w-full rounded-lg p-4">
        <Box>
        <Typography>{name}</Typography>
        </Box>
       <Box>
            <Typography className="text-[12px]">{ level ? level+" level" : "staff"} </Typography>
       </Box>
    </div>
  )
}

export default Recipients
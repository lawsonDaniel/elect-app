import { Typography,Box } from '@mui/material'
import React from 'react'

function Recipients() {
  return (
    <div className="flex flex-col bg-black text-white w-[400px] rounded-lg p-4">
        <Box>
        <Typography>student name</Typography>
        </Box>
       <Box>
            <Typography className="text-[12px]">400 level</Typography>
       </Box>
    </div>
  )
}

export default Recipients
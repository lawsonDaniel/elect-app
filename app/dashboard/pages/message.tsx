import { Box, Typography } from '@mui/material'
import React from 'react'

function Message() {
  return (
    
    <Box className="p-4 bg-[#eee]">
        <Box className="w-full h-[100vh] overflow-visible bg-[#fff] rounded-lg p-4">
            <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className='text-[24px]' >Send A Message</Typography>
            <Box className="flex flex-col">

            </Box>
        </Box>
    </Box>
  )
}

export default Message
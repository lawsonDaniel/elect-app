/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Box, Typography, Chip } from '@mui/material'

interface FUNCARG {
  title: string;
  color: string;
  approved: boolean;
  id: string
}
function Article({ title, color, approved, id }: FUNCARG) {
  return (
    <Box onClick={() => {
      window.location.href = `viewpost/${id}`
    }} className="flex shadow-xl cursor-pointer  scale-80 flex-col w-[300px] border border-[#bcbcbc] rounded-[10px] p-3 min-h-[200px] md:w-[400px] h-[400px]">
      <img className='w-full h-[400px] min-h-[200px] ' alt="avatar" src={`https://api.dicebear.com/7.x/identicon/svg?seed=${title}?backgroundType=gradientLinear,solid`}
    />
      <Box className="flex justify-between items-center py-2">
        <Box>
          <Typography className='text-[24px] mt-3 p-3' style={{
            fontFamily: "'Libre Baskerville', 'serif'",
            textTransform: "capitalize",
          }}>{title}</Typography>
          {/* <Typography className="text-[12px] font-thin">By Me</Typography> */}
        </Box>
        {/* <Chip className={approved ? "bg-[#417c05]  text-white" : "bg-[#a09eff]  text-white"} label={approved ? "live" : "under review"} /> */}
      </Box>

    </Box>
  )
}

export default Article
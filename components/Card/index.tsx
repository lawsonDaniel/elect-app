/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material'
import React from 'react'

function Card() {
  return (
    <Box className="w-[480px] h-[580px] md:w-[380px] md:h-[480px] lg:w-[380px] lg:h-[480px] rounded bg-[#fff] hover:shadow-sm">
        <img src="img1.jpg"  alt="card img"/>
        <Box className="p-3">
            <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }}  className="text-[#000] text-[24px]">Card Header</Typography>
            <Typography className='text-[#A4A4A4] text-[12px] font-lighter'>Upcoming</Typography>
            <Typography className='text-[15px] font-light'>Get into our predegree programme study for one year and get to study a Bsc course of your choice.</Typography>
        </Box>
    </Box>
  )
}

export default Card
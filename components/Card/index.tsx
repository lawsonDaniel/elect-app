/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material'
import React from 'react'

interface FUNCTIONARG{

}
function Card() {

// approved: true

// approviedBy: null

// article: "{\"blocks\":[{\"key\":\"pk8g\",\"text\":\"hello \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"

// createdAt: "2024-01-26T17:57:33.000Z"

// id: "b00df680-848a-4f74-a453-0b873448994c"

// title: "name"

// updatedAt: "2024-01-26T17:57:33.000Z"

// userId: "c5773eb9-2699-473e-8073-5b0fb44ae150"
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
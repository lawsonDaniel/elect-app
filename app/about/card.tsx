/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Box, Typography} from "@mui/material"

interface FUNARG{
img:string,
name:string,
position:string,
level:string
}
function Card({img,name,position,level}:FUNARG) {
  return (
    <Box className="w-[300px] h-[350px] rounded-[40px]">
        <img style={{
             filter: name === "Ibi Lawson Tsapka" ? 'grayscale(100%)' : 'grayscale(10%)'
        }} src={img} alt="exocpho" className='w-[300px] rounded-[40px] h-[350px] object-cover' />
        <Box className="flex flex-col text-white relative top-[-104px] left-[22px] font-bold">
            <Typography className="font-bold">{name}</Typography>
            <Typography className="font-bold">{position}</Typography>
            <Typography className="border-[#ccc] border-[0.5px] w-[100px] rounded-[10px] font-thin p-[5px]">{level} level</Typography>
        </Box>
    </Box>
  )
}

export default Card
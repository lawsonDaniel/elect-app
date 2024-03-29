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
    <Box className="w-full min-w-[250px] hover:scale-95 h-[350px] rounded-[40px]">
        <img style={{
             filter: name === "Ibi Lawson Tsapka" ? 'grayscale(100%)' : 'grayscale(10%)'
        }} src={img} alt="exocpho" className=' rounded-[40px] w-full h-[350px] object-cover ' />
        <Box className="flex flex-col text-white text-[12px] relative top-[-104px] left-[22px] font-bold">
            <Typography className="font-bold">{name}</Typography>
            <Typography className="font-bold">{position}</Typography>
            <Typography className="border-[#ccc] border-[0.5px] w-[90px] max-w-130px items-center text-center bg-[#aaaaaa78] rounded-[10px] font-bold text-[12px] p-[5px]">{level.length <=3 ? level+ " level" : level}</Typography>
        </Box>
    </Box>
  )
}

export default Card
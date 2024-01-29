/* eslint-disable @next/next/no-img-element */
import { Box, Typography, Skeleton,Chip } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface FUNCARG {
  sender:string;
  message:string;
  date:string;
  time:string;
  profileImg:string;
  level:string
}
function NotificationCard({ sender, message,date,time,profileImg,level }: FUNCARG) {
  // Check if sender or message is null
  const shouldShowSkeleton = sender === null || message === null;

  if (shouldShowSkeleton) {
    return (
      <Box>
        {/* Skeleton for sender */}
        <Skeleton variant="circular" width={40} height={40} />

        {/* Skeleton for message */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </Box>
    );
  }

  return (
    <Box className="w-[100%]  bg-[#fff] rounded-lg overflow-hidden">
      <Box className="w-full h-full flex items-center justify-center gap-2 p-2">
     {profileImg && <img className='rounded-[100%] object-cover w-[48px] h-[48px]' width="48" height="48" src={profileImg} alt="user-male-circle"/>}
        <Box className='w-full'>
          <Box className="flex justify-between items-center">
          <Typography className="font-semibold text-md w-full">{sender}</Typography>
          <Chip   className=" text-center" label={level} variant="outlined" />
          </Box>
         
          <Box className="overflow-y-auto max-h-[100px]">
            <Typography className='w-full text-[#333] text-[13px]'>{message}</Typography>
          </Box>
          <Box className="w-full flex items-center justify-between">
              <Typography className='text-[#aaa] text-[12px]'>{date}</Typography>
              <Typography  className='text-[#aaa] text-[12px]'>{time}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NotificationCard;

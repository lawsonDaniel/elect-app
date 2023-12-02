/* eslint-disable @next/next/no-img-element */
import { Box, Typography, Skeleton } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NotificationCard({ sender, message,date,time,profileImg }: any) {
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
    <Box className="w-[100%]  bg-[#fff] rounded-lg">
      <Box className="w-full h-full flex items-center justify-center gap-2 p-2">
     {profileImg && <img width="48" height="48" src={profileImg} alt="user-male-circle"/>}
        <Box className='w-full'>
          <Typography className="font-semibold text-md w-full">{sender}</Typography>
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

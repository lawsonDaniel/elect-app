/* eslint-disable @next/next/no-img-element */
import { Box, Typography, Skeleton } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NotificationCard({ sender, message }: any) {
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
      <img width="48" height="48" src="https://img.icons8.com/doodle/48/user-male-circle.png" alt="user-male-circle"/>
        <Box className='w-full'>
          <Typography className="font-semibold text-md w-full">{sender}</Typography>
          <Box className="overflow-y-auto max-h-[100px]">
            <Typography className='w-full'>{message}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NotificationCard;

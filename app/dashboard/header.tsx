import React from 'react';
import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ sideBarOpen, setSideBarOpen }: any) {
  return (
    <Box
      style={{
        width: `${sideBarOpen ? 'calc(100vw - 100px)' : 'calc(100vw - 40px)'}`,
        transition: 'margin-left 0.3s ease,width 0.3s ease', // Add transition property
      }}
      className={`bg-[#D9D9D9] h-[57px] ml-[${sideBarOpen ? '100px' : '40px'}] fixed transition-all`}
    >
      <Box className="flex justify-between p-3">
       
        <Typography>App bar</Typography>
      </Box>
    </Box>
  );
}

export default Header;

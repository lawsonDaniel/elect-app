import React from 'react';
import { Box, Typography,Button,Menu,MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { logOut } from '@/util/auth';
import Profile from './Profile'

function Header({ sideBarOpen, setSideBarOpen,user }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [profileOpen,setProfileOpen] = React.useState<boolean>(false)
  const handleProfileOpen = () => setProfileOpen(true);
  const handleProfileClose = () => setProfileOpen(false);
  const open = Boolean(anchorEl);
  console.log(user,'from over view')
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      style={{
        width: `${!sideBarOpen ? 'calc(100% - 100px)' : 'calc(100% - 200px)'}`,
        transition: 'margin-left 0.3s ease,width 0.3s ease', // Add transition property
      }}
      className={`z-40 h-[80px] ml-[${sideBarOpen ? '100px' : '40px'}] fixed transition-all`}
    >
      <Box className="w-full bg-[#fff] h-[80px] flex p-3 items-center justify-between border-b">
              <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className='text-[24px]'>Dashboard</Typography>
           <Box className="flex items-center">
           <Box>
              <Typography className="text-[15px] font-bold">{user ? user?.fullName.toUpperCase() : "loading data"}</Typography>
              <Typography className="text-[12px] font-thin">{user ? user?.userType === "student" ? user?.level+" level" : "staff" : "loading data"}</Typography>
           </Box>
            <Button className="w-[30px]" id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
                {user?.profileImg && <img className='rounded-[100%] w-[48px] h-[48px]' width="48" height="48" src={user && user?.profileImg } alt="user-male-circle"/>}
              </Button>
           
            <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{
          handleProfileOpen();
          setAnchorEl(null);
        }}>Profile Setting</MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={()=>{
          window.location.href = "auth/login"
          logOut()
          setAnchorEl(null);
        }}>Logout</MenuItem>
      </Menu>
    </div>
           </Box>
           
          </Box>
          <Profile user={user} open={profileOpen} handleClose={handleProfileClose}/>
    </Box>
  );
}

export default Header;

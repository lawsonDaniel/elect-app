/* eslint-disable @next/next/no-img-element */
import { Box, Typography,Menu,MenuItem,Button } from '@mui/material'
import React,{useEffect} from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MessageClass } from '@/app/api/message.class';
import NotificationCard from './NotificationCard';
import { logOut } from '@/util/auth';
import Profile from './Profile';

function Overview({user}:any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notification,setNotification] = React.useState<any>([])
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
  const getMessage = async()=>{
    try{
      const res = await MessageClass.getStaffMessage()
      console.log(res,'Response')
      setNotification(res?.data?.data)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getMessage()
  },[])
  return (
    <Box className="p-4 bg-[#eee]" >
        <Box className="w-full h-[100vh] overflow-visible bg-[#fff] rounded-lg">
          <Box className="w-full h-[80px] flex p-3 items-center justify-between border-b">
              <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className='text-[24px]'>OverView</Typography>
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
                {user?.profileImg && <img width="48" height="48" src={user && user?.profileImg } alt="user-male-circle"/>}
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
          <Box className="bg-[#ddd] w-full h-full overflow-y-auto flex flex-col p-5 gap-5">
              <Box className="w-full  flex  gap-3">
              <Box className="w-[120px] h-[100px] bg-white rounded-lg p-3 justify-cneter items-center">
                <Typography className="text-[12px] font-thin">Notifications</Typography>
                <Typography style={{
                    fontFamily: "'Libre Baskerville', 'serif'"
                  }} className="text-[54px]"> {notification?.length || 0}</Typography>
              </Box>
              <Box className="w-[120px] h-[100px] bg-black text-white rounded-lg p-3 justify-cneter items-center">
                <Typography className="text-[12px] font-thin">Messages</Typography>
                <Typography style={{
                    fontFamily: "'Libre Baskerville', 'serif'"
                  }} className="text-[54px]"> 35</Typography>
              </Box>
              </Box>
              <Box className="bg-[#eee] w-full md:w-[500px] p-2">
          <Typography style={{ fontFamily: "'Libre Baskerville', 'serif'" }} className="text-[24px]">
            Notifications
          </Typography>
          <div className="overflow-y-auto "> {/* Adjust the height accordingly */}
            <Box className="flex flex-col gap-3">
              {notification.length > 0 ?
                notification?.map((a: any, i: number) => {
                  const date = a.time.split('T')[0];
                  const time = a.time.split('T')[1].split('.')[0]
                  return (
                    <React.Fragment key={i}>
                      <NotificationCard sender={a?.senderName.toUpperCase()} profileImg={a?.profileImg} date={date} time={time} message={a?.message} />
                    </React.Fragment>
                  );
                })
              : <Typography>No new Notifications</Typography>
              }
    </Box>
  </div>
</Box>

          </Box>
        
        </Box>
        <Profile open={profileOpen} handleClose={handleProfileClose}/>
    </Box>
  )
}

export default Overview
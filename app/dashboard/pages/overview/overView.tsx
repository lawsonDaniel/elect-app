import { Box, Typography,Menu,MenuItem,Button } from '@mui/material'
import React,{useEffect} from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MessageClass } from '@/app/api/message.class';
import NotificationCard from './NotificationCard';
import { logOut } from '@/util/auth';

function Overview() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notification,setNotification] = React.useState<any>([])
  const open = Boolean(anchorEl);
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
              <Typography className="text-[15px] font-bold">Daniel Lawson</Typography>
              <Typography className="text-[12px] font-thin">400 level</Typography>
           </Box>
            <Button className="w-[30px]" id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
                 <AccountCircleIcon className="text-[50px]"/>
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
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
                  return (
                    <React.Fragment key={i}>
                      <NotificationCard sender={a?.senderName.toUpperCase()} message={a?.message} />
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
    </Box>
  )
}

export default Overview
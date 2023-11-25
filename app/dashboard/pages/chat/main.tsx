import { Box, Typography, Menu, MenuItem, Button } from '@mui/material';
import React,{useState,useRef, useEffect} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { messagesData,dummyData } from '@/util/testData';
import MoodIcon from '@mui/icons-material/Mood';
import SendIcon from '@mui/icons-material/Send';
import Message from './message';

function Main({ sideBarOpen, activeUser }: any) {
  const [profile, setProfile] = React.useState<null | HTMLElement>(null);
  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const [chatData,setChatData] = useState(dummyData)
  const openProfile = Boolean(profile);
  const openMenu = Boolean(menu);
  const chatBoxRef: any = useRef(null);
  const handleProfileOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfile(event.currentTarget);
  };
  const handleprofileClose = () => {
    setProfile(null);
  };
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenu(null);
  };

  const ActivePerson = activeUser && messagesData[activeUser];
  //chat state
  const [chat,setChat] = useState('')
const handleChat =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setChat(e.target.value)
}
const sendMessage = ()=>{
    // Function to get the current time in HH:mm format
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  const currentTime = getCurrentTime();
  let data = chatData
    data.push({
        id: dummyData.length +1,
        timestamp: currentTime,
        user: Math.random() > 0.5 ? true : false,
        message: chat,
        delivered: true
    })
    setChatData(data)
    setChat("")
    //scroll after each message 
   
   
}
useEffect(()=>{
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
},[chatData,chat])
  return (
    <Box>
      <Box className="w-full h-[80px] flex p-3 items-center justify-between border-b">
        <Box className="flex items-center">
          <Button
            className="w-[30px]"
            id="profile-button"
            aria-controls={ActivePerson?.icon ? 'profile-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openProfile ? 'true' : undefined}
            onClick={handleProfileOpen}
          >
            {ActivePerson?.icon && <ActivePerson.icon className="w-[40px] h-[40px] stroke-1 text-[#000]"/>}
            {/* <AccountCircleIcon className="text-[50px]" /> */}
          </Button>
          <Box>
            {ActivePerson && (
              <>
                <Typography className="text-[15px] font-bold">{ActivePerson.name}</Typography>
                <Typography className="text-[12px] font-thin">400 level</Typography>
              </>
            )}
          </Box>
          <div>
            <Menu
              id="profile-menu"
              anchorEl={profile}
              open={openProfile}
              onClose={handleprofileClose}
              MenuListProps={{
                'aria-labelledby': 'profile-button',
              }}
            >
              <MenuItem onClick={handleprofileClose}>Profile</MenuItem>
              <MenuItem onClick={handleprofileClose}>My account</MenuItem>
              <MenuItem onClick={handleprofileClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Box>
        <Box className="flex gap-2 items-center">
          <SearchIcon />
          <Button
            className="w-[30px]"
            id="menu-button"
            aria-controls={openMenu ? 'menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </Button>

          <div>
            <Menu
              id="menu"
              anchorEl={menu}
              open={openMenu}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'menu-button',
              }}
            >
              <MenuItem onClick={handleMenuClose}>Close Chat</MenuItem>
              <MenuItem onClick={handleMenuClose}>Clear Chat</MenuItem>
              <MenuItem onClick={handleMenuClose}>Mute Chat</MenuItem>
              <MenuItem onClick={handleMenuClose}>Select Messages</MenuItem>
            </Menu>
          </div>
        </Box>
      </Box>
      {ActivePerson && <Box ref={chatBoxRef} style={{
        height:"calc(100vh - 140px)",
      }} className="w-full bg-[#555] p-3 flex flex-col gap-4 overflow-y-auto overflow-x-none">
        {
            chatData.map((a,i)=>{
                return(
                    <Message key={i} user={a?.user} message={a?.message} time={a?.timestamp} delivered={a?.delivered} />
                )
            })
        }
    
      </Box>}
      {ActivePerson&&<Box className="w-full h-[60px] border-t  bottom-0 bg-[#eee] p-4 gap-3 flex items-center justify-center">
        <MoodIcon className='text-[24px]'/>
        <input onKeyDown={(e)=>{
          if(e.key === 'Enter'){
            sendMessage()
          }
          
        }} value={chat} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> handleChat(e)}  className="w-full bg-[#ddd] h-[40px] p-2 rounded-lg outline-none" placeholder="Type a message"/>
        {chat && <SendIcon onClick={sendMessage}/>}
      </Box> }
    </Box>
  );
}

export default Main;

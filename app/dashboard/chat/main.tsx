/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect, ChangeEvent, useLayoutEffect } from 'react';
import { Box, Typography, Menu, MenuItem, Button,IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodIcon from '@mui/icons-material/Mood';
import SendIcon from '@mui/icons-material/Send';
import Message from './message';
import { Socket as socket } from '@/app/api/socket';
import { getAuthUser } from '@/util/auth';
import { messagesData, dummyData } from '@/util/testData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { arrangeUser } from '@/util/arrangeUsers';

interface MainProps {
  activeUser: any;
  userInfo: any;
  setOpen:any;
  setUserInfo:any;
}

function Main({ activeUser, userInfo,setOpen,setUserInfo }: MainProps) {
  const [profile, setProfile] = useState<HTMLElement | null>(null);
  const [menu, setMenu] = useState<HTMLElement | null>(null);
  const [chatData, setChatData] = useState(dummyData);
  const [message, setMessage] = useState<any[]>([]);
  const [chat, setChat] = useState<string>('');
  const [openProfile, setOpenProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const authUser: any = getAuthUser();
  const singleUser = userInfo.find((a: any) => a.id === activeUser);

  useEffect(() => {
    if (singleUser) {
      socket.emit('get_previous_messages', {
        receiverId: singleUser.id,
        senderId: authUser?.id,
      });
    }
    socket.on('previous_messages', (data: any) => {
      setMessage(data);
    });
  }, [singleUser]);

  console.log(message,'message')

  useLayoutEffect(()=>{
    socket.on('privateMessage', (data: any) => {
      let ArrangedUser = arrangeUser(data.senderId,userInfo)
      setUserInfo(ArrangedUser)
      setMessage((prevMessages) => [...message, data]);
    });
  },[message])

  const chatBoxRef: any = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [message]);

  const handleProfileOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setProfile(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfile(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenu(null);
  };

  const handleChatChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChat(e.target.value);
  };

  const sendMessage = () => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let ArrangedUser = arrangeUser(singleUser?.id,userInfo)
    setUserInfo(ArrangedUser)
    const data = [...chatData];
    socket.emit('privateMessage', {
      message: chat,
      type: 'message',
      receiverId: singleUser?.id,
      senderId: authUser?.id,
      sent: false,
    });
    setChat('');
  };

  const sortedMessages = [...message].sort((a:any, b:any) => new Date(a.createdAt) - new Date(b.createdAt));

  return (
    <Box>
      <Box className="w-full h-[80px] flex p-3 items-center justify-between border-b">
        <Box className="flex items-center">
          
            <IconButton
              edge="start"
              color="inherit"
              onClick={()=>{
                setOpen(false)
              }}
              aria-label="close"
            >
              <ArrowBackIosIcon/>
            </IconButton>
          <Button
            className="w-[30px]"
            id="profile-button"
            aria-controls={singleUser ? 'profile-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openProfile ? 'true' : undefined}
            onClick={handleProfileOpen}
          >
            {singleUser?.profileImage && (
              <img
                className="rounded-[100%] object-cover w-[38px] h-[38px]"
                width={38}
                height={38}
                src={singleUser.profileImage}
                alt={`${singleUser.fullName} profile image`}
              />
            )}
          </Button>
          <Box>
            {singleUser && (
              <>
                <Typography className="text-[15px] font-bold">{singleUser.fullName}</Typography>
                <Typography className="text-[12px] font-thin">
                  {singleUser.userType === 'student' ? `${singleUser.level} level` : singleUser.userType}
                </Typography>
              </>
            )}
          </Box>
          <div>
            <Menu
              id="profile-menu"
              anchorEl={profile}
              open={openProfile}
              onClose={handleProfileClose}
              MenuListProps={{
                'aria-labelledby': 'profile-button',
              }}
            >
              <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
              <MenuItem onClick={handleProfileClose}>My account</MenuItem>
              <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
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
      {singleUser && (
        <Box
          ref={chatBoxRef}
          style={{
            height: 'calc(100vh - 138px)',
          }}
          className="w-full bg-[#555] p-3 flex flex-col gap-4 overflow-y-auto overflow-x-none"
        >
          {sortedMessages &&
            sortedMessages.map((a: any, i) => (
              <Message
                type={a?.type}
                key={i}
                user={a?.senderId === authUser?.id}
                message={a?.message}
                time={a?.createdAt.split('T')[1].split('.')[0]}
                delivered={a?.sent}
                seen={a?.seen}
              />
            ))}
        </Box>
      )}
      {singleUser && (
        <Box className="w-full h-[60px] border-t  bottom-0 bg-[#eee] p-4 gap-3 flex items-center justify-center">
          <MoodIcon className="text-[24px]" />
          <input
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}
            value={chat}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChatChange(e)}
            className="w-full bg-[#ddd] h-[40px] p-2 rounded-lg outline-none"
            placeholder="Type a message"
          />
          {chat && <SendIcon onClick={sendMessage} />}
        </Box>
      )}
    </Box>
  );
}

export default Main;

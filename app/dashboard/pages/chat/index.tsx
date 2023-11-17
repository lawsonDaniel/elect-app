import { Box } from '@mui/material'
import React,{useState} from 'react'
import Sidebar from './sidebar'
import Main from './main'

function Chat() {
    const [messageBarOpen,setMessageBarOpen] = useState<boolean>(true)
    const [activeUser,setActiveUser] =  useState(null)
  return (
    <Box className="flex w-full">
        <Sidebar isOpen={messageBarOpen} open={setMessageBarOpen} activeUser={activeUser} setActiveUser={setActiveUser}/>
        <Box className="flex flex-col w-full">
        {/* <Header  sideBarOpen={messageBarOpen} setMessageBarOpen={setMessageBarOpen}/> */}
        <Main  sideBarOpen={messageBarOpen} activeUser={activeUser} />
        </Box>
       
   </Box>
  )
}

export default Chat
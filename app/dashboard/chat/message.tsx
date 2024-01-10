import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { Box } from '@mui/material';

function Message({user,message,time,onCLick,delivered,type,seen
}:any) {
    
  return (
    <div className={`max-w-[400px] w-[400px] flex flex-col ${user ?'bg-[azure] self-end' : 'bg-white'} rounded-md p-2 `}>
        {type === "message" && <p className="text-[15px] w-full">{message}</p>}
        {type ==="Image" && <img src={message} />}
        <div className='flex justify-between w-full items-center'>
          {
            delivered && seen && <Box className="flex">
             <CheckIcon className="text-[12px] text-[green] "/>
             <CheckIcon className="text-[12px] text-[green] relative left-[-9px] "/>
            </Box>
          }
            {delivered ? !seen &&<CheckIcon className="text-[12px] text-[green] "/>:<NotInterestedIcon className="text-[12px] text-[red] "/>}
         
        <p className="text-[10px] ">{time}</p>
        </div>
        </div>
  )
}

export default Message
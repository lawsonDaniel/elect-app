import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

function Message({user,message,time,onCLick,delivered}:any) {
    
  return (
    <div className={`w-[400px] flex flex-col ${user ?'bg-[azure] self-end' : 'bg-white'} rounded-sm p-2 `}>
        <p className="text-[15px] w-full">{message}</p>
        <div className='flex justify-between w-full items-center'>
            {delivered ? <CheckIcon className="text-[12px] text-[green] "/>:<NotInterestedIcon className="text-[12px] text-[red] "/>}
        
        <p className="text-[10px] ">{time}</p>
        </div>
        </div>
  )
}

export default Message
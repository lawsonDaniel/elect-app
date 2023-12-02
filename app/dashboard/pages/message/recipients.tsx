import { Typography,Box } from '@mui/material'
import React from 'react'

function Recipients({name,level,profileImg}:any) {
  return (
    <div className="flex flex-col bg-black text-white w-[400px] rounded-lg p-4">
      <Box>
      {profileImg && <img width="48" height="48" src={profileImg} alt="user-male-circle"/>}
          <Box>
              <Box>
            <Typography>{name}</Typography>
            </Box>
          <Box>
                <Typography className="text-[12px]">{ level ? level+" level" : "staff"} </Typography>
          </Box>
          </Box>
      </Box>
      
    </div>
  )
}

export default Recipients
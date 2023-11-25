import { Box, Button, TextField, Typography,Select,MenuItem,FormControl,InputLabel } from '@mui/material'
import React from 'react'
import Recipients from './recipients'

function Message() {
  return (
    
    <Box className="p-4 bg-[#eee]">
        <Box className="w-full h-[100vh] overflow-visible bg-[#fff] rounded-lg p-4">
            <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className='text-[24px]' >Send Announcement</Typography>
            <Box className="flex flex-col lg:flex-row gap-4 mt-4 w-full">
            <Box className="flex flex-col w-full gap-4">
              <TextField className="" placeholder='Enter your message'/>
                   <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select Recipient</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                   // value={session}
                                    label="Age"
                                    //onChange={handleSelect}
                                    >
                                    <MenuItem value={10}>100 level</MenuItem>
                                    <MenuItem value={20}>200 level</MenuItem>
                                    <MenuItem value={30}>300 level</MenuItem>
                                    <MenuItem value={30}>400 level</MenuItem>
                                    <MenuItem value={30}>500 level</MenuItem>
                                    <MenuItem value={30}>Everyone</MenuItem>
                                    </Select>
                                </FormControl>
              <Button className="border text-[#636161] border-[#A4A4A4] h-[56px] mt-2 w-[150px]" variant="outlined">Send Message</Button>
            </Box>
            <Box>

            </Box>
            <Box>
            <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className='text-[20px]' >Recipients</Typography>
            <Box className="flex flex-col h-[400px] w-full overflow-y-auto gap-3 p-2">
              <Recipients/>
              <Recipients/>
              <Recipients/>
              <Recipients/>
              <Recipients/>
              <Recipients/>
              <Recipients/>
            </Box>
            </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Message
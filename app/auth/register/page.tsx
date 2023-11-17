"use client"
import React,{useState} from 'react'
import {
    Box, 
    Typography,
    ToggleButton,
    ToggleButtonGroup,
    TextField,
    Button,
    Select,
    SelectChangeEvent,
    FormControl,
    InputLabel,
    MenuItem
} from "@mui/material"
import Link from 'next/link';

function Register() {
    const [alignment, setAlignment] = useState('web');
    const [session, setSession] = useState('');

    const handleSelect = (event: SelectChangeEvent) => {
        setSession(event.target.value as string);
      };
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <Box className="p-[70px]">
        <Box className="border border-[#A4A4A4] rounded-[15px] w-full px-[34px] p-[50px]">
        <Box className="lg:grid md:block sm:block lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 px-50">
                    <Box className="w-full lg:border-r lg:border-[#A4A4A4] p-[20px]">
                        <Typography className="text-[#08A1D7] text-[16px] text-center mb-5">Please read the following <br/>Instructions.</Typography>
                        <ul className="list-disc flex flex-col gap-[10px] marker:text-[#08A1D7] font-light">
                            <li>Use your registered Email.</li>
                            <li>
                            Click the activation link sent to your email if your registration has not been confirmed to proceed with the registration
                            </li>
                        </ul>
                    </Box>
                    <Box className="w-full p-[40px] flex flex-col gap-[10px] ">
                        {/* second part */}
                        <Typography className="text-[#08A1D7] text-[16px] text-center mb-2">Please enter your 
                            <br/>Login Details.</Typography>
                            <ToggleButtonGroup
                            className='mx-auto flex justify-center align-center'
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                                >
                                <ToggleButton className='w-[100px]' value="web">Student</ToggleButton>
                                <ToggleButton className='w-[100px]' value="android">Staff</ToggleButton>
                                </ToggleButtonGroup>

                                <TextField className='w-full mt-[5px]' id="outlined-basic" label="Email" variant="outlined" />
                                <TextField className='w-full mt-[5px]' id="outlined-basic" label="Full Name" variant="outlined" />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">AcademicSession</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={session}
                                    label="Age"
                                    onChange={handleSelect}
                                    >
                                    <MenuItem value={10}>2020/2021</MenuItem>
                                    <MenuItem value={20}>2021/2022</MenuItem>
                                    <MenuItem value={30}>2022/2023</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField className='w-full' id="outlined-basic" type='password' label="Password" variant="outlined" />
                                <Button className='bg-[#08A1D7] hover:bg-[#08A1D7] text-[#fff] h-[56px]' variant="contained">Register</Button>
                                <Typography className="mt-5 text-center text-[12px]">Have an account? <Link href="./login" className='text-[#08A1D7]font-thin'>Login</Link></Typography>
                    </Box>
                </Box>
        </Box>
    </Box>
  )
}

export default Register
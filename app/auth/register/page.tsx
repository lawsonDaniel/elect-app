"use client"
import React, { useState } from 'react';
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
  MenuItem,
} from "@mui/material";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@unijos\.edu\.ng$/, 'Invalid email format. Must be in the format value@unijos.edu.ng')
    .required('Email is required'),
    fullName: Yup.string().required('Full Name is required'),
    academicSession: Yup.string().required('Academic Session is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      academicSession: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <Box className="p-[70px]">
      <Box className="border border-[#A4A4A4] rounded-[15px] w-full px-[34px] p-[50px]">
        <Box className="lg:grid md:block sm:block lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 px-50">
          <Box className="w-full lg:border-r lg:border-[#A4A4A4] p-[20px]">
            <Typography className="text-[#08A1D7] text-[16px] text-center mb-5">
              Please read the following <br />Instructions.
            </Typography>
            <ul className="list-disc flex flex-col gap-[10px] marker:text-[#08A1D7] font-light">
              <li>Use your registered Email.</li>
              <li>
                Click the activation link sent to your email if your registration has not been confirmed to proceed with the registration
              </li>
            </ul>
          </Box>
          <Box component="form" onSubmit={formik.handleSubmit} className="w-full p-[40px] flex flex-col gap-[10px] ">
            <Typography className="text-[#08A1D7] text-[16px] text-center mb-2">
              Please enter your <br />Login Details.
            </Typography>
            <ToggleButtonGroup
              className="mx-auto flex justify-center align-center"
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton className="w-[100px]" value="web">
                Student
              </ToggleButton>
              <ToggleButton className="w-[100px]" value="android">
                Staff
              </ToggleButton>
            </ToggleButtonGroup>

            <TextField
              className="w-full mt-[5px]"
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              className="w-full mt-[5px]"
              id="fullName"
              name="fullName"
              label="Full Name"
              variant="outlined"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />

            <FormControl fullWidth>
              <InputLabel id="academicSession-label">Academic Session</InputLabel>
              <Select
                labelId="academicSession-label"
                id="academicSession"
                name="academicSession"
                value={formik.values.academicSession}
                label="Academic Session"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.academicSession && Boolean(formik.errors.academicSession)}
              >
                <MenuItem value={30}>2022/2023</MenuItem>
              </Select>
            </FormControl>

            <TextField
              className="w-full"
              id="password"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button
              className="bg-[#08A1D7] hover:bg-[#08A1D7] text-[#fff] h-[56px]"
              variant="contained"
              type="submit"
            >
              Register
            </Button>

            <Typography className="mt-5 text-center text-[12px]">
              Have an account? <Link href="./login" className="text-[#08A1D7] font-thin">Login</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;

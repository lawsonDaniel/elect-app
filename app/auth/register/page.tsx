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
  Alert,
  AlertTitle
} from "@mui/material";
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Authclass } from '@/app/api/auth.class';
import LoadingButton from '@mui/lab/LoadingButton';

function Register() {
  const [userType, setUserType] = useState('staff');
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newuserType: string,
  ) => {
    setUserType(newuserType);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@unijos\.edu\.ng$/, 'Invalid email format. Must be in the format value@unijos.edu.ng')
    .required('Email is required'),
    fullName: Yup.string().required('Full Name is required'),
    level: Yup.string().when([], (values, schema) => {
      if (userType === 'student') {
        return schema.required('Level is required for students');
      }
      return schema;
    }),
    phoneNumber:Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match') // Ensure it matches the 'password' field
    .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      phoneNumber:'',
      fullName: '',
      level: '',
      password: '',
      confirmPassword:''
    } as any,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Handle form submission here
    // Handle form submission here
    setIsLoading(true)
    setErrorMessage('')
    setSuccessMessage('')
    try {
      if(userType === "staff"){
        const { level, ...newValues } = values;
        values = newValues
      }
     
      values = {
        ...values,
        userType
      }
      const res = await Authclass.rerister(values)
      if (!res?.data?.status) {
        setErrorMessage(res?.data?.message)
      }else{
        setSuccessMessage(res?.data?.message)
        var url = "emailVerification?email=" + encodeURIComponent(values?.email);
              // Set the window location to the constructed URL
              window.location.href = url;
      }
      setIsLoading(false)
      console.log(res)
    } catch (err:any) {
      setErrorMessage(err?.message)
      setIsLoading(false)
      console.error(err)
    }
    },
  });

  return (
    <Box  className="md:p-[70px] p-2 mt-[50px] md:mt-1">
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
          {
              errorMessage && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{errorMessage}</strong>
              </Alert>
            }
            {
              successMessage && <Alert severity="success">
              <AlertTitle>Registration Successfull</AlertTitle>
              <strong>{successMessage}</strong> --  activation link sent to your email
            </Alert>
            }
            <Typography className="text-[#08A1D7] text-[16px] text-center mb-2">
              Please enter your <br /> Details.
            </Typography>
            <ToggleButtonGroup
              className="mx-auto flex justify-center align-center"
              color="primary"
              value={userType}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton className="w-[100px]" value="student">
                Student
              </ToggleButton>
              <ToggleButton className="w-[100px]" value="staff">
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
              helperText={formik.touched.email && typeof(formik.touched.email) !== "undefined" && String(formik.errors.email)}
            />

            <TextField
              className="w-full mt-[5px]"
              id="phoneNumber"
              name="phoneNumber"
              label="phoneNumber"
              variant="outlined"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && typeof(formik.touched.phoneNumber) !== "undefined" && String(formik.errors.phoneNumber)}
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
              helperText={formik.touched.fullName && typeof(formik.touched.fullName) !== "undefined" && String(formik.errors.fullName)}
            />

           {userType === "student" && <FormControl fullWidth>
              <InputLabel id="level-label">Level</InputLabel>
              <Select
                labelId="level-label"
                id="level"
                name="level"
                value={formik.values.level}
                label="Level"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.level && Boolean(formik.errors.level)}
              >
                <MenuItem value={'100'}>100</MenuItem>
                <MenuItem value={'200'}>200</MenuItem>
                <MenuItem value={'300'}>300</MenuItem>
                <MenuItem value={'400'}>400</MenuItem>
                <MenuItem value={'500'}>500</MenuItem>
              </Select>
            </FormControl>} 

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
              helperText={formik.touched.password && typeof(formik.touched.password) !== "undefined" && String(formik.errors.password)}
            />

          <TextField
              className="w-full"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="confirmPassword"
              variant="outlined"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && typeof(formik.touched.confirmPassword) !== "undefined" && String(formik.errors.confirmPassword)}
            />

            <LoadingButton
            loading={isLoading}
              className="bg-[#08A1D7] hover:bg-[#08A1D7] text-[#fff] h-[56px]"
              variant="contained"
              type="submit"
            >
              Register
            </LoadingButton>

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

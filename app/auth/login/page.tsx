"use client"
import React, { useState } from 'react'
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Alert,
  AlertTitle
} from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link';
import { Authclass } from '@/app/api/auth.class';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setAuthUser } from '@/util/auth';

function Login() {
  const [userType, setUserType] = useState('staff');
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // form controll
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(/^[a-zA-Z0-9._%+-]+@unijos\.edu\.ng$/, 'Invalid email format. Must be in the format value@unijos.edu.ng')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as any,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Handle form submission here
      setIsLoading(true)
      setErrorMessage('')
      setSuccessMessage('')
      try {
        values = {
          ...values,
          userType
        }
        const res = await Authclass.login(values)
        if (!res?.data?.status) {
          setErrorMessage(res?.data?.message)
        }else{
        
            if(res?.data?.data?.verified){
              setAuthUser(res?.data?.data)
              window.location.href = "/dashboard";
            }else{
              var url = "emailVerification?email=" + encodeURIComponent(values?.email);
              // Set the window location to the constructed URL
              window.location.href = url;
            }
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

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newUserType: string,
  ) => {
    setUserType(newUserType);
  };
  return (
    <Box className="md:p-[70px] p-2 mt-[50px] md:mt-1">
      <Box className="border border-[#A4A4A4] rounded-[15px] w-full md:px-[34px] md:p-[50px] p-4">
        <Box className="lg:grid md:block sm:block lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 px-50">
          <Box className="w-full lg:border-r lg:border-[#A4A4A4] p-[20px]">
            <Typography className="text-[#08A1D7] text-[16px] text-center mb-5">Please read the following <br />Instructions.</Typography>
            <ul className="list-disc flex flex-col gap-[10px] marker:text-[#08A1D7] font-light">
              <li>Use your registered Email.</li>
              <li>Type in your correct password. click the button in the password field to un mask and make sure it is correct.</li>
              <li>Click the activation link sent to your email if your registration has not been confirmed to proceed with the registration</li>
            </ul>
          </Box>
          <Box component="form" onSubmit={formik.handleSubmit} className="w-full p-[40px] flex flex-col gap-[10px] ">
            {/* second part */}
            {
              errorMessage && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                <strong>{errorMessage}</strong>
              </Alert>
            }
             {
              successMessage && <Alert severity="success">
              <AlertTitle>Login Successfull</AlertTitle>
              <strong>{successMessage}</strong> 
            </Alert>
            }
            <Typography className="text-[#08A1D7] text-[16px] text-center mb-2">Please enter your
              <br />Login Details.</Typography>
            <ToggleButtonGroup
              className='mx-auto flex justify-center align-center'
              color="primary"
              value={userType}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton className='w-[100px]' value="student">Student</ToggleButton>
              <ToggleButton className='w-[100px]' value="staff">Staff</ToggleButton>
            </ToggleButtonGroup>

            <TextField
              className='w-full mt-[5px]'
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && String(formik.touched.email) !== "undefined" && String(formik.errors.email)}
            />
            <TextField
              className='w-full'
              id="password"
              name="password"
              type='password'
              label="Password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && String(formik.touched.password) !== "undefined" && String(formik.errors.password)}
            />
            <LoadingButton loading={isLoading} type="submit" className='bg-[#08A1D7] hover:bg-[#08A1D7] text-[#fff] h-[56px]' variant="contained">Login</LoadingButton>
            <LoadingButton className="border text-[#636161] border-[#A4A4A4] h-[56px] mt-2" variant="outlined">Recover Account</LoadingButton>
            <Typography className="mt-5 text-center text-[12px]">Don’t have an account? <Link href="./register" className='text-[#08A1D7]font-thin'>Register</Link></Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
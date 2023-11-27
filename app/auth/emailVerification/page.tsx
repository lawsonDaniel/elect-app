'use client'
import {
  Box, Typography, Button, Alert,
  AlertTitle
} from '@mui/material'
import React, { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Authclass } from '@/app/api/auth.class';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link';

function Page() {
  let email = '2018en0338@unijos.edu.ng'
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleResendOtp = async () => {
    setIsLoading(true)
    setErrorMessage('')
    setSuccessMessage('')
    if (email) {
      try {
        const res = await Authclass.resendOtp(email);
        if (!res?.data?.status) {
          setErrorMessage(res?.data?.message)
        } else {
          setSuccessMessage(res?.data?.message)
          // setTimeout(() => {
          //   window.location.href = "login";
          // }, 2000)
          //make call check if user has verified
        }
        setIsLoading(false)
        console.log(res)
      } catch (err) {
        setIsLoading(false)
        console.error(err)
      }
    }
  }
  return (
    <Box className="p-[70px] relative bg-[#fff] text-[#000]" >
      <Box className="flex p-[20] items-center justify-center">
        <Box className="w-full h-[500px] bg-[#fff] flex flex-col md:flex-row items-center justify-center gap-5">
         
          <MailOutlineIcon className="text-[250px] " />
          <Box className="flex flex-col text-[#000] gap-1">
          {
            errorMessage && <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              <strong>{errorMessage}</strong>
            </Alert>
          }
          {
            successMessage && <Alert severity="success">
              <AlertTitle>Registration Successfull</AlertTitle>
              <strong>{successMessage}</strong> --  verify and <Link href="login">Login</Link>
            </Alert>
          }
            <Typography variant="h5" className="mb-4">Email Verification Mail Sent</Typography>
            <Typography>We have sent you an email to verify </Typography>
            <Typography>Please checkyour mail and click the verification link to verify he email </Typography>
            <LoadingButton loading={isLoading} onClick={handleResendOtp} className="rounded h-[50px] hover:bg-[#000] hover:text-[#fff] mt-3 w-full md:w-[200px] bg-[#000] text-[#fff]">Resend OTP</LoadingButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Page
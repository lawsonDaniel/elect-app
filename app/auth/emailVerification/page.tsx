'use client'
import {
  Box, Typography, Button, Alert,
  AlertTitle
} from '@mui/material'
import React, { useState,useEffect } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Authclass } from '@/app/api/auth.class';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link';

function Page() {

  const [email,setEmail] = useState('')
  // Get the current URL
  useEffect(()=>{
      // Get the current URL
    const currentUrl: string = window.location.href;
    // Extract the email parameter from the URL
    const urlParams = new URLSearchParams(currentUrl?.split('?')[1]); // Extract query parameters only
    // Decode the email parameter
    const emails: string | null = urlParams.get("email") ? decodeURIComponent(urlParams.get("email")!) : null;

    if(emails){
      setEmail(emails)
    }
  },[])


console.log(email,'this is the email2')

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
            <LoadingButton loading={isLoading} disabled={email ? false : true} onClick={handleResendOtp} className="rounded h-[50px] hover:bg-[#000] hover:text-[#fff] mt-3 w-full md:w-[200px] bg-[#000] text-[#fff]">Resend OTP</LoadingButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Page
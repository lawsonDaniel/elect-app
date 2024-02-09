/* eslint-disable @next/next/no-img-element */
"use client"
import React, { Component } from 'react';
import Header from '@/components/Header';
import { Box, Typography,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Footer from '@/components/Footer';
// letter-spacing: 3px;
//     font-size: 50px;
//     font-weight: 100;
function page() {
  
  return (
    <Box>
    <Header/>
    <Box className="h-[700px] w-full relative">
        <div style={{
          background:"linear-gradient(0deg, black, #08263dad)"
        }} className="absolute inset-0 flex items-center justify-center bg-[#08263dad] hover:bg-[#08263dde]">
            <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }}  className="text-center tracking-[3px] w-[100%] text-[30px]  lg:text-[45px] md:text-[35px] font-lighter text-white">
           Electrify Your Contact with Us
            </Typography>
          
        </div>
        <img className="h-full w-full object-cover" src="img3.jpeg" alt="Image 1" />
        </Box>
           <Box className="p-4 flex flex-col gap-4 bg-[#000] text-white items-center justify-center text-[16px]">
      <Typography variant="body1">University of Jos - Plateau State, Nigeria</Typography>
      <Typography variant="body1">Address: P M B 2084 Jos</Typography>
      <Typography variant="body1">93001</Typography>
      <Typography variant="body1">Phone: +234 3 8376 6284</Typography>
      <Typography variant="body1">Fax: +234 3 8376 6284</Typography>
           </Box>
    <Footer/>
  </Box>
  )
}

export default page
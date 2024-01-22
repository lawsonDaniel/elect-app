/* eslint-disable @next/next/no-img-element */
"use client"
import React, { Component } from 'react';
import Header from '@/components/Header';
import { Box, Button, Typography } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

class Page extends Component {
  render() {
    return (
      <Box>
        <Header/>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <Box className="h-[100vh] w-full relative overflow-x-hidden">
        <div style={{
          background:"linear-gradient(0deg, black, #08263dad)"
        }} className="absolute inset-0 flex flex-col items-center justify-center ">
            <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className="text-center tracking-[3px] w-[100%] text-[30px]  lg:text-[55px] md:text-[35px] font-lighter text-white">
            Engineering Tomorrow's Dreams
            </Typography>
            <Typography className="text-white w-[70%] font-thin text-18 tracking-wider">Unleash the power of innovation with our cutting-edge engineering solutions. Building a future where dreams become reality.</Typography>
        </div>
        <img className="h-full w-full object-cover" src="img1.jpg" alt="Image 1" />
        </Box>
        <Box className="h-[100vh] w-full relative">
        <div style={{
          background:"linear-gradient(0deg, black, #08263dad)"
        }} className="absolute inset-0 flex flex-col items-center justify-center ">
            <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className="text-center tracking-[3px] w-[100%] text-[30px]  lg:text-[55px] md:text-[35px] font-lighter text-white">
            Precision Redefined
            </Typography>
            <Typography className="text-white w-[70%] font-thin text-18 tracking-wider">Experience engineering at its finest. Redefining precision to propel us into a future where progress knows no bounds.</Typography>
        </div>
        <img className="h-full w-full object-cover" src="img2.jpg" alt="Image 1" />
        </Box>
          <Box className="h-[100vh] w-full relative">
        <div style={{
          background:"linear-gradient(0deg, black, #08263dad)"
        }}  className="absolute inset-0 flex flex-col items-center justify-center ">
            <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className="text-center tracking-[3px] w-[100%] text-[30px]  lg:text-[55px] md:text-[35px] font-lighter text-white">
            Crafting the Future
            </Typography>
            <Typography className="text-white w-[70%] font-thin text-18 tracking-wider ">Experience engineering at its Join us on a journey of relentless innovation. Together, we craft a future where each breakthrough shapes the world we aspire to build.</Typography>
        </div>
        <img className="h-full w-full object-cover" src="img3.jpg" alt="Image 1" />
        </Box>
        </Carousel>
        <Box className="w-full h-full bg-black">
           <Box className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-center md:p-20 p-6">
           <Box className="flex flex-col gap-5 ">
          <Box>
          <FormatQuoteIcon className="text-white text-[100px]"/>
                        <Typography style={{
                      fontFamily: "'Libre Baskerville', 'serif'"
                    }} className='text-white text-[40px] md:text-[30px] lg:text-[40px] w-[100%] md:w-[100%] lg:w-[70%]  text-bold capitalize'>As electrical engineers, we illuminate the path of innovation,  wiring the future with sparks of  creativity and circuits of progress</Typography>
          </Box>
           <Box>
           <Typography className="text-white text-[20px] text-bolder">
            HOD Electrical Electronics
           </Typography>
           <Typography className="text-white text-thin">
            Mr John Doe
           </Typography>
           </Box>
            </Box>
            <img src="hod.jpeg" className="w-[400px] h-[500px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[500px]   object-cover rounded-lg " alt="hod department of electrical electronics university of jos"/>
           </Box>
        </Box>
        <Box className="p-4 flex flex-col bg-[#f0f0f0de]">
           <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className="text-[#000] text-[34px] font-medium	 my-1 text-center">STUDENTS’ <span className="text-[#08A1D7]">PORTAL</span></Typography>
           
           <Box className="flex flex-wrap gap-3 my-4 justify-evenly items-center">
              <Card/>
              <Card/>
              <Card/>
           </Box>
           <Box className="w-full flex justify-center">
           <Button className="bg-[#08A1D7] hover:bg-[#08A1D7] text-[#fff] h-[56px] w-[200px]" variant="contained">View More</Button>
           </Box>
        </Box>
       
        <Footer/>
      </Box>
    );
  }
}

export default Page;

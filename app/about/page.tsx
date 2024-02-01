/* eslint-disable @next/next/no-img-element */
"use client"
import React, { Component } from 'react';
import Header from '@/components/Header';
import { Box, Typography } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from './card';
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
            Unveiling Our Story
            </Typography>
        </div>
        <img className="h-full w-full object-cover" src="img3.jpg" alt="Image 1" />
        </Box>
    <Box className="p-4 flex flex-col gap-4 bg-[#000]">
    <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }}  className="text-[#888787] text-[24px] font-medium	 my-1">A BRIEF  <span className="text-[#08A1D7]">HISTORY</span></Typography>
      <Typography className='text-[#fff]'>
        The University of Jos started as a Campus of the University of Ibadan in November, 1971, with the appointment of Professor E. A. Ayandele as its first Acting Principlal. Its first home was the present Township campus of the University which is located along Murtala Mohammed way, Jos. Its first students admitted in January, 1972 were pre-degree students. Degree courses in Arts were introduced in October 1973 and in Science and Education the following year. The same year, the Bauchi Road Campus which then accommodated only the Faculties of Natural, environmental, Medical Sciences and Education was acquired. In October 1975, the then Military Government announced the establishment of seven new Universities and University Colleges including the University of Jos. Professor Gilbert Onuaguluchi was appointed its first Vice- Chancellor and he was in office from October 1975 - 1978. He was succeeded by Professor Emmanuel U. Emovon from 1st October 1978 - 1985. Professor Ochapa C. Onazi succeeded Professor Emovon. Professor Onazi served from 1st October 1985 - 1989 as the 3rd substantive Vice Chancellor. The 4th substantive Vice Chancellor is Professor M. Para Mallum who was in office from 1st October 1989 - 1993. Since then, the University has made enormous progress. By 1993, a new system for appointment of Vice-Chancellor in Nigerian Universities was introduced. There was therefore a delay in the appointment of a new Vice-Chancellor in 1993. In the interim, Prof. G. O. M. Tasie acted as Vice-Chancellor from October 1993 to March 1994. Eventually, Prof. N.E. Gomwalk was appointed Vice-Chancellor of the University in April,1994. His tenure ended in 1999. Professor M. Y. Mangvwat was appointed Ag. Vice-Chancellor from January 2000 to May 4th 2001. He was later appointed substantive Vice-Chancellor with effect from 5th May 2001. After him, Professor Sonni Tyoden was Vice Chancellor from June 12, 2006 to June 11, 2011. He was the 7th substantive Vice- Chancellor of the university. The 8th substantive Vice-Chancellor of the University was Professor Hayward Babale Mafuyai from June 23, 2011 to June 22, 2016.The current and 9th substantive Vice-Chancellor is Professor Seddi Sebastian Maimako who assumed duty on the 23rd of June 2016.
      </Typography>
    </Box>
    <Box className="p-4  bg-[#fff]">
           <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }}  className="text-[#888787] text-[24px] font-medium	 my-1">OUR  <span className="text-[#08A1D7]">Excos</span></Typography>
           <Box className="flex gap-3 my-4 justify-evenly items-center flex-wrap">
              <Card img="exco1.jpeg" name="Ibi Lawson Tsapka" position="Secretary General" level="500"/>
              <Card img="exco2.jpeg" name="Elohor Oseruvwoja" position=" President" level="500"/>
              <Card img="exco3.jpeg" name="Nancy Nathan Ajiduku" position="financial secretary" level="500"/>
              <Card img="exco4.jpeg" name="Samuel Oluwatimilehin Emmanuel" position="Welfare secretary
" level="400"/>
           </Box>
        </Box>
    <Footer/>
  </Box>
  )
}

export default page
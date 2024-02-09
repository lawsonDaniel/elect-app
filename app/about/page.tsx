/* eslint-disable @next/next/no-img-element */
"use client"
import React, { Component } from 'react';
import Header from '@/components/Header';
import { Box, Typography,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Card from './card';
import Footer from '@/components/Footer';
// letter-spacing: 3px;
//     font-size: 50px;
//     font-weight: 100;
function page() {
  function createData(
    name: string,
    calories: string,
    fat: string,
    carbs: number,
    protein: string,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    
    createData('1', '70-100', 'A', 5, '4.5-5.00 First Class'),
    createData('2', '60-69', 'B', 4, '3.5-4.49 Second Class Upper'),
    createData('3', '50-59', 'C', 3, '2.40-3.49 Second Class Lower'),
    createData('4', '40-49', 'D', 2, '1.5-2.39 Third Class'),
    createData('5', '0-39', 'F', 0, '<1 Fail')
  ];
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
        <img className="h-full w-full object-cover" src="img1.jpeg" alt="Image 1" />
        </Box>
    <Box className="p-4 flex flex-col gap-4 bg-[#000]">
    <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }}  className="text-[#888787] text-[24px] font-medium	 my-1">A BRIEF  <span className="text-[#08A1D7]">HISTORY</span></Typography>
      <Typography className='text-[#fff]'>
        The University of Jos started as a Campus of the University of Ibadan in November, 1971, with the appointment of Professor E. A. Ayandele as its first Acting Principlal. Its first home was the present Township campus of the University which is located along Murtala Mohammed way, Jos. Its first students admitted in January, 1972 were pre-degree students. Degree courses in Arts were introduced in October 1973 and in Science and Education the following year. The same year, the Bauchi Road Campus which then accommodated only the Faculties of Natural, environmental, Medical Sciences and Education was acquired. In October 1975, the then Military Government announced the establishment of seven new Universities and University Colleges including the University of Jos. Professor Gilbert Onuaguluchi was appointed its first Vice- Chancellor and he was in office from October 1975 - 1978. He was succeeded by Professor Emmanuel U. Emovon from 1st October 1978 - 1985. Professor Ochapa C. Onazi succeeded Professor Emovon. Professor Onazi served from 1st October 1985 - 1989 as the 3rd substantive Vice Chancellor. The 4th substantive Vice Chancellor is Professor M. Para Mallum who was in office from 1st October 1989 - 1993. Since then, the University has made enormous progress. By 1993, a new system for appointment of Vice-Chancellor in Nigerian Universities was introduced. There was therefore a delay in the appointment of a new Vice-Chancellor in 1993. In the interim, Prof. G. O. M. Tasie acted as Vice-Chancellor from October 1993 to March 1994. Eventually, Prof. N.E. Gomwalk was appointed Vice-Chancellor of the University in April,1994. His tenure ended in 1999. Professor M. Y. Mangvwat was appointed Ag. Vice-Chancellor from January 2000 to May 4th 2001. He was later appointed substantive Vice-Chancellor with effect from 5th May 2001. After him, Professor Sonni Tyoden was Vice Chancellor from June 12, 2006 to June 11, 2011. He was the 7th substantive Vice- Chancellor of the university. The 8th substantive Vice-Chancellor of the University was Professor Hayward Babale Mafuyai from June 23, 2011 to June 22, 2016.The current and 9th substantive Vice-Chancellor is Professor Seddi Sebastian Maimako who assumed duty on the 23rd of June 2016.
      </Typography>
    </Box>
    <Box className="p-4  bg-[#f9f9f9]">
           <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }}  className="text-[#888787] text-[24px] font-medium	 my-1">OUR  <span className="text-[#08A1D7]">Excos</span></Typography>
           <Box className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 p-2   gap-8 gap-y-8 my-4 justify-evenly  items-center flex-wrap">
              <Card img="exco1.jpeg" name="Ibi Lawson Tsapka" position="Secretary General" level="500"/>
              <Card img="exco2.jpeg" name="Elohor Oseruvwoja" position=" President" level="500"/>
              <Card img="exco3.jpeg" name="Nancy Nathan Ajiduku" position="financial secretary" level="500"/>
              <Card img="exco4.jpeg" name="Samuel Oluwatimilehin Emmanuel" position="Welfare secretary
              " level="400"/>
              <Card img="exco5.jpeg" name="Isabel Fatima Ziri" position="Vice President
              " level="400"/>
               <Card img="exco9.jpeg" name="Nwafor Rejoice Chinaza" position="Director of socials 
              " level="400"/>
              <Card img="exco6.png" name="Lagan Lucky Ibrahim" position="Director of sports
              " level="300"/>
               <Card img="exco7.jpeg" name="John Ayuba Pam" position="Assistant Sec Gen
              " level="400"/>
               <Card img="exco8.jpeg" name="Emmanuel James " position="PRO
              " level="200"/>
           </Box>
        </Box>
        <Box className="p-4  bg-[#000000]">
           <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }}  className="text-[#888787] text-[24px] font-medium	 my-1">OUR  <span className="text-[#08A1D7]">Lecturers </span></Typography>
           <Box className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 p-2   gap-8 gap-y-8 my-4 justify-evenly  items-center flex-wrap">
           <Card img={`https://api.dicebear.com/7.x/initials/svg?seed=Sunday Iliya/svg?randomizeIds=false`}  name="Sunday Iliya" position="
              " level=" HOD "/>
              <Card img={`https://api.dicebear.com/7.x/initials/svg?seed=Olurotimi Awodiji/svg?randomizeIds=false`} name="Olurotimi Awodiji" position=" awodijio@unijos.edu.ng" level="Senior Lecturer"/>
              <Card img={`https://api.dicebear.com/7.x/initials/svg?seed=Ahmen Tijani Salawudeen/svg?randomizeIds=false`} name="Ahmen Tijani Salawudeen" position="atsalawudeen@unijos.edu" level="Senior Lecturer"/>
              <Card img={`https://api.dicebear.com/7.x/initials/svg?seed=David Etor/svg?randomizeIds=false`}  name="David Etor (Senior Lecturer)" position="etord@unijos.edu.ng" level="Senior Lecturer"/>
              <Card img={`https://api.dicebear.com/7.x/initials/svg?seed=Izuagbe Momoh/svg?randomizeIds=false`}  name="Izuagbe Momoh " position="momohi@unijos.edu.ng 
              " level="Lecturer"/>
              <Card img={`https://api.dicebear.com/7.x/initials/svg?seed=Isaiah A. Akintunde/svg?randomizeIds=false`}  name="Isaiah A. Akintunde" position="akintundei@unijos.edu.ng
              " level="Lecturer"/>
               <Card img={`https://api.dicebear.com/7.x/initials/svg?seed=Kishak Zakka Cinfwat/svg?randomizeIds=false`}  name="Kishak Zakka Cinfwat " position="cinfwatk@unijos.edu.ng 
              " level="Lecturer II"/>
              <Card img={`https://api.dicebear.com/7.x/initials/svg?seed=Ganiu Ayinde Bakare/svg?randomizeIds=false`} name="Ganiu Ayinde Bakare" position="bakareg@unijos.edu.ng
              " level="Visting Lecturer"/>
               <Card img={`https://api.dicebear.com/7.x/initials/svg?seed=Gwangtim Timothy Poyi/svg?randomizeIds=false`}  name="Gwangtim Timothy Poyi " position=" poyig@unijos.edu.ng
              " level="Visting Lecturer"/>
               <Card img={`https://api.dicebear.com/7.x/initials/svg?seed=Aliyu Gadam/svg?randomizeIds=false`}  name="Aliyu Gadam " position="gadama@unijos.edu.ng
              " level="Lecturer"/>
              <Card img={`https://api.dicebear.com/7.x/initials/svg?seed=Emmanuel Kasai Akut/svg?randomizeIds=false`}  name="Emmanuel Kasai Akut" position="
              " level="Lecturer"/>
              
            
           </Box>
        </Box>
        <Box className="p-4 flex flex-col gap-4 bg-[#fff]">
        <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }}  className="text-center tracking-[3px] w-[100%] text-[30px]  lg:text-[45px] md:text-[35px] font-lighter text-black">
           Approved Scoring and Grading System
            </Typography>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell align="right">%</TableCell>
            <TableCell align="right">LETTER GRADE</TableCell>
            <TableCell align="right">GRADE POINT</TableCell>
            <TableCell align="right">CGPA & CLASS OF DEGREE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
    <Footer/>
  </Box>
  )
}

export default page
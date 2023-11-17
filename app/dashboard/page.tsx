"use client"
import React,{useState} from 'react'
import Main from './main'
import Header from './header'
import Sidebar from './sidebar'
import { Box } from '@mui/material'

function Page() {
    const [sideBarOpen,setSideBarOpen] = useState<boolean>(false)
    const [activePage,setActivePage] =  useState('overview')
    console.log(activePage,'activepage')
  return (
   <Box className="flex w-full">
        <Sidebar isOpen={sideBarOpen} open={setSideBarOpen} activePage={activePage} setActivePage={setActivePage}/>
        <Box className="flex flex-col w-full">
        {/* <Header  sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/> */}
        <Main  sideBarOpen={sideBarOpen} activePage={activePage} />
        </Box>
       
   </Box>
  )
}

export default Page
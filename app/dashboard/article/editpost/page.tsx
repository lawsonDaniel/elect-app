"use client"
import { Box,Typography } from '@mui/material'
import React, { useLayoutEffect, useState }  from 'react'
import Link from 'next/link'
import Article from './article'
import article from '@/app/api/article.class'

function Page() {
  const [list,setList]:any = useState([])
    useLayoutEffect(()=>{
        const getArticleByUser = async()=>{
            try {
                const res:any = await article.getCreatedByUser()
                console.log(res)
                if(res?.data?.status){
                    setList(res?.data?.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getArticleByUser()
    },[list])
    console.log(list,"list")
  return (
   <Box className="p-4 mb-4 bg-gray-200">
     <Link href="/dashboard/article">Back</Link>
      <Box>
      <Box className="flex items-center p-2 justify-evenly">
    <Typography className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold">Title</Typography>
    <Typography className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold" >Status</Typography>
    <Typography  className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold">Last Edit</Typography>
    <Typography className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold">Edit</Typography>
    <Typography className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold">Approve</Typography>
    <Typography className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold">Delete</Typography>
   
   </Box>
   <Box className="bg-[#33333365] h-[1px] w-full"></Box>
      {
                       list.length >1 && list.map((a:any,i:number)=>{
                            return(
                                <React.Fragment key={i}>
                                <Article updatedAt={a.updatedAt.split("T")[0]} title={a.title} id={a.id} approved={a.approved}/>
                                <Box className="bg-[#8d8d8d33] h-[1px] w-full"></Box>
                                </React.Fragment>
                                
                            )
                        })
                    }
         
      </Box>
   </Box>
  )
}

export default Page
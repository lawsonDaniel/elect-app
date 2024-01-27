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
    },[])
    console.log(list,"list")
  return (
   <Box className="p-4 mb-4 bg-gray-200">
     <Link href="/dashboard/article">Back</Link>
      <Box>
      <Box className="flex items-center p-2 justify-evenly">
    <Typography className="w-[150px] self-center justify-items-center text-[11px] md:text-[15px] text-center">Title</Typography>
    <Typography className="w-[100px] self-center justify-items-center text-[11px] md:text-[15px] text-center" >Status</Typography>
    <Typography  className="w-[100px] self-center justify-items-center text-[11px] md:text-[15px] text-center">Date</Typography>
    <Typography className="w-[100px] self-center justify-items-center text-[11px] md:text-[15px] text-center">Edit</Typography>
   
   </Box>
   <Box className="bg-[#33333365] h-[1px] w-full"></Box>
      {
                       list.length >1 && list.map((a:any,i:number)=>{
                            return(
                                <React.Fragment key={i}>
                                <Article title={a.title} id={a.id} approved={a.approved}/>
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
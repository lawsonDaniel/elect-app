"use client"
import React, { useLayoutEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import Article from './article'
import article from '@/app/api/article.class'
function Page() {
    const [list,setList]:any = useState([])
    useLayoutEffect(()=>{
        const getArticleByUser = async()=>{
            try {
                const res:any = await article.getCreatedByUser()
              
                if(res?.data?.status){
                    setList(res?.data?.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getArticleByUser()
    },[])
   
    return (
        <Box className="p-4 mb-4 bg-gray-200">
            <Link href="/dashboard/article">Back</Link>
         
                <Box className="flex mb-[50px] h-full overflow-auto border-red border p-3 flex-col flex-wrap md:flex-row items-center justify-evenly gap-4 w-full">
                    {
                       list.length >=1 && list.map((a:any,i:number)=>{
                            return(
                                <React.Fragment key={i}>
                                <Article title={a.title} id={a.id} color={`#${i > 9 ? String(i).split("")[1] : i}21fe8`} approved={a.approved}/>
                                </React.Fragment>
                                
                            )
                        })
                    }
                   
                </Box>
            </Box>
        
    )
}

export default Page
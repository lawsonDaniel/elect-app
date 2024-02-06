"use client"
import { Box,Typography } from '@mui/material'
import React, { useLayoutEffect, useState }  from 'react'
import Link from 'next/link'
import Article from './article'
import article from '@/app/api/article.class'
import { UserClass } from '@/app/api/user.class'

function Page() {
  const [list,setList]:any = useState([])
  const [user, setUser] = useState<any>(null);

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
    },[list])
  
    //get current user
    useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await UserClass.getSelf();
        setUser(userData?.data?.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);
  return (
   <Box className="p-4 mb-4 bg-gray-200">
     <Link href="/dashboard/article">Back</Link>
      <Box>
      <Box className="flex items-center p-2 justify-evenly">
    <Typography className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold">Title</Typography>
    <Typography className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold" >Status</Typography>
    <Typography  className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold">Last Edit</Typography>
    <Typography className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold">Edit</Typography>
    {user?.isAdmin && <Typography className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold">Approve</Typography>}
    <Typography className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center font-bold">Delete</Typography>
   
   </Box>
   <Box className="bg-[#33333365] h-[1px] w-full"></Box>
      {
                       list.length >=1 && list.map((a:any,i:number)=>{
                            return(
                                <React.Fragment key={i}>
                                <Article user={user} updatedAt={a.updatedAt.split("T")[0]} title={a.title} id={a.id} approved={a.approved}/>
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
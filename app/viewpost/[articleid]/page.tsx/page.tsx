"use client"
import React,{useState,useLayoutEffect} from 'react'
import { useRouter,usePathname } from 'next/navigation'
import { Box } from '@mui/material'
import Link from 'next/link'
import article from '@/app/api/article.class'
import draftToHtml from 'draftjs-to-html'
import { convertFromRaw } from 'draft-js'
import DOMPurify from 'dompurify';

function Page() {
    const pathName = usePathname()
    const articleId = pathName.split("/dashboard/article/viewpost/")[1]
  
   const [list,setList] = useState([])
    
    const [html,setHtml]:any = useState(null)
    useLayoutEffect(()=>{
        const getArticleByUser = async()=>{
            try {
                const res:any = await article.getOne(articleId)
               
                if(res?.data?.status){
                    let raw:any = draftToHtml(JSON.parse(res?.data?.data?.article))
                    const sanitizedHtml = DOMPurify.sanitize(raw);
                  
                    setHtml(sanitizedHtml)
                    setList(res?.data?.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getArticleByUser()
    },[])
    console.log(list,'listtt')
  return (
    <Box className="p-4 bg-gray-200">
    <Link href="/dashboard/article/viewpost">Back</Link>
    <Box className="bg-white w-full h-screen overflow-y-auto mt-4">
    <div className="p-6" dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
    </Box>
  )
}

export default Page
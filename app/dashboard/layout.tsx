import { Box } from "@mui/material"
import SideBar from "@/components/Dashboard/sidebar"
import Header from "@/components/Dashboard/header"
import { cookies } from 'next/headers'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const cookieStore = cookies()
  let user:any = cookieStore.get('storedUser')
  if( user && typeof(user) === "string"){
    user = JSON.parse(user)
   
  }
    return (
        <Box className="w-screen bg-[#F6F6F6] md:p-[44px] sm:p-0  h-screen overflow-y-hidden ">
            <Header users={user}/>
            <Box className="flex w-full md:flex-row flex-col-reverse overflow-y-auto">
            <SideBar/>
            <Box className="h-[79vh] p-3 w-full md:h-screen overflow-y-auto">
            {children}
            </Box>
           
            </Box>
           
      </Box>
    )
  }
  
import { Box } from "@mui/material"
import SideBar from "@/components/Dashboard/sidebar"
import Header from "@/components/Dashboard/header"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <Box className="w-screen bg-[#F6F6F6] md:p-[44px] sm:p-0  h-screen overflow-y-hidden ">
            <Header/>
            <Box className="flex w-full md:flex-row flex-col-reverse overflow-y-auto">
            <SideBar/>
            <Box className="h-[79vh] p-3 w-full md:h-screen overflow-y-auto">
            {children}
            </Box>
           
            </Box>
           
      </Box>
    )
  }
  
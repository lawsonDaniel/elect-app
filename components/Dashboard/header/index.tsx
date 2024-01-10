import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
// import Logo from '@/public/logo1.svg'
// import Search from '@/public/search.svg'
import Link from 'next/link'
// import Profile from '@/public/profile.svg'
// import Notification from '@/public/notification-bing.svg'
// import Like from '@/public/heart.svg'

function Header() {
  return (
    <Box className="flex bg-white md:rounded-[44px]  h-[64px] items-center px-[30px] py-[11px] justify-between">
        {/* <Box className="flex lg:gap-[141px] gap-3">
            <Image src={Logo} alt="logo" width={33.52} height={33.52}/>
            <Box className="md:flex  hidden border-[1.5px] border-[#7C36CF] bg-[#7C36CF14] py-[8px] px-[19px] gap-[9px] max-w-[298px] h-[40px] rounded-[24px]">
            <Image src={Search} alt="logo" width={24} height={24}/>
                <input className='outline-none bg-transparent w-full h-full text-[#7C36CF] font-SkModernist' placeholder='Search...'/>
            </Box>
        </Box> */}
        <Box className="flex lg:gap-[64px] gap-4">
            <Link href="/" className="font-SkModernist text-[15px]  text-white bg-[#7C36CF] rounded-[11px] p-[12px] md:flex hidden items-center justify-center max-w-[156px] lg:w-[156px] h-[42px]">Upgrade Account</Link>
            <Box className="flex lg:gap-[22px] gap-2">
            {/* <Image src={Profile} alt="profile" className='w-[30px] h-[30px] lg:w-[24px] lg:h-[24px]'/> */}
            {/* <Image src={Notification} alt="Notification" className='w-[30px] h-[30px] lg:w-[24px] lg:h-[24px]'/>
            <Image src={Like} alt="Like" width={24} height={24}/> */}
            </Box>
        </Box>
    </Box>
  )
}

export default Header
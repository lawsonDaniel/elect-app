import React, { useState } from "react";
import {
  LuChevronRight,
  LuChevronLeft,
  LuLayoutDashboard,
  LuMessageSquarePlus,
  LuMessagesSquare
} from "react-icons/lu";
import EmailIcon from '@mui/icons-material/Email';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ArticleIcon from '@mui/icons-material/Article';
import ChatIcon from '@mui/icons-material/Chat';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Menue from "./menue";

type SidebarProps = {
  open: React.Dispatch<React.SetStateAction<boolean>>; 
  isOpen: boolean; 
  activePage:string; 
  userType:string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
};
function Sidebar({ open, isOpen,activePage,userType, setActivePage}:SidebarProps) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div style={{
      transition: 'margin-left 0.3s ease,width 0.3s ease',
    }} className="h-[100vh] flex flex-col items-center p-5 gap-4 border-r">
      <Menue
        Icon={DashboardIcon}
        isOpen={isOpen}
        text="Overview"
        top={0}
        sideBarOpen={activePage === 'overview' && true}
        onClick={()=> setActivePage('overview')}
        bottom={10}
      />
      
      {
          <Menue
        Icon={ChatIcon}
        isOpen={isOpen}
        text="Chat"
        top={10}
        sideBarOpen={activePage === 'chat' && true}
        onClick={()=> setActivePage('chat')}
        bottom={10}
      />
      }
      {
        userType === "staff" &&  <Menue
        Icon={AnnouncementIcon}
        isOpen={isOpen}
        text="Announcement"
        sideBarOpen={activePage === 'message' && true}
        onClick={()=> setActivePage('message')}
        top={10}
        bottom={10}
      />
      }
     <Menue
        Icon={ArticleIcon}
        isOpen={isOpen}
        text="Article"
        top={10}
        sideBarOpen={activePage === 'article' && true}
        onClick={()=> setActivePage('article')}
        bottom={10}
      />
     

      {!isOpen && (
        <LuChevronRight
          onClick={() => {
            open(true);
          }}
          className="w-[40px] h-[40px] stroke-1 relative mt-[100px] transition ease-in duration-700"
        />
      )}
      {isOpen && (
        <div
          onClick={() => {
            open(false);
          }}
          className="flex items-center cursor-pointer mt-[100px] gap-2 mb-4 h-[50px]"
        >
          <LuChevronLeft className="w-[27px] h-[27px] stroke-1 relative  transition ease-in duration-700" />
          <p className="w-[100px] tracking-wide capitalize">minimize</p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

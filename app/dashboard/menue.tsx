import React from "react";


function Menue({ Icon, isOpen, text, top, bottom,onClick,sideBarOpen }:any) {
 // const { logOut } = useAuth();
 console.log(sideBarOpen,'sidebar')
  return (
    <div
      style={{
        transition: 'margin-left 0.3s ease,width 0.3s ease',
      }}
      onClick={onClick}
      className={!sideBarOpen?`flex items-center gap-2 mb-${bottom} mt-${top} h-[50px] cursor-pointer hover:bg-[#333] hover:text-white hover:shadow-[0px 3px 8px 0px #33333317] p-3 rounded-lg`:`flex items-center gap-2 mb-${bottom} mt-${top} h-[50px] cursor-pointer bg-[#1E6396] text-white hover:shadow-[0px 3px 8px 0px #33333317] p-3 rounded-lg`}
    >
      <Icon
        className={
          isOpen ? "w-[27px] h-[27px] stroke-1" : "w-[40px] h-[40px] stroke-1"
        }
      />
      {isOpen && <p className="w-[100px] tracking-wide capitalize">{text}</p>}
    </div>
  );
}

export default Menue;

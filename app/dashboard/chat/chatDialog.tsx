import React from 'react'
import { Dialog,Slide } from '@mui/material'
import Main from './main'
import { TransitionProps } from 'react-transition-group/Transition';

interface FunctionProp{
  handleClose:()=>void,
  open:boolean,
  activeUser: any;
  userInfo: any;
  setOpen: any;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />;
});
function ChatDialog({handleClose,open,userInfo,activeUser,setOpen}:FunctionProp) {
  return (
    <Dialog TransitionComponent={Transition} fullScreen onClose={handleClose} open={open}>
      <Main activeUser={activeUser} userInfo={userInfo} setOpen={setOpen}/>
    </Dialog>
  )
}

export default ChatDialog
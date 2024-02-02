import { Box, Typography, Chip, Button, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog } from '@mui/material'
import React from 'react'
import { LoadingButton } from '@mui/lab';
;
import article from '@/app/api/article.class';
interface FUNCARG {
    title: string;
    approved: boolean;
    id: string;
    updatedAt: string;
    user:any
}
function Article({ title, approved, id, updatedAt ,user}: FUNCARG) {
    //handle dialog
    const [open, setOpen] = React.useState(false);
    const [loading,setLoading] = React.useState(false)
    const deleteArticle = async(articleId:string)=>{
        setLoading(true)
        try{
            const res =  await article.delete(articleId)
            console.log(res,'response')
            setLoading(false)
            handleClose()
        }catch(err:any){
            setLoading(false)
            console.log("delete error", err);
        }
    }
    const approveArticle = async(articleId:string)=>{
        setLoading(true)
        try{
            const res =  await article.approve(articleId)
            console.log(res,'responsessss')
            setLoading(false)
            handleClose()
        }catch(err:any){
            setLoading(false)
            console.log("approve error", err);
        }
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box className="flex items-center p-2 justify-evenly">
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Article"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Box className="flex flex-col gap-2">
                            {/* {message &&  <Alert severity="info">{message}</Alert>}
            <Input value={header} placeholder='Title of Article' onChange={(e)=>{
              setHeader(e.target.value)
            }}/> */}
                            <Typography> Are you Sure you want to Delete this Article</Typography>
                        </Box>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className="bg-[#2c71c5ba] hover:bg-[#2c71c5ba]  text-white">Cancle</Button>
                    <LoadingButton loading={loading} onClick={()=>{
                        deleteArticle(id)
                    }} className="bg-[#c52c2cf1] hover:bg-[#c52c2cf1] text-white" autoFocus>
                        Delete
                    </LoadingButton>
                </DialogActions>
            </Dialog>
            <Typography className="md:w-[150px] w-[50px] self-center justify-items-center capitalize text-[11px] md:text-[15px] text-center">{title}</Typography>
            <Chip style={{
                background: approved ? "rgba(0,128,0,0.11)" : "#ff000019"
            }} className="md:w-[150px]  w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center" label={approved ? "live" : "in-review"} variant="outlined" />
            <Typography className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center">{updatedAt}</Typography>
            <Button disabled={approved}  onClick={() => {
                window.location.href = `editpost/${id}`
            }} className="md:w-[150px] w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center">Edit</Button>
              {
                user?.isAdmin && <Button onClick={() => {
                    approveArticle(id)
                  
               }} disabled={approved} className="md:w-[150px] w-[50px] min-w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center">{!approved ? "Verify" : "Verified"}</Button>
              }  
            <Button onClick={handleClickOpen} className="md:w-[150px] min-w-[50px] bg-[#ff0000b1] hover:bg-[#ff0000b1] text-white w-[50px] self-center justify-items-center text-[11px] md:text-[15px] text-center">Delete</Button>
        </Box>
    )
}

export default Article
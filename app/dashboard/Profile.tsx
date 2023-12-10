/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from 'react';
import { Modal, Box, Typography, Button, TextField, FormControl, InputLabel } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { UserClass } from '../api/user.class';

function UploadImageModel({ open, handleClose, user }: any) {
  const [formData, setFormData] = useState<any>(null);
  const [img, setImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const { UploadProfileImage } = useAuth();
  const UploadProfileImage = ""; // Make sure to replace this with your actual function

  const onDrop = useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0]; // Only accept the first file
    const maxSize = 1024 * 1024; // 1MB size constraint

    if (file.size > maxSize) {
      alert('File size exceeds 1MB limit');
      return;
    }

    const formParam = new FormData();
    setImg(file.name);
    formParam.append('file', file);
    formParam.append('upload_preset', 'b2um1qtl');
    setFormData(formParam);
  }, []);

  const onCancle = () => {
    setImg('');
    setFormData(null);
    handleClose();
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await UserClass.uploadProfileImage(formData, user);
      if (res.data.status) {
        alert(res?.data?.message); // Use Material UI alert or snackbar
        setIsLoading(false);
        window.location.href = '/dashboard';
      } else {
        alert(res?.data?.message); // Use Material UI alert or snackbar
        setIsLoading(false);
      }
      console.log(res, 'from the front end ');
    } catch (err) {
      console.log(err);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal open={open} onClose={onCancle} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Profile Settings
          </Typography>
          <Box className="flex flex-col gap-3 mt-4">
            {user?.profileImg && <img className="mx-auto rounded-[100%] object-cover  w-[98px] h-[98px]" width="98" height="98" src={user && user?.profileImg} alt="user-male-circle" />}
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextField id="name" value={user?.fullName} fullWidth />

            <InputLabel htmlFor="email">Email</InputLabel>
            <TextField id="email" value={user?.email} fullWidth />

            <InputLabel htmlFor="phone">Phone Number</InputLabel>
            <TextField id="phone" value={user?.phoneNumber} fullWidth />

            <Typography sx={{ mt: 2 }}>Update Profile Image</Typography>
            <div className="border border-1 h-[100px]">
              <div className="w-full h-[100px] bg-[#eee] p-2" {...getRootProps()}>
                <input className="w-full h-[100px]" {...getInputProps()} accept="image/*" />

                {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop your image here, or click to select files</p>}
              </div>
            </div>
            <p>{img && img}</p>
          </Box>

          <div className="mt-2 flex">
            <Button className="border text-[#636161] border-[#A4A4A4] h-[56px] mt-2 w-[150px]" variant="outlined" onClick={onSubmit} disabled={!formData}>
              {isLoading ? 'Loading' : 'Upload'}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default UploadImageModel;

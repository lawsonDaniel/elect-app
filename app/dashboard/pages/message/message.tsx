import { Box, Button, TextField, Typography,Select,MenuItem,FormControl,InputLabel,Alert,
  AlertTitle } from '@mui/material'
import React,{useState,useEffect} from 'react'
import Recipients from './recipients'
import { MessageClass } from '@/app/api/message.class'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { UserClass } from '@/app/api/user.class';

function Message() {
  const [dynamicRecipients,setDynamicRecipients] = useState<any>([])
  const getMailReciepiant = async(userType:string | null,level: string | null) => {
    try{
      const res = await UserClass.getAll(userType,level)
      if(res?.data?.status){
        setDynamicRecipients(res?.data?.data)
      }
    }catch(err){
      console.log(err,'from get all useer')
    }
  }
  
  const validationSchema = Yup.object().shape({
    message: Yup.string().required('Message is required'),
    recipient: Yup.string().required('Recipient is required'),
  });
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const formik = useFormik({
    initialValues: {
      message:'',
      recipient:''
    } as any,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Handle form submission here
    // Handle form submission here
    setIsLoading(true)
    setErrorMessage('')
    setSuccessMessage('')
    try {

      const res = await MessageClass.sendStaffMessage(values)
      if (!res?.data?.status) {
        setErrorMessage(res?.data?.message)
      }else{
        formik.values.message = ''
        formik.values.recipient = ''
        setDynamicRecipients([])
        setSuccessMessage(res?.data?.message)
      }
      setIsLoading(false)
      console.log(res)
    } catch (err) {
      setIsLoading(false)
      console.error(err)
    }
    },
  });
  useEffect(()=>{
    if(formik.values.recipient === "all"){
      getMailReciepiant(null,null)
    }else{
      getMailReciepiant("student",formik.values.recipient)
    }
    
  },[formik.values.recipient])
  return (
    <Box className="p-4 bg-[#eee]">
        <Box className="w-full h-[100vh] overflow-visible bg-[#fff] rounded-lg p-4">
            <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className='text-[24px]' >Send Announcement</Typography>
            <Box className="flex flex-col lg:flex-row gap-4 mt-4 w-full">
            <Box component={"form"} onSubmit={formik.handleSubmit} className="flex flex-col w-full gap-4">
            {
              errorMessage && <Alert severity="error">
                <AlertTitle>Message Status</AlertTitle>
                <strong>{errorMessage}</strong>
              </Alert>
            }
            {
              successMessage && <Alert severity="success">
              <AlertTitle>Message Status</AlertTitle>
              <strong>{successMessage}</strong> 
            </Alert>
            }
              <TextField 
                  id="message"
                  name="message"
                  className=""
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                  placeholder='Enter your message'/>
                   <FormControl fullWidth>
                                    <InputLabel id="recipient-label">Select Recipient</InputLabel>
                                    <Select
                                    name="recipient"
                                    value={formik.values.recipient}
                                    label="Academic recipient"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.recipient && Boolean(formik.errors.recipient)}
                                    labelId="recipient-label"
                                    id="recipient"
                                   // value={recipient}
                                    //onChange={handleSelect}
                                    >
                                    <MenuItem value={100}>100 level</MenuItem>
                                    <MenuItem value={200}>200 level</MenuItem>
                                    <MenuItem value={300}>300 level</MenuItem>
                                    <MenuItem value={400}>400 level</MenuItem>
                                    <MenuItem value={500}>500 level</MenuItem>
                                    <MenuItem value="all">Everyone</MenuItem>
                                    </Select>
                                </FormControl>
              <LoadingButton loading={isLoading} type="submit" className="border text-[#636161] border-[#A4A4A4] h-[56px] mt-2 w-[150px]" variant="outlined">Send Message</LoadingButton>
            </Box>
            <Box>

            </Box>
            <Box>
            <Typography style={{
            fontFamily: "'Libre Baskerville', 'serif'"
           }} className='text-[20px]' >Recipients</Typography>
            <Box className="flex flex-col h-[400px] w-full h-[500px] overflow-y-auto gap-3 p-2">
              {
                dynamicRecipients.length > 0 ? 
                dynamicRecipients.map((a:any)=>{
                  return(
                    <>
                     <Recipients name={a.fullName} level={a.level}/>
                    </>
                  )
                })
                : <Alert className="w-full" severity="info">
                <AlertTitle>Recipent</AlertTitle>
                <strong>No Recipent</strong>
              </Alert>
              }
            
            </Box>
            </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Message
"use client"
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Box, Button, Typography,DialogTitle,DialogContentText,DialogContent,DialogActions,Dialog, Input,Alert } from '@mui/material';
import { EditorState,convertFromRaw,convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import article from '@/app/api/article.class';
import { LoadingButton } from '@mui/lab';
;
import { useRouter,usePathname } from 'next/navigation'

const DraftEditor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)
function ArticleEdit() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [localV, setLocalV] = useState(false);
  const [header, setHeader] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const pathName = usePathname()
  const articleId = pathName.split("/dashboard/article/editpost/")[1]
  console.log(pathName.split("/dashboard/article/editpost/")[1],'pathName')
  
  useEffect(() => {
    const fetchArticle = async () => {
      const prevArticle = localStorage.getItem('articleEdit');
      try {
        const res = await article.getOne(articleId);
        if (res?.data?.status) {
          const raw = convertFromRaw(JSON.parse(res?.data?.data?.article));
          setEditorState(EditorState.createWithContent(raw));
         
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticle();
  }, [articleId]);

  useEffect(() => {
    const raw = convertToRaw(editorState.getCurrentContent());
    localStorage.setItem('articleEdit', JSON.stringify(raw));
    setLocalV(raw && raw['blocks'][0]?.text !== '' || raw['blocks'].length > 1);
   

  }, [editorState]);

  const postArticle = async () => {
    setIsLoading(true);
    const prevArticle = localStorage.getItem('articleEdit');

    try {
      const res = await article.post({
        article: prevArticle,
        title: header,
      });

      setMessage(res?.data?.message);

      if (res?.data?.status) {
        setHeader('');
        localStorage.setItem('articleEdit', '');
        localStorage.removeItem('articleEdit');
        setEditorState(EditorState.createEmpty());

        setTimeout(() => {
          setMessage('');
          handleClose();
        }, 2000);
      }

      setIsLoading(false);
      console.log(res, 'successfully');
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const handleEditorChange = (newEditorState:any) => {
    setEditorState(newEditorState);
    const raw = convertToRaw(newEditorState.getCurrentContent());
    localStorage.setItem('articleEdit', JSON.stringify(raw));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let arr =[100]
  for (let i = 101; i < 700; i++) {
    i%2 === 0 && arr.push(i)
    
}
  return (
    <Box className="p-4 bg-gray-200">
        <Link href="/dashboard/article">Back</Link>
       <Box className="max-w-3xl mx-auto bg-white rounded-lg p-6">
        <Typography
          variant="h4"
          style={{
            fontFamily: "'Libre Baskerville', 'serif'",
            marginBottom: '20px',
          }}
        >
          Edit Post
        </Typography>
        <Typography className="text-[red] text-[12px]">please ensure you save your post before leaving this page or refreshing unless your work would be lost</Typography>
        {localV  &&  <Button onClick={handleClickOpen} className="bg-[#008069de] text-white my-2 hover:bg-[#008069] ">Edit Post</Button>}
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Upload Post"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box className="flex flex-col gap-2">
              {message &&  <Alert severity="info">{message}</Alert>}
            <Input value={header} placeholder='Title of Article' onChange={(e)=>{
              setHeader(e.target.value)
            }}/>
         <Typography> Are you Sure you want to upload this Article</Typography>
            </Box>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="bg-[#c52c2cba] hover:bg-[#c52c2cba]  text-white">Cancle</Button>
          <LoadingButton loading={isLoading} onClick={postArticle} className="bg-[#2cc588f1] hover:bg-[#2cc588f1] text-white" autoFocus>
          Continue
          </LoadingButton>
        </DialogActions>
      </Dialog>

        <Box className="w- h-[100vh] overflow-y-auto">
          <DraftEditor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            toolbar={{
              options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
              inline: {
                options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
                // You can customize the inline styles here
              },
              blockType: {
                options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                // You can customize the block types here
              },
              fontSize: {
                options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96, 100, ...arr],
                // You can customize the font sizes here
              },
              fontFamily: {
                options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                // You can customize the font families here
              },
              list: {
                options: ['unordered', 'ordered', 'indent', 'outdent'],
                // You can customize the list options here
              },
              textAlign: {
                options: ['left', 'center', 'right', 'justify'],
                // You can customize the text alignment options here
              },
              colorPicker: {
                colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
                  'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
                  'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                  'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
                  'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
                  'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'],
                // You can customize the color picker options here
              },
              link: {
                options: ['link', 'unlink'],
                // You can customize the link options here
              },
              embedded: {
                // You can customize the embedded options here
              },
              image: {
                urlEnabled: true,
                uploadEnabled: true,
                alignmentEnabled: true,
                uploadCallback: undefined, // You might want to implement this based on your server setup
                // You can customize the image options here
              },
              remove: {},
              history: {
                options: ['undo', 'redo'],
                // You can customize the history options here
              },
            }}
          />
        </Box>
      </Box>
    
    </Box>
  );
}

export default ArticleEdit;

"use client"
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { EditorState,convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';
import dynamic from 'next/dynamic';

const DraftEditor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)
function Article() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleEditorChange = (newEditorState:any) => {
    setEditorState(newEditorState);
  };
  const contentState = convertToRaw(editorState.getCurrentContent());
    const contentJson = JSON.stringify(contentState);
console.log(contentJson,'state',contentState)
  return (
    <Box className="p-4 bg-gray-200">
       <Box className="max-w-3xl mx-auto bg-white rounded-lg p-6">
        <Typography
          variant="h4"
          style={{
            fontFamily: "'Libre Baskerville', 'serif'",
            marginBottom: '20px',
          }}
        >
          Write an Article
        </Typography>
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
                options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
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

export default Article;

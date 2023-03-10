import * as React from 'react';
import Box from '@mui/material/Box';
import './Style.css';

export default function Account() {
  return (
    <div
    className='page'
    >
    <Box sx={{
        textAlign: "center",
        maxWidth: "xl",
        maxHeight: "xl",
        display: "flex",
      justifyContent: "center",
      alignItems: "center"
        
      }}>
        <div>
        <h1>**Tik Tok** **Facebook**</h1>
        <br></br>
        <Tiktok/>
        <Facebook/>
        </div>
      </Box>
      </div>
      
  );
}

//show facebook logo and set link to my profile when clicked
function Facebook() {
  return (
    <>
    <a href="https://www.facebook.com/aeriech.ancheta/">
      <img height={200} width={200} src="https://cdn.techgyd.com/50-Best-Facebook-Logo-Icons-GIF-Transparent-PNG-Images-9.png" />
    </a>
    </>
  );
}

//show tiktok logo and set link to my profile when clicked
function Tiktok() {
    return (
      <>
      <a href="https://www.tiktok.com/@aeriechancheta?_t=8aPNqSc5uSY&_r=1&fbclid=IwAR00sD7C9V9XYN0B-WG2QfxXT-9AVRwpH4IW4CTaY9HS2J8mq81zH3tbVNw">
        <img height={190} width={190} src="https://i.pinimg.com/736x/e4/06/19/e406192290967ba61e8277e7dbfde0a5.jpg" />
      </a>
      </>
    );
  }
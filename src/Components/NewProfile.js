import * as React from 'react';
import Box from '@mui/material/Box';

//show profile of new user
export default function NewProfile(props) {
  return (
    <Box sx={{
        textAlign: "center",
        maxWidth: "xl",
        maxHeight: "xl",
        backgroundColor: 'primary.dark',
      }}>
        <br></br>
        <img height={200} width={200}  src="https://kansai-resilience-forum.jp/wp-content/uploads/2019/02/IAFOR-Blank-Avatar-Image-1.jpg"/>
        <h1>
        Hi, my name is {props.fname} {props.lname} age of {props.age}.
         In my free time, I love to {props.hobby}.
         It's great to meet you, and I'm excited to get to know you better.
        </h1>
      </Box>
  );
}
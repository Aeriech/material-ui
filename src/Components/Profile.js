import * as React from 'react';
import Box from '@mui/material/Box';

//show profile of current user
export default function BoxSx() {
  return (
    <Box sx={{
        textAlign: "center",
        maxWidth: "xl",
        maxHeight: "xl",
        backgroundColor: 'primary.dark',
      }}>
        <br></br>
        <img height={200} width={200}  src="https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/314126845_3588000988146940_4244529535236807473_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHw_cmtr_Se60sKbOmrF2T0hQM3UO39mEGFAzdQ7f2YQZrI5v6PjdAvJ8fug_uYdJfTgGL88FakAxGn9ZLNnVTw&_nc_ohc=hg5_ITPPxDoAX92RHoN&_nc_ht=scontent.fcrk3-1.fna&oh=00_AfA9s-MzWxFW9Zjwzwe8XBOScIZNwpeZYO4I21x0LNjvjw&oe=640B06C2"/>
        <h1>
        Hi, my name is Aeriech. I'm a college student studying Information Technology.
         In my free time, I love to read Manggas, watch Anime, and play Games.
         It's great to meet you, and I'm excited to get to know you better.
        </h1>
      </Box>
  );
}
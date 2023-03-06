import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState } from "react";
import NewAppBar from './NewAppBar';

export default function AccountSetUp(props) {
    //Set Up Data
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [Age, setAge] = useState('');
    const [Hobby, setHobby] = useState('');

    //new Account set up passing data
    const [show, setShow] = useState(true);
    const Submit = () => {
        if(Fname !== '' && Lname !== '' && Age !== '' && Hobby !== ''){
        setShow(false);
        }
        else{
            alert("Fill Up All The Text Field");
        }
    }

    if(!show){ 
        return <NewAppBar user={props.user} pass={props.pass} fname={Fname} lname={Lname} age={Age} hobby={Hobby}/>;
    }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <h1>***Account Set Up***</h1>
      <TextField required id="filled-basic" label="First Name" variant="filled" onChange={(e) => setFname(e.target.value)}/>
      <TextField required id="filled-basic" label="Last Name" variant="filled" onChange={(e) => setLname(e.target.value)}/>
      <br></br>
      <TextField required id="filled-basic" label="Age" variant="filled"onChange={(e) => setAge(e.target.value)} />
      <TextField required id="filled-basic" label="Hobby" variant="filled" onChange={(e) => setHobby(e.target.value)}/>
      <br></br>
      <Button 
        variant="contained"
        onClick={Submit}
        >Submit</Button>
    </Box>
  );
}
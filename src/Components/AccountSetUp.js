import './Style.css';
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

    //opens App bar for new user and pass the data from account set up
    if(!show){ 
        return <NewAppBar user={props.user} pass={props.pass} fname={Fname} lname={Lname} age={Age} hobby={Hobby}/>;
    }

  return (
    <div
    className='div'
    >
    <div
    className='innerDiv'
    >
    <Box
      className='BOX'
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
    <h1>***Account Set Up***</h1>
    <br></br>
      <TextField required id="textfield" label="First Name" variant="filled" onChange={(e) => setFname(e.target.value)}/>
      <TextField required id="textfield" label="Last Name" variant="filled" onChange={(e) => setLname(e.target.value)}/>
      <TextField required id="textfield" label="Age" variant="filled"onChange={(e) => setAge(e.target.value)} />
      <TextField required id="textfield" label="Hobby" variant="filled" onChange={(e) => setHobby(e.target.value)}/>
      <p></p>
      <Button 
        id='button'
        variant="contained"
        onClick={Submit}
        >Submit</Button>
      <p></p>
    </div>
    </Box>
    </div>

    </div>
  );
}
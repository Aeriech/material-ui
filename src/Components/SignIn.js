import './Login.css';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Login from './Login';


export default function SignIn() {
    //Sign In For New USer
    const[newuser, setNewUser] = useState('');
    const[newpass1, setNewPass1] = useState('');
    const[newpass2, setNewPass2] = useState('');
    const[sub, setSub] = useState(true);
    

    const newSubmit = () => {
        if ((newpass1 === newpass2)) {
            alert("Succesful Sign In");
            setSub(false);
        } else {
            alert("Please Confirm Password");
        }
        }

        if(!sub){
        return <Login user = {newuser} pass = {newpass1} show={true}/>;
        }

  return (
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <h1>Sign Up</h1>
        <TextField
          required
          id="filled-required"
          label="Username"
          variant="filled"
          onChange={(e) => setNewUser(e.target.value)}
        />
        <br></br>
        <TextField
          required
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={(e) => setNewPass1(e.target.value)}
        />
        <br></br>
        <TextField
          required
          id="filled-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={(e) => setNewPass2(e.target.value)}
        />
        <br></br>
        <Button 
        variant="contained"
        onClick={newSubmit}
        >Submit</Button>
      </div>
    </Box>
    )
  }


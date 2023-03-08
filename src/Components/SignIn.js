import './Login.css';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Login from './Login';

 //Sign In For New USer
export default function SignIn() {

    //username and password of new user
    const[newuser, setNewUser] = useState('');
    const[newpass1, setNewPass1] = useState('');
    const[newpass2, setNewPass2] = useState('');

    //true to show current component
    const[sub, setSub] = useState(true);
    
    //onclick of submit button
    const newSubmit = () => {
      //if the user puts the same password for to textfield will alert that successful log in and set sub to false to hide sign in
        if (newuser !== '' && newpass1 !== '' && (newpass1 === newpass2)) {
            alert("Succesful Sign In");
            setSub(false);
        } 
        //if user puts wrong password or didnt put username
        else {
            alert("Please Confirm Password or Fill Up All Textfield");
        }
        }

        //hide sign in and open log in with new users username and password
        if(!sub){
        return <Login user = {newuser} pass = {newpass1} show={true} fname={''} lname={''} age={''} hobby={''}/>;
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
        <h1>***Sign Up***</h1>
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


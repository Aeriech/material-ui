import './Login.css';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './AppBar';
import SignIn from './SignIn';


export default function Login(props) {

    //For Current User
    const[user, setUser] = useState('');
    const[pass, setPass] = useState('');
    const Username = "Aeriech";
    const Password = "12345";
    const [isVisible, setIsVisible] = useState(props.show);
    const [sub, setSub] = useState(true);

    const submit = () => {
        if ((user === Username && pass === Password) || (user === props.user && pass === props.pass)) {
            setIsVisible(false);
        } else {
            alert("Invalid Username or Password");
        }
    }

    const signInButton = () => {
        setSub(false);
    }


    if(!sub){
        return <SignIn/>;
    }

    if (!isVisible) {
        return <ResponsiveAppBar user={props.user} pass={props.pass}/>;
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
        <h1>Login</h1>
        <TextField
          required
          id="filled-required"
          label="Username"
          variant="filled"
          onChange={(e) => setUser(e.target.value)}
        />
        <br></br>
        <TextField
          required
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={(e) => setPass(e.target.value)}
        />
        <br></br>
        <Button 
        variant="contained"
        onClick={submit}
        >Login</Button>
        <p></p>
        <Button 
        variant="contained"
        onClick={signInButton}
        >Sign In</Button>


      </div>
    </Box>
  );
  

}

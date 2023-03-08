import './Login.css';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './AppBar';
import SignIn from './SignIn';
import AccountSetUp from './AccountSetUp';
import NewAppBar from './NewAppBar';


export default function Login(props) {

    //For Current User
    const[user, setUser] = useState('');
    const[pass, setPass] = useState('');
    const Username = "Aeriech";
    const Password = "12345";
    const [isVisible, setIsVisible] = useState(props.show);
    const [show, setShow] = useState(true);
    const [sub, setSub] = useState(true);

    const submit = () => {
        //Log in for curreng user
        if ((user === Username && pass === Password)) {
            setIsVisible(false);
        }
        //Log in for new user
        else if ((user === props.user && pass === props.pass)) {
          setShow(false);
        } 
        else {
            alert("Invalid Username or Password");
        }
    }
    //Sign in button
    const signInButton = () => {
        setSub(false);
    }
    //Open Sign In and Hide Login
    if(!sub){
        return <SignIn/>;
    }

    //Open App Bar for current user
    if (!isVisible) {
        return <ResponsiveAppBar user={props.user} pass={props.pass}/>;
    }

    //Open Account set up for new user
    if (!show) {
      if (props.fname !== '' && props.lname !== '' && props.age !== '' && props.hobby !== '') {
        return <NewAppBar user={props.user} pass={props.pass} fname={props.fname} lname={props.lname} age={props.age} hobby={props.age}/>;
      } else {
        return <AccountSetUp user={props.user} pass={props.pass} fname={props.fname} lname={props.lname} age={props.age} hobby={props.age}/>;
      }
      
    }

    //return log in component
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
        
        <h1>***Login***</h1>

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

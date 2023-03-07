import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Login from './Login';
import NewProfile from './NewProfile';

const pages = ['Profile', 'Account'];
const settings = ['SignOut'];

function NewAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  //onclick of tab bar
  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);

  //to pass data to showName button that the user choose profile
    if(e === 'Profile'){
        showName('Profile');
    }

   //to pass data to showName button that the user choose account
    else if(e === 'Account'){
        showName('Account');
    }
  };

  //false to hide profile
  const [show,setShow] = useState(false);

  //false to hide account
  const [acc,setAcc] = useState(false);

    const showName = (e) =>{

      //shows profile of new user and hides account
    if(e === 'Profile'){
     if (show === true) {
       setShow(false);
     }
    
      else {
       setShow(true);
       setAcc(false);
     }
    }

    //show account of new user and hides profile
    else if(e === 'Account'){
        if (acc === true) {
          setAcc(false);
        } else {
          setAcc(true);
          setShow(false);
        }
       }

    }

    //set to true to show current component
  const [isVisible, setIsVisible] = useState(true);

  //onclick of sign out 
  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);

    //set isVisible to false to hide current component and open login page
    if(e === 'SignOut'){
      setIsVisible(false);
    }

  };

  //to hide current component and open login page
  if (!isVisible) {
    return <Login show={true} user={props.user} pass={props.pass} fname={props.fname} lname={props.fname} age={props.age} hobby={props.hobby}/>;
  }

  return (
    <div>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            MY PROFILE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"

              onClick={handleOpenNavMenu}

              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"

              anchorEl={anchorElNav}
              
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}

                onClick={() => handleCloseNavMenu(page)}

                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton 

              onClick={handleOpenUserMenu} 

              sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://kansai-resilience-forum.jp/wp-content/uploads/2019/02/IAFOR-Blank-Avatar-Image-1.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={() => handleCloseUserMenu('e')}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} 

                onClick={() => handleCloseUserMenu(setting)}
                
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    {show && <NewProfile fname={props.fname} lname={props.lname} age={props.age} hobby={props.hobby}/>}
    </div>
  );
}
export default NewAppBar;
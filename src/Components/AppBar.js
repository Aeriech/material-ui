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
import BoxSx from './Profile';
import Account from './Account';
import Login from './Login';

const pages = ['Profile', 'Account'];
const settings = ['SignOut'];

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  //Tab Options
  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    if(e === 'Profile'){
        showName('Profile');
    }
    else if(e === 'Account'){
        showName('Account');
    }
  };

  //data for showing or not of account and profile
  const [show,setShow] = useState(false);
  const [acc,setAcc] = useState(false);

  //for onclick of profile or account
    const showName = (e) =>{

    //show Profile and hide account
    if(e === 'Profile'){
     if (show === true) {
       setShow(false);
     }
    
      else {
       setShow(true);
       setAcc(false);
     }
    }

    // Show Account and hide profile
    else if(e === 'Account'){
        if (acc === true) {
          setAcc(false);
        } else {
          setAcc(true);
          setShow(false);
        }
       }

    }

  //to hide or not the current component
  const [isVisible, setIsVisible] = useState(true);

  //for onclick on open setting or profile in right side
  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);

    //to hide current component
    if(e === 'SignOut'){
      setIsVisible(false);
    }

  };

  //hides current component and opens Login page
  if (!isVisible) {
    return <Login show = {true} user={props.user} pass={props.pass}/>;
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
                <Avatar alt="Remy Sharp" src="https://scontent.fcrk3-1.fna.fbcdn.net/v/t39.30808-6/276994360_3400770733536634_5188095602097092028_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGssszVCUXndLKRyh9NLN6WopwT7ylJ1MqinBPvKUnUym2Gc4ygr2ub7UCAgryzB_-Ac_8EF9tRvis8FCnXH6g9&_nc_ohc=b7KbV9sVzVUAX9Q7j8I&_nc_ht=scontent.fcrk3-1.fna&oh=00_AfC8qD2E2DxhNepM_sJMdfXfVXFyL0DHrseHxqAMloCMiA&oe=640AACF1" />
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
    {show && <BoxSx/>}
    {acc && <Account/>}
    </div>
  );
}
export default ResponsiveAppBar;